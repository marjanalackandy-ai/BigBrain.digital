import { motion } from "motion/react";
import { Check, MessageCircle } from "lucide-react";
import CTASection from "../components/home/CTASection";

const packages = [
  {
    name: "Starter",
    price: "$999",
    period: "/month",
    description: "Perfect for small businesses looking to establish their digital presence",
    features: [
      "Social Media Management (3 platforms)",
      "Content Creation (12 posts/month)",
      "Basic SEO Optimization",
      "Monthly Performance Report",
      "Email Support",
      "Brand Guidelines Setup",
    ],
    popular: false,
    color: "from-[#4A6CF7]/20 to-transparent",
    borderColor: "border-[#4A6CF7]/30",
  },
  {
    name: "Growth",
    price: "$2,499",
    period: "/month",
    description: "Ideal for growing businesses ready to scale their marketing efforts",
    features: [
      "Everything in Starter",
      "Social Media Management (5 platforms)",
      "Content Creation (24 posts/month)",
      "Advanced SEO + Local SEO",
      "Google Ads Management ($2k ad spend)",
      "Weekly Performance Reports",
      "2x Strategy Calls/month",
      "Priority Support",
      "Conversion Rate Optimization",
    ],
    popular: true,
    color: "from-[#00FFA3]/20 to-transparent",
    borderColor: "border-[#00FFA3]",
  },
  {
    name: "Enterprise",
    price: "$5,999",
    period: "/month",
    description: "Complete digital marketing solution for established brands",
    features: [
      "Everything in Growth",
      "Unlimited Social Platforms",
      "Content Creation (40+ posts/month)",
      "Enterprise SEO Strategy",
      "Multi-Channel Ads ($10k+ ad spend)",
      "Daily Performance Dashboard",
      "Weekly Strategy Calls",
      "Dedicated Account Manager",
      "Full-Funnel Optimization",
      "A/B Testing & Analytics",
      "Custom Integrations",
      "White-label Reporting",
    ],
    popular: false,
    color: "from-[#4A6CF7]/20 to-transparent",
    borderColor: "border-[#4A6CF7]/30",
  },
];

export default function Packages() {
  const handleWhatsAppClick = (packageName: string) => {
    const message = `Hi! I'm interested in the ${packageName} package. Can you tell me more?`;
    const phoneNumber = "+919562564101"; // Replace with your actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-20 bg-[#0B0F1A]">
      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4A6CF7] rounded-full blur-[150px] opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse" />
            <span className="text-sm font-medium text-[#00FFA3]">Flexible Pricing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A6CF7] to-[#00FFA3]">
              Growth Package
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Transparent pricing, no hidden fees. Scale your business with the perfect package tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 backdrop-blur-sm border-2 ${pkg.borderColor} ${
                  pkg.popular ? "bg-gradient-to-br from-white/10 to-white/5 scale-105 shadow-2xl" : "bg-white/5"
                } hover:border-[#00FFA3] transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#4A6CF7] to-[#00FFA3] rounded-full text-white text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${pkg.color} rounded-t-3xl`} />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{pkg.description}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-bold text-white">{pkg.price}</span>
                    <span className="text-gray-400 text-lg mb-2">{pkg.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 pt-6 border-t border-white/10">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-[#00FFA3] flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* WhatsApp Button */}
                  <button
                    onClick={() => handleWhatsAppClick(pkg.name)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-8 ${ pkg.popular ? "bg-gradient-to-r from-[#5170ff] to-[#00FFA3] text-white hover:shadow-[0_0_30px_rgba(81,112,255,0.5)] hover:scale-105" : "bg-[#5170ff] text-white hover:bg-[#4060ee] hover:shadow-[0_0_20px_rgba(81,112,255,0.4)]" } text-[15px]`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Started on WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-3">
                Need a Custom Package?
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                We can create a tailored solution that perfectly fits your unique business needs
              </p>
              <button
                onClick={() => handleWhatsAppClick("Custom")}
                className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 hover:border-[#00FFA3] transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Discuss Custom Solution
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}