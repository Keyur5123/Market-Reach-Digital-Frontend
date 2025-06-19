import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Search, TrendingUp, Users } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const blogPosts = [
  {
    id: 1,
    title: '10 SEO Strategies That Actually Work in 2024',
    excerpt: 'Discover the latest SEO techniques that are driving real results for businesses in 2024. From E-A-T to Core Web Vitals, we cover everything you need to know.',
    author: 'Sarah Mitchell',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'SEO',
    featured: true,
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop',
    tags: ['SEO', 'Digital Marketing', 'Strategy']
  },
  {
    id: 2,
    title: 'The Complete Guide to Google Ads for E-commerce',
    excerpt: 'Learn how to create profitable Google Ads campaigns for your e-commerce business. Includes shopping campaigns, remarketing, and conversion optimization tips.',
    author: 'Michael Chen',
    date: '2024-01-12',
    readTime: '12 min read',
    category: 'Google Ads',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    tags: ['Google Ads', 'E-commerce', 'PPC']
  },
  {
    id: 3,
    title: 'Social Media Trends to Watch in 2024',
    excerpt: 'Stay ahead of the curve with these emerging social media trends that will shape your marketing strategy this year.',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Social Media',
    featured: false,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
    tags: ['Social Media', 'Trends', 'Marketing']
  },
  {
    id: 4,
    title: 'Website Speed Optimization: A Complete Guide',
    excerpt: 'Page speed is crucial for both user experience and SEO. Learn how to optimize your website for lightning-fast performance.',
    author: 'David Kim',
    date: '2024-01-08',
    readTime: '10 min read',
    category: 'Web Development',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    tags: ['Web Development', 'Performance', 'SEO']
  },
  {
    id: 5,
    title: 'Content Marketing ROI: How to Measure Success',
    excerpt: 'Discover the key metrics and KPIs to track your content marketing ROI and prove the value of your efforts.',
    author: 'Lisa Thompson',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Content Marketing',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f54?w=800&h=400&fit=crop',
    tags: ['Content Marketing', 'Analytics', 'ROI']
  },
  {
    id: 6,
    title: 'Local SEO: Dominating Your Local Market',
    excerpt: 'Master local SEO to attract more customers in your area. Complete guide to Google My Business, local citations, and more.',
    author: 'Mark Johnson',
    date: '2024-01-03',
    readTime: '9 min read',
    category: 'Local SEO',
    featured: false,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop',
    tags: ['Local SEO', 'Google My Business', 'Local Marketing']
  }
]

const categories = ['All', 'SEO', 'Google Ads', 'Social Media', 'Web Development', 'Content Marketing', 'Local SEO']

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Insights & Strategies | Digital Marketing Blog – MarketReach Digital</title>
        <meta name="description" content="Stay updated with the latest trends in digital marketing, SEO techniques, and content marketing strategies to keep your business ahead of the curve." />
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
                Marketing <span className="gradient-text">Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert tips, strategies, and insights to help you grow your business and stay ahead of the competition.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-brand-purple-500 focus:border-transparent"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  className={`${category === 'All'
                      ? 'bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 text-white hover:opacity-90'
                      : 'border-brand-purple-500 text-brand-purple-500 hover:bg-brand-purple-500 hover:text-white'
                    }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section-padding">
          <div className="container-custom">
            {blogPosts.filter(post => post.featured).map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="bg-brand-purple-100 text-brand-purple-600 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground">{post.title}</h2>
                  <p className="text-muted-foreground text-lg">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 text-white hover:opacity-90"
                    >
                      <Link to={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
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
                Latest <span className="gradient-text">Articles</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest digital marketing trends and strategies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-purple-100 text-brand-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">By {post.author}</span>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-brand-purple-500 hover:text-brand-purple-600"
                      >
                        <Link to={`/blog/${post.id}`}>
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
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
                Stay Updated
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get the latest marketing insights and strategies delivered straight to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-purple-500"
                />
                <Button
                  size="lg"
                  className="bg-white text-brand-purple-600 hover:bg-gray-100 px-8"
                >
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
