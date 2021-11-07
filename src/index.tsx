import React from 'react';
import * as ReactDOM from 'react-dom';
import LoginView from './login-view';

import { UserProvider } from './user-context';

const App = () => {
    const containerStyle = {
        width: '800px',
        margin: 'auto',
        textAlign: "center" as "center"
    }
    return(
        <>
            <UserProvider>
                <div id="container" style={containerStyle}>
                    <LoginView/>
                </div>
            </UserProvider>
        </>
    );
}

const container = document.getElementById('contents');
ReactDOM.render(<App />, container);