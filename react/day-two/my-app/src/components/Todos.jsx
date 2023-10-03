import React, { useState } from 'react';
import styles from './Todos.module.css'

function Todos() {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])
    const handleText = (e) => {
        const val = e.target.value
        return setText(val)
    }

    const handleTodo = () => {
        const currentTimeInIST = new Date().toLocaleString();
        const newArr = [...todos, { Todo: text, Time: currentTimeInIST, status: false, id: Date.now() }]
        setTodos(newArr)
        setText("")
    }

    const handleToggle=(e,id)=>{
        const upd= todos.map((E,ID)=>{
            if(id===ID){
                return{...E, status:!E.status}
            }
            else{
                return {...E}
            }
        })
        setTodos(upd)
    }


    return (
        <div>
            <input type="text" placeholder='Write your todo here' value={text} onChange={handleText} />
            <button onClick={handleTodo} >ADD</button>
            <table className={styles.tableStyle} >
                <thead>
                    { todos.length>0 ?
                    <tr>
                        <th className={styles.thStyle} >Todo</th>
                        <th className={styles.thStyle} >Time</th>
                        <th className={styles.thStyle} >Status</th>
                        <th className={styles.thStyle} >Toggle</th>
                    </tr>
                    :
                        ""
                        }
                </thead>
                <tbody>
                    {
                        todos.map((e, id) => {
                            return <tr key={id}>
                                <td className={styles.tdStyle} > {e.Todo} </td>
                                <td className={styles.tdStyle} > {e.Time} </td>
                                <td className={styles.tdStyle} >
                                    {e.status ? 'Completed' : 'Pending'}
                                </td>
                                <td className={styles.tdStyle} >
                                    {e.status ? <button onClick={()=>handleToggle(e,id)} >Mark as pending</button> : <button onClick={()=>handleToggle(e,id)} >Mark as completed</button> }
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default Todos