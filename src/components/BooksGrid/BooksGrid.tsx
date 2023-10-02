import cl from 'classnames';
import styles from './BooksGrid.module.scss';
import { BookCard } from '~/components/BookCard/BookCard';
import { BookData } from '~/data/books';

interface BooksGridProps {
	className?: string;
	books: BookData[];
}

export const BooksGrid: React.FC<BooksGridProps> = (props) => {
	const { className, books } = props;

	return (
		<div className={cl(styles.bookGrid, className)} >
			{books.map((book) => (
				<BookCard key={book.id} {...book} />
			))}
		</div >
	);
}