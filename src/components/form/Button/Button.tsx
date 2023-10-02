import cl from 'classnames';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes, memo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}

export const Button: React.FC<ButtonProps> = memo((props) => {
	const { className, children, ...otherProps } = props;

	return (
		<button className={cl(styles.button, className)} {...otherProps}>
			{children}
		</button>
	);
})