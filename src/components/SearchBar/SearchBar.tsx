import cl from 'classnames';
import styles from './SearchBar.module.scss';
import { useCallback, useState } from 'react';
import { Input } from '../form/Input/Input';
import { Select } from '../form/Select/Select';
import { Button } from '../form/Button/Button';

export type TCategory = 'title' | 'author'

interface SearchBarProps {
	className?: string;
	onSearch: (term: string, category: TCategory) => void;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
	const { className, onSearch } = props;

	const [term, setTerm] = useState('');
	const [category, setCategory] = useState<TCategory>('title');

	const handleSearch = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		onSearch(term, category);
	}, [term, category, onSearch]);

	const handleCategoryChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) =>
		setCategory(event.target.value as TCategory), [])

	// TODO: Можно оптимизировать перерендер путем создания memoized 
	// компонентов (memoizedInput, memoizedSelect и пр.) с помощью useMemo, 
	// но так как данный компонент не вызывает проблем с производительностью, это можно не делать 
	// (или сделать при усложнении логики)

	return (
		<form className={cl(styles.searchBar, className)} onSubmit={handleSearch}>
			<Input
				type="text"
				value={term}
				onChange={(value) => setTerm(value)}
			/>
			<Select
				onChange={handleCategoryChange}
				options={[
					{ value: "title", title: 'По названию' },
					{ value: "author", title: 'По автору' }
				]} />
			<Button type='submit'>Поиск</Button>
		</form>
	);
}