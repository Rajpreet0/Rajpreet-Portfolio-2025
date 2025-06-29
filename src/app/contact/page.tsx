import ContactPage from '@/components/ContactPage'
import FAQPage from '@/components/FAQPage'
import Footer from '@/components/Footer'
import React from 'react'

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center">
      <div className="w-full flex flex-col items-center">
        <ContactPage/>
        <FAQPage/>
      </div>
      <Footer />
    </div>
  )
}

export default Contact