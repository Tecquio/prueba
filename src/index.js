// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';           // Estilos Tailwind
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);  // React 18+[4]
root.render(<App />);
