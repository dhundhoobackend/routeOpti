
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Optimize Your Routes with
                <span className="text-gradient block">Advanced AI</span>
              </h1>
              <p className="text-xl text-dark-300 leading-relaxed">
                Revolutionary route optimization platform solving complex Traveling Salesman Problems 
                and Capacitated Vehicle Routing with time windows. Reduce costs by up to 30% and 
                improve delivery efficiency for your enterprise.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center gap-2">
                Start Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-dark-700">
              <div>
                <div className="text-3xl font-bold text-primary-400">30%</div>
                <div className="text-dark-400">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400">50%</div>
                <div className="text-dark-400">Time Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400">99.9%</div>
                <div className="text-dark-400">Uptime</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 animate-float">
              <div className="grid grid-cols-4 gap-4">
                {Array.from({length: 16}).map((_, i) => (
                  <div key={i} className="h-16 bg-white/20 rounded-lg backdrop-blur-sm animate-pulse" 
                       style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-radial from-primary-500/30 to-transparent blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
