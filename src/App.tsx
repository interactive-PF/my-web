import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App(): JSX.Element {
	return (
		<div className="App">
			<Header />
      <Footer />
		</div>
	);
}

export default App;
