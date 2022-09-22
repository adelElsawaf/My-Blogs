import Posts from "../../components/posts/AllPosts";
import useFetch from "../../useFetch"

const Post = () => {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts"); 
   return (
    <div className="content">
    <h1>All Posts</h1>
    <Posts posts={posts.data}></Posts>
    </div>
  );
}

export default Post;