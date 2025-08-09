import { Route, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Route className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-gradient">RouteOpti</span>
            </div>
            <p className="text-dark-300">
              Advanced route optimization solutions for modern enterprises.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-dark-400 hover:text-primary-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-dark-400 hover:text-primary-400 cursor-pointer" />
              <Github className="h-5 w-5 text-dark-400 hover:text-primary-400 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-dark-300">
              <li><a href="#" className="hover:text-primary-400">Features</a></li>
              <li><a href="#" className="hover:text-primary-400">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-400">API</a></li>
              <li><a href="#" className="hover:text-primary-400">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-dark-300">
              <li><a href="#" className="hover:text-primary-400">About</a></li>
              <li><a href="#" className="hover:text-primary-400">Careers</a></li>
              <li><a href="#" className="hover:text-primary-400">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-dark-300">
              <li><a href="#" className="hover:text-primary-400">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-400">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-400">Status</a></li>
              <li><a href="#" className="hover:text-primary-400">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400">© 2025 RouteOpti. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-dark-400 hover:text-primary-400">Terms</a>
            <a href="#" className="text-dark-400 hover:text-primary-400">Privacy</a>
            <a href="#" className="text-dark-400 hover:text-primary-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
