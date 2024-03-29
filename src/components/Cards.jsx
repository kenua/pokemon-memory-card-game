import loadingIcon from '../assets/Spinner.svg'

function Cards(props) {
    if (props.loading) {
        return (
            <div className='cards'>
                <div className='cards__loading-item'>
                    <img src={loadingIcon} alt='' />
                </div>
            </div>
        )
    }

    let handleClick = (e) => {
        e.preventDefault()

        let target = e.target;

        if (target.nodeName !== 'A') {
            let anchorNode = target.closest('a')

            if (anchorNode) {
                target = anchorNode
            } else {
                return
            }
        }

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

        document.activeElement.blur()
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
            className='cards__card'
            href='#' 
            key={item.name} 
            tabIndex='0' 
            data-name={item.name}
        >
            <div className='cards__card-line'>
                <h2 className='cards__pokemon-name'>{item.name}</h2>
                <img src={item.url} className='cards__pokemon-image' width='170' height='170' alt={item.name}/>
            </div>
        </a>
    ))

    return (
        <div className='cards' onClick={handleClick}>{pokemonList}</div>
    )
}

export default Cards