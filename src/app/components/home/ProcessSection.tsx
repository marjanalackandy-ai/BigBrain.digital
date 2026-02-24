import { motion } from "motion/react";
import { Target, Zap, BarChart, Rocket } from "lucide-react";

const steps = [
  { icon: Target, title: "Strategy", desc: "We analyze your market and define clear KPIs." },
  { icon: Zap, title: "Execution", desc: "Launch high-impact campaigns across channels." },
  { icon: BarChart, title: "Optimization", desc: "Continuous A/B testing to improve ROI." },
  { icon: Rocket, title: "Growth", desc: "Scale what works and expand to new heights." },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-[#05080F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-gray-400">A proven 4-step framework for success.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[50px] left-0 w-full h-1 bg-gradient-to-r from-[#4A6CF7]/20 via-[#4A6CF7] to-[#4A6CF7]/20 -z-10" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center bg-[#0B0F1A] p-6 rounded-xl border border-white/5 md:bg-transparent md:border-none relative"
              >
                <div className="w-24 h-24 mx-auto bg-[#0B0F1A] rounded-full border-4 border-[#4A6CF7] flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_-5px_rgba(74,108,247,0.5)]">
                  <step.icon size={32} className="text-white" />
                  <div className="absolute top-0 right-0 w-6 h-6 bg-[#00FFA3] rounded-full text-black text-xs font-bold flex items-center justify-center border-2 border-[#0B0F1A]">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
