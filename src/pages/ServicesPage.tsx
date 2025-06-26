import { motion } from 'framer-motion'
import { Check, TrendingUp, Users, Zap, Search, Globe, BarChart, PenTool } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    description: 'We help your business dominate local search results and attract customers actively looking for your services. Our comprehensive SEO strategies combine technical optimization, strategic keyword targeting, and authority building to increase your online visibility and drive qualified traffic that converts into sales.',
    features: [
      'Keyword Research & Analysis',
      'On-Page SEO Optimization',
      'Technical SEO Audits',
      'Link Building Campaigns',
      'Local SEO',
      'Content Optimization',
      'Performance Tracking'
    ],
    // pricing: 'Starting at $1,500/month'
  },
  {
    icon: Users,
    title: 'Social Media Marketing',
    description: 'We amplify your brand presence across Instagram, Facebook, TikTok, and LinkedIn to build authentic connections with your ideal customers. Our data-driven social media strategies create engaging content that sparks conversations, builds brand loyalty, and turns followers into paying customers for your Melbourne business.',
    features: [
      'Social Media Strategy',
      'Content Creation & Design',
      'Paid Social Advertising',
      'Influencer Partnerships',
      'Analytics & Reporting',
      'Brand Monitoring'
    ],
    // pricing: 'Starting at $1,200/month'
  },
  {
    icon: Zap,
    title: 'PPC & Meta Ads Campaigns',
    description: 'We drive qualified leads and sales to your business through strategic pay-per-click campaigns on Google and targeted Meta advertising across Facebook and Instagram. Our PPC specialists maximize your ad spend efficiency while our Meta ads experts create compelling campaigns that reach your ideal customers where they spend their time, helping Melbourne businesses generate immediate results and sustainable growth.',
    features: [
      'Google Search Campaigns',
      'Facebook & Instagram Ads',
      'Meta Shopping Campaigns',
      'Retargeting & Remarketing',
      'Conversion Tracking & Analytics',
      'Landing Page Optimization',
    ],
    // pricing: 'Starting at $1,000/month + ad spend'
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'We create high-performance, AI-driven websites that convert visitors into customers. Our Melbourne-based team builds fast-loading, mobile-optimized sites using cutting-edge technology that search engines love, ensuring your business ranks higher and attracts more qualified leads.',
    features: [
      'Custom Website Design',
      'Mobile-First Development',
      'E-commerce Solutions',
      'CMS Integration',
      'SEO-Optimized Structure',
      'Performance Optimization',
      'Ongoing Maintenance'
    ],
    // pricing: 'Starting at $5,000'
  },
  {
    icon: PenTool,
    title: 'Content Strategy',
    description: 'We develop strategic content that speaks directly to your target audience and drives meaningful engagement. Our content experts craft compelling blog posts, video scripts, and email campaigns that build trust with your customers and guide them through every stage of their buying journey.',
    features: [
      'Content Planning & Strategy',
      'Blog Writing & SEO',
      'Video Script Writing',
      'Email Marketing Campaigns',
      'Social Media Content',
      'Copywriting Services',
      'Content Distribution'
    ],
    // pricing: 'Starting at $800/month'
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: 'We provide comprehensive data insights that transform your marketing performance into actionable business intelligence. Our Melbourne-based analytics experts set up advanced tracking systems, create custom dashboards, and deliver detailed reports that show exactly how your digital marketing investments are driving revenue growth and customer acquisition for your business.',
    features: [
      'Monthly Performance Reports',
      'ROI & Revenue Attribution',
      'Data-Driven Recommendations',
      'Real-Time Performance Monitoring',
      'Marketing Attribution Modeling'
    ],
    // pricing: 'Starting at $500/month'
  }
]

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>SEO, PPC, Meta ads, Social Media Marketing Agency in Melbourne – MarketReach Digital</title>
        <meta name="description" content="Explore our digital marketing services including SEO, Google Ads management, and social media strategies tailored for growth." />
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
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive digital marketing solutions designed to grow your business and maximize ROI
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-brand-purple-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="w-full"> */}
                  {/* <div className="text-lg font-semibold gradient-text">
                      {service.pricing}
                    </div> */}
                  {/* <Button
                      asChild
                      className="bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 text-white hover:opacity-90"
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  // </div> */}

                  <div className="w-full">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 text-white hover:opacity-90"
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that delivers consistent results for our clients
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'We analyze your business, competitors, and target audience to understand your unique needs.'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'We develop a customized marketing strategy aligned with your business goals and budget.'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Our expert team executes the strategy with precision and attention to detail.'
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description: 'We continuously monitor, analyze, and optimize performance for maximum ROI.'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
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
                Ready to Dominate Melbourne's Market?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's create a custom digital marketing strategy that drives real results for your Melbourne business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
                >
                  <Link to="/contact">Schedule Free Strategy Call</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-purple-600 text-lg px-8 py-6"
                >
                  <Link to="/case-studies">Explore Case Studies</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
