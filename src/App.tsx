import './App.css';

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App(): JSX.Element {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
