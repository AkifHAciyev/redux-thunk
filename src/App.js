import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AddCustomer from './page/AddCustomer';
import Customers from './page/Customers';
import Favorite from './page/Favorite';

function App() {
	return (
		<div className="App">
			<div className="App">
				<nav>
					<ul>
						<li>
							<Link to={'/'}>Cuctomers</Link>
						</li>
						<li>
							<Link to={'/addCustomer'}>Add Customer</Link>
						</li>
						<li>
							<Link to={'/favorite'}>Favorite</Link>
						</li>
					</ul>
				</nav>
				<main>
					<Routes>
						<Route path="/" element={<Customers />} />
						<Route path="/addCustomer" element={<AddCustomer />} />
						<Route path="/favorite" element={<Favorite />} />
					</Routes>
				</main>
			</div>
		</div>
	);
}

export default App;
