import { useContext, useState } from 'react';
import { BsSendFill } from 'react-icons/bs';
import cn from 'classnames';
import styles from './add-new-todo.module.scss';
import { todosContext } from '../Home';

const AddNewTodo = () => {
	const [inputValue, setInputValue] = useState('');
	const { addTodo } = useContext(todosContext);

	const onSubmit = e => {
		e.preventDefault();
		addTodo(inputValue);
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit} className={styles.form}>
			<input
				type='text'
				placeholder='type something'
				onChange={e => {
					setInputValue(e.target.value);
				}}
				value={inputValue}
				className={styles.input}
			/>
			<div className={styles.status}></div>
			<button
				type='submit'
				className={cn(styles.btn, 'bg-white')}
				disabled={inputValue.trim() == '' ? true : false}
			>
				<BsSendFill size={24} />
			</button>
		</form>
	);
};

export default AddNewTodo;
