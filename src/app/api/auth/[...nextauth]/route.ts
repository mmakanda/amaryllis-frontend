import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

/**
 * NextAuth configuration for Amaryllis Success admin panel.
 *
 * Strategy: Credentials provider → validates against FastAPI backend
 * which issues a JWT. We store the JWT in the NextAuth session so
 * all subsequent API calls can use it as a Bearer token.
 */
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
            id:           data.user.id,
            name:         data.user.full_name,
            email:        data.user.email,
            role:         data.user.role,
            accessToken:  data.access_token,
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
    signIn:  "/admin/login",
    error:   "/admin/login",
  },

  session: {
    strategy: "jwt",
    maxAge:   60 * 60,   // 1 hour — matches backend ACCESS_TOKEN_EXPIRE_MINUTES
  },

  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
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

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
