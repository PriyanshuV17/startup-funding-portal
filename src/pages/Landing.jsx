import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold text-primary mb-4">Connect Startups & Investors Effortlessly</h1>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        A platform that bridges the gap between innovative founders and visionary investors.
      </p>
      <Link to="/dashboard" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Get Started
      </Link>
    </section>
  )
}
