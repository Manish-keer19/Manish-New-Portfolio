import { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  X,
  Github,
  Linkedin,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/manishkeer530@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Portfolio Contact from ${formData.name}`,
          }),
        },
      );
      if (response.ok) {
        setToastType("success");
        setToastMessage(
          "Message sent! I'll get back to you within 24 hours. 🚀",
        );
        setFormData({ name: "", email: "", message: "" });
      } else throw new Error();
    } catch {
      setToastType("error");
      setToastMessage(
        "Failed to send. Please email me directly at manishkeer530@gmail.com",
      );
    } finally {
      setIsSubmitting(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 6000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socials = [
    {
      icon: <Github className="w-4 h-4" />,
      label: "GitHub",
      value: "Manish-keer19",
      href: "https://github.com/Manish-keer19",
      color: "hover:border-white/30 hover:text-foreground",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      label: "LinkedIn",
      value: "manish-keer",
      href: "https://linkedin.com/in/manish-keer-4bb897293",
      color: "hover:border-blue-500/40 hover:text-blue-400",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "manishkeer530@gmail.com",
      href: "mailto:manishkeer530@gmail.com",
      color: "hover:border-primary/40 hover:text-primary",
    },
  ];

  return (
    <>
      {/* Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-2 duration-300 max-w-sm">
          <div
            className={`flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border ${
              toastType === "success"
                ? "bg-green-500/90 border-green-400/40 text-white"
                : "bg-red-500/90 border-red-400/40 text-white"
            }`}
          >
            {toastType === "success" ? (
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
            ) : (
              <X className="h-5 w-5 shrink-0 mt-0.5" />
            )}
            <span className="font-medium text-sm leading-relaxed">
              {toastMessage}
            </span>
            <button
              onClick={() => setShowToast(false)}
              className="ml-auto hover:opacity-70 transition-opacity shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <section
        id="contact"
        className="py-24 px-4 bg-background relative overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let's{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Work Together
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
              Open to full-time roles, freelance projects, and interesting
              collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* ── LEFT: Info ── */}
            <div className="space-y-8">
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for new opportunities
              </div>

              {/* Personal message */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Say Hello 👋
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a project in mind, a job opportunity, or just
                  want to talk tech — I'm always happy to connect. I typically
                  respond within{" "}
                  <span className="text-foreground font-semibold">
                    24 hours
                  </span>
                  .
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-3">
                {[
                  {
                    icon: <Mail className="w-4 h-4" />,
                    label: "Email",
                    value: "manishkeer530@gmail.com",
                    color: "text-primary bg-primary/10",
                  },
                  {
                    icon: <MapPin className="w-4 h-4" />,
                    label: "Location",
                    value: "Indore, MP, India",
                    color: "text-blue-400 bg-blue-500/10",
                  },
                  {
                    icon: <MessageSquare className="w-4 h-4" />,
                    label: "Response time",
                    value: "Usually within 24 hours",
                    color: "text-green-400 bg-green-500/10",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/40 border border-white/6 hover:border-primary/15 hover:bg-card/60 transition-all duration-200"
                  >
                    <div className={`p-2 rounded-lg ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">
                        {item.label}
                      </p>
                      <p className="text-sm text-foreground font-semibold">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-3">
                  Find me on
                </p>
                <div className="flex flex-col gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-card/40 border border-white/6 text-muted-foreground transition-all duration-200 group ${s.color}`}
                    >
                      <span className="shrink-0">{s.icon}</span>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold block">
                          {s.label}
                        </span>
                        <span className="text-xs opacity-70 truncate block">
                          {s.value}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="p-6 md:p-8 rounded-2xl bg-card/50 border border-white/8 backdrop-blur-sm hover:border-primary/15 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
                    Your Name
                  </label>
                  <Input
                    placeholder="Manish Keer"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 border-white/10 focus:border-primary/50 focus:bg-background/80 text-foreground placeholder:text-muted-foreground/50 rounded-xl h-11 transition-all duration-200"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-white/10 focus:border-primary/50 focus:bg-background/80 text-foreground placeholder:text-muted-foreground/50 rounded-xl h-11 transition-all duration-200"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project, opportunity, or just say hi..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-background/50 border-white/10 focus:border-primary/50 focus:bg-background/80 resize-none text-foreground placeholder:text-muted-foreground/50 rounded-xl transition-all duration-200"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl h-12 font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.01] transition-all duration-200 group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground/60">
                  No spam. Your message goes directly to my inbox.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
