import { prisma } from "@repo/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

interface Credentials {
  phone: string;
  password: string;
  name?: string;
}

interface CustomSession extends Session {
  user: {
    id: string;
    email?: string | null;
    name?: string | null;
    userType: string;
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        phone: { label: "Phone number", type: "text", placeholder: "1231231231", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials: Credentials | undefined) {
        if (!credentials) return null;

        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const existingUser = await prisma.user.findFirst({
          where: {
            number: credentials.phone
          }
        });

        if (existingUser) {
          const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              email: existingUser.number
            };
          }
          return null;
        }

        try {
          const user = await prisma.user.create({
            data: {
              name: credentials.name,
              number: credentials.phone,
              password: hashedPassword
            }
          });

          return {
            id: user.id.toString(),
            name: user.name,
            email: user.number
          };
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    })
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({ token, session }: { token: JWT; session: CustomSession }) {
      session.user.id = token.sub as string;
      session.user.userType = "user";
      return session;
    }
  }
};
  