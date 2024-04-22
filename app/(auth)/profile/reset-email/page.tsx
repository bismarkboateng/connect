"use client"

import { resetEmailSchema } from "@/lib/formSchema"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useAuthStore } from "@/store/authStore"

export default function ResetEmailPage() {
  const updateUserEmail = useAuthStore(state => state.updateUserEmail)
  const form = useForm<z.infer<typeof resetEmailSchema>>({
    resolver: zodResolver(resetEmailSchema),
    defaultValues: {
      newEmail: "",
      confirmEmail: "",
    },
  })
  
  const onSubmit = (values: z.infer<typeof resetEmailSchema>) => {
    updateUserEmail(values)
  }

  return (
    <section className="w-[91%] mx-auto">
      <h1 className="text-[#2D2C3C] font-bold text-2xl mb-3">Change Email</h1>

      <p className="mb-3">
        Current Email: test@gmail.com
      </p>
      <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <FormField
          control={form.control}
          name="newEmail"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel>New Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter new email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmEmail"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel>Confirm Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter again" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       <Button type="submit" className="shadow-md w-full">Save New Email</Button>
       </form>
      </Form>
    </section>
  )
}
