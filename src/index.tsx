import React from 'react';
import * as ReactDOM from 'react-dom';
import LoginView from './login-view';

import { UserProvider } from './user-context';

const App = () => {
    return(
        <>
            <UserProvider>
                <LoginView/>
            </UserProvider>
        </>
    );
}

const container = document.getElementById('contents');
ReactDOM.render(<App />, container);