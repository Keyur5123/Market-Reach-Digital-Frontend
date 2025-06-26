import { motion } from 'framer-motion'
import { ArrowRight, Check, Star, TrendingUp, Users, Zap } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const services = [
  {
    icon: TrendingUp,
    title: 'Search Engine Optimisation (SEO)',
    description: 'Boost your organic visibility and drive qualified traffic with our comprehensive SEO strategies.',
    features: ['Strategic Keyword Research & Analysis', 'On-Page SEO Optimization', 'Authority Building & Link Building', 'Technical SEO & Site Performance', 'Local SEO & Business Listings', 'SEO Analytics & Growth Tracking']
  },
  {
    icon: Users,
    title: 'Social Media Brand Building & Engagement',
    description: 'Build a strong brand presence and engage with your audience across multiple social media platforms.',
    features: ['Brand-Focused Content Strategy', 'Platform-Specific Brand Optimization', 'Video Marketing & Storytelling', 'Community Management & Brand Advocacy', 'Performance Analytics & Brand Insights']
  },
  {
    icon: Zap,
    title: 'PPC & Meta Ads Campaigns',
    description: 'Drive targeted traffic and conversions with expertly managed campaigns across Google Ads, Meta platforms, and YouTube to accelerate your business growth.',
    features: ['Google Ads Management', 'Meta Advertising Excellence', 'Strategic Campaign Funnels', 'Advanced Audience Targeting', 'ROI Optimization & Reporting']
  },
  {
    icon: TrendingUp,
    title: 'Website Development',
    description: 'Create fast, responsive, and conversion-optimized websites that drive business growth.',
    features: ['Custom Design', 'Mobile-First', 'Fast Loading', 'SEO-Optimized']
  },
  {
    icon: Users,
    title: 'Content Strategy',
    description: 'Develop compelling content that resonates with your audience and drives engagement.',
    features: ['Content Planning', 'Blog Writing', 'Video Scripts', 'Email Campaigns']
  }
]

const stats = [
  { number: '150k+', label: 'Revenue Generated for Clients' },
  { number: '165%', label: 'Average ROI Increase' },
  { number: '98%', label: 'Campaign Success Rate' },
  { number: '24/7', label: 'Support Available' }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    role: 'CEO',
    content: 'Market Reach Digital transformed our online presence. Our organic traffic increased by 200% in just 6 months.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'E-commerce Solutions',
    role: 'Marketing Director',
    content: 'Their Google Ads expertise helped us achieve a 400% ROAS. Incredible results and professional service.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    company: 'Local Business Co.',
    role: 'Owner',
    content: 'The team understands our industry and delivers results. Our social media engagement tripled in 3 months.',
    rating: 5
  }
]

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in Melbourne | SEO, Google Ads & Social Media - MarketReach Digital</title>
        <meta name="description" content="Get more leads with MarketReach Digital – Australia’s strategic digital marketing agency. Experts in SEO, Google Ads, social media, and web design." />
      </Helmet>
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center hero-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

          <div className="container-custom section-padding relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                  We help businesses{' '}
                  <span className="gradient-text">grow</span>
                </h1> */}
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight  font-bold text-foreground  ">
                  Scale smarter with <span className="gradient-text">AI-powered marketing strategies</span>
                </h1>

                <p className="text-xl md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Unlock unstoppable growth with conversion-optimized campaigns designed to deliver real ROI and lasting brand impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 text-white hover:opacity-90 text-lg px-8 py-6"
                  >
                    <Link to="/contact">
                      Start My Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-brand-purple-500 text-brand-purple-500 hover:bg-brand-purple-500 hover:text-white text-lg px-8 py-6"
                  >
                    <Link to="/case-studies">View Case Studies</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-brand-pink-500/20 rounded-full blur-xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-40 right-20 w-16 h-16 bg-brand-blue-500/20 rounded-full blur-xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital marketing solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-brand-purple-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
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
                Why Choose <span className="gradient-text">Market Reach Digital</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We combine strategy, creativity, and data to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Proven Results',
                  description: 'Track record of delivering measurable ROI for over 150+ clients across various industries.',
                  icon: TrendingUp
                },
                {
                  title: 'Expert Team',
                  description: 'Certified professionals with years of experience in digital marketing and growth strategies.',
                  icon: Users
                },
                {
                  title: 'Data-Driven',
                  description: 'Every strategy is backed by comprehensive analysis and real-time performance tracking.',
                  icon: Zap
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
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

        {/* Testimonials Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card border border-border rounded-xl"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={`star-${testimonial.name}-${i}`} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>

                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-brand-pink-500 via-brand-purple-500 to-brand-blue-500">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your marketing goals and drive sustainable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
                >
                  <Link to="/contact">
                    Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-purple-600 text-lg px-8 py-6"
                >
                  <Link to="/case-studies">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
