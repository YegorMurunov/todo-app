import { useContext, useState } from 'react';
import cn from 'classnames';
import { MdOutlineMoreVert } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';
import ShowMoreMenu from './ShowMoreMenu/ShowMoreMenu';
import { useOutside } from '../../../../hooks/useOutside';
import { todosContext } from '../Home';

import styles from './list-item.module.scss';
import './anim.scss';

const ListItem = ({ todo }) => {
	const { changeCompletedFiled } = useContext(todosContext);

	// const [isShow, setIsShow] = useState(false);

	const { ref, isShow, setIsShow } = useOutside(false);

	return (
		<li
			className={cn(
				styles.list__item,
				todo.isCompleted ? styles.list__item_active : ''
			)}
		>
			<button
				className={styles.list__btn}
				onClick={() => {
					changeCompletedFiled(todo._id);
				}}
			>
				{todo.title}
			</button>

			<div ref={ref}>
				<button
					className={styles.list__showMore}
					onClick={() => {
						setIsShow(!isShow);
					}}
					// ref={ref}
				>
					<MdOutlineMoreVert size={22} />
				</button>
				<CSSTransition
					in={isShow}
					timeout={400}
					classNames='alert'
					unmountOnExit
				>
					<ShowMoreMenu todo={todo} />
				</CSSTransition>
			</div>
		</li>
	);
};

export default ListItem;
