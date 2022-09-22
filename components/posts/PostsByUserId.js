import useFetch from '../../useFetch'
const Comments = ({ userId }) => {
    const { data: posts, error, isPending } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    return (
        <div className="content">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {posts.map(post => (
                <div className="single">
                <h2>{post.title}</h2>
                <h3>{post.body}</h3>
                </div>
            ))}
        </div>
    )
}

export default Comments;