import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  website: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    toast.success("Message sent successfully! We'll be in touch soon.");
    reset();
  };

  return (
    <div className="pt-20 bg-[#0B0F1A] min-h-screen">
      <Toaster position="top-center" richColors />
      
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4A6CF7] rounded-full blur-[200px] opacity-10 pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Let's <span className="text-[#4A6CF7]">Talk Growth</span>
            </motion.h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Ready to take your business to the next level? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#121624] p-8 rounded-3xl border border-white/5 space-y-8"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4A6CF7]/10 flex items-center justify-center text-[#4A6CF7] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email Us</h3>
                  <p className="text-gray-400">info@bigbrain.digital</p>
                  <p className="text-gray-400">support@bigbrain.digital</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00FFA3]/10 flex items-center justify-center text-[#00FFA3] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Call Us</h3>
                  <p className="text-gray-400">+91 9562564101</p>
                  <p className="text-gray-400">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFD600]/10 flex items-center justify-center text-[#FFD600] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white text-left m-[0px] p-[5px]">Visit Us</h3>
                  
                  <p className="text-gray-400"></p>
                </div>
              </div>

              <div className="w-full h-64 bg-[#1E2536] rounded-2xl overflow-hidden relative border border-white/10 mt-8">
                 {/* Map Placeholder */}
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3!2d76.9!3d8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMDAuMCJOIDc2wrA1NCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                   width="100%"
                   height="300"
                   style={{ border: 0, borderRadius: '12px' }}
                   allowFullScreen
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   className="mt-2"
                 ></iframe>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#121624] p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A6CF7] rounded-full blur-[80px] opacity-20 pointer-events-none" />
              
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-[#0B0F1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4A6CF7] transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                    })}
                    className="w-full bg-[#0B0F1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4A6CF7] transition-colors"
                    placeholder="john@company.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Website URL (Optional)</label>
                  <input
                    {...register("website")}
                    className="w-full bg-[#0B0F1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4A6CF7] transition-colors"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">How can we help?</label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={4}
                    className="w-full bg-[#0B0F1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4A6CF7] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4A6CF7] text-white font-bold py-4 rounded-xl hover:bg-[#3251d4] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(74,108,247,0.39)] hover:shadow-[0_6px_20px_rgba(74,108,247,0.23)] hover:-translate-y-1"
                >
                  {isSubmitting ? "Sending..." : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}