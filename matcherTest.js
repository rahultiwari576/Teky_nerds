import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const kb = JSON.parse(fs.readFileSync(path.join(__dirname,'server/knowledge.json'), 'utf-8'));
function findRelevantContent(q){
  q=q.toLowerCase();
  const chunks=[];
  if(q.includes('service')||q.includes('offer')||q.includes('provide')){
    if(kb.services&&typeof kb.services==='object'){
      for(const text of Object.values(kb.services)){
        chunks.push(text);
        if(chunks.length>=3) break;
      }
      return [...new Set(chunks)];
    }
  }
  for(const [section,content] of Object.entries(kb)){
    if(chunks.length>=3) break;
    if(typeof content==='object'){
      for(const [key,text] of Object.entries(content)){
        if(chunks.length>=3) break;
        if(q.includes(key.toLowerCase())||text.toLowerCase().split(/\s+/).some(w=>q.includes(w))){
          chunks.push(text);
        }
      }
    } else if(typeof content==='string'){
      if(content.toLowerCase().split(/\s+/).some(w=>q.includes(w))){
        chunks.push(content);
      }
    }
  }
  return [...new Set(chunks)];
}
console.log(findRelevantContent('what services you offered'));
