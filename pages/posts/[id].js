import styles from '../../styles/Post.module.css'
import Comments from '../../components/Comments';
export const getStaticPaths = async () => {
    const postsFetch = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsData = await postsFetch.json();



    // map data to an array of path objects with params (id)
    const paths = postsData.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const postsFetch = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const postsData = await postsFetch.json();
    const commentFetch = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const commentData = await commentFetch.json();

    return {
        props: {
            comments: commentData
            , post: postsData
        }
    }
}
const Details = ({ post, comments }) => {
    return (
        <div className={styles.content}>
            <h1>Post</h1>
            <hr />
            <h3>{post.title}</h3>
            <h2>{post.body}</h2>
            <h1>Comments</h1>
            <hr />
            <Comments postId={post.id}></Comments>
        </div>

    );
}

export default Details;