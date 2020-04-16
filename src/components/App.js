import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/"><Home /></Route>
					<Route path="/about"><About /></Route>
					<Route path="/projects"><Projects /></Route>
					<Route path="/contact"><Contact /></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
