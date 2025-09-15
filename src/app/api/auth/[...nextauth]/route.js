import { loginUser } from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter enail" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("CREDENTIALS:", credentials);

        const user = await loginUser(credentials)

        if (user)  return user;
        else return null;
      },
    }),
  ],
  pages: {
    signIn: "/login"
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
