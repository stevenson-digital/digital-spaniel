import React from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import BurgerMenu from './components/BurgerMenu'
import Header from './components/Header'
import FullscreenOverlay from './components/FullscreenOverlay'
import CaseStudySection from './components/CaseStudySection'

function App() {
	return (
		<div className="App">
			<Navbar />
			<BurgerMenu />
			<Header />
			<CaseStudySection />
			<div style={{height: '100vh', background: 'red'}} />
			<div style={{height: '100vh', background: 'green'}} />
			<div style={{height: '100vh', background: 'blue'}} />
			<FullscreenOverlay />
		</div>
	)
}

export default App
