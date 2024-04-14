"use client"

import Google from "@/public/google.png"
import Facebook from "@/public/facebook.png"

import { Button } from "../ui/button"
import Image from "next/image"
import { authWithFacebook, authWithGoogle } from "@/lib/utils"

export default function OAuthLogin({ type } : { type: string}) {
  return (
    <section className="flex flex-row items-center mb-5">
     <Button variant="outline" className="flex flex-row items-center justify-center gap-2
     cursor-pointer"
     onClick={() => authWithGoogle()}>
      <div className="">
       <Image
        src={Google}
        alt="google"
        width={20}
        height={20}
       />
      </div>
      <p className="text-[#3a3a3d] font-light
      text-center text-sm">{type} with Google</p>
     </Button>

     <Button variant="outline" className="flex flex-row items-center justify-center gap-2"
     onClick={() => authWithFacebook()}>
      <div>
       <Image
        src={Facebook}
        alt="google"
        width={20}
        height={20}
       />
      </div>
      <p className="text-[#3a3a3d] font-light
      text-center text-sm">{type} with Facebook</p>
     </Button>

    </section>
  )
}
