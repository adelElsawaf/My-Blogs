import { useRouter } from "next/router";
export const getStaticPaths = async () => {
    const albumsFetch = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albumsData = await albumsFetch.json();



    // map data to an array of path objects with params (id)
    const paths = albumsData.map(album => {
        return {
            params: { id: album.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const albumFetch = await fetch('https://jsonplaceholder.typicode.com/albums/' + id);
    const albumData = await albumFetch.json();
    const photosFetch = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
    const photosData = await photosFetch.json();

    return {
        props: {
            album: albumData
            , photos: photosData
        }
    }
}
const Details = ({ album, photos }) => {
    return (
        <div className="content">
            <div>
                <h1>{album.title}</h1>
                <div>
                <hr></hr>
                    {photos.map(photo => (
                        <div className="single">   
                        <h1>{photo.id}</h1>
                            <h2>{photo.title}</h2>
                            <a href = {photo.url} target="_blank"><img src={photo.thumbnailUrl}></img></a>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default Details;