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
            <div>
              <h3>{user.username}</h3>
              <p>{user.email}</p>
              <a  className = "btn" href={'/users/' + user.id}>View User</a>
            </div>))}
        </div>

     );
}
 
export default Users;