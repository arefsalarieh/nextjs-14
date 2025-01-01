import Link from 'next/link'
import React from 'react'

const InterceptingRoutesB = () => {
  return (
    <div>
        this route is useless got to <Link href='InterceptingRoutesB/f4'  className='text-blue-400'>InterceptingRoutesB/f4</Link>
    </div>
  )
}

export default InterceptingRoutesB