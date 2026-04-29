<<<<<<< HEAD
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "@/lib/validator";

// Automatically generate the Inputs type from our zod schema
type Inputs = z.infer<typeof formSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: Inputs) => {
    console.log("Form submitted successfully:", data);
    reset();
  };

  const onError = (errors: object) => {
    console.log("Form validation failed:", errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-4 w-full max-w-md mx-auto p-6"
    >
      <h2 className="text-2xl font-bold">Sign Up</h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="firstName">First Name *</label>
        <input
          {...register("firstName")}
          id="firstName"
          type="text"
          className="border rounded p-2"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="lastName">Last Name *</label>
        <input
          {...register("lastName")}
          id="lastName"
          type="text"
          className="border rounded p-2"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email *</label>
        <input
          {...register("email")}
          id="email"
          type="text"
          className="border rounded p-2"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="role">Role</label>
        <select
          {...register("role")}
          id="role"
          className="border rounded p-2"
        >
          <option value="">-- Select a role --</option>
          <option value="student">Student</option>
          <option value="educator">Educator</option>
          <option value="parent/guardian">Parent/Guardian</option>
        </select>
        {errors.role && (
          <p className="text-red-500 text-sm">{errors.role.message}</p>
        )}
      </div>

   
      <div className="flex items-center gap-2">
        <input
          {...register("subscribe")}
          id="subscribe"
          type="checkbox"
        />
        <label htmlFor="subscribe">Subscribe to newsletter *</label>
        {errors.subscribe && (
          <p className="text-red-500 text-sm">{errors.subscribe.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="birthDate">Date of Birth</label>
        <input
          {...register("birthDate")}
          id="birthDate"
          type="date"
          className="border rounded p-2"
        />
        {errors.birthDate && (
          <p className="text-red-500 text-sm">{errors.birthDate.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password *</label>
        <input
          {...register("password")}
          id="password"
          type="password"
          className="border rounded p-2"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="confirmPassword">Confirm Password *</label>
        <input
          {...register("confirmPassword")}
          id="confirmPassword"
          type="password"
          className="border rounded p-2"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-white rounded p-2 mt-2 hover:bg-gray-800"
      >
        Sign Up
      </button>
    </form>
  );
};
=======
import { useToast } from "@/hooks/use-toast";
import { formSchema as schema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { z } from "zod";

type Inputs = null;

export default function Form() {
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        toast({
            title: "Form Submitted Successfully",
            description: (
                <div className="w-80">
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ),
            variant: "success",
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col">
                <label htmlFor="firstName">First Name *</label>
                <input id="firstName" type="text" className="border" />
            </div>
            <button
                type="submit"
                className="rounded-md bg-primary p-2 text-primary-foreground"
            >
                Submit
            </button>
        </form>
    );
}
>>>>>>> origin/main
