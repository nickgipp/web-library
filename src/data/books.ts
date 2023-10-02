import bookImg1 from 'assets/book.png'
import bookImg2 from 'assets/book1.png'
import bookImg3 from 'assets/book2.png'

export interface BookData {
	id: number;
	title: string;
	author: string;
	image: string;
}

export const initialBooks: BookData[] = [
	{
		id: 1,
		title: "Война и мир",
		author: "Лев Толстой",
		image: bookImg1
	},
	{
		id: 2,
		title: "Преступление и наказание",
		author: "Федор Достоевский",
		image: bookImg2
	},
	{
		id: 3,
		title: "Гарри Поттер и философский камень",
		author: "Джоан Роулинг",
		image: bookImg3
	},
	{
		id: 4,
		title: "Алхимик",
		author: "Пауло Коэльо",
		image: bookImg1
	},
	{
		id: 5,
		title: "1984",
		author: "Джордж Оруэлл",
		image: bookImg2
	},
	{
		id: 6,
		title: "Унесенные ветром",
		author: "Маргарет Митчелл",
		image: bookImg3
	},
	{
		id: 7,
		title: "Маленький принц",
		author: "Антуан де Сент-Экзюпери",
		image: bookImg1
	},
	{
		id: 8,
		title: "Властелин колец: Братство кольца",
		author: "Дж. Р. Р. Толкин",
		image: bookImg2
	},
	{
		id: 9,
		title: "Три товарища",
		author: "Эрих Мария Ремарк",
		image: bookImg3
	},
	{
		id: 10,
		title: "Мастер и Маргарита",
		author: "Михаил Булгаков",
		image: bookImg1
	},
	{
		id: 11,
		title: "Искусство войны",
		author: "Сунь Цзы",
		image: bookImg2
	},
	{
		id: 12,
		title: "Гарри Поттер и узник Азкабана",
		author: "Джоан Роулинг",
		image: bookImg3
	},
	{
		id: 13,
		title: "Дневник Анны Франк",
		author: "Анна Франк",
		image: bookImg1
	},
	{
		id: 14,
		title: "О дивный новый мир",
		author: "Олдос Хаксли",
		image: bookImg2
	},
	{
		id: 15,
		title: "Двенадцать стульев",
		author: "Илья Ильф и Евгений Петров",
		image: bookImg3
	}
];
