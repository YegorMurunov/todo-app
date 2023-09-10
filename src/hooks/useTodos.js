import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from './useLocalStorage';

const useTodos = () => {
	const db = [
		{
			title: 'Do todo app',
			isCompleted: false,
			_id: uuidv4()
		},
		{
			title: 'Buy iphone',
			isCompleted: false,
			_id: uuidv4()
		},
		{
			title: 'Do homework',
			isCompleted: true,
			_id: uuidv4()
		},
		{
			title: 'Do homework2',
			isCompleted: true,
			_id: uuidv4()
		}
	];

	let [todos, setTodos] = useLocalStorage('todos', db);

	const renameTodo = (id, title) => {
		let copy = [...todos];
		let current = copy.find(t => t._id == id);
		current.title = title;
		setTodos(copy);
	};

	const changeCompletedFiled = id => {
		let copy = [...todos];
		let current = copy.find(t => t._id == id);
		current.isCompleted = !current.isCompleted;
		setTodos(copy);
	};

	const removeTodo = id => {
		setTodos(todos.filter(t => t._id !== id));
	};

	const addTodo = title => {
		const todo = {
			title,
			_id: uuidv4(),
			isCompleted: false
		};
		setTodos([...todos, todo]);
	};

	return { todos, changeCompletedFiled, renameTodo, removeTodo, addTodo };
};

export default useTodos;
