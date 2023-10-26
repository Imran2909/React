import AddTodo from './AddTodo';
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';

const fetchData = () => {
    return fetch("http://localhost:3000/todos").then((res) => res.json())
};

function Todo() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    const fetchAndUpdateData = async () => {
        try {
            setLoading(true);
            let val = await fetchData();
            setData(val)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }
    const addData = async () => {
        try {
            let val = await fetchData();
            setData(val)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        fetchAndUpdateData();
    }, [])

    const handleAdd = (inputVal) => {
        const newTodo = {
            title: inputVal,
            status: false
        };
        fetch('http://localhost:3000/todos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(() => {
            addData()
        });
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/todos/${id}`, {
            method: "DELETE"
        }).then(() => {
            addData()
        })
    }

    const handleUpdate=(id,body)=>{
        fetch(`http://localhost:3000/todos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(() => {
            addData()
        })
    }

    return (
        <>
            <AddTodo handleAdd={handleAdd} />
            {
                loading ? (<h1>Loading....</h1>) :
                    error ? (<h1>Error</h1>) :
                        (data.map((data) => <TodoItem key={data.id} {...data} handleDelete={handleDelete}
                        handleUpdate={handleUpdate} />))
            }
        </>
    )
}

export default Todo