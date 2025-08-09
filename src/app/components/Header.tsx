'use client'
import { useState } from 'react'
import { Menu, X, Route } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-dark-900/95 backdrop-blur-sm border-b border-dark-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Route className="h-8 w-8 text-primary-500" />
            <span className="text-2xl font-bold text-gradient">RouteOpti</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-dark-300 hover:text-primary-400 transition-colors">Features</a>
            <a href="#benefits" className="text-dark-300 hover:text-primary-400 transition-colors">Benefits</a>
            <a href="#contact" className="text-dark-300 hover:text-primary-400 transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <button className="btn-secondary">Request Demo</button>
            <button className="btn-primary">Get Started</button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-700">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-dark-300 hover:text-primary-400 transition-colors">Features</a>
              <a href="#benefits" className="text-dark-300 hover:text-primary-400 transition-colors">Benefits</a>
              <a href="#contact" className="text-dark-300 hover:text-primary-400 transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="btn-secondary">Request Demo</button>
                <button className="btn-primary">Get Started</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
