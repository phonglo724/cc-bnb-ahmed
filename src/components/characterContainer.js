import CharacterCard from './characterCard'

export default function CharactersContainer(props) {

    const displayCharacters = () => {
        return props.characters.map(character => {
            return (
            <CharacterCard 
                key={character.id} 
                character={ character }
                setFavorite={ props.setFavorite }
            />
            )
        })
    }

    return (
        <section className="characters-container">
            { displayCharacters() }
        </section>
    )
}

// export default CharactersContainer;
