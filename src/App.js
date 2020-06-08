import React from 'react'
import './App.scss'
import Navbar from './components/Navigation/Navbar'
import BurgerMenu from './components/Navigation/BurgerMenu'
import Header from './components/Header'
import RecentProjects from './components/RecentProjects/RecentProjects'
import CaseStudySection from './components/CaseStudySection'
import FullscreenOverlay from './components/FullscreenOverlay'

function App() {
	return (
		<div className="App">
			<Navbar />
			<BurgerMenu />
			<Header />
			<RecentProjects />
			<CaseStudySection />
			<div style={{height: '100vh', background: 'red'}} />
			<div style={{height: '100vh', background: 'green'}} />
			<div style={{height: '100vh', background: 'blue'}} />
			<FullscreenOverlay />
		</div>
	)
}

export default App
