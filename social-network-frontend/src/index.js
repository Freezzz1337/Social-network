import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import {AuthProvider} from "./context/auth-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <AuthProvider>
                <Router>
                    <App/>
                </Router>
            </AuthProvider>
        </ErrorBoundary>
    </React.StrictMode>
);