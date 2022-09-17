
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
    const albumsFetch = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
    const albumsData = await albumsFetch.json();
    return {
        props: { albumsList: albumsData }
    }
}


const Albums = ({ albumsList }) => {
    return (
        <div className="content">
            <h1> Albums</h1>
            {albumsList.map(album => (
                <div key={album.id} className='single'>
                    <h2>{album.id}</h2>
                    <h2>{album.title}</h2>
                    <a className="btn" href={'/ablums/' + album.id }>View Photos</a>
                </div>))}
        </div>);
}

export default Albums;