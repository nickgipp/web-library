import cl from 'classnames';
import styles from './Сontainer.module.scss';

interface СontainerProps {
	children: React.ReactNode;
	className?: string;
}

export const Сontainer: React.FC<СontainerProps> = ({ children, className }) => {
	return (
		<div className={cl(styles.сontainer, className)}>
			{children}
		</div>
	);
}