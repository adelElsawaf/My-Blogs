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
                    <div className={userStyles.Contacts}>
                        <h1 className={userStyles.sectionTitle}>Contact Info</h1>
                        <section>
                            <h3 className={userStyles.dataInfo}><Image src='/username-logo.png' width={35} height={35}></Image>{user.username}</h3>
                            <h3 className={userStyles.dataInfo}> <Image src='/email-logo.jpg' width={35} height={35}></Image> {user.email}</h3>
                            <h3 className={userStyles.dataInfo}> <Image src='/phone-logo.jpg' width={35} height={35}></Image>{user.phone}</h3>
                            <h3 className={userStyles.dataInfo} > <Image src='/website-logo.png' width={35} height={35}></Image>{user.website}</h3>
                            </section>
                    </div>
                    <hr />
                    <section>
                        <h1 className={userStyles.sectionTitle}>Address Info</h1>
                        <h3 className={userStyles.dataInfo}><Image src='/address-logo.png' width={35} height={35}></Image>{user.address.street}
                            , {user.address.suite} , {user.address.city}</h3>
                        <h3 className={userStyles.dataInfo} ><Image src='/geography-logo.jpg' width={35} height={35}></Image> {user.address.geo.lat}  ,
                            {user.address.geo.lng}</h3>
                    </section>
                    <hr />
                    <section>
                        <h1 className={userStyles.sectionTitle}> Work</h1>
                        <div>
                            <h3 className={userStyles.dataInfo}> Works at {user.company.name} </h3>
                            <h3 className={userStyles.dataInfo}> Catch Phrase is  {user.company.catchPhrase}</h3>
                            <h3 className={userStyles.dataInfo}> Bs is {user.company.bs}</h3>
                        </div>
                    </section>

                </div>

                <div className={userStyles.mainContent}>
                <h1>Posts</h1>
                    {posts.map(post => (
                        <div className='single'>
                            <h1>{user.email}</h1>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <a className='btn' href={'/posts/' + post.id}>View Post</a>
                        </div>))}
                </div>;
            </div>
        </div>)
}

export default Details;