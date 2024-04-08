import { create } from "zustand"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { handleError } from "@/lib/utils";
import { auth } from "@/lib/firebase";

export const useAuthStore = create<AuthStoreType>((set) => ({
  signUpState: "pending",
  isLoggedIn: false,
  logIn: () => {

  },
  signUp: (values) => {
    set(state => ({...state, signUpState: "creating account..." }))
    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      set(state => ({...state, signUpState: "successfull" }))
      const user = userCredential.user;
      const currentUser = {
        fullName: values.fullName,
        email: values.email,
        id: user.uid,
      }
      localStorage.setItem("User", JSON.stringify(currentUser))
    })
    .catch((error) => {
      set(state => ({...state, signUpState: "error" }))
      const errorCode = error.code;
      const errorMessage = error.message;
      handleError(errorCode, errorMessage)
    });
  },
  signOut: () => {

  },
}))