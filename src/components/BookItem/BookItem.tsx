import { IVolumeInfo } from "types";
import styles from "./style.module.css";
import CoverImage from "assets/images/cover.png";
import { truncateString } from "Helpers";
import Heart from "components/Heart";
interface IBookItemProps extends IVolumeInfo {};

const BookItem = ({...book}: IBookItemProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.containerImage}>
				{
					book.imageLinks?.smallThumbnail || book.imageLinks?.thumbnail ? 
						<img src={book.imageLinks?.thumbnail ?? book.imageLinks?.smallThumbnail} alt={book.title + ' cover'}/>
					: <img src={CoverImage} alt={book.title + ' cover'}/>
				}
			</div>
			<div className={styles.info}>
				<span className={styles.title}>{truncateString(book.title, 50)}</span>
				{book?.authors && <span className={styles.authors}>By: {truncateString(book.authors.join(', '), 50)}</span>}
			</div>
			<div>
				<Heart id={1} />
			</div>
		</div>
	);
};

export default BookItem;