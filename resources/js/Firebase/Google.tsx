import { useForm } from "@inertiajs/react";
import app from "./Config";

import {
    getAuth,
    GoogleAuthProvider,
    browserPopupRedirectResolver,
    signInWithPopup,
} from "firebase/auth";

export const authenticated = getAuth(app);
export async function GetUidFromGoogle() {
    try {
        const result = await signInWithPopup(
            authenticated,
            new GoogleAuthProvider(),
            browserPopupRedirectResolver
        );

        const user = result.user;
        return user.uid;
    } catch (FirebaseError) {
        console.log(FirebaseError);
        return null;
    }
}
