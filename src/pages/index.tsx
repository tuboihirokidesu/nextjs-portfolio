import React from 'react'
import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import { HeroParagraph, HeroHeader } from '../styles/pages/HeroSection'
import Navbar from '../components/Navbar'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        <Navbar />
        <HeroSection>
          <HeroHeader strings={['Portfolio']} typeSpeed={80} />
          <HeroParagraph
            strings={['Hiroki', 'Tsuboi']}
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </HeroSection>
      </main>
    </>
  )
}

export default Home
