"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
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

    setError("");
    console.log("Signup Data:", form);
    alert("Signup successful!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="bg-[#121212] p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#1E1E1E] border border-[#333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#1E1E1E] border border-[#333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#1E1E1E] border border-[#333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#1E1E1E] border border-[#333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#1E1E1E] border border-[#333] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#1E1E1E] border border-[#333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#1E1E1E] border border-[#333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
