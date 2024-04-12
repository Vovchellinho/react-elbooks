import { FormEvent } from "react";
import styles from "./style.module.css";
import Button from "UI/Button";
import Input from "UI/Input";
import { useState } from "react";
import SearchIcon from "./../../assets/icons/search-icon.png";

interface ISearchProps {
	onSubmit: (text: string) => void;
};

const Search = ({onSubmit}: ISearchProps) => {
	const [searchValue, setSearchValue] = useState('');

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchValue === '') {
			console.log("empty name");
		} else {
			onSubmit(searchValue);
		}
	};

	return (
		<form className={styles.form} onSubmit={submit}>
			<Input value={searchValue} placeholder="Name of a book" onChangeText={setSearchValue} />
			<button><img src={SearchIcon} alt="Search magnifying glass" /></button>
		</form>
	);
};

export default Search;