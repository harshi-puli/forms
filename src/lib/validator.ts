import { z } from "zod";

const requiredMsg = "Required";

export const formSchema = z
  .object({
    firstName: z.string().min(1, requiredMsg),

    lastName: z.string().min(1, requiredMsg),

    email: z.string().email("Please enter a valid email address"),

    // optional — must be one of these three values if provided
    role: z.enum(["student", "educator", "parent/guardian"]).optional(),

    subscribe: z.boolean({ required_error: requiredMsg }),

    // optional — must be a past date if provided
    birthDate: z.coerce
      .date()
      .max(new Date(), "Birth date must be in the past")
      .optional(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[\d]/, "Password must contain at least one number"),

    confirmPassword: z.string().min(1, requiredMsg),
  })
  // cross-field validation: confirmPassword must match password
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // error shows on the confirmPassword field
  });