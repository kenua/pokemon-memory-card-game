function Cards(props) {
    let handleClick = (e) => {
        e.preventDefault()

        let target = e.target;
        if (target.nodeName === 'IMG') target = target.parentElement

        let pokemonName = target.dataset.name
        let pokemonClicked = props.pokemon.filter(pokemon => (pokemon.name === pokemonName))[0]

        // reset score
        if (pokemonClicked.clicked) {
            props.resetScore()
            props.setPokemon(props.pokemon.map(item => ({...item, clicked: false})))
        } else {
            // increase score
            let newPokemonArray = [] 

            props.pokemon.forEach(item => newPokemonArray.push(Object.assign({}, item)))
            newPokemonArray = newPokemonArray.map(item => {
                if (item.name === pokemonName) item.clicked = true
                return item
            })
            props.setPokemon([...newPokemonArray])
            props.increaseScore()
        }
    }

    // Order pokemon randomly in ascending order
    // and create JSX list
    let pokemonList = []

    props.pokemon.forEach((item, index) => {
        pokemonList.push({
            ...item,
            order: Math.floor(Math.random() * (12 - index)),
        })
    })
    pokemonList.sort((a, b) => a.order - b.order)
    pokemonList = pokemonList.map(item => (
        <a 
            href='#' 
            key={item.name} 
            tabIndex='0' 
            onClick={handleClick}
            data-name={item.name}
        >
            <img src={item.url} />
            {item.name}
            {item.clicked ? '⛔' : '✔️'}
        </a>
    ))

    return (
        <>
            { pokemonList }
        </>
    )
}

export default Cards