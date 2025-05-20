import NavBar from '@/components/NavBar'
import React from 'react'

function Default({children}) {
  return (
    <div>
        <NavBar />
        <main>
            {children}
        </main>
    </div>
  )
}

export default Default