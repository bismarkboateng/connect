import { z } from "zod"

export const profileSchema = z.object({
  fullName: z.string().min(2).max(50),
  website: z.string().min(2).max(100),
  company: z.string().min(2).max(40),
  
  phone: z.string().min(2).max(100),
  address: z.string().min(2).max(100),
  city: z.string().min(2).max(100),
})
