"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function LoginPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", form);
    alert("Login successful!");
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
          Log In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              isDark
                ? "bg-[#1E1E1E] border-[#333] text-white placeholder-gray-500 focus:ring-gray-600"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-600 focus:ring-blue-500"
            }`}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              isDark
                ? "bg-[#1E1E1E] border-[#333] text-white placeholder-gray-500 focus:ring-gray-600"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-600 focus:ring-blue-500"
            }`}
          />

          <button
            type="submit"
            className={`w-full py-3 rounded-md font-medium transition ${
              isDark
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Log In
          </button>
        </form>

        <p
          className={`text-center text-sm mt-4 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Don't have an account?{" "}
          <Link href="/signup" className="hover:underline">
            {isDark ? <span className="text-white">Sign Up</span> : <span className="text-black">Sign Up</span>}
          </Link>
        </p>
      </div>
    </div>
  );
}
