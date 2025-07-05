"use client";
import { useState, FormEvent } from "react";
import { Contact } from "../types";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const FORMSPREE_FORM_ID = "mvgrnqor"; 

  const contacts: Contact[] = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ayuba/",
      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      name: "GitHub",
      href: "https://github.com/ayubamini",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
  ];

  const sanitizeInput = (input: string): string => {
    return input.replace(/[<>]/g, "").slice(0, 1000); // Limit length
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.length > 50) {
      newErrors.name = "Name must be less than 50 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    } else if (formData.subject.length > 100) {
      newErrors.subject = "Subject must be less than 100 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 500) {
      newErrors.message = "Message must be less than 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `Portfolio Contact: ${formData.subject}`,
            _replyto: formData.email,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        if (data.errors) {
          console.error("Formspree errors:", data.errors);
        }
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-dark-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-vivid-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl font-body text-light-gray/60">
            Ready to turn your ideas into reality?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact form */}
          <div className="bg-light-gray/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-light-gray/10">
            <h3 className="text-2xl font-heading font-semibold mb-6">
              Send me a message
            </h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-light-gray/[0.03] backdrop-blur-sm border border-vivid-purple/20 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-vivid-purple/5 to-royal-blue/5"></div>
                <div className="relative flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-vivid-purple"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="font-body text-light-gray/90">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-light-gray/[0.03] backdrop-blur-sm border border-red-500/20 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/5"></div>
                <div className="relative flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="font-body text-light-gray/90">
                    Sorry, something went wrong. Please try again later.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-body text-light-gray/70 mb-2"
                  >
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-light-gray/[0.05] border rounded-lg focus:outline-none transition-colors ${
                      errors.name
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-light-gray/10 focus:border-vivid-purple/50"
                    }`}
                    placeholder="John Smith"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-body text-light-gray/70 mb-2"
                  >
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-light-gray/[0.05] border rounded-lg focus:outline-none transition-colors ${
                      errors.email
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-light-gray/10 focus:border-vivid-purple/50"
                    }`}
                    placeholder="john@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-body text-light-gray/70 mb-2"
                >
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-light-gray/[0.05] border rounded-lg focus:outline-none transition-colors ${
                    errors.subject
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-light-gray/10 focus:border-vivid-purple/50"
                  }`}
                  placeholder="Project Inquiry"
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-body text-light-gray/70 mb-2"
                >
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-light-gray/[0.05] border rounded-lg focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-light-gray/10 focus:border-vivid-purple/50"
                  }`}
                  placeholder="Tell me about your project..."
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
                <p className="mt-1 text-xs text-light-gray/50">
                  {formData.message.length}/500 characters
                </p>
              </div>

              <input
                type="text"
                name="_gotcha"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 text-white font-heading font-semibold rounded-lg transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-vivid-purple to-royal-blue hover:shadow-lg hover:shadow-vivid-purple/25 transform hover:scale-[1.02]"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            <p className="mt-4 text-xs text-light-gray/40 text-center">
              Secured by Formspree. Your email address is kept private.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Get in touch
              </h3>
              <p className="font-body text-light-gray/70 mb-8">
                I'm always excited to work on new projects and collaborate with
                innovative teams. Whether you have a specific project in mind or
                just want to explore possibilities, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-vivid-purple/20 to-royal-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-vivid-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Location</h4>
                  <p className="font-body text-light-gray/70">
                    Toronto, ON
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-vivid-purple/20 to-royal-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-vivid-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Available</h4>
                  <p className="font-body text-light-gray/70">
                    Mon - Fri, 9:00 AM - 6:00 PM PST
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-light-gray/10">
              <h4 className="font-heading font-semibold mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="w-12 h-12 bg-light-gray/[0.05] hover:bg-vivid-purple/10 border border-light-gray/10 hover:border-vivid-purple/30 rounded-lg flex items-center justify-center transition-all duration-200 group"
                    aria-label={contact.name}
                  >
                    {contact.name === "Email" ? (
                      <svg
                        className="w-5 h-5 group-hover:text-vivid-purple transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={contact.icon}
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 group-hover:text-vivid-purple transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={contact.icon} />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;