import { Fragment, useState } from 'react'
// import { useForm } from "react-hook-form";
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
export default function TodoApp()
{
    // const { register } = useForm();
    const [todos,setTodos] = useState([])
    const [newInput,setNewInput] = useState("")

    const Todo = (props) =>{
        const [checkBox,setCheckBox] = useState(false)
        const [checkStyle,setCheckStyle] = useState({maxWidth:"15%",backgroundColor:"#E9B384"})
        const [edit,setEdit] = useState(false)
        const [newValue,setNewValue] = useState(props.data.title)
        
        return <Fragment>
        <div className="row" style={{display:"flex",placeContent:"center",margin:"15px 0px"}}>
            <form style={{backgroundColor:"#E9B384",paddingLeft:"10px"}}>
                <input type="checkbox" className="col-2" style={{maxWidth:"50px"}} required onClick={(e)=>{
                    console.log(checkBox)
                    !checkBox?setCheckStyle((previousStyle)=>{return {...previousStyle,textDecoration:"line-through"}}):setCheckStyle((previousStyle)=>{return{...previousStyle,textDecoration:"none"}})
                    setCheckBox(!checkBox)
                    }}/>
            </form>                                    
            <div className="col-6" style={checkStyle}>{edit?<Fragment>
                <input type="text" onChange={(e)=>{setNewValue(e.target.value)}} required value={newValue}/>
                </Fragment>:newValue}
            </div>
            
            <button className="col-2" style={{maxWidth:"5%",backgroundColor:"#E9B384",border:"none",paddingLeft:"40px"}} onClick={()=>{
                setEdit(!edit)
            }}><BiEdit/></button>
            <button onClick={()=>{deleteTodo(props.data.id)}} className="col-2" style={{maxWidth:"5%",backgroundColor:"#E9B384",border:"none"}}><AiOutlineDelete/></button>
        </div>

        </Fragment>

    }
    const addTodos = (e) => {
        e.preventDefault();
        console.log(newInput)
        setTodos(previousTodos => {
            console.log(todos)
            // const newInput = e.target.value
            setNewInput("")
            return [ ...previousTodos, {
                id:todos.length + 1,
                title:newInput
            }]
            });
        // if(e.code === 'Enter' || e.type === 'click'){
            
        // }
    }

    const deleteTodo = (listDataId) =>
    {
        setTodos(todos.filter((datas)=>{
            console.log(datas.id,listDataId)
        return datas.id!==listDataId}))
    }


    return <Fragment>
        <div className="conatiner" style={{textAlign:"center"}}>
            <h2 style={{marginBottom:"50px"}}>Todo List</h2>
            <div className="container" style={{border:"none", backgroundColor:"powderblue",padding:"20px 0px"}}>
                <h4>Todos</h4>
                <br/>
                <form onSubmit={addTodos}>
                    <input type="text" placeholder="Add todo" value={newInput} onChange={(e)=>{setNewInput(e.target.value)}} required/>
                    <input type="submit" value="Add"/>
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