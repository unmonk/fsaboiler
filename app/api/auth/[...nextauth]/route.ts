import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import type { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
