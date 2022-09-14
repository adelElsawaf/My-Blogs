import Link from 'next/link'
import styles from '../../styles/Posts.module.css';

export const getStaticProps = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await result.json();



  return {
    props: { posts: data }

  }
}


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