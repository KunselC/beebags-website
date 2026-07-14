import { z } from "zod";

/** Shared inquiry schema — used by the client form AND the API route.
 *  Three fields per the brand book's "one form, three fields". */
export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name").max(80),
  email: z.string().trim().email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "A little more detail helps us respond well")
    .max(2000, "Please keep it under 2000 characters"),
  // Honeypot: real users leave this empty.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
