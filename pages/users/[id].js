import Image from 'next/image';
import userStyles from '../../styles/User.module.css';
import postsStyles from '../../styles/Posts.module.css'
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
    const postsFetch = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    const postsData = await postsFetch.json();
    return {
        props: { user: usersData, posts: postsData }
    }
}

const Details = ({ user, posts }) => {
    return (
        <div>
            <h1 className={userStyles.username}>{user.name}</h1>
            <div className={userStyles.Content}>
                <div className={userStyles.sideContent}>
                    <details className={userStyles.Contacts}>
                        <summary className={userStyles.sectionTitle}>Contact Info</summary>
                        <div>
                            <h3 className={userStyles.contactInfo}><Image src='/username-logo.png' width={40} height={40}></Image>{user.username}</h3>
                            <h3 className={userStyles.contactInfo}> <Image src='/email-logo.jpg' width={40} height={40}></Image> {user.email}</h3>
                            <h3 className={userStyles.contactInfo}> <Image src='/phone-logo.jpg' width={40} height={40}></Image>{user.phone}</h3>
                            <h3 className={userStyles.contactInfo}> <Image src='/website-logo.png' width={40} height={40}></Image>{user.website}</h3>
                        </div>
                    </details>
                    <hr />
                    <h3 className={userStyles.contactInfo}><Image src='/address-logo.png' width={40} height={40}></Image>{user.address.street}
                        , {user.address.suite} , {user.address.city}</h3>
                    <h3 className={userStyles.contactInfo} ><Image src='/geography-logo.jpg' width={40} height={40}></Image> {user.address.geo.lat}  ,
                        {user.address.geo.lng}</h3>
                    <hr />
                    <details className={userStyles.Contacts}>
                        <summary className={userStyles.sectionTitle}>Work  <Image src='/work-logo.jpg' width={40} height={40}></Image> </summary>
                        <div>

                            <h3 className={userStyles.contactInfo}> Works at {user.company.name} </h3>
                            <h3 className={userStyles.contactInfo}> Catch Phrase is  {user.company.catchPhrase}</h3>
                            <h3 className={userStyles.contactInfo}> Bs is {user.company.bs}</h3>
                        </div>
                    </details>

                </div>
                <div className={userStyles.mainContent}>
                    <h1>All Posts</h1>
                    {posts.map(post => (
                        <div className={postsStyles.single}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <a className='btn' href={'/posts/' + post.id}>View Post</a>
                        </div>))}
                </div>;
            </div>
        </div>)
}

export default Details;