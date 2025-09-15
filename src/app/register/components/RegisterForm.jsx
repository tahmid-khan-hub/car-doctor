"use client";
import { registerUser } from "@/app/actions/auth/registerUser";

export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const res = await registerUser({ name, email, password });

    if (res) {
      alert("✅ Registration successful!");
      form.reset();
    } else {
      alert("❌ User already exists or registration failed.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Sign Up
      </button>
    </form>
  );
}
