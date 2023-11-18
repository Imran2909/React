import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppContextProvoder } from './contexts/AppContext';
import { AuthContextProvoder } from "./contexts/AuthContext"

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <AppContextProvoder>
        <AuthContextProvoder>
            <App />
        </AuthContextProvoder>
    </AppContextProvoder>
);

reportWebVitals();
