"use client"

import { useUserStore } from "@/store/userStore"

export default function SignInPage() {
  const fullName = useUserStore(state => state.fullName)
  console.log(fullName)
  return (
    <section>
     Sign In page
    </section>
  )
}
