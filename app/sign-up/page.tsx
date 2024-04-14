"use client";

import Logo from "@/public/Logo.png";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { PopUp } from "@/components/shared/PopUp";


const signUpFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  password: z.string(),
});

export default function SignUpPage() {
  const signUp = useAuthStore(state => state.signUp)
  const signUpState = useAuthStore(state => state.signUpState)
  const router = useRouter()
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    signUp(values)
  }

  function handleRetry() {
    router.refresh()
  }

 let buttonText = ""
  if (signUpState === "creating account...") {
    buttonText = "creating account..."
  } else if (signUpState === "successfull") {
    <PopUp
     className="absolute top-0 right-0 bg-white w-["
     title="Account Created Successfully!"
     message="Redirecting to sign in page..."
    /> 
    buttonText="Account Created!"
    router.push("/sign-in")
  } else {
    buttonText = "Create Account"
  }

  return (
    <section className="bg-[#2B293D] w-full h-screen text-white p-5">
      <div className="flex flex-row items-center gap-3">
        <Image src={Logo} alt="connect logo" width={35} height={35} />
        <h1
          className="text-[#FFE047] leading-[65.8px] font-light
      text-lg"
        >
          Connect
        </h1>
      </div>
      <p className="font-bold text-lg leading-6">
        Discover tailored events.
        <br />
        Sign up for personalized recommendations today!
      </p>

      <section className="bg-white mt-5 rounded-md p-2 text-black shadow-lg">
        <h1
          className="text-[#2D2C3C] leading-[58px] font-bold text-center
      text-xl"
        >
          Create Account
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className="text-[#636363] font-normal
                "
                  >
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      {...field}
                      className="focus-ring:ring-offset-0 focus-visible:ring-offset-0
                   focus:outline-none text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className="text-[#636363] font-normal
                "
                  >
                    E-mail Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your e-mail"
                      {...field}
                      className="focus-ring:ring-offset-0 focus-visible:ring-offset-0
                   focus:outline-none text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className="text-[#636363] font-normal
                "
                  >
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter password"
                      {...field}
                      className="focus-ring:ring-offset-0 focus-visible:ring-offset-0
                   focus:outline-none text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full font-bold mt-4">
              {buttonText}
            </Button>
            {signUpState === "error" && (
              <p className="text-red-400 text-xs ">An error occurred!
              <span className="ml-1 underline" onClick={handleRetry}>Retry</span></p>
            )}
          </form>
        </Form>
        <div className="mt-2">
          <p className="text-[#636363] text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-[#636363] text-sm">
              Login
            </Link>
          </p>
        </div>
      </section>
    </section>
  );
}