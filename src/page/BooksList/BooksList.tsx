import cl from 'classnames';
import styles from './BooksList.module.scss';
import { useState } from 'react';
import { BookData, initialBooks } from '~/data/books';
import { BooksGrid } from '~/components/BooksGrid/BooksGrid';
import { SearchBar, TCategory } from '~/components/SearchBar/SearchBar';

interface BooksListProps {
	className?: string;
}

export const BooksList: React.FC<BooksListProps> = (props) => {
	const { className } = props;

	const [books] = useState<BookData[]>(initialBooks);
	const [filteredBooks, setFilteredBooks] = useState<BookData[]>(initialBooks);

	const handleSearch = (term: string, category: TCategory) => {
		const regex = new RegExp(term, 'i');
		setFilteredBooks(
			books.filter((book) => book[category].search(regex) !== -1)
		);
	};

	return (
		<div className={cl(styles.booksList, className)}>
			<SearchBar onSearch={handleSearch} />
			<BooksGrid books={filteredBooks} />
		</div>
	);
}