import { motion } from "motion/react";
import CTASection from "../components/home/CTASection";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTcwMzU1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Sarah Chen",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNzg1NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jessica Lee",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function About() {
  return (
    <div className="pt-20 bg-[#0B0F1A]">
      <section className="py-20 text-center relative overflow-hidden">
         <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-[#00FFA3] rounded-full blur-[120px] opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Who We <span className="text-[#4A6CF7]">Are</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We are a team of data nerds, creative thinkers, and growth hackers obsessed with one thing: your success.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1vZGVybiUyMGFnZW5jeSUyMG9mZmljZSUyMHRlYW18ZW58MXx8fHwxNzcxNzg1NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Our Team" 
              className="rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
             <h2 className="text-3xl md:text-4xl font-bold">More Than Just an Agency</h2>
             <p className="text-gray-400 leading-relaxed text-lg">
               Founded in 2024, BigBrain.Digital was born from a simple idea: marketing shouldn't be a guessing game. We believe in the power of data to drive creative decisions.
             </p>
             <p className="text-gray-400 leading-relaxed text-lg">
               We partner with ambitious brands to help them navigate the complex digital landscape. Whether you're a startup looking for your first customers or an enterprise scaling to new markets, we have the expertise to get you there.
             </p>
             
             <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                   <div className="text-4xl font-bold text-[#4A6CF7] mb-2">00+</div>
                   <div className="text-sm text-gray-500">Clients Served</div>
                </div>
                <div>
                   <div className="text-4xl font-bold text-[#00FFA3] mb-2">$00+</div>
                   <div className="text-sm text-gray-500">Ad Spend Managed</div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#121624]">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Brains</h2>
              <p className="text-gray-400">The people behind the pixels and performance.</p>
           </div>
           
           <div className="grid md:grid-cols-4 gap-8">
              {team.map((member, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group text-center"
                 >
                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#1E2536] group-hover:border-[#4A6CF7] transition-colors">
                       <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-[#4A6CF7] text-sm font-medium">{member.role}</p>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
