export default function characterCard(props) {

    const handleClick = () => {
        props.setFavorite(props.character)
        // console.log('character click', props.character)
    }

    return (
        <div className="character-card">
            <img 
                alt="character" 
                src={ props.character.image } 
                onClick={handleClick}
            />
            <h2>{ props.character.name }</h2>
            <p>{ props.character.species }</p>
            <p>{ props.character.status }</p>
        </div>
    )
}

// picture
// name
// species
// status