import { motion } from 'framer-motion'
import { TrendingUp, Coffee, Wrench, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

type Result = {
  metric: string;
  increase: string;
  period?: string; // ✅ Add this
};

const caseStudies = [
  {
    company: 'IGA Canterbury',
    industry: 'Grocery + Liquor Store',
    challenge: 'Low local visibility and declining foot traffic due to major supermarket competition',
    solution: `<b>Local SEO Optimization</b>: Claimed and optimized Google My Business with fresh product photos, weekly specials, and customer reviews. Targeted "grocery store Canterbury" and "liquor store near me" keywords.<br/><br/><b>Social Media Presence</b>: Created engaging Facebook and Instagram content featuring weekly specials, local produce, and community events to build neighborhood connection.<br/><br/><b>Strategic Google Ads</b>: Launched targeted campaigns for "grocery delivery Canterbury" and "bottle shop" searches, focusing on convenience and local service advantages.`,
    results: [
      { metric: 'Local Rankings', increase: '#1 Position', period: '2 months' },
      { metric: 'Store Visits', increase: '+180%', period: '3 months' },
      { metric: 'Online Orders', increase: '+220% Delivery & pickup', period: '2 & half months' }
    ],
    services: ['Local SEO', ' Social Media Marketing', 'Technical SEO', 'Meta Ads'],
    testimonial: 'Market Reach Digital helped us compete with the big supermarkets. Our local community now finds us first, and our delivery service is booming.',
    clientName: 'Bhavesh Patel, Business Owner',
    icon: TrendingUp,
    bgColor: 'from-blue-500/20 to-purple-500/20'
  },
  {
    company: 'Clean With Care',
    industry: 'Cleaning Services',
    challenge: 'Struggled with low online visibility and inconsistent bookings in a highly competitive local cleaning market.',
    solution: `<b>Local SEO & Google Reviews</b>: Optimized Google Business Profile with consistent citations, geo-tagged before/after photos, and automated 5-star review follow-ups.
  <b>Targeted Google & Meta Ads</b>: Ran conversion-focused campaigns targeting "house cleaners near me" and "NDIS cleaning Melbourne" with lead capture forms.
  <b>Booking-First Website</b>: Designed a responsive, mobile-friendly website with real-time booking, service filters, and client portal for recurring appointments.`,
    results: [
      { metric: 'New Customer Leads', increase: '+44%', period: '' },
      { metric: 'Booking Rate Increase', increase: '+42%', period: '' }
    ],
    services: ['SEO', 'Google & Meta Ads', 'Website Development'],
    testimonial: 'We’ve never had this many clients book online. The new site and ads made a real difference — even regular clients love the new experience.',
    clientName: 'Krunal Pandya, Owner',
    icon: Sparkles,
    bgColor: 'from-purple-500/20 to-indigo-500/20'
  },
  {
    company: 'Elitee Plumbing Solutions',
    industry: 'Plumbing Services',
    challenge: "Elitee Plumbing was struggling to compete with larger plumbing companies and relied heavily on word-of-mouth referrals. They needed more emergency call-outs and residential contracts across Melbourne's eastern suburbs.",
    solution: `<b>Emergency Service SEO</b>: Optimized for high-intent keywords like "emergency plumber Melbourne" with location-specific landing pages for eastern suburbs coverage.
    <b>24/7 PPC Campaigns</b>: Implemented always-on Google Ads targeting urgent plumbing keywords with mobile-optimized ads and instant call extensions.
    <b>Mobile-First Website</b>: Built fast-loading site with one-click calling, instant quote forms, and service area mapping for immediate bookings.`,
    results: [
      { metric: 'Emergency Bookings', increase: '+80%', period: '1 months' },
      { metric: 'Revenue Generated', increase: '+$55,000', period: '3 months' },
      { metric: 'Cost per Click', increase: '-15%', period: 'reduction' }
    ],
    services: ['Google Ads', 'Shopping Campaigns', 'Conversion Optimization'],
    testimonial: 'Market Reach Digital transformed our business. We went from relying on referrals to being the go-to emergency plumber in our area.',
    clientName: 'Firoz, Manager',
    icon: Wrench,
    bgColor: 'from-pink-500/20 to-red-500/20'
  },
  {
    company: 'Bella Vista Café',
    industry: 'Hospitality',
    challenge: 'Losing customers to trendy new cafés and needed to attract younger demographics while maintaining loyal customer base',
    solution: `<b>Visual Social Strategy</b>: Created Instagram- focused content with professional food photography, behind - the - scenes stories, and signature dish showcases.
    <b>Targeted Facebook Ads</b>: Launched location - based campaigns targeting South Yarra residents and nearby office workers with special offers and events.
    <b>Online Ordering System</b>: Developed mobile - optimized website with seamless pickup / delivery integration and loyalty program features.`,
    results: [
      { metric: 'Instagram Followers', increase: '+120%', period: '' },
      { metric: 'Monthly Revenue', increase: '+$25,500', period: '' },
      { metric: 'Weekday Customers & Deliveries', increase: '+20%', period: '' }
    ],
    services: ['Social Media Marketing', 'Facebook Ads', 'Brand Strategy'],
    testimonial: 'Our café is buzzing again! The social media strategy brought in so many new faces, and our regulars love the online ordering system.',
    clientName: 'Maria Rodriguez, Owner',
    icon: Coffee,
    bgColor: 'from-green-500/20 to-teal-500/20'
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Success Stories | Digital Marketing Case Studies – MarketReach Digital</title>
        <meta name="description" content="Discover how our digital marketing solutions have helped businesses achieve remarkable growth through effective SEO, PPC, and social media campaigns." />
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
                <span className="gradient-text">Melbourne Business Success Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Real results from real clients. See how we've helped businesses achieve extraordinary growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding">
          <div className="container-custom space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${study.bgColor} p-1`}
              >
                <div className="bg-background rounded-xl p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Company Info & Challenge */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 rounded-lg flex items-center justify-center">
                          <study.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{study.company}</h3>
                          <p className="text-muted-foreground">{study.industry}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        {/* <p className="text-muted-foreground">{study.solution}</p> */}
                        {/* {study.solution.split(/<br\s*\/?>|\n/).map((line, idx) => (
                          <p  className="text-muted-foreground" key={idx}>{line.trim()}</p>
                        ))} */}

                        {study.solution.split(/<br\s*\/?>|\n/).map((line, idx) => {
                          const match = line.match(/<b>(.*?)<\/b>:(.*)/i);

                          if (match) {
                            return (
                              <p className="text-muted-foreground" key={idx}>
                                <strong>{match[1]}</strong>:{match[2]}
                              </p>
                            );
                          }

                          return <p className="text-muted-foreground" key={idx}>{line.trim()}</p>;
                        })}
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Services Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-brand-purple-100 text-brand-purple-600 rounded-full text-sm font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Results */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-foreground">Results Achieved</h4>

                      <div className="grid grid-cols-1 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <motion.div
                            key={result.metric}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: resultIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="p-4 bg-muted/30 rounded-lg border border-border"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">{result.metric}</span>
                              <span className="text-2xl font-bold gradient-text">{result.increase}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{result?.period || ''}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="p-6 bg-muted/30 rounded-lg border border-border">
                        <p className="text-muted-foreground italic mb-3">"{study.testimonial}"</p>
                        <p className="font-semibold text-foreground">{study.clientName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
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
                Proven <span className="gradient-text">Track Record</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our results speak for themselves across all industries and business sizes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '150+', label: 'Successful Projects' },
                { number: '300%', label: 'Average ROI Increase' },
                { number: '95%', label: 'Client Retention Rate' },
                { number: '24/7', label: 'Support & Monitoring' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-brand-pink-500 via-brand-purple-500 to-brand-blue-500 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how we can achieve similar results for your business and drive sustainable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
                >
                  <Link to="/contact">
                    Start Your Success Story <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-purple-600 text-lg px-8 py-6"
                >
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
