import Link from 'next/link'
import React from 'react'

const InterceptingRoutesC = () => {
  return (
    <div>
        this route is useless got to <Link href='InterceptingRoutesC/f5'  className='text-blue-400'>InterceptingRoutesC/f5</Link>
    </div>
  )
}

export default InterceptingRoutesC