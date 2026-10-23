import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Yashwant,\n\nYou have received a new message from your portfolio website:\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Yashwant K Portfolio`
    );

    // Trigger direct email to yashwantk.dev@gmail.com
    window.location.href = `mailto:yashwantk.dev@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening Email Client",
      description: "Drafting message directly to yashwantk.dev@gmail.com",
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Have a project in mind, need software engineering expertise, or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Left Column: Contact Information */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-left">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email card */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 transition-all hover:border-primary/50 shadow-xs">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Email
                    </span>
                    <a
                      href="mailto:yashwantk.dev@gmail.com"
                      className="text-foreground hover:text-primary transition-colors font-medium break-all text-sm md:text-base"
                    >
                      yashwantk.dev@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone card */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 transition-all hover:border-primary/50 shadow-xs">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Phone
                    </span>
                    <a
                      href="tel:+919980915480"
                      className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base"
                    >
                      +91 9980915480
                    </a>
                  </div>
                </div>

                {/* Location card */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 transition-all hover:border-primary/50 shadow-xs">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Location
                    </span>
                    <p className="text-foreground font-medium text-sm leading-relaxed">
                      Esteem Park, Rose Garden Layout, JP Nagar 5th Phase, Bangalore - 560078
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-2 text-left">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Connect With Me
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Devwithyashwant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border/50 text-foreground/80 hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300 shadow-xs"
                  aria-label="GitHub Profile"
                  title="Follow on GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yashwant-k-511313219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border/50 text-foreground/80 hover:text-blue-500 hover:border-blue-500/50 hover:scale-110 transition-all duration-300 shadow-xs"
                  aria-label="LinkedIn Profile"
                  title="Connect on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/teawithyash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border/50 text-foreground/80 hover:text-pink-500 hover:border-pink-500/50 hover:scale-110 transition-all duration-300 shadow-xs"
                  aria-label="Instagram Profile"
                  title="Follow on Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send Message Form */}
          <div className="bg-card p-6 md:p-8 rounded-xl border border-border/50 shadow-xs flex flex-col justify-between">
            <h3 className="text-2xl font-semibold mb-6 text-left">Send a Message</h3>

            <form className="space-y-5 text-left flex-1 flex flex-col justify-between" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1.5"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary text-sm"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1.5"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary resize-none text-sm"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 py-3 mt-2 text-sm font-medium"
                )}
              >
                {isSubmitting ? "Opening Mail..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
