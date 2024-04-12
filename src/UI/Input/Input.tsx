import { InputHTMLAttributes, ChangeEvent } from "react";
import styles from "./style.module.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	onChangeText: (value: string) => void;
};

const Input = ({onChangeText, ...props}: IInputProps) => {

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		onChangeText(e.target.value);
	}

	return(
		<input className={styles.inputContainer} {...props} onChange={handleInput}/>
	);
};

export default Input;