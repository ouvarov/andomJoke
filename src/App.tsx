import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import IndexPage from './pages';

import './App.sass';

const App: React.FunctionComponent = () => (
    <div className="App">
        <BrowserRouter>
            <IndexPage />
        </BrowserRouter>
    </div>
);

export default App;
