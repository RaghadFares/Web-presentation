const { useEffect } = require("react");

/*  This code for Mark task as complete or incomplete, also the code after DELETETODO  */
const toggle = (id) =>{
    setTodoList((prevTodos)=>{
        return prevTodos.map((todo)=>{
            if(todo.id === id){
                return {...todo, isComplete: !todo.isComplete }
            }
            return todo;
        })
    })
}

useEffect(()=>{
    console.log(todoList);
},[todoList])

/*  must change div yn first part  (in line 10) */
<div onClick={()=>{toggle(id)}}  className='flex flex-1 items-center cursor-pointer'></div>

/*  At the end in todo list must change as following   */
<div>
    {todoList.map((item, index)=>{
        return <TodoItems key={index} text={item.text} id={item.id}
        isComplete={item.isComplete} deleteTodo={deleteTodo} toggle=
        {toggle}/>
    })}
</div>

/*   After import, first line of const (line6)   */
const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
    return (
        <div className='flex items-center my-3 gap-2'>

            <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center
            cursor-pointer'>
                <img src={isComplete ? tick : not_tick} alt="" className='w-7' />
                <p className={`tex-slate-700 ml-4 text-[17px] decoration-slate-500 
                ${isComplete ? "line-through" : ""}`}> 
                    {text}</p>
            </div>

            <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt=""
            className='w-3.5 cursor-pointer' />
        </div>
    )
}