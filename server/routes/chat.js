import express from 'express';
import fs from 'fs';
import path from 'path';


const router = express.Router();

// load knowledge base once
import { fileURLToPath } from 'url';
let knowledge = {};
try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const kbPath = path.join(__dirname, '../knowledge.json');
    const raw = fs.readFileSync(kbPath, 'utf-8');
    knowledge = JSON.parse(raw);
    console.log('knowledge loaded, sections:', Object.keys(knowledge));
    try {
        fs.appendFileSync(path.join(__dirname, '../chat-debug.log'),
            `knowledge sections: ${Object.keys(knowledge).join(', ')}\n`
        );
    } catch (e) {
        console.error('failed to write startup debug log', e);
    }
} catch (err) {
    console.error('Failed to load knowledge base:', err);
}

// simple keyword match: return concatenated text of matching sections
function findRelevantContent(question) {
    const q = question.toLowerCase();
    const chunks = [];

    // if user asks generally about services or what we offer, include all service descriptions
    if (q.includes('service') || q.includes('offer') || q.includes('provide')) {
        if (knowledge.services && typeof knowledge.services === 'object') {
            for (const text of Object.values(knowledge.services)) {
                chunks.push(text);
                if (chunks.length >= 3) break;
            }
            return [...new Set(chunks)];
        }
    }

    // search each key and value, stop after 3 matches
    for (const [section, content] of Object.entries(knowledge)) {
        if (chunks.length >= 3) break;
        if (typeof content === 'object') {
            for (const [key, text] of Object.entries(content)) {
                if (chunks.length >= 3) break;
                if (
                    q.includes(key.toLowerCase()) ||
                    text.toLowerCase().split(/\s+/).some((w) => q.includes(w))
                ) {
                    chunks.push(text);
                }
            }
        } else if (typeof content === 'string') {
            if (
                content.toLowerCase().split(/\s+/).some((w) => q.includes(w))
            ) {
                chunks.push(content);
            }
        }
    }
    // dedupe and return
    return [...new Set(chunks)];
}

router.post('/', async (req, res) => {
    const question = (req.body.question || '').trim();
    if (!question) return res.status(400).json({ error: 'Question is required' });

    const matches = findRelevantContent(question);
    // log to console and file
    console.log('chat question:', question, 'matches:', matches);
    try {
        fs.appendFileSync(path.join(__dirname, '../chat-debug.log'),
            `${new Date().toISOString()} question="${question}" matches=${JSON.stringify(matches)}\n`
        );
    } catch (e) {
        console.error('failed to write debug log', e);
    }
    if (matches.length === 0) {
        return res.json({ answer: 'For detailed information, please contact our team.' });
    }

    // simply return matched content directly to avoid API calls and hallucination
    const answer = matches.join(' ');
    return res.json({ answer, matches });

    /*
    // previous OpenAI call kept for reference; disabled
    // build prompt
    const systemPrompt =
        "You are a support assistant for Tekynerds.\n" +
        "Answer ONLY from the provided website content.\n" +
        "Do not add assumptions.\n" +
        "If the answer is not in the content, reply:\n'For detailed information, please contact our team.'\n" +
        "Keep responses concise and professional.";

    const contextText = matches.join('\n\n');
    try {
        const openaiKey = process.env.OPENAI_API_KEY;
        if (!openaiKey) {
            return res.status(500).json({ error: 'OpenAI key not configured' });
        }

        const payload = {
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: `${question}\n\nContext:\n${contextText}` },
            ],
            max_tokens: 150,
            temperature: 0.3,
        };

        const r = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${openaiKey}`,
            },
            body: JSON.stringify(payload),
        });

        const data = await r.json();
        const answer =
            data?.choices?.[0]?.message?.content?.trim() ||
            "For detailed information, please contact our team.";
        // include matches for debugging (remove in production)
        res.json({ answer, matches });
    } catch (err) {
        console.error('Chat error', err);
        res.status(500).json({ error: 'Chatbot error' });
    }
    */
});

export default router;
