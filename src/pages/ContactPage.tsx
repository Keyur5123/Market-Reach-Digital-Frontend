import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { useState } from 'react'
import { Helmet } from 'react-helmet';
import { log } from 'console';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()

      const res = await fetch(import.meta.env.VITE_API_PROD_SERVER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) {
        throw new Error('Failed to submit data');
      }

      const result = await res.json();
      console.log("Response :", result);
    } catch (err) {
      console.log("error :", err);
    }

    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | MarketReach Digital – Your Marketing Partner</title>
        <meta name="description" content="Get in touch with MarketReach Digital to discuss how our digital marketing services can help your business thrive in the online landscape." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let's <span className="gradient-text">Get Started</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to grow your business? Get in touch with our experts for a free consultation and discover how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    We're here to help you succeed. Reach out to us through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: 'Email',
                      content: 'hello@marketreachdigital.com',
                      subContent: 'Get instant Response'
                    },
                    {
                      icon: Phone,
                      title: 'Phone',
                      content: '+61 424 211 212',
                      subContent: 'Mon-Sat 9AM-6PM AEST'
                    },
                    {
                      icon: MapPin,
                      title: 'Office',
                      content: '1/47, Jaguar Drive, Clayton',
                      subContent: 'Melbourne, VIC, 3168'
                    },
                    {
                      icon: Clock,
                      title: 'Business Hours',
                      content: 'Monday - Saturday: 9:00 AM - 6:00 PM AEST',
                      subContent: 'Sunday: Closed'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.content}</p>
                        <p className="text-sm text-muted-foreground">{item.subContent}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Why Choose Us */}
                <div className="p-6 bg-muted/30 rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Why Choose Market Reach Digital?</h3>
                  <ul className="space-y-2">
                    {[
                      'Free initial consultation and strategy session',
                      'Proven track record with 150+ successful projects',
                      'Dedicated account manager for personalized service',
                      'Transparent reporting and regular updates',
                      '95% client retention rate'
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-brand-purple-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8"
              >
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Get Your Free Consultation
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-brand-purple-500 focus:border-transparent"
                            placeholder="Keyur Pipaliya"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-brand-purple-500 focus:border-transparent"
                            placeholder="hello@marketreachdigital.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-brand-purple-500 focus:border-transparent"
                            placeholder="Your Company"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-brand-purple-500 focus:border-transparent"
                            placeholder="+61 000 000 000"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                            Service Interested In *
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-brand-purple-500 focus:border-transparent"
                          >
                            <option value="">Select a service</option>
                            <option value="seo">SEO</option>
                            <option value="social-media">Social Media Marketing</option>
                            <option value="google-ads">Google Ads</option>
                            <option value="website-development">Website Development</option>
                            <option value="content-strategy">Content Strategy</option>
                            <option value="all-services">All Services</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                            Monthly Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-brand-purple-500 focus:border-transparent"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-1000">Under $500</option>
                            <option value="1000-2500">$500 - $1,000</option>
                            <option value="2500-5000">$1,000 - $1,500</option>
                            <option value="5000-10000">$1,500 - $2,000</option>
                            <option value="over-10000">Over $2,500</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Tell us about your project *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-brand-purple-500 focus:border-transparent resize-none"
                          placeholder="Describe your current challenges, goals, and what you're looking to achieve..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 text-white hover:opacity-90 text-lg py-6"
                      >
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your message has been sent successfully. We'll get back to you within 2 hours.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions? We have answers. Here are some common questions from our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: 'How long does it take to see results?',
                  answer: 'Results vary by service. SEO typically takes 3-6 months, while Google Ads can show results within weeks. We provide regular updates and transparent reporting throughout the process.'
                },
                {
                  question: 'Do you work with small businesses?',
                  answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprises. Our strategies are tailored to fit your specific budget and goals.'
                },
                {
                  question: 'What makes you different from other agencies?',
                  answer: 'Our data-driven approach, transparent reporting, and dedicated account management set us apart. We focus on delivering measurable ROI and building long-term partnerships.'
                },
                {
                  question: 'Do you offer month-to-month contracts?',
                  answer: 'Yes, we offer flexible contract options including month-to-month agreements. We believe in earning your trust through results, not long-term commitments.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card border border-border rounded-xl"
                >
                  <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
