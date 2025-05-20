import NavBar from '@/components/admin/NavBar'
import React from 'react'

function Admin({children}) {
  return (
    <div>
        <NavBar />
        <main>
            {children}
        </main>
    </div>
  )
}

export default Admin