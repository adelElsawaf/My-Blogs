const Details = ({ post ,postOwner}) => {
    return (
        <div className="single">
        <h2>{postOwner.email}</h2>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
        </div>

    );
}

export default Details;