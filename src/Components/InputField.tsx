import React from 'react';
import './styles.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
    return (
        <form className='input'>
            <input type="input" placeholder="Enter a task" className="input_box"
                value={todo}
                onChange={
                    (e)=>setTodo(e.target.value)
                }
            ></input>
            <button className="input_submit" type="submit"> Save </button>
        </form>
    )
}

export default InputField

