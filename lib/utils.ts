import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const handleError = (errorCode: any, errorMessage: any) => {
  // handle this error correctly, okay?
  console.log(errorCode, errorMessage)
}

export const authWithGoogle = () => {
  const provider = new GoogleAuthProvider()

  signInWithRedirect(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // handle authenticated user correctly
      console.log(credential)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage)
    });
}

export const authWithFacebook = () => {
  console.log("Facebook auth functionality")
}