'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t.contact?.name || "Your Name"}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkbg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                    placeholder={t.contact?.name || "John Doe"}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t.contact?.email || "Email Address"}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkbg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                    placeholder={t.contact?.email || "john@example.com"}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t.contact?.message || "Message"}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkbg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                                    placeholder={t.contact?.message || "Your message here..."}
                                ></textarea>
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-3 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg"
                                >
                                    <CheckCircle size={20} />
                                    <span>{t.contact?.success || "Message sent successfully!"}</span>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg"
                                >
                                    <AlertCircle size={20} />
                                    <span>{t.contact?.error || "An error occurred. Please try again later."}</span>
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition font-medium flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        {t.contact?.sending || "Sending..."}
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        {t.contact?.send || "Send Message"}
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
                                    <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                                    <p className="text-gray-600 dark:text-gray-300">buithach.it@gmail.com</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-darkbg rounded-2xl shadow-xl p-6 flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                                    <p className="text-gray-600 dark:text-gray-300">+84 7767 11 376</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-darkbg rounded-2xl shadow-xl p-6 flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Ho Chi Minh City, Vietnam</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-darkbg rounded-2xl shadow-xl p-6 flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <Github className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">GitHub</h3>
                                    <p className="text-gray-600 dark:text-gray-300">@buithachIT</p>
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
    )
}
export default Contact;