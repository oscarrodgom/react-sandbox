import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <div>Hello world!</div>;

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}