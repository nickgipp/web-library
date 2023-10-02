import { Сontainer } from '../Сontainer/Сontainer';
import styles from './Header.module.scss';

export const Header: React.FC = () => {

	return (
		<header className={styles.header}>
			<Сontainer className={styles.content}>
				<h1>📚 Корпоративная библиотека</h1>
				<div className={styles.userIcon}>👨🏻‍💼</div>
			</Сontainer>
		</header>
	);
}