interface AuthStoreType {
    signUpState: string,
    logInState: string,
    isLoggedIn: boolean,
    logIn: (values) => void;
    signUp: (values) => void,
    signOut: () => void,
    updateUserInfo: (values) => void,
    updateUserEmail: (values) => void,
}

interface UserStoreType {
    fullName: string,
    email: string,
    id: string,
    setUser: () => void,
}

interface User {
    fullName: string,
    email: string,
    id: string,
}