import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import TelegramLoginButton from 'react-telegram-login';
import axios from 'axios'

class Test extends Component {
    render() {
        const handleTelegramResponse = response => {
            // alert(123)
            // axios.get("https://telegram.org/js/telegram-widget.js?14").then(res=>{
            //     console.log(res)
            // })
            alert(response)
        };
        return (
            // <div>
            //     <button type="button" onClick={()=>handleTelegramResponse()}>
            //         On
            //     </button>
            // </div>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="oauth2regbot" />
        );
    }
}

Test.propTypes = {};

export default Test;