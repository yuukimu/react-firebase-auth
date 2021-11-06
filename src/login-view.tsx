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
                        <p><label>{user.displayName}</label></p>
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