import { motion } from 'framer-motion'
import { TrendingUp, Users, ShoppingCart, Globe, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const caseStudies = [
  {
    company: 'TechStart Solutions',
    industry: 'SaaS Technology',
    challenge: 'Low organic visibility and limited lead generation',
    solution: 'Comprehensive SEO strategy with content marketing and technical optimization',
    results: [
      { metric: 'Organic Traffic', increase: '+250%', period: '6 months' },
      { metric: 'Qualified Leads', increase: '+180%', period: '6 months' },
      { metric: 'Keyword Rankings', increase: '+300%', period: 'Top 3 positions' }
    ],
    services: ['SEO', 'Content Strategy', 'Technical SEO'],
    testimonial: 'Market Reach Digital transformed our online presence completely. The results speak for themselves.',
    clientName: 'Sarah Johnson, CEO',
    icon: TrendingUp,
    bgColor: 'from-blue-500/20 to-purple-500/20'
  },
  {
    company: 'Urban Fashion Co.',
    industry: 'E-commerce Retail',
    challenge: 'Poor Google Ads performance and low ROAS',
    solution: 'Complete Google Ads restructure with shopping campaigns and remarketing',
    results: [
      { metric: 'ROAS', increase: '+400%', period: '3 months' },
      { metric: 'Sales Revenue', increase: '+220%', period: '3 months' },
      { metric: 'Cost per Acquisition', increase: '-45%', period: 'reduction' }
    ],
    services: ['Google Ads', 'Shopping Campaigns', 'Conversion Optimization'],
    testimonial: 'Our e-commerce business doubled in revenue thanks to their Google Ads expertise.',
    clientName: 'Michael Chen, Founder',
    icon: ShoppingCart,
    bgColor: 'from-pink-500/20 to-red-500/20'
  },
  {
    company: 'Local Business Hub',
    industry: 'Professional Services',
    challenge: 'Limited social media presence and brand awareness',
    solution: 'Complete social media strategy with content creation and community management',
    results: [
      { metric: 'Social Engagement', increase: '+300%', period: '4 months' },
      { metric: 'Follower Growth', increase: '+250%', period: '4 months' },
      { metric: 'Lead Generation', increase: '+160%', period: 'from social' }
    ],
    services: ['Social Media Marketing', 'Content Creation', 'Brand Strategy'],
    testimonial: 'Their social media strategy helped us connect with our audience like never before.',
    clientName: 'Emily Rodriguez, Owner',
    icon: Users,
    bgColor: 'from-green-500/20 to-teal-500/20'
  },
  {
    company: 'Global Consulting Inc.',
    industry: 'Business Consulting',
    challenge: 'Outdated website with poor user experience and conversion rates',
    solution: 'Complete website redesign with mobile-first approach and conversion optimization',
    results: [
      { metric: 'Conversion Rate', increase: '+180%', period: '2 months' },
      { metric: 'Page Load Speed', increase: '+75%', period: 'improvement' },
      { metric: 'Mobile Traffic', increase: '+200%', period: '3 months' }
    ],
    services: ['Website Development', 'UX/UI Design', 'Conversion Optimization'],
    testimonial: 'The new website exceeded our expectations and significantly improved our conversion rates.',
    clientName: 'David Kim, Director',
    icon: Globe,
    bgColor: 'from-purple-500/20 to-indigo-500/20'
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
                <span className="gradient-text">Success Stories</span>
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
                        <p className="text-muted-foreground">{study.solution}</p>
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
                            <p className="text-sm text-muted-foreground mt-1">{result.period}</p>
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
