import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  // database: process.env.DB,
  secret: "process.env.SECRET",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: "Iv1.4c8200b396df53a3",
      clientSecret: "349fba8ea679a206f0e722731b491a203964b5ac",
    }),
  ],
  pages: {
    signIn: "/home",
  },
});
