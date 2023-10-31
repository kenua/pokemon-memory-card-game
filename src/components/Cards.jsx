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
            className='card card--pokemon'
            href='#' 
            key={item.name} 
            tabIndex='0' 
            onClick={handleClick}
            data-name={item.name}
        >
            <div className='card__line'>
                <h2 className='card__pokemon-name'>{item.name}</h2>
                <img src={item.url} className='card__pokemon' width='192' height='192'/>
            </div>
        </a>
    ))

    return (
        <div className='cards-container'>{pokemonList}</div>
    )
}

export default Cards