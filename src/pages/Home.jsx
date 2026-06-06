import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TruckIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">Premium Rims & Tyres</h1>
            <p className="text-xl mb-8">Upgrade your ride with the best quality wheels and tires</p>
            <Link to="/products" className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: TruckIcon, title: 'Free Shipping', desc: 'On orders over $500' },
              { icon: ShieldCheckIcon, title: '2 Year Warranty', desc: 'On all products' },
              { icon: ClockIcon, title: 'Fast Delivery', desc: 'Within 3-5 days' },
              { icon: CurrencyDollarIcon, title: 'Best Prices', desc: 'Price match guarantee' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <feature.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}