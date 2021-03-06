import { Button } from 'bootstrap';
import React,{Fragment, useEffect, useState} from 'react';
import EditTodo from './EditTodo'

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const getTodos = async() => {
        try{
            const response = await fetch('http://localhost:8000/api/todos');
            const jsonData = await response.json();

            setTodos(jsonData);
        }catch(err){
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    },[]);

    const deleteTodo = async id => {
        try{
            const deleteTodo = await fetch(`http://localhost:8000/api/todos/${id}`, {method: 'DELETE'});
            console.log(deleteTodo)
            setTodos(todos.filter(todo => todo.id !== id))
        } catch(err){
            console.log(err.message)
        }
    }
    return (
    <Fragment>
        <table className='table mt-5 text-center'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.title}</td>
                        <td>
                            <EditTodo todo={todo}/>
                        </td>
                        <td>
                        <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>)
}

export default ListTodos;