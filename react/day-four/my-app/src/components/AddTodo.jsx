import  { useState } from 'react'

function AddTodo({handleAdd}) {
    const [inputVal, setInputVal] = useState('');
    const handleClick=()=>{
        handleAdd(inputVal)
    }

    return (
        <div>
            <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
            <button onClick={()=>handleClick()} >ADD</button>
        </div>
    )
}

export default AddTodo