import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#0B0F1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#4A6CF7]/20 to-transparent opacity-30" />
      

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-b from-[#1E2536] to-[#0F131F] border border-white/10 rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A6CF7]/10 via-transparent to-[#00FFA3]/10 opacity-50" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight relative z-10">Ready to <span className="text-[#00FFA3]">Scale</span> Your Business?</h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
            Get a free, no-obligation audit of your current digital presence. We'll show you exactly where you're leaving money on the table.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#4A6CF7] text-white rounded-full font-bold text-lg hover:bg-[#3251d4] transition-all shadow-[0_0_20px_-5px_rgba(74,108,247,0.5)] hover:shadow-[0_0_30px_-5px_rgba(74,108,247,0.8)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Get Free Growth Audit <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/+919562564101"
              className="px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-full font-bold text-lg hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
