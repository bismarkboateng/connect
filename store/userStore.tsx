import { create } from "zustand"

const user = JSON.parse(localStorage.getItem("User")!) || {
    fullName: "",
    email: "",
    id: "",
}

export const useUserStore = create<UserStoreType>((set) => ({
    fullName: "",
    email: "",
    id: "",
    setUser: () => {
        set(state => ({
            ...state,
            fullName: user?.fullName,
            email: user?.email,
            id: user?.id
        }))
    }
}))