import Image from "next/image"
import ProfilePhoto from "@/public/user-photo.png"
import Profile from "@/components/shared/Profile"


export default function ProfilePage() {
  return (
    <section>
     <section>
      <h1 className="text-[#2D2C3C] text-xl lg:text-3xl font-bold leading-[48.76px]
      text-center">Account Information</h1>
      <div className="w-full h-[1px] bg-gray-300"/>
      <div className="flex flex-col items-center justify-center mt-5">
        <p className="text-[#2D2C3C]">Profile Photo</p>
        <Image
         src={ProfilePhoto}
         alt="profile photo"
         width={100}
         height={100}
         className="mt-1"
        />
      </div>      
      <Profile />
     </section>
    </section>
  )
}
