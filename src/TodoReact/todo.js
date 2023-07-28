import {Fragment, useState} from 'react'
// import { useForm } from "react-hook-form";
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
export default function TodoApp()
{
    // const { register } = useForm();
    const [todos,setTodos] = useState([])
    const [edit,setEdit] = useState(true)
    const [checkBox,setCheckBox] = useState(false)

    
    const addTodos = (e) => {
        console.log(e.type)
        if(e.code === 'Enter' || e.type === 'click'){
            setTodos(previousTodos => {
                console.log(todos)
                const newInput = e.target.value
                e.target.value=""
                return [ ...previousTodos, {
                    id:todos.length + 1,
                    title:newInput
                }]
                });
        }
    }

    const deleteTodo = (listDataId) =>
    {
        setTodos(todos.filter((datas)=>{
            console.log(datas.id,listDataId)
        return datas.id!==listDataId}))
    }

    const editTodo = (title) =>
    {
        setEdit(!edit)
        console.log(document.getElementById(title).style)
        edit===true?document.getElementById(title).style.display="block":document.getElementById(title).style.display="none"
    }

    return <Fragment>
        <div className="conatiner" style={{textAlign:"center"}}>
            <h2 style={{marginBottom:"50px"}}>Todo List</h2>
            <div className="container" style={{border:"1px solid black", backgroundColor:"powderblue",padding:"20px 0px"}}>
                <h4>Todos</h4>
                <br/>
                <input type="text" placeholder="Add todo" onKeyUp={(e)=>{addTodos(e)}} id="inputId" required/>
                {/* <button onClick={(e)=>{updateTodos(e)}}>Add</button> */}
                <Fragment>
                {
                    todos.map((listData)=>{
                    return <Fragment>
                                <div className="row" style={{display:"flex",placeContent:"center",margin:"15px 0px"}}>
                                    <form style={{backgroundColor:"#E9B384",paddingLeft:"10px"}} >
                                        <input type="checkbox" className="col-2" style={{maxWidth:"50px"}} required onClick={(e)=>{
                                            console.log(checkBox)
                                            checkBox===false?document.getElementById(listData.id).style.textDecoration="line-through":document.getElementById(listData.id).style.textDecoration="none"
                                            setCheckBox(!checkBox)
                                            }}/>
                                    </form>                                    
                                    <div id={listData.id} className="col-6" style={{maxWidth:"15%",backgroundColor:"red"}}>{listData.title}</div>
                                    <input type="text" placeholder="Update" required id={listData.title} style={{display:"none"}} onKeyUp={(e)=>{
                                            // console.log(e)
                                            // console.log(document.getElementById(listData.id).innerHTML)
                                            const oldTitle = listData.title
                                            if(e.code==='Enter')
                                            {
                                                const newTitle = e.target.value
                                                setTodos(todos.filter((datas)=>{
                                                    if(datas.id===listData.id){
                                                        return datas.title=newTitle
                                                    }
                                                    else
                                                    {
                                                        return datas
                                                    }
                                                }))
                                                e.target.value=""
                                                console.log(listData.title,todos)
                                                editTodo(oldTitle)
                                            }
                                            
                                        }}/>

                                    <button className="col-2" style={{maxWidth:"5%",backgroundColor:"#E9B384",border:"none",paddingLeft:"40px"}} onClick={()=>{
                                        editTodo(listData.title)
                                        // editTodo(listData.id)
                                        }}><BiEdit/></button>
                                    <button onClick={()=>{deleteTodo(listData.id)}} className="col-2" style={{maxWidth:"5%",backgroundColor:"#E9B384",border:"none"}}><AiOutlineDelete/></button>
                                </div>
                            </Fragment>
                    })                    
                }
                </Fragment>
            </div>
            
        </div>
    </Fragment>
}