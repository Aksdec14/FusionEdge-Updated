import React from 'react'
import Hero from './component/Hero'
import Cards from './component/Cards'
import AssetAutomation from './component/AssestAutomation'
import StatsTimeline from './component/StatsTimeline'
import HorizontalCards from './component/HorizontalCards'
import IntegrationDiagram from './component/IntegrationDiagram'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <Cards/>
      <AssetAutomation/>
      <StatsTimeline/>
      <HorizontalCards/>
      <IntegrationDiagram/>
      <Footer/>
    </div>
  )
}

export default App
