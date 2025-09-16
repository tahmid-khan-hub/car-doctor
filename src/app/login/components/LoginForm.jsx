"use client"
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
        const res = await signIn("credentials", { email, password, redirect: false, callbackUrl: "/"});
        if(res?.ok){
          router.push("/");
          form.reset();
        }else{
          alert("Login failed");
        }
        alert("Login Successful!");
    } catch (error) {
        console.log(error);
        alert("Failed to Login");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        Sign In
      </button>
    </form>
  );
}
