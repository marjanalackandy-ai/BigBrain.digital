import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#4A6CF7] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[#00FFA3] rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 pt-[-30px] pr-[0px] pb-[-10px] pl-[0px] rounded-[50px]"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm px-[25px] py-[8px] ml-[10px] mr-[0px] mt-[60px] mb-[32px]">
            <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse" />
            <span className="text-sm font-medium text-[#00FFA3]">Accepting New Clients</span>
          </div>

          <h1 className="font-bold leading-tight tracking-tight text-[70px]">
            Think <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A6CF7] to-[#00FFA3]">Bigger.</span>
            <br />
            Grow <span className="text-white">Faster.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">We help ambitious businesses scale with data-driven marketing, branding, and performance ads. Stop guessing, start growing.</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#4A6CF7] text-white rounded-full font-semibold hover:bg-[#3251d4] transition-all shadow-[0_0_20px_-5px_rgba(74,108,247,0.5)] hover:shadow-[0_0_30px_-5px_rgba(74,108,247,0.7)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Get Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/packages"
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              <Play className="w-5 h-5 fill-current" /> View Packages
            </Link>
          </div>

          
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
             {/* Main Image with Mask/Effect */}
             <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-2">
                <img 
                  src="https://images.unsplash.com/photo-1764258560300-2346b28b4e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBuZXR3b3JrJTIwYmx1ZSUyMGRhcmslMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTc4NTQxMnww&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Digital Growth" 
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent opacity-60" />
             </div>

             {/* Floating UI Elements */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="absolute top-10 -left-10 bg-[#0B0F1A]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl max-w-[200px]"
             >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-xs text-gray-400">ROI Analysis</span>
                </div>
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-xs text-[#00FFA3] mt-1">↑ vs last month</div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-20 -right-5 bg-[#0B0F1A]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl max-w-[220px]"
             >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#4A6CF7]/20 flex items-center justify-center text-[#4A6CF7]">
                    <ArrowRight size={16} className="-rotate-45" />
                  </div>
                  <div>
                     <div className="text-sm font-bold text-white">Leads Generated</div>
                     <div className="text-gray-400 text-[11px]">Total: </div>
                  </div>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                   <div className="h-full bg-[#4A6CF7] w-[75%] rounded-[5px]" />
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}