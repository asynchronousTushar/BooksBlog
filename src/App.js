import React from 'react';
import './styleshits/App.css'
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    )
}

export default App;