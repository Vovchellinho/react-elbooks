import { ButtonHTMLAttributes } from "react";
import styles from "./style.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {};

const Button = ({children, ...props}: IButtonProps) => {
	return(
		<button className={styles.containerButton} {...props}>
			{children}
		</button>
	);
};

export default Button;