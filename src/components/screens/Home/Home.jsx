import { createContext } from 'react';
import cn from 'classnames';
import useTodos from '../../../hooks/useTodos';
import Layout from '../../Layout/Layout';
import AddNewTodo from './AddNewTodo/AddNewTodo';
import List from './List/List';

import styles from './home.module.scss';

export const todosContext = createContext({});

const Home = () => {
	const date = new Date();
	const dayOfWeek = date.toLocaleString('en-ES', { weekday: 'long' });
	const day =
		date.getDate().toString().length === 1
			? `0${date.getDate()}`
			: date.getDate();
	const month = date.toLocaleString('en-ES', { month: 'long' });
	const year = date.getFullYear();

	const { todos, changeCompletedFiled, removeTodo, addTodo, renameTodo } =
		useTodos();

	const { Provider, Consumer } = todosContext;

	return (
		<Provider
			value={{ todos, changeCompletedFiled, removeTodo, addTodo, renameTodo }}
		>
			<Layout>
				<div className={cn(styles.content, 'overflow-hidden')}>
					<div className={styles.content__date}>
						<div className={styles.date__title}>{dayOfWeek}</div>
						<div className={styles.date__other}>
							{month} {day}, {year}
						</div>
					</div>
					<List />
				</div>
				<div className={styles.addNew}>
					<AddNewTodo />
				</div>
			</Layout>
		</Provider>
	);
};

export default Home;
