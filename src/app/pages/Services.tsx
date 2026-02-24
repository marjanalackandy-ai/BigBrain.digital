import { motion } from "motion/react";
import { Megaphone, Search, Monitor, PenTool, Video, TrendingUp, CheckCircle } from "lucide-react";
import CTASection from "../components/home/CTASection";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "Build a loyal community and drive engagement.",
    features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Analytics & Reporting"],
  },
  {
    icon: TrendingUp,
    title: "Performance Ads",
    desc: "Maximize ROI with data-driven paid campaigns.",
    features: ["Meta Ads (Facebook/Instagram)", "Google Ads (Search/Display)", "Retargeting Strategies", "A/B Testing"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Dominate search results and drive organic traffic.",
    features: ["On-Page SEO", "Technical Audits", "Link Building", "Keyword Research"],
  },
  {
    icon: Monitor,
    title: "Web Design & Dev",
    desc: "Websites that convert visitors into customers.",
    features: ["UX/UI Design", "Responsive Development", "Landing Page Optimization", "CMS Integration"],
  },
  {
    icon: PenTool,
    title: "Branding & Creative",
    desc: "Create a memorable identity that stands out.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Copywriting"],
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "High-impact video content for modern platforms.",
    features: ["Reels & TikToks", "Corporate Videos", "Motion Graphics", "Color Grading"],
  },
];

export default function Services() {
  return (
    <div className="pt-20 bg-[#0B0F1A]">
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4A6CF7] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-[#4A6CF7]">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Comprehensive digital solutions designed to scale your business. From strategy to execution, we handle it all.
          </motion.p>
        </div>
      </section>

      <section className="py-10 pb-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#121624] border border-white/5 rounded-2xl p-8 hover:border-[#4A6CF7]/50 transition-all group hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-16 h-16 rounded-xl bg-[#4A6CF7]/10 flex items-center justify-center mb-6 text-[#4A6CF7] group-hover:bg-[#4A6CF7] group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.desc}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#00FFA3] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
      
      <CTASection />
    </div>
  );
}
