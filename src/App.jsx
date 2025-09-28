import React from 'react'
import { Routes, Route } from "react-router-dom";
import AssetManagementHero from './components/Hero'
import LogoTicker from './components/LogoTicker'
import Timeline from './components/TimeLine'
import Integrations from './components/ProductsGlance'
import ContactUsSection from './components/ContactForm'
import Footer from './components/Footer'
import OperationsTabs from './components/OperationsTabs'
import CustomIntegration from './components/CustomIntegration'
import About from './Pages/About';
import Solutions from './Pages/Solutions'
import Industries from './Pages/Industries'
import Resources from './Pages/Resources'
import ExploreMore from './Pages/ExploreMore'
import NotFoundPage from './Pages/NotFoundPage';

const Home = () => (
  <>
    <AssetManagementHero/>
    <LogoTicker/>
    <OperationsTabs/>
    <Timeline/>
    <Integrations/>
    <CustomIntegration/>
    <ContactUsSection/>
  </>
);

const App = () => {
  return (
    <>
      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/exploreMore" element={<ExploreMore />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>

      {/* Footer stays always visible */}
      <Footer />
    </>
  )
}

export default App;
