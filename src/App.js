import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AddCustomer from './page/AddCustomer';
import Customers from './page/Customers';

function App() {
	return (
		<div className="App">
			<div className="App">
				<nav>
					<ul>
						<li>
							<Link to={'/'}>Todo</Link>
						</li>
						<li>
							<Link to={'/addCustomer'}>Todo List</Link>
						</li>
					</ul>
				</nav>
				<main>
					<Routes>
						<Route path="/" element={<Customers />} />
						<Route path="/addCustomer" element={<AddCustomer />} />
					</Routes>
				</main>
			</div>
		</div>
	);
}

export default App;