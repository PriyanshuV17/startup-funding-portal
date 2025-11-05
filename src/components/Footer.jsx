import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-6 text-sm text-gray-500">
      © {new Date().getFullYear()} MatchInvest. Built with ❤️ using React + Tailwind.
    </footer>
  )
}
