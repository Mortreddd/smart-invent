import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import app from "./Config";

export const authenticated = getAuth(app);

export default function getAuthenticationResult() {
    const credentialToken = getRedirectResult(authenticated)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}
