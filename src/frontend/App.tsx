import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);

function App() {
    return <span>Hello world!</span>;
}

root.render(<App />);