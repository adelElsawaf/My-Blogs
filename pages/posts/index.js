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
    <div>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div className={styles.single}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <a className={styles.btn} href={'/posts/' + post.id} key={post.id}>view post</a>
        </div>))}
    </div>
  );
}

export default Posts;