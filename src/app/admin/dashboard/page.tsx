import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Mail, FolderOpen, MessageSquare, Star, FileQuestion, Users } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Admin Dashboard" };

const ADMIN_SECTIONS = [
  { icon: Mail, label: "Contact Submissions", desc: "View and manage enquiries from the contact form", href: "/admin/submissions", color: "text-brand-purple bg-primary-50" },
  { icon: FolderOpen, label: "Projects", desc: "Create, edit, and reorder project listings", href: "/admin/projects", color: "text-amber-600 bg-amber-50" },
  { icon: Star, label: "Testimonials", desc: "Manage client testimonials and ratings", href: "/admin/testimonials", color: "text-green-600 bg-green-50" },
  { icon: FileQuestion, label: "FAQ / Knowledge Base", desc: "Add and edit AI chatbot FAQ entries", href: "/admin/faqs", color: "text-blue-600 bg-blue-50" },
  { icon: MessageSquare, label: "Chat Logs", desc: "Review AI chatbot conversation logs", href: "/admin/chat-logs", color: "text-brand-magenta bg-pink-50" },
  { icon: Users, label: "Settings", desc: "Admin account and system settings", href: "/admin/settings", color: "text-brand-charcoal bg-muted" },
];

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-muted/40">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-xs text-muted-foreground">Amaryllis Success</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{session.user?.email}</span>
            <Link href="/" className="text-sm text-brand-purple hover:underline">← View Site</Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-foreground">
            Welcome back, {session.user?.name?.split(" ")[0]} 👋
          </h2>
          <p className="text-muted-foreground mt-1">Manage your website content and client data below.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ADMIN_SECTIONS.map((s) => (
            <Link key={s.href} href={s.href}
              className="rounded-2xl border border-border bg-white p-6 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all group">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl mb-4 ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-foreground group-hover:text-brand-purple transition-colors mb-1">
                {s.label}
              </h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
