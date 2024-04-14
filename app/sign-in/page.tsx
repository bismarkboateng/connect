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


const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function SignInPage() {
  const logIn = useAuthStore(state => state.logIn)
  const logInState = useAuthStore(state => state.logInState)
  const router = useRouter()
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInFormSchema>) {
    logIn(values)
  }

  function handleRetry() {
    router.refresh()
  }

 let buttonText = ""
  if (logInState === "Logging in...") {
    buttonText = "Logging in..."
  } else if (logInState === "successfull") {
    <PopUp
     className="absolute top-0 right-0 bg-white w-["
     title="Login Successfull!"
     message="Redirecting to home page..."
    /> 
    buttonText="Logged In"
    router.push("/")
  } else {
    buttonText = "Log in"
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
        Sign in for personalized recommendations today!
      </p>

      <section className="bg-white mt-5 rounded-md p-2 text-black shadow-lg">
        <h1
          className="text-[#2D2C3C] leading-[58px] font-bold text-center
      text-xl"
        >
          Login
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
            {logInState === "error" && (
              <p className="text-red-400 text-xs ">An error occurred!
              <span className="ml-1 underline" onClick={handleRetry}>Retry</span></p>
            )}
          </form>
        </Form>
        <div className="mt-2">
          <p className="text-[#636363] text-sm">
            Dont have an account?{" "}
            <Link href="/sign-up" className="text-[#636363] text-sm">
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </section>
  );
}