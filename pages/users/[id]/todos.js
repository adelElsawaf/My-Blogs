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
    const toDosFetch = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
    const toDosData = await toDosFetch.json();
    return {
        props: { toDoList: toDosData }
    }
}
const handleFinishedItems = (toDoItem) => {
    if (toDoItem.completed == true)
        return ("checked")
}
const Todos = ({ toDoList }) => {
    var postNumber = 1;
    return (
        <div className="content">
            {toDoList.map(toDoItem => (
                <div key={toDoItem.id} className='single'>
                <h2>{postNumber}</h2>
                {postNumber+=1}
                <h2 className={handleFinishedItems(toDoItem)}>{toDoItem.title}</h2>
                </div>))}
        </div>);
}

export default Todos;
