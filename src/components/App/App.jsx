import styles from './app.module.scss';
import Layout from '../Layout/Layout';
import ListItem from '../ListItem/ListItem';
import { useState } from 'react';

const db = [
	{
		title: 'Do todo app',
		isCompleted: false,
		_id: 'sadjaskjhgd'
	},
	{
		title: 'Buy iphone',
		isCompleted: false,
		_id: 'sad21332tgvsdjaskjhgd'
	},
	{
		title: 'Do homework',
		isCompleted: true,
		_id: 'shjhj3hg13oi9cu89y'
	}
];

const App = () => {
	const date = new Date('09.05.2023');
	const dayOfWeek = date.toLocaleString('en-ES', { weekday: 'long' });
	const day =
		date.getDay().toString.length === 1 ? `0${date.getDay()}` : date.getDay();
	const month = date.toLocaleString('en-ES', { month: 'long' });
	const year = date.getFullYear();

	const [todos, setTodos] = useState(db);

	const changeTodo = id => {
		let copy = [...todos];
		let current = copy.find(t => t._id == id);
		current.isCompleted = !current.isCompleted;
		setTodos(copy);
	};

	const removeTodo = id => {
		setTodos(todos.filter(t => t._id !== id));
	};

	return (
		<Layout>
			<div className={styles.content}>
				<div className={styles.content__date}>
					<div className={styles.date__title}>{dayOfWeek}</div>
					<div className={styles.date__other}>
						{month} {day}, {year}
					</div>
				</div>
				<ul className={styles.list}>
					{todos.map(todo => (
						<ListItem
							todo={todo}
							key={todo._id}
							changeTodo={changeTodo}
							removeTodo={removeTodo}
						/>
					))}
				</ul>
			</div>
		</Layout>
	);
};

export default App;
