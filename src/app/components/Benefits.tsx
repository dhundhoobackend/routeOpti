'use client'
import { CheckCircle } from 'lucide-react'

const benefits = [
  {
    title: 'Reduce Operational Costs',
    description: 'Cut fuel costs, vehicle wear, and driver overtime by up to 30% with optimized routing algorithms.',
    metrics: '30% cost reduction'
  },
  {
    title: 'Improve Customer Satisfaction',
    description: 'Deliver on-time with accurate ETAs and reduce delivery windows through intelligent scheduling.',
    metrics: '95% on-time delivery'
  },
  {
    title: 'Scale Your Operations',
    description: 'Handle thousands of delivery points and complex constraints without compromising performance.',
    metrics: '10,000+ locations'
  },
  {
    title: 'Environmental Impact',
    description: 'Reduce carbon footprint with optimized routes that minimize total distance and fuel consumption.',
    metrics: '25% CO2 reduction'
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Transform Your Business with
                <span className="text-gradient block">Smart Optimization</span>
              </h2>
              <p className="text-xl text-dark-300">
                Join thousands of enterprises already benefiting from our advanced route optimization platform.
              </p>
            </div>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-dark-300 mb-2">{benefit.description}</p>
                    <span className="text-primary-400 font-semibold">{benefit.metrics}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn-primary">Learn More About Benefits</button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="card-gradient rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">500+</div>
                  <div className="text-dark-400">Enterprise Clients</div>
                </div>
                <div className="card-gradient rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">1M+</div>
                  <div className="text-dark-400">Routes Optimized</div>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="card-gradient rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">$50M+</div>
                  <div className="text-dark-400">Costs Saved</div>
                </div>
                <div className="card-gradient rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
                  <div className="text-dark-400">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
