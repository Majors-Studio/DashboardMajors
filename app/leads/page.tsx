'use client'

import React from 'react'
import { useLeads } from '@/contexts/LeadsContext'

type LeadProps = {
  id: string
  email: string
}

const Leads: React.FC = () => {
  const { leads, setLeads } = useLeads()

  return (
    <section className="w-screen h-screen flex">
      <div className="flex-1">
        <table className="table-auto w-full">
          <thead>
            <tr className="text-white">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {leads.map(lead => (
              <tr className="text-white" key={lead.id}>
                <td className="border px-4 py-2">{lead.id}</td>
                <td className="border px-4 py-2">{lead.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Leads
