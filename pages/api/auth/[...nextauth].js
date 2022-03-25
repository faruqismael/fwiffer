
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
//   adapter: MongoDBAdapter(clientPromise),
  // database: process.env.DB,
  secret: "process.env.SECRET",
  providers: [
    GithubProvider({
      clientId: "37d217406674384ae7d5",
      clientSecret: "1b7b54574a151fda77015c1aaae15a9a534e592d",
    }),
  ],
  pages: {
    signIn: "/home",
  },
});
