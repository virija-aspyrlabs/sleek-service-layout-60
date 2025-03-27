import { useState } from "react";
import { AnimatedCard } from "../../src/components/ui/AnimatedCard";
import { Button } from "../../src/components/ui/button";
import { GlassCard } from '../../src/components/ui/GlassCard';
import { toast } from "sonner";

// import React, { useRef, useState, useEffect } from 'react';


const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });


  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl mx-auto">
        <div className="absolute top-0 right-0 w-72 h-72 bg-saas-100/40 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -z-10 animate-pulse-slow animation-delay-500" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedCard>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
              Get In Touch
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Discuss Your Project
            </h2>
          </AnimatedCard>

          <AnimatedCard delay={400}>
            <p className="text-xl text-gray-600">
            Have a technology challenge? Reach out to us and discover how our expertise can help transform your business.
            </p>
          </AnimatedCard>
        </div>

        <div className="max-w-5xl mx-auto">
          <GlassCard className="overflow-hidden ">
            <div className="grid grid-cols-1  md:grid-cols-2">
              <div className="bg-gradient-to-br  from-blue-600 to-blue-800 p-8 md:p-12 text-white">
                <AnimatedCard direction="left">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                </AnimatedCard>

                <AnimatedCard direction="left" delay={200}>
                  <p className="mb-8 opacity-90">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </AnimatedCard>

                <div className="space-y-6">
                  <AnimatedCard direction="left" delay={300}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Phone</p>
                        <p className="opacity-80">848-459-4333</p>
                      </div>
                    </div>
                  </AnimatedCard>

                  <AnimatedCard direction="left" delay={400}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Email</p>
                        <p className="opacity-80">aspyrlabs.com</p>
                      </div>
                    </div>
                  </AnimatedCard>

                  <AnimatedCard direction="left" delay={500}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Location</p>
                        <p className="opacity-80">One West - A Terminus Project</p>
                        <p className="opacity-80">Narsingi Nanakramguda Service Rd,</p>
                        <p className="opacity-80">Financial District, Nanakramguda</p>
                        <p className="opacity-80">Makthakousarali, Telangana</p>
                        <p className="opacity-80">500008</p>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>

                <AnimatedCard direction="left" delay={600}>
                  <div className="mt-8">
                    <p className="font-medium mb-4">Connect with us</p>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </AnimatedCard>
              </div>

              <div className="p-8 md:p-12">
                <AnimatedCard direction="right">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saas-500 focus:border-transparent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saas-500 focus:border-transparent transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saas-500 focus:border-transparent transition-colors"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saas-500 focus:border-transparent transition-colors"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </AnimatedCard>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export default Contact;