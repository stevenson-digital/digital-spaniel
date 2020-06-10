import React from 'react'
import './App.scss'
import Navbar from './components/Navigation/Navbar'
import BurgerMenu from './components/Navigation/BurgerMenu'
import Header from './components/Header'
import RecentProjects from './components/RecentProjects/RecentProjects'
import CaseStudySection from './components/CaseStudySection'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer'
import FullscreenOverlay from './components/FullscreenOverlay'

function App() {
	return (
		<div className="App">
			<Navbar />
			<BurgerMenu />
			<Header />
			<RecentProjects />
			<CaseStudySection />
			<Testimonials />
			<Footer />
			<FullscreenOverlay />
		</div>
	)
}

export default App
