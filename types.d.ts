interface AuthStoreType {
    signUpState: string,
    isLoggedIn: boolean,
    logIn: () => void;
    signUp: (values) => void,
    signOut: () => void,
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