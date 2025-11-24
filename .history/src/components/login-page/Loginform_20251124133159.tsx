import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema
const schema = z.object({
  email: z
    .string()
    .min(5, "Email must be at least 5 characters")
    .max(50, "Email cannot exceed 50 characters")
    .email("Please enter a valid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters"),
});

// Type inferred from Zod schema
type LoginFormInputs = z.infer<typeof schema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur", // validate on blur
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
          Login
        </h2>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={`border rounded-xl p-3 focus:ring-2 outline-none
              ${errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-orange-300"}
              dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-gray-700 dark:text-gray-300 font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className={`border rounded-xl p-3 focus:ring-2 outline-none
              ${errors.password ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-orange-300"}
              dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
            {...register("password")}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-xl text-lg font-medium mt-4 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
}
