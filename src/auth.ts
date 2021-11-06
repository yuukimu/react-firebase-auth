import { signInWithPopup, GoogleAuthProvider, signOut, User } from "firebase/auth";
import firebaseAuth from './firebase-conf';

export const authAction = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(firebaseAuth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            return user
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.error(credential);
            return error;
        });
}

export const logoutAction = () => {
    signOut(firebaseAuth).then(() => {
        console.log('logout success');
    }).catch((error) => {
        console.error(error);
    });
}
