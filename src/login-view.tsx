import React, { useEffect, useState } from "react";
import { authAction, logoutAction } from "./auth";
import firebaseAuth from "./firebase-conf";
import { useUserontext } from "./user-context";

const LoginView: React.FC = () => {
    const {user, setUser} = useUserontext();
    const [loading, setLoading] = useState(true);

    const loginHandler = async () => {
        const res = await authAction();
        setUser(res);
    }

    const logoutHandler = async () => {
        logoutAction();
        setUser(null);
    }

    const labelStyle = {
        display: 'block'
    }

    const tableStyle = {
        tableLayout: 'fixed' as 'fixed',
        width: '100%',
        textAlign: 'left' as 'left',
        border: 'solid 1px black',
        marginBottom: '10px'
    }

    const tdStyle = {
        border: 'solid 1px black'
    }

    useEffect(() => {
        firebaseAuth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
            setLoading(false);
        });
    }, []);

    const loginInfo = () => {
        return (
            <>
                {user ? 
                    <>
                        <table style={tableStyle}>
                            <tbody>
                                <tr>
                                    <td style={{width: '180px', border: 'solid 1px black'}}>ユーザー名</td>
                                    <td style={{border: 'solid 1px black'}}>{user.displayName}</td>
                                </tr>
                                <tr>
                                    <td style={{border: 'solid 1px black'}}>アクセストークン</td>
                                    <td style={{border: 'solid 1px black'}}>{user.accessToken.slice(0,60)}....</td>
                                </tr>
                                <tr>
                                    <td style={{border: 'solid 1px black'}}>リフレッシュトークン</td>
                                    <td style={{border: 'solid 1px black'}}>{user.refreshToken.slice(0,60)}....</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <button onClick={logoutHandler}>ログアウト</button>
                    </>
                    : <button onClick={loginHandler}>ログイン</button>
                }
            </>
            
            
        );
    }
    
    return(
        <div>
            {loading ?
                <div></div>
                : loginInfo()
            }
        </div>
    );
}

export default LoginView;