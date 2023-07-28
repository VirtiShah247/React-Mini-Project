import React, {useState} from 'react'

let globalId = 0;
function Todo()
{
    const [values,setValues] = useState("")
    const [tasks,setTasks] = useState([])
    function addTodo(e)
    { 
        e.preventDefault();
        setTasks(oldTasks=> { setValues("") 
        return [...oldTasks,{todo: values, id: globalId++}]});  
    }

    function deleteTask(itemId)
    {
        setTasks(oldTasks => oldTasks.filter(items => {return items.id !== itemId}));
    }

    return (<div>
        <h4>Todo list using react</h4>
        <form onSubmit={addTodo}>
            <input type="text" value={values} onChange={e=>{setValues(e.target.value)}}/>
            <button type="submit">Add</button>
        </form>
        <ul>
            {tasks.map(item=>{return <div>
                <li>{item.todo}</li>
                <button onClick={() => deleteTask(item.id)}>Del</button></div>})}
        </ul>
    </div>)
}

export default Todo;