import React, { useState } from 'react';

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
};

const thStyle = {
    background: '#f2f2f2',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '8px',
};

const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
};

function Todos() {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])
    const handleText = (e) => {
        const val = e.target.value
        console.log(val)
        return setText(val)
    }

    const handleTodo = () => {
        const currentTimeInIST = new Date().toLocaleString();
        const newArr = [...todos, { Todo: text, Time: currentTimeInIST, status: false }]
        setTodos(newArr)
        setText("")
    }

    const handleToggle=()=>{
        
    }

    console.log(todos);

    return (
        <div>
            <input type="text" placeholder='Write your todo here' value={text} onChange={handleText} />
            <button onClick={handleTodo} >ADD</button>
            <table style={tableStyle} >
                <thead>
                    <tr>
                        <th style={thStyle} >Todo</th>
                        <th style={thStyle} >Time</th>
                        <th style={thStyle} >Status</th>
                        <th style={thStyle} >Toggle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((e, id) => {
                            return <tr key={id}>
                                <td style={tdStyle} > {e.Todo} </td>
                                <td style={tdStyle} > {e.Time} </td>
                                <td style={tdStyle} >
                                    {e.status ? 'completed' : 'Pending'}
                                </td>
                                <td style={tdStyle} >
                                    {e.status ? <button onClick={handleToggle} >Mark as pending</button> : <button onClick={handleToggle} >Mark as completed</button> }
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