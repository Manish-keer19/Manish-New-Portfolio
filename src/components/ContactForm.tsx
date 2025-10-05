
// import { useState } from 'react';
// import { Send, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission here
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   return (
//     <section id="contact" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Get In <span className="text-gradient">Touch</span>
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             Let's discuss your next project
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
//               <p className="text-muted-foreground mb-8 leading-relaxed">
//                 I'm always interested in hearing about new opportunities and interesting projects.
//                 Whether you have a question or just want to say hi, feel free to reach out!
//               </p>
//             </div>

//             <div className="space-y-4">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
//                   <Mail className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <div className="font-semibold">Email</div>
//                   <div className="text-muted-foreground">manishkeer530@gmail.com</div>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
//                   <Phone className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <div className="font-semibold">Phone</div>
//                   <div className="text-muted-foreground">9691636336</div>
//                   <div className="text-muted-foreground"> 9165363367</div>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
//                   <MapPin className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <div className="font-semibold">Location</div>
//                   <div className="text-muted-foreground">Indore, MP ,India </div>
//                 </div>
//               </div>
//             </div>

//             {/* <div className="flex space-x-4 pt-4">
//               <Button size="icon" variant="outline" className="rounded-full border-primary/50 hover:bg-primary/10">
//                 <Github className="h-5 w-5" />
//               </Button>
//               <Button size="icon" variant="outline" className="rounded-full border-primary/50 hover:bg-primary/10">
//                 <Linkedin className="h-5 w-5" />
//               </Button>
//             </div> */}
//           </div>

//           {/* Contact Form */}
//           <Card className="glass border-0">
//             <CardContent className="p-8">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <Input
//                     placeholder="Your Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="bg-white/5 border-white/10 focus:border-primary/50"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Input
//                     type="email"
//                     placeholder="Your Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="bg-white/5 border-white/10 focus:border-primary/50"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Textarea
//                     placeholder="Your Message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={6}
//                     className="bg-white/5 border-white/10 focus:border-primary/50 resize-none"
//                     required
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 glow-green transition-all duration-300 hover:scale-105"
//                 >
//                   <Send className="mr-2 h-5 w-5" />
//                   Send Message
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;








import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Phone, MapPin, Sparkles, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    tap: { scale: 0.95 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const successVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      scale: 0, 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading('Sending your message...', {
      style: {
        background: '#1e293b',
        color: 'white',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)'
      }
    });

    try {
      // Simulate API call with beautiful animation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const response = await fetch('https://formsubmit.co/ajax/manishkeer530@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact Form Message from ${formData.name}`
        })
      });

      if (response.ok) {
        toast.dismiss(loadingToast);
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          duration: 4000,
          style: {
            background: '#10b981',
            color: 'white',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)'
          },
          icon: <CheckCircle className="w-5 h-5" />
        });
        
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.dismiss(loadingToast);
      toast.error('Failed to send message. Please try again or contact me directly.', {
        duration: 4000,
        style: {
          background: '#ef4444',
          color: 'white',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.1)'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCall = (phoneNumber: string) => {
    toast.success(`Calling ${phoneNumber}...`, {
      duration: 2000,
      icon: '📞',
      style: {
        background: '#3b82f6',
        color: 'white',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)'
      }
    });
    
    setTimeout(() => {
      window.open(`tel:${phoneNumber}`, '_self');
    }, 1000);
  };

  const handleEmailClick = () => {
    toast('Opening your email client...', {
      icon: '📧',
      duration: 2000,
      style: {
        background: '#8b5cf6',
        color: 'white',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)'
      }
    });
    
    setTimeout(() => {
      window.open('mailto:manishkeer530@gmail.com', '_self');
    }, 1000);
  };

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            fontFamily: 'inherit',
          },
        }}
      />
      
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              y: [0, -15, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <motion.div 
          className="max-w-6xl mx-auto relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Get In <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Touch</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="inline-block ml-4 h-8 w-8 text-yellow-400" />
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Let's create something extraordinary together. Your next project deserves the best.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-start"
            variants={containerVariants}
          >
            {/* Contact Info */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div 
                className="glass-morphism bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
                variants={cardVariants}
                whileHover="hover"
              >
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Let's Connect ✨
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  I'm passionate about turning ideas into reality. Whether you're starting a new venture 
                  or scaling an existing one, I'd love to be part of your journey.
                </p>
              </motion.div>

              <div className="space-y-6">
                {/* Email */}
                <motion.div 
                  className="glass-morphism bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 cursor-pointer group"
                  onClick={handleEmailClick}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Mail className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg text-white">Email</div>
                      <div className="text-muted-foreground group-hover:text-purple-300 transition-colors duration-300">
                        manishkeer530@gmail.com
                      </div>
                    </div>
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Send className="h-5 w-5 text-purple-400" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  className="glass-morphism bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Phone className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-lg text-white">Phone</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['9691636336', '9165363367'].map((number, index) => (
                      <motion.button
                        key={number}
                        onClick={() => handleCall(number)}
                        className="group relative overflow-hidden bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        variants={buttonVariants}
                      >
                        <motion.div 
                          className="font-mono text-lg font-semibold text-white group-hover:text-blue-400 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {number}
                        </motion.div>
                        <div className="text-xs text-muted-foreground group-hover:text-blue-300 transition-colors">
                          Tap to Call
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  className="glass-morphism bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <MapPin className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-lg text-white">Location</div>
                      <div className="text-muted-foreground">Indore, MP, India</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Quick Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-6"
                variants={itemVariants}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    onClick={handleEmailClick}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-2xl"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    Email Directly
                  </Button>
                </motion.div>
                
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    onClick={() => handleCall('9691636336')}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-2xl"
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Call Now
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="glass-morphism bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden relative">
                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center z-10"
                        variants={successVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <div className="text-center p-8">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 200, 
                              delay: 0.2 
                            }}
                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl"
                          >
                            <CheckCircle className="h-8 w-8 text-white" />
                          </motion.div>
                          <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl font-bold text-white mb-2"
                          >
                            Message Sent!
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-green-100"
                          >
                            I'll get back to you soon
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <CardContent className="p-8 relative">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <motion.div variants={itemVariants}>
                        <Input
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-white/5 border-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 h-12 text-lg rounded-xl text-white placeholder:text-gray-400"
                          required
                          disabled={isSubmitting}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-white/5 border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 h-12 text-lg rounded-xl text-white placeholder:text-gray-400"
                          required
                          disabled={isSubmitting}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Textarea
                          placeholder="Tell me about your project..."
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="bg-white/5 border-white/10 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 resize-none text-lg rounded-xl text-white placeholder:text-gray-400"
                          required
                          disabled={isSubmitting}
                        />
                      </motion.div>

                      <motion.div className="space-y-4" variants={itemVariants}>
                        <motion.div
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-4 text-lg rounded-xl transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                          >
                            {isSubmitting ? (
                              <motion.span 
                                className="flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                              >
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                  <Loader2 className="h-6 w-6 mr-3" />
                                </motion.div>
                                Sending Your Message...
                              </motion.span>
                            ) : (
                              <motion.span 
                                className="flex items-center justify-center"
                                whileHover={{ scale: 1.05 }}
                              >
                                <Send className="mr-3 h-6 w-6" />
                                Send Message
                              </motion.span>
                            )}
                          </Button>
                        </motion.div>
                        
                        <motion.div
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <Button
                            type="button"
                            onClick={handleEmailClick}
                            variant="outline"
                            className="w-full border-white/20 hover:bg-white/10 hover:border-white/40 text-white font-semibold py-4 text-lg rounded-xl transition-all duration-300"
                          >
                            <Mail className="mr-3 h-5 w-5" />
                            Alternative: Email Directly
                          </Button>
                        </motion.div>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ContactForm;