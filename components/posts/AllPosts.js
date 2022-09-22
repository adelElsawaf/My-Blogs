
const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
      <div key = {post.id} className="single">
        <h3>{post.title}</h3>
          <p>{post.body}</p>
          <a className='btn' href={'/posts/' + post.id}>View Post</a>
        </div>))}
    </div>
  );
}

export default Posts;