import cl from 'classnames';
import styles from './Input.module.scss';
import { InputHTMLAttributes, memo } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
	className?: string;
	onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = memo((props) => {
	const { className, onChange, ...otherProps } = props;

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<input onChange={onChangeHandler} className={cl(styles.input, className)} {...otherProps} />
	);
})