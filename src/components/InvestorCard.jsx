import React from 'react'

export default function InvestorCard({ investor }) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg text-gray-800">{investor.name}</h3>
      <p className="text-sm text-gray-600">Sectors: {investor.sectors.join(', ')}</p>
      <p className="text-sm text-gray-600">Ticket Size: {investor.ticketSize}</p>
    </div>
  )
}
