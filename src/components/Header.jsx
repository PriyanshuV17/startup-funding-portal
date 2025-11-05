import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Startup Matchmaker Logo" className="h-8 w-8 object-contain" />
          <span className="font-bold text-xl text-primary">MatchInvest</span>
        </Link>
        <nav className="space-x-4">
          <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
          <Link to="/profile" className="hover:text-primary">Profile</Link>
        </nav>
      </div>
    </header>
  )
}
