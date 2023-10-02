import cl from 'classnames';
import styles from './Select.module.scss';
import { SelectHTMLAttributes, memo } from 'react';

interface IOptions {
	value: string;
	title: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options: IOptions[];
	className?: string;
}

export const Select: React.FC<SelectProps> = memo((props) => {
	const { className, options, ...otherProps } = props;

	return (
		<select className={cl(styles.select, className)} {...otherProps}>
			{options.map((option) => <option value={option.value}>{option.title}</option>)}
		</select>
	);
})