
const Posts = ({ posts }) => {
  return (
    <div className="content" >
      <h1>All Posts</h1>
      
      {posts.map(post => (
      <div className="single">
        <h3>{post.title}</h3>
          <p>{post.body}</p>
          <a className='btn' href={'/posts/' + post.id}>View Post</a>
        </div>))}
    </div>
  );
}

export default Posts;