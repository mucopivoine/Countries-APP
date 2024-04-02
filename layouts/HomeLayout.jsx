import React from 'react'
import Header from '../../Countries-APP/components/Header'
import Footer from '../../Countries-APP/components/Footer'

const HomeLayout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default HomeLayout