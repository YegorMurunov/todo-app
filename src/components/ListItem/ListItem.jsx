import React from 'react';
import cn from 'classnames';

import styles from './list-item.module.scss';

const ListItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<li
			className={cn(
				styles.list__item,
				todo.isCompleted ? styles.list__item_active : ''
			)}
		>
			<button
				onClick={() => {
					changeTodo(todo._id);
				}}
			>
				{todo.title}
			</button>
			<button
				onClick={() => {
					removeTodo(todo._id);
				}}
			>
				delete
			</button>
		</li>
	);
};

export default ListItem;
