import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import LabManager from './labs/LabManager';
import './App.css';
import StudentsManager from './StudentsManager';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import RoutingContainer from './routing/RoutingContainer';

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<main>
				<header>
					<h1>React Labs</h1>
				</header>
				<BrowserRouter>
					<nav className="navbar">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/labs">Labs</Link>
							</li>
							<li>
								<Link to="/students">Students</Link>
							</li>
							<li>
								<Link to="/routing">Routing</Link>
							</li>
						</ul>
					</nav>
					<hr style={{ marginTop: '5px' }} />
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="labs/*"
							element={<LabManager />}
						/>
						<Route
							path="students/*"
							element={<StudentsManager />}
						/>
						<Route
							path="routing/*"
							element={<RoutingContainer />}
						/>
					</Routes>
				</BrowserRouter>
			</main>
		</ApolloProvider>
	);
}

export default App;
