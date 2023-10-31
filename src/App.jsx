import { useState, useEffect } from 'react'
import Cards from './components/Cards'
import logoUrl from './assets/Logo.png'

// Replace these pokemon with other ones
let pokemonNames = [
	'Bulbasaur', 'Charmander', 'Squirtle',
	'Caterpie', 'Weedle', 'Pidgey',
	'Rattata', 'Ekans', 'Nidorina',
	'Vulpix', 'Oddish', 'Venomoth',
]

function Header() {
	return (
		<header className='header'>
			<img src={logoUrl} alt="Pokémon Memory Game" className='header__logo' width='266' height='143' />
			<p className='header__p'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. 
				Qui, ducimus laborum non est expedita tempora.
			</p>
		</header>
	)
}

function App() {
	let [score, setScore] = useState(0)
	let [highScore, setHighScore] = useState(0)
	let [pokemon, setPokemon] = useState([])

	let increaseScore = () => {
		setScore(score + 1)
	}

	let resetScore = () => {
		setHighScore(score)
		setScore(0)
	}

	useEffect(() => {
		// fetch pokemon data and populate `pokemon` state
		(async function() {
			try {
				let pokemons = []
	
				for (let i = 0; i < pokemonNames.length; i++) {
					let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNames[i].toLowerCase()}`
					let pokemonJson = await fetch(apiUrl)
					let pokemonData = await pokemonJson.json()
					let pokemonItem = {
						name: pokemonData.name,
						url: pokemonData.sprites.front_default,
						clicked: false,
					}
					pokemons.push(pokemonItem)
				}
	
				setPokemon(pokemons)

			} catch (err) {
				// any error could be handle using an error state variable
				console.log(err);
			}
		})()

	}, [])

	return (
		<>
			<Header />
			<div className='score-container'>
				<div className='card card--button'>
					<div className="card__line">
						<h2>Score: {score}</h2>
					</div>
				</div>
				<div className='card card--button'>
					<div className="card__line">
					Hish Score: {highScore}
					</div>
				</div>
			</div>
			<Cards pokemon={pokemon} setPokemon={setPokemon} increaseScore={increaseScore} resetScore={resetScore}/>
		</>
	)
}

export default App
