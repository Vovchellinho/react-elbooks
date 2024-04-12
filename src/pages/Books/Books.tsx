import { TItem } from "types";
import styles from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import API from "API";
import BookItem from "components/BookItem";
import Search from "components/Search/Search";


export const Books = () => {
	const formRef = useRef<HTMLDivElement>(null);
	const [books, setBooks] = useState<TItem[]>([]);

	const findBooks = async (searchValue: string) => {
		setBooks([]);
		const res = await API.GET('search-volumes', {
			q: searchValue,
			filter: 'ebooks',
			terms: 'intitle',
			langRestrict: 'en'
		});
		if (res.success && res.data) {
			setBooks(res.data.items);
		} else {
			setBooks([]);
		};
	};

	useEffect(() => {
		console.log('scroll')
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, [books]);

	return(
		<section className={styles.section}>
			<div className={styles.searchBlock} ref={formRef}>
				<Search onSubmit={findBooks} />
			</div>
			<ul className={styles.container}>
				{ books && 
					books.map((item, index) => <li key={item.id + item.etag + index}>
						<BookItem {...item.volumeInfo} />
					</li>)
				}

			</ul>
		</section>
	);
};

export default Books;