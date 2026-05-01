import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email:    { label: "Email",    type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email:    credentials.email,
                password: credentials.password,
              }),
            }
          );
          if (!res.ok) return null;
          const data = await res.json();
          return {
            id:          data.user.id,
            name:        data.user.full_name,
            email:       data.user.email,
            role:        data.user.role,
            accessToken: data.access_token,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as any).accessToken;
        token.role        = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken        = token.accessToken as string;
      (session.user as any).role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
    error:  "/admin/login",
  },
  session: {
    strategy: "jwt",
    maxAge:   60 * 60,
  },
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path:     "/",
        secure:   process.env.NODE_ENV === "production",
      },
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
