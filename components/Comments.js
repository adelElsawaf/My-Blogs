import { useState, useEffect } from "react"
function fetchComments(postId) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/post/${postId}/comments`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    return (
        <div>
            {data.map(d => (
                <div className="single">
                    <h1>{d.email}</h1>
                    <h1>{d.body}</h1>
                </div>))}
        </div>
    )
}



const Comments = ({ postId }) => {
    return (fetchComments(postId));
}

export default Comments;