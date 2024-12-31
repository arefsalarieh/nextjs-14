import Link from 'next/link'
import React from 'react'

const Notification = () => {
  return (
    <div>
      <h1>Notification</h1>
      <Link  className="text-blue-400" href='/ParallelUnmatchedRoutes/archived'>go to archived</Link>
    </div>
  )
}

export default Notification