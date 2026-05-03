"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "At least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "At least 10 characters"),
});

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-[#e0e7ef] dark:from-darkbg dark:to-[#22223b] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-primary">Connect</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-darkbg rounded-2xl shadow-xl p-8"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t.contact?.name || "Your Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-darkbg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder={t.contact?.name || "John Doe"}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t.contact?.email || "Email Address"}
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-darkbg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t.contact?.message || "Message"}
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-darkbg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder={t.contact?.message || "Your message here..."}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-4 py-3 rounded-lg">
                  <CheckCircle size={18} />
                  <span className="text-sm">
                    {t.contact?.success || "Message sent successfully!"}
                  </span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-lg">
                  <AlertCircle size={18} />
                  <span className="text-sm">
                    {t.contact?.error || "An error occurred. Please try again."}
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition font-medium flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />{" "}
                    {t.contact?.sending || "Sending..."}
                  </>
                ) : (
                  <>
                    <Send size={20} /> {t.contact?.send || "Send Message"}
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-darkbg rounded-2xl shadow-xl p-6 flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    buithach.it@gmail.com
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-darkbg rounded-2xl shadow-xl p-6 flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +84 7767 11 376
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-darkbg rounded-2xl shadow-xl p-6 flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ho Chi Minh City, Vietnam
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-darkbg rounded-2xl shadow-xl p-6 flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    GitHub
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    @buithachIT
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-darkbg rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Connect on Social Media
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/buithachIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-primary/10 transition"
                >
                  <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/b%C3%B9i-c%C3%B4ng-th%E1%BA%A1ch-938497347/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-primary/10 transition"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-darkbg rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Working Hours
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                24/7/365
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
