import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import Test from "./constants/Test";
import TelegramLoginButton from "react-telegram-login";

const handleTelegramResponse = response => {
    console.log(response);
};

ReactDOM.render(
    // <Router>
    //     {/*<App />*/}
    //     <Test/>
    // </Router>,
    <TelegramLoginButton dataOnauth={()=>handleTelegramResponse()} botName="oauth2regbot" />,
document.getElementById('root')
);

registerServiceWorker();
