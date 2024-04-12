import styles from "./style.module.css";
import Navbar from "components/Navbar";
import { useLocation } from "react-router-dom";

export type TTexts = "/" | "/books" | "/my-books";

const titles = {
	"/": "Books Library",
	"/books": "Book Search",
	"/my-books": "My Books"
};

const texts = {
	"/": "This service is an electronic library that allows you to find books, see ratings and choose a book to your liking.",
	"/books": "Here you can search for a book by its title or author! You can also move the book to the “My Books” section.",
	"/my-books": "This section contains books that you liked. Found a good book - save it here! Books will be waiting for you!"
};

const TopPage = () => {
	const {pathname} = useLocation();
	const text = texts[pathname as TTexts];
	const title = titles[pathname as TTexts];
	return (
		<div className={styles.preSection}>
			<Navbar />
			<div className={styles.textBlock}>
				<h1>{title}</h1>
				<h2>{text}</h2>
			</div>
		</div>
	);
};

export default TopPage;