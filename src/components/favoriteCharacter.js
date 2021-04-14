export default function favoriteCharacter(props) {

    const handleDelete = () => {
        console.log("delete", props.favorite)
    }

    return (
        <div className="favorite-character">
            <img alt="character" src={ props.favorite.image } onClick={handleDelete} />
            <h2>{ props.favorite.name }</h2>
            <p>{ props.favorite.species }</p>
            <p>{ props.favorite.status }</p>
        </div>
    );
}
