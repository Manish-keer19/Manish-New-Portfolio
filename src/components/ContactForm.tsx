
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
import { Send, Mail, Phone, MapPin, CheckCircle2, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
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
        setToastType('success');
        setToastMessage('Message sent successfully! I\'ll get back to you soon.');
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowToast(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setToastType('error');
      setToastMessage('Failed to send message. Please try again or contact me directly.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
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
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:manishkeer530@gmail.com', '_self');
  };

  return (
    <>
      {/* Custom Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-xl border ${
            toastType === 'success' 
              ? 'bg-green-500/90 border-green-400/50 text-white' 
              : 'bg-red-500/90 border-red-400/50 text-white'
          }`}>
            {toastType === 'success' ? (
              <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
            ) : (
              <X className="h-5 w-5 flex-shrink-0" />
            )}
            <span className="font-medium">{toastMessage}</span>
            <button 
              onClick={() => setShowToast(false)}
              className="ml-2 hover:opacity-70 transition-opacity"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      
      <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and interesting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">manishkeer530@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground">9691636336</div>
                  <div className="text-muted-foreground">9165363367</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">Indore, MP, India</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button 
                onClick={handleEmailClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 glow-green transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
              <Button 
                onClick={() => handleCall('9691636336')}
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 font-semibold py-3 px-6 transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-white/5 border-white/10 focus:border-primary/50 resize-none text-foreground placeholder:text-muted-foreground"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 glow-green transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactForm;