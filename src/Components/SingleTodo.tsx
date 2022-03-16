import React from 'react';
import { Todo } from '../model';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import TodoList from './TodoList';



type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {

    const handleDone = (id: number) => {
        
    };

  return (
    <form className="todos_single">
        <span className="todos_single--text">{todo.todo}</span>
        <div>
            <span className="icon"><AiOutlineEdit/></span>
            <span className="icon"><AiOutlineDelete/></span>
            <span className="icon" onClick={() => handleDone(todo.id)}><MdDone/></span>
        </div>
    </form>
  )
}

export default SingleTodo