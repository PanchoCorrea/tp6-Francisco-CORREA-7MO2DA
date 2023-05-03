import React, {useState} from 'react'
import Todo from './Todo'


const Form = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([
       
    ])

    const handleChange = e => setTodo({[e.target.name]: e.target.value})

    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('No puede estar vacio')
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = indice => {
        const resetTodos = [...todos]
        resetTodos.splice(indice, 1)
        setTodos(resetTodos)
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar tarea</label><br />
                <input type="text" name="todo" onChange={handleChange}/>
                <button onClick={handleClick}>agregar</button>
            </form>
            {
                todos.map((value, index) => (
                    <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
                ))
            }
        </>
    )
}

export default Form