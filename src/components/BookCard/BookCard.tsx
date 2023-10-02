import cl from 'classnames';
import styles from './BookCard.module.scss';

interface BookCardProps {
	title: string;
	author: string;
	image: string;
	className?: string;

}

export const BookCard: React.FC<BookCardProps> = (props) => {
	const { className, title, author, image } = props;

	return (
		<div className={cl(styles.bookCard, className)}>
			{/* TODO: По заданию картинка должна быть по центру,
			но в данном дизайне она лучше смотрится сверху */}
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{author}</p>
		</div>
	);
}