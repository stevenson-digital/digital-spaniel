import React from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import BurgerMenu from './components/BurgerMenu'

function App() {
	return (
		<div className="App">
			<Navbar />
			<BurgerMenu />
			<div style={{height: '100vh', background: 'red'}} />
			<div style={{height: '100vh', background: 'green'}} />
			<div style={{height: '100vh', background: 'blue'}} />
		</div>
	)
}

export default App
