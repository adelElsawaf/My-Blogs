export const getStaticProps = async () => {
    const albumsFetch = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albumsData = await albumsFetch.json();
    return {
        props:{albumsList : albumsData}
    }
}

const Users = ({albumsList}) => {
    return ( 
        <div  className="content" >
        <h1>All Albums</h1>
        {albumsList.map(album => (
            <div key={album.id} className="single">
              <h1>{album.id}</h1>
              <h2>{album.title}</h2>
              <a  className = "btn" href={"ablums/" + album.id}>Album Photos</a>
            </div>))}
        </div>

     );
}
 
export default Users;