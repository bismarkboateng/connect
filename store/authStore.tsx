import { create } from "zustand"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { handleError } from "@/lib/utils";
import { auth } from "@/lib/firebase";

export const useAuthStore = create<AuthStoreType>((set) => ({
  signUpState: "pending",
  logInState: "pending",
  isLoggedIn: false,

  logIn: (values) => {
    set(state => ({...state, logInState: "Logging in..." }))
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      set(state => ({...state, logInState: "successfull" }))
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      set(state => ({...state, logInState: "error" }))
      const errorCode = error.code;
      const errorMessage = error.message;
      handleError(errorCode, errorMessage)
    });
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

  updateUserInfo: (values) => {
    console.log(values)
  },

  updateUserEmail: (values) => {
    console.log(values)
  }

}))