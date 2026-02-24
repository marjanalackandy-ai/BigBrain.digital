import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import CursorGlow from "../components/CursorGlow";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-[#4A6CF7] selection:text-white">
      <CursorGlow />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollRestoration />
    </div>
  );
}