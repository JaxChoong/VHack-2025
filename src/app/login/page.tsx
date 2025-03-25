"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track client-side rendering
  const router = useRouter();

  useEffect(() => {
    // Ensure theme and other client-side logic are only accessed on the client
    setIsDark(theme === "dark");
    setIsClient(true);
  }, [theme]);

  const generateCaptcha = () => {
    return Math.random().toString(36).substring(2, 8); // Generate a random 6-character string
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
    captcha: "",
  });

  const [error, setError] = useState("");
  const [captcha, setCaptcha] = useState("");

  useEffect(() => {
    // Generate captcha only on the client
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.captcha !== captcha) {
      setError("Invalid captcha!");
      setCaptcha(generateCaptcha()); // Regenerate captcha on failure
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const user = existingUsers.find(
      (user: { email: string; password: string }) =>
        user.email === form.email && user.password === form.password
    );

    if (!user) {
      setError("Invalid email or password!");
      return;
    }

    setError("");
    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful!");
    router.push("/"); // Redirect to the dashboard
    window.location.reload(); // Refresh the page after redirect
  };

  if (!isClient) {
    // Avoid rendering until client-side environment is ready
    return null;
  }

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

          <div className="flex items-center space-x-4">
            <span
              className={`p-2 rounded-md font-mono text-lg ${
                isDark ? "bg-[#1E1E1E] text-white" : "bg-gray-200 text-black"
              }`}
            >
              {captcha}
            </span>
            <button
              type="button"
              onClick={() => setCaptcha(generateCaptcha())}
              className={`py-2 px-4 rounded-md font-medium transition ${
                isDark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Refresh
            </button>
          </div>

          <input
            type="text"
            name="captcha"
            placeholder="Enter captcha"
            value={form.captcha}
            onChange={handleChange}
            required
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              isDark
                ? "bg-[#1E1E1E] border-[#333] text-white placeholder-gray-500 focus:ring-gray-600"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-600 focus:ring-blue-500"
            }`}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

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
            {isDark ? (
              <span className="text-white">Sign Up</span>
            ) : (
              <span className="text-black">Sign Up</span>
            )}
          </Link>
        </p>
      </div>
    </div>
  );
}
