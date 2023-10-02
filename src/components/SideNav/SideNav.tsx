import cl from 'classnames';
import styles from './SideNav.module.scss';

interface SideNavProps {
	className?: string;
}

export const SideNav: React.FC<SideNavProps> = (props) => {
	const { className } = props;

	return (
		<nav className={cl(styles.sideNav, className)}>
			<ul>
				<li>
					<a href="/">🏠 Главная</a>
				</li>
				<li>
					<a href="/news">📣 Новости библиотеки</a>
				</li>
				<li>
					<a href="/employees">👩‍🏫 Сотрудники библиотеки</a>
				</li>
				<li>
					<a href="/events">📅 Мероприятия библиотеки</a>
				</li>
			</ul>
		</nav>
	);
}