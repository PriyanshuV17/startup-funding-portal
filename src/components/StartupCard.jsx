import React from 'react'

export default function StartupCard({ startup }) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm">
      <h3 className="font-semibold text-lg text-gray-800">{startup.name}</h3>
      <p className="text-sm text-gray-600">Stage: {startup.stage}</p>
      <p className="text-sm text-gray-600">Funding Needed: ${startup.needed}K</p>
    </div>
  )
}
