import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import logo from "./../../assets/images/logo.jpeg";

const Navbar = () => {
	return (
		<nav className={styles.navigation}>
			<div className={styles.linkContainer}>
				<NavLink to="/" className={styles.logo}>
					<img src={logo} className={styles.logo} alt="Logo of ELBOOKS - hand with books"/>
				</NavLink>
				<span className={styles.logoText}>ELBOOKS</span>
			</div>
			<div className={styles.linkContainer}>
				<NavLink className={({isActive}) => styles.link + (isActive ? (" " + styles.active) : "")} to="/"><span>Home</span></NavLink>
				<NavLink className={({isActive}) => styles.link + (isActive ? (" " + styles.active) : "")} to="/books"><span>Books</span></NavLink>
				<NavLink className={({isActive}) => styles.link + (isActive ? (" " + styles.active) : "")} to="/my-books"><span>My books</span></NavLink>
			</div>
		</nav>
	);
};

export default Navbar;