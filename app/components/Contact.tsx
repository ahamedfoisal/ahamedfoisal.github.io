"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically integrate with a form handling service like FormSpree or a backend API
    try {
      // Simulating form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });
    } catch {
      setSubmitStatus({
        success: false,
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background/50">
      <div className="section-container">
        <h2 className="section-title">
          Get In <span className="accent-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="mb-8 text-foreground/80">
              Feel free to reach out to me for collaboration opportunities, research inquiries, 
              or just to say hello. I&apos;ll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-accent text-xl" />
                <a
                  href="mailto:your.email@nyu.edu"
                  className="hover:text-accent transition-colors"
                >
                  your.email@nyu.edu
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-accent text-xl" />
                <a
                  href="https://github.com/YOUR_GITHUB_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  github.com/YOUR_GITHUB_USERNAME
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-accent text-xl" />
                <a
                  href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  linkedin.com/in/YOUR_LINKEDIN_USERNAME
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-foreground/20 bg-background/50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-foreground/20 bg-background/50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-foreground/20 bg-background/50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none resize-none transition-colors"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full hover-scale flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus.message && (
                <p
                  className={`text-sm mt-2 ${
                    submitStatus.success ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 