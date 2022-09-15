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
        return (<h2 className="checked">{toDoItem.title}</h2>)
    else
        return (<h2>{toDoItem.title}</h2>)
}
const Todos = ({ toDoList }) => {
    return (
        <div className="content">
            {toDoList.map(toDoItem => (
                <ul key={toDoItem.id} className='single'>
                <h2>{toDoItem.id}</h2>
                    <li>{handleFinishedItems(toDoItem)}</li>
                </ul>))}
        </div>);
}

export default Todos;
