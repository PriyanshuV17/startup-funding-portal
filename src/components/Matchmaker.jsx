import React from 'react'
import InvestorCard from './InvestorCard'
import StartupCard from './StartupCard'

export default function Matchmaker({ startups, investors }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {startups.map((startup) => (
        <div key={startup.id}>
          <StartupCard startup={startup} />
          <div className="mt-3 space-y-2">
            {investors
              .filter(inv => inv.sectors.some(s => startup.sectors.includes(s)))
              .map(inv => (
                <InvestorCard key={inv.id} investor={inv} />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
