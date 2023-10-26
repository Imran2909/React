import { useEffect } from "react"
import { useState } from "react"


function PostItem() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    useEffect(() => {
        fetchAndUpdate(page)
    }, [page])
    
    function getData(page) {
        return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=11&_page=${page}`)
        .then((res) => res.json())
    }

    async function fetchAndUpdate(page) {
        try {
            setLoading(true)
            const vals = await getData(page)
            setData(vals)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handlePrev=(page)=>{
        setPage(page-1)
    }
    const handleNext=(page)=>{
        setPage(page+1)
    }

    return (
        <div>
            {
                loading ? <h1>Loading...</h1> :
                    data.map((el) => {
                        console.log(el);
                        return <div key={el.id} >
                            <h1> {el.title} </h1>
                            <p> {el.body} </p>
                    </div>
                })
            }
            <button disabled={page===1} onClick={()=>handlePrev(page)} >PREV</button>
            <button disabled >{page}</button>
            <button disabled={page===10} onClick={()=>handleNext(page)} >NEXT</button>
        </div>
    )
}

export default PostItem;