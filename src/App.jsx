import { useState, useEffect } from 'react'
import Score from './components/Score'
import Cards from './components/Cards'

let pokemonNames = [
	'Mankey', 'Geodude', 'Doduo',
	'Metapod', 'Oddish', 'Diglett',
	'Abra', 'Poliwag', 'Dratini',
	'Vulpix', 'Charmander', 'Meowth',
]

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
						url: pokemonData.sprites.other.home.front_default,
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
		<div className='wrapper'>
			<Score score={score} highScore={highScore} />
			<Cards pokemon={pokemon} setPokemon={setPokemon} increaseScore={increaseScore} resetScore={resetScore}/>
		</div>
	)
}

export default App
