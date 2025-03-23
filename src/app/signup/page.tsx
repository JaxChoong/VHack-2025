"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Link from "next/link";
import { useTheme } from "next-themes";

export default function SignupPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const router = useRouter(); // Initialize useRouter

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = existingUsers.some(
      (user: { email: string }) => user.email === form.email
    );

    if (userExists) {
      setError("User with this email already exists!");
      return;
    }

    const { confirmPassword, ...newUser } = form;

    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    setError("");
    alert("Signup successful! ");
    router.push("/login"); // Redirect to login page
  };

  return (
    <div
      className={`flex min-h-screen items-center justify-center ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`p-8 rounded-lg shadow-md w-full max-w-md ${
          isDark ? "bg-[#121212]" : "bg-gray-100"
        }`}
      >
        <h2
          className={`text-2xl font-semibold text-center mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { name: "name", placeholder: "Full Name" },
            { name: "email", placeholder: "Email" },
            { name: "phone", placeholder: "Phone Number" },
            { name: "address", placeholder: "Address" },
            { name: "dob", placeholder: "Date of Birth", type: "date" },
            { name: "password", placeholder: "Password", type: "password" },
            {
              name: "confirmPassword",
              placeholder: "Confirm Password",
              type: "password",
            },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type || "text"}
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name as keyof typeof form]}
              onChange={handleChange}
              required
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                isDark
                  ? "bg-[#1E1E1E] border-[#333] text-white placeholder-gray-500 focus:ring-gray-600"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-600 focus:ring-blue-500"
              }`}
            />
          ))}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className={`w-full py-3 rounded-md font-medium transition ${
              isDark
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Sign Up
          </button>
        </form>

        <p
          className={`text-center text-sm mt-4 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Already have an account?{" "}
          <Link href="/login" className="hover:underline">
            {isDark ? (
              <span className="text-white">Log In</span>
            ) : (
              <span className="text-black">Log In</span>
            )}
          </Link>
        </p>
      </div>
    </div>
  );
}
