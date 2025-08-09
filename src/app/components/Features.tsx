
import { Route, Clock, TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Route,
    title: 'TSP Optimization',
    description: 'Advanced algorithms solving Traveling Salesman Problems with multiple constraints and real-world scenarios.'
  },
  {
    icon: Clock,
    title: 'Time Window Constraints',
    description: 'Handle complex delivery schedules with precise time windows and customer availability requirements.'
  },
  {
    icon: TrendingUp,
    title: 'CVRP Solutions',
    description: 'Capacitated Vehicle Routing Problem solving with dynamic load balancing and vehicle capacity optimization.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, compliance certifications, and audit trails.'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Lightning-fast optimization with real-time traffic data integration and dynamic route adjustments.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive reporting and analytics with KPI tracking, performance metrics, and ROI analysis.'
  }
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Features for
            <span className="text-gradient"> Modern Logistics</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Our cutting-edge platform combines advanced algorithms with enterprise-grade infrastructure 
            to deliver unmatched route optimization capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-gradient rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <feature.icon className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-dark-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
