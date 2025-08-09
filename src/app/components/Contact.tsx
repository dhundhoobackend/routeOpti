'use client'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Optimize Your
                <span className="text-gradient block">Delivery Routes?</span>
              </h2>
              <p className="text-xl text-dark-300">
                Get started with a free consultation and see how RouteOpti can transform 
                your logistics operations.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary-500" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-dark-300">hello@routeopti.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary-500" />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-dark-300">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary-500" />
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-dark-300">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-gradient rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Start Your Free Trial</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500"
                />
              </div>
              <input
                type="email"
                placeholder="Work Email"
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500"
              />
              <select className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500">
                <option value="">Fleet Size</option>
                <option value="1-10">1-10 vehicles</option>
                <option value="11-50">11-50 vehicles</option>
                <option value="51-200">51-200 vehicles</option>
                <option value="200+">200+ vehicles</option>
              </select>
              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
