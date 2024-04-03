import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import app from "./Config";

export const authenticated = getAuth(app);

export async function EmailExists() {}
