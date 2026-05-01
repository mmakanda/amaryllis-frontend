"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (res?.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-foreground px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center rounded-2xl bg-white/10 p-4 mb-4">
            <Image src="/images/logo.jpeg" alt="Amaryllis" width={48} height={48} className="rounded-xl" />
          </div>
          <h1 className="text-xl font-bold text-white">Amaryllis Admin</h1>
          <p className="text-sm text-white/50 mt-1">Secure access only</p>
        </div>

        <form onSubmit={handleLogin} className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-5 backdrop-blur-md">
          <div className="flex justify-center mb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/20">
              <Lock className="h-5 w-5 text-brand-purple" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
              placeholder="admin@amaryllissuccess.co.zw"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-60"
            style={{ background: "linear-gradient(135deg,#7B2FBE,#C2449F)" }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Signing in…
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
