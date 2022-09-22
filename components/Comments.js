import useFetch from "../useFetch";
const Comments = ({ postId }) => {
    const { data: comments, error, isPending } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return (
        <div className="content">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {comments.map(comment => (
                <div key={comment.id} className="single">
                <h2>{comment.email}</h2>
                <h1>{comment.name}</h1>
                <h3>{comment.body}</h3>
                </div>
            ))}
        </div>
    )
}

export default Comments;