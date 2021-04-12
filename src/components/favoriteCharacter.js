import characterCard from "./characterCard"

export default function favoriteCharacter(props) {

    const showCharacters = () => {
        favorites.map(character => <characterCard character={character} />)
    }

    return (
        <ul className="favorites-list">
            {showCharacters()}
        </ul>
    )
}
