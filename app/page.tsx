"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

// get the user object from local storage
const User = JSON.parse(localStorage.getItem("User")!)

export default function HomePage() {
  const router = useRouter()

    if (!User) {
      router.push("/sign-up")
    }

  return (
    <main>
      Home page
    </main>
  )
}