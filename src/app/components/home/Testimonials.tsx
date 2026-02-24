import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "BigBrain transformed our marketing strategy. Our leads tripled in just 3 months. The team is incredibly proactive.",
    name: "Sarah Jenkins",
    role: "CMO, TechFlow",
    image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNzg1NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    text: "The best agency we've worked with. Professional, data-driven, and they actually care about your ROI.",
    name: "Michael Chen",
    role: "Founder, Nexus Startups",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTcwMzU1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    text: "Their creative team is top-notch. Our brand identity has never looked better, and our engagement is up 400%.",
    name: "Elena Rodriguez",
    role: "Director, ArtVibe",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#05080F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Love</h2>
          <p className="text-gray-400">Don't just take our word for it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0B0F1A] p-8 rounded-2xl border border-white/5 hover:border-[#4A6CF7]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-[#FFD600] mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed mb-6">"{t.text}"</p>
              </div>

              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#4A6CF7]/20" />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
