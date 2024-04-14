import { useEffect, useState } from "react";
import HeartImage from "./../../assets/icons/heart.png";
import HeartActiveImage from "./../../assets/icons/heart-active.png";
import styles from "./style.module.css";

interface IHeartProps {
	id: number;
}

const Heart = ({id}: IHeartProps) => {
	const [isLiked, setIsLiked] = useState(false);
	
	const toggleLike = () => {
		setIsLiked((prev) => !prev);
	};

	useEffect(() => {
		// check is liked and set if true
	}, []);
	
	return (
		<div className={styles.container} onClick={toggleLike}>
			<div className={styles.heart}>
				{ isLiked ? <img src={HeartActiveImage} alt="red heart"/> : <img src={HeartImage} alt="heart" />}
			</div>
		</div>
	);
};

export default Heart;