import { z } from "zod";

export const userFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  age: z
    .number()
    .int()
    .positive()
    .min(1, { message: "Age must be a positive integer" }),
  image: z.string().url({ message: "Image must be a valid URL" }),
});
