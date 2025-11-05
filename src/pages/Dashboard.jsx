import React from 'react'
import Matchmaker from '../components/Matchmaker'

export default function Dashboard() {
  const startups = [
    { id: 1, name: 'GreenTech', sectors: ['Energy'], stage: 'Seed', needed: 100 },
    { id: 2, name: 'EduSmart', sectors: ['Education'], stage: 'Series A', needed: 250 }
  ]

  const investors = [
    { id: 1, name: 'Blue Ventures', sectors: ['Energy', 'AI'], ticketSize: '$50K - $200K' },
    { id: 2, name: 'EduInvest', sectors: ['Education'], ticketSize: '$100K - $300K' }
  ]

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Matchmaking Dashboard</h2>
      <Matchmaker startups={startups} investors={investors} />
    </section>
  )
}
