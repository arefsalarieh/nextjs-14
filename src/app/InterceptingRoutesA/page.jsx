import Link from 'next/link'
import React from 'react'

const InterceptingRoutesA = () => {
  return (
    <div>
        <h1>InterceptingRoutesA</h1>
        <Link href="/InterceptingRoutesA/f2" className='text-blue-400'>go to F2</Link>

    </div>
  )
}

export default InterceptingRoutesA