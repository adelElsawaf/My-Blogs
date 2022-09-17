import Posts from "../../components/Posts";
import Comments from "../../components/Comments";
export const getStaticProps = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await result.json();



  return {
    props: { posts: data }  

  }
}
const Post = ({posts}) => {
  return (
    <div> <Posts posts={posts}></Posts>
    </div>
   );
}
 
export default Post;