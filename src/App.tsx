import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// screens
import Home from './pages/Home';
import Books from './pages/Books';
import MyBooks from './pages/MyBooks/MyBooks';
import TopPage from './components/TopPage';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<TopPage />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/books" element={<Books />} />
					<Route path="/my-books" element={<MyBooks />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
