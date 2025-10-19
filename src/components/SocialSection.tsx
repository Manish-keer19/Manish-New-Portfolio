import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Twitter, 
  Instagram, 
  Youtube,
  Codepen,
  Gitlab,
  Figma,
  Dribbble,
  Globe,
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

const SocialSection = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Manish-keer19',
      icon: <Github className="h-5 w-5" />,
      color: 'from-gray-700 to-gray-900',
      bg: 'bg-gray-900'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manish-keer19/',
      icon: <Linkedin className="h-5 w-5" />,
      color: 'from-blue-600 to-blue-800',
      bg: 'bg-blue-700'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/manishkeer_19',
      icon: <Twitter className="h-5 w-5" />,
      color: 'from-sky-400 to-sky-600',
      bg: 'bg-sky-500'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/manish.tsx',
      icon: <Instagram className="h-5 w-5" />,
      color: 'from-pink-500 to-purple-600',
      bg: 'bg-gradient-to-br from-pink-500 to-purple-600'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: <Mail className="h-5 w-5" />,
      color: 'from-red-500 to-red-700',
      bg: 'bg-red-600'
    },
 

  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="connect" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            I'm active on these platforms. Feel free to reach out!
          </motion.p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
        {socialLinks.slice(0, 4).map((social) => (
  <motion.a
    key={social.name}
    variants={item}
    href={social.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative overflow-hidden rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg ${social.bg} hover:scale-[1.03]`}
  >
    <div className="absolute inset-0 bg-white/5 group-hover:opacity-0 transition-opacity duration-300"></div>
    
    <div className={`p-3 rounded-full bg-gradient-to-br ${social.color} shadow-md`}>
      {social.icon}
    </div>
    
    <h3 className="font-semibold text-white">{social.name}</h3>
    
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 group-hover:bg-white/50 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100"></div>
  </motion.a>
))}
        </motion.div>

        {/* Additional contact options */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-800"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-white">Direct Contact</h3>
              <p className="text-muted-foreground mb-6">
                Prefer more traditional ways? Here's how you can reach me directly.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:your.email@example.com" className="text-white hover:text-emerald-400 transition-colors">your.email@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-blue-400 transition-colors">+1 (234) 567-890</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Messaging</p>
                    <p className="text-white">Telegram, WhatsApp, Signal</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="bg-black/30 border border-gray-800 rounded-xl p-6 h-full">
                <h4 className="font-semibold text-lg mb-4 text-white">Send me a quick message</h4>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <textarea 
                    placeholder="Your message" 
                    rows={4}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default SocialSection;