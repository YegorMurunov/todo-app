import { createContext } from 'react';
import Layout from '../Layout/Layout';
import useTodos from '../../hooks/useTodos';
import List from '../screens/Home/List/List';
import AddNewTodo from '../screens/Home/AddNewTodo/AddNewTodo';
import cn from 'classnames';

import styles from './app.module.scss';

export const todosContext = createContext({});

const App = () => {
	const date = new Date(); // 09.05.2023
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
					<AddNewTodo addTodo={addTodo} />
				</div>
			</Layout>
		</Provider>
	);
};

export default App;
