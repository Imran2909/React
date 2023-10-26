
function TodoItem({id,title,status, handleDelete,handleUpdate}) {

  const handleToggle=()=>{
    const body={status:!status}
    handleUpdate(id,body)
  }

  return (
    <div style={{border:"1px solid"}}>
        <h4>{title}</h4>
        <p>{status ? "Completed" : "Pending"  }</p>
        <button onClick={()=>handleDelete(id)} >DELETE</button>
        <button onClick={()=>handleToggle()} >TOGGLE</button>
    </div>
  )
}

export default TodoItem