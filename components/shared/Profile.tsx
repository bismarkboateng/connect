"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { profileSchema } from "@/lib/formSchema"


export default function ProfileForm() {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      website: "",
      company: "",
    },
  })
  
  function onSubmit(values: z.infer<typeof profileSchema>) {
    console.log(values)
  }
    
    
  return (
    <>
     <section className="mb-5">
      <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="w-[95%] mx-auto mt-3">
        <p className="text-[#2D2C3C] text-lg leading-[39.1px] font-bold mb-1
        text-center">Profile Information</p>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="Enter website" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Enter company name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <div className="w-[95%] mx-auto mt-3">
         <p className="text-[#2D2C3C] text-lg leading-[39.1px] font-bold
         text-center">Contact Details</p>
         <desc className="text-xs text-center">This details are private and only used to contact you for ticketing or prizes</desc>
         <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
         <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
         <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Enter city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
        </div>
        <Button type="submit" className="shadow-md w-[95%] mx-auto ml-2">Save My Profile</Button>
       </form>
      </Form>
     </section>
    </>
  )
}