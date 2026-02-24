import { motion } from "motion/react";
import { 
  Megaphone, 
  Search, 
  Monitor, 
  PenTool, 
  Video, 
  TrendingUp, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router";

const services = [
  { icon: Megaphone, title: "Social Media Marketing", desc: "Build a community and engage your audience with content that converts." },
  { icon: TrendingUp, title: "Performance Ads", desc: "Meta & Google Ads campaigns optimized for high ROAS and lead quality." },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher on Google and drive organic traffic with data-driven strategies." },
  { icon: Monitor, title: "Web Design & Dev", desc: "High-converting, lightning-fast websites built for scale and user experience." },
  { icon: PenTool, title: "Branding & Creative", desc: "Stand out with a unique visual identity and compelling brand storytelling." },
  { icon: Video, title: "Video Editing", desc: "Engaging short-form and long-form video content that captures attention." },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#0B0F1A] relative overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#4A6CF7] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="text-[#4A6CF7]">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We don't just do marketing; we build growth engines. Choose the service that fits your goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#4A6CF7]/50 transition-all backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A6CF7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 rounded-xl bg-[#4A6CF7]/10 flex items-center justify-center mb-6 text-[#4A6CF7] group-hover:bg-[#4A6CF7] group-hover:text-white transition-colors relative z-10">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 relative z-10 group-hover:text-[#4A6CF7] transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                {service.desc}
              </p>
              
              <Link to="/services" className="inline-flex items-center text-sm font-semibold text-[#4A6CF7] group-hover:text-white transition-colors gap-2 relative z-10">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
