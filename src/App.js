import React from 'react'
import './App.scss'
import Navbar from './components/Navigation/Navbar'
import BurgerMenu from './components/Navigation/BurgerMenu'
import Header from './components/Header'
import Capabilities from './components/Capabilities'
import RecentProjects from './components/RecentProjects/RecentProjects'
import CaseStudySection from './components/CaseStudySection'
import Testimonials from './components/Testimonials/Testimonials'
import FullscreenOverlay from './components/FullscreenOverlay'

function App() {
	return (
		<div className="App">
			<Navbar />
			<BurgerMenu />
			<Header />
			<Capabilities />
			<RecentProjects />
			<CaseStudySection />
			<Testimonials />
			<FullscreenOverlay />
		</div>
	)
}

export default App
