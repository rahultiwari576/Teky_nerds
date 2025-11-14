import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app.jsx';
import './index.css';

const rootElement = document.getElementById('app');

console.log('Starting React app...');
console.log('Root element:', rootElement);

if (!rootElement) {
    console.error('Root element with id "app" not found!');
    document.body.innerHTML = '<div style="padding: 20px; color: red;"><h1>Error: Root element not found!</h1><p>Make sure index.html has &lt;div id="app"&gt;&lt;/div&gt;</p></div>';
} else {
    try {
        console.log('Creating React root...');
        const root = ReactDOM.createRoot(rootElement);
        console.log('Rendering App component...');
        root.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
        );
        console.log('✅ React app mounted successfully!');
    } catch (error) {
        console.error('❌ Error mounting React app:', error);
        rootElement.innerHTML = `<div style="padding: 20px; color: red;"><h1>Error Loading App</h1><p>${error.message}</p><pre>${error.stack}</pre></div>`;
    }
}

