import Comments from '../../components/Comments';
import EachPost from '../../components/posts/EachPost'
import useFetch from '../../useFetch';

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

    return {
        props: {
            post: postsData
        }
    }
}

const Details = ({ post }) => {
    const postOwner = useFetch("https://jsonplaceholder.typicode.com/users/" +post.userId).data;
    return (
        <div className='content'>
            <hr />
            <EachPost post={post} postOwner={postOwner}></EachPost>
            <h1>Comments</h1>
            <Comments postId={post.id}></Comments>
        </div>

    );
}

export default Details;