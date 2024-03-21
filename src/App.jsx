import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitile='programs' title='What We Offer' />
        <Programs />
        <About setShowVideo={setShowVideo} />
        <Title subTitile='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitile='Testimonials' title='What Student Says' />
        <Testimonials />
        <Title subTitile='Contact US' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer showVideo={showVideo} setShowVideo={setShowVideo} />
    </div>
  )
}

export default App