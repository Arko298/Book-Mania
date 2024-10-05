import React from 'react'
import { Link } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-black text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold">Book Mania</h1>
        <nav className="space-y-4">
          <Link to="/" className="block hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/about" className="block hover:text-gray-300 transition-colors">About Us</Link>
          <Link to="/genre" className="block hover:text-gray-300 transition-colors">Genre</Link>
          <Link to="/library" className="block hover:text-gray-300 transition-colors">My Library</Link>
          <Link to="/settings" className="block hover:text-gray-300 transition-colors">Settings</Link>
        </nav>
      </div>
      <div className="flex p-8">
        {children}
      </div>
    </div>
  )
}

export default Layout