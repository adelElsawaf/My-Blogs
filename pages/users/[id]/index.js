import PostsByUserId from '../../../components/posts/PostsByUserId'
import userStyles from '../../../styles/User.module.css';
import Information from '../../../components/users/Informations';
export const getStaticPaths = async () => {
    const usersFetch = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersData = await usersFetch.json();



    // map data to an array of path objects with params (id)
    const paths = usersData.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const usersFetch = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const usersData = await usersFetch.json();
    return {
        props: { user: usersData }
    }
}

const Details = ({ user }) => {
    return (
        <div>   
            <div className={userStyles.Content}>
            <div className={userStyles.sideContent}>
                <Information user={user}></Information>
                </div>
                <div className={userStyles.mainContent}>
                    <div className={userStyles.Title}>
                        <h1 className={userStyles.username}>{user.name}</h1>
                        <a className='btn' href={`${user.id}/todos`} >View To Do List</a>   
                    </div>
                    <h1>Posts</h1>
                    <PostsByUserId userId={user.id}></PostsByUserId>
                </div>;
            </div>
        </div>)
}

export default Details;