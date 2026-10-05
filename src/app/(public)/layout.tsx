import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/widgets/whatsapp-widget";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="public-site min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

