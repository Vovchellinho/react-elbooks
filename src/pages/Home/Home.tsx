import { useNavigate } from 'react-router-dom';
import styles from "./style.module.css";
import Button from 'UI/Button';
import ShelfImage from "./../../assets/images/shelf.jpeg";

const Home = () => {
	const navigate = useNavigate();
	const navigateToBooks = () => {
		navigate('/books');
	};

	return (
		<section>
			<div className={styles.about}>
				<div>
					<h3>About service</h3>
					<p>Welcome to ELBOOKS!</p>
					<p>ELBOOKS is the best book search service! All books that exist in electronic format are presented here.</p>
					<p>You can be sure that you will find a book that will take you to another world!</p>
				</div>
				<img src={ShelfImage} alt="Book shelf with different books"/>
			</div>
			<div>
				<Button onClick={navigateToBooks}>
					<span>Go to search</span>
				</Button>
			</div>
		</section>
	);
};

export default Home;