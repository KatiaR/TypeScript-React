import React, { useState } from 'react';
import { Todo } from './todo.model';

import TodoList from './components/TodoList';
import NewToDo from './components/NewTodo';

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const todoAddHandler = (text: string) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{ id: `${text}${Math.random().toString()}`, text: text },
		]);
	};

	const todoDeleteHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};

	return (
		<div className="App">
			<NewToDo onAddTodo={todoAddHandler} />
			<TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
		</div>
	);
};

export default App;
