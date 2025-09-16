import { loginUser } from "@/app/actions/auth/loginUser";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect from "./dbConnect";

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

        const user = await loginUser(credentials);

        if (user) return user;
        else return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }){
        if(account){
            const {providerAccountId, provider} = account;
            const {email: user_email, image, name} = user;

            const userCollection = dbConnect("users");
            const isExist = await userCollection.findOne({providerAccountId});

            if(!isExist){
                const payload = {providerAccountId, provider, email:user_email, image, name};
                await userCollection.insertOne(payload);
            }
        }
        return true;
    }
  }
};
