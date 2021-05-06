import React, { useRef } from 'react';
import './NewTodo.css';

interface NewTodoProps {
	onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null);
	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		props.onAddTodo(enteredText);
	};

	return (
		<form onSubmit={todoSubmitHandler}>
			<div>
				<label htmlFor="todo-text">List Todo</label>
				<input type="text" id="todo-text" ref={textInputRef}></input>
			</div>
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default NewTodo;
