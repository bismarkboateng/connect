import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const handleError = (errorCode: any, errorMessage: any) => {
  // handle this error correctly okay
  console.log(errorCode, errorMessage)
}

export const authWithGoogle = () => {
  console.log("Google auth functionality")
}

export const authWithFacebook = () => {
  console.log("Facebook auth functionality")
}