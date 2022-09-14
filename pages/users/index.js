import styles from '../../styles/Users.module.css'
export const getStaticProps = async () => {
    const usersFetch = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await usersFetch.json();
    return {
        props:{users : usersData}
    }
}

const Users = ({users}) => {
    return ( 
        <div  className="content" >
        <h1>All Users</h1>
        {users.map(user => (
            <div className="single">
              <h1 className={styles.username}>{user.username}</h1>
              <h5 className={styles.work}>Works at {user.company.name}</h5>
              <h2>{user.email}</h2>
              <a  className = "btn" href={'/users/' + user.id}>View User</a>
            </div>))}
        </div>

     );
}
 
export default Users;