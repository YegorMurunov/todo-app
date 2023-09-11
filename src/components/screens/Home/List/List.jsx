import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ListItem from '../ListItem/ListItem';
import './animation.scss';
import { useContext } from 'react';
import { todosContext } from '../Home';

const List = () => {
	const { todos } = useContext(todosContext);

	return (
		<TransitionGroup component='ul' className='w-full mt-6'>
			{todos.map(todo => (
				<CSSTransition key={todo._id} timeout={400} classNames='animItem'>
					<ListItem todo={todo} key={todo._id} />
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};

export default List;
