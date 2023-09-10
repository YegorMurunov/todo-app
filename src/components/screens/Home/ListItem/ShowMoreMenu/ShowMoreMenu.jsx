import React, { useContext } from 'react';
import cn from 'classnames';
import { BiSolidTrash } from 'react-icons/bi';
import { MdModeEditOutline } from 'react-icons/md';

import styles from './show-more-menu.module.scss';
import { todosContext } from '../../../../App/App';

const ShowMoreMenu = ({ todo }) => {
	const { removeTodo, renameTodo } = useContext(todosContext);

	return (
		<ul className={styles.showMore__block}>
			<li>
				<button
					className={styles.list__editBtn}
					onClick={() => {
						const newTitle = prompt(`rename your task "${todo.title}"`);
						if (newTitle.trim() !== '') {
							renameTodo(todo._id, newTitle);
						}
						return;
					}}
				>
					<MdModeEditOutline size={20} />
				</button>
			</li>
			<li>
				<button
					className={styles.list__removeBtn}
					onClick={() => {
						removeTodo(todo._id);
					}}
				>
					<BiSolidTrash size={20} />
				</button>
			</li>
		</ul>
	);
};

export default ShowMoreMenu;
