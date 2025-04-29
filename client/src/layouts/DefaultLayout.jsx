import React from 'react'
import Navbar from '../components/Navbar'

function DefaultLayout({children}) {
  return (
    <>
        <Navbar />
        <main>
            {children}
        </main>


        <h1>Footer</h1>
    </>
  )
}

export default DefaultLayout