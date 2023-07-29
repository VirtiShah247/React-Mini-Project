import { Fragment, useState } from 'react'
// import { useForm } from "react-hook-form";
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import TextField from '@mui/material/TextField';
import './todo.css';
export default function TodoApp()
{
    const [todos,setTodos] = useState([])
    const [newInput,setNewInput] = useState("")

    const Todo = (props) =>{
        const [checkBox,setCheckBox] = useState(false)
        const [checkStyle,setCheckStyle] = useState({maxWidth:"15%",backgroundColor:"#331D2C"})
        const [edit,setEdit] = useState(false)
        const [newValue,setNewValue] = useState(props.data.title)
        
        return <Fragment>
        <div className="row todoSubDiv">
            <form>
                <input type="checkbox" color="success" className="col-2" required onClick={(e)=>{
                    console.log(checkBox)
                    !checkBox?setCheckStyle((previousStyle)=>{return {...previousStyle,textDecoration:"line-through"}}):setCheckStyle((previousStyle)=>{return{...previousStyle,textDecoration:"none"}})
                    setCheckBox(!checkBox)
                    }}/>
            </form>                                    
            <div className="col-6" style={checkStyle}>{edit?<Fragment>
                <input type="text" onChange={(e)=>{setNewValue(e.target.value)}} required value={newValue}/>
                </Fragment>:newValue}
            </div>
            
            <button className="col-2" variant="contained" onClick={()=>{
                setEdit(!edit)
            }}><BiEdit/></button>
            <button onClick={()=>{deleteTodo(props.data.id)}} className="col-2"><AiOutlineDelete/></button>
        </div>

        </Fragment>

    }
    const addTodos = (e) => {
        e.preventDefault();
        console.log(newInput)
        setTodos(previousTodos => {
            console.log(todos)
            setNewInput("")
            return [ ...previousTodos, {
                id:todos.length + 1,
                title:newInput
            }]
            });
        
    }

    const deleteTodo = (listDataId) =>
    {
        setTodos(todos.filter((datas)=>{
            console.log(datas.id,listDataId)
        return datas.id!==listDataId}))
    }


    return <Fragment>
        <div className="conatiner todo">
            <div className="container todoMainDiv">
                <h4>Todo List</h4>
                <br/>
                <form onSubmit={addTodos}>
                    <TextField required id="outlined-basic" label="Todo" variant="outlined" value={newInput} size="small" onChange={(e)=>{setNewInput(e.target.value)}}/>
                    <input type="submit" value="+"/>
                </form>

                <Fragment>
                {
                    todos.map((listData)=>{
                    return <Todo data={listData}/>
                    })                    
                }
                </Fragment>
            </div>
            
        </div>
    </Fragment>
}