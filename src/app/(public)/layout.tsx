import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/widgets/whatsapp-widget";
import { ChatWidget } from "@/components/widgets/chat-widget";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppWidget />
      <ChatWidget />
    </>
  );
}
