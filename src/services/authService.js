import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";

import { auth, provider } from "../firebase";

export const signInWithGoogle = async () => {
  try {
    

    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;

    

    if (credential?.accessToken) {
      sessionStorage.setItem("google_access_token", credential.accessToken);

      const idToken = await user.getIdToken(true);
      sessionStorage.setItem("google_id_token", idToken);

      console.log("[AUTH] Tokens saved in sessionStorage");
    }

    return user;

  } catch (error) {
    console.error("[AUTH] Google sign-in error:", error);
    throw error;
  }
};

export const logout = async () => {
  console.log("[AUTH] Logging out...");

  sessionStorage.removeItem("google_access_token");
  sessionStorage.removeItem("google_id_token");

  await signOut(auth);

  
};
