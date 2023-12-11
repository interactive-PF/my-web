import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App(): JSX.Element {
	return (
		<div className="App">
			<Header />
			<Main />
		</div>
	);
}

export default App;
