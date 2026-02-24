import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/+919562564101" // Placeholder number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-medium py-2 px-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity absolute right-full mr-3 whitespace-nowrap hidden md:block">
        Chat with us
      </div>
      <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_16px_rgba(37,211,102,0.6)] transition-shadow">
        <MessageCircle size={28} fill="currentColor" className="text-white" />
      </div>
    </motion.a>
  );
}
