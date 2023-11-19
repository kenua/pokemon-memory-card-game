import { useState, useEffect } from 'react'
import Score from './components/Score'
import Cards from './components/Cards'

let pokemonNames = [
	'Mankey', 'Geodude', 'Doduo',
	'Metapod', 'Oddish', 'Diglett',
	'Abra', 'Poliwag', 'Dratini',
	'Vulpix', 'Charmander', 'Meowth',
]

function ErrorMessage() {
	return (
		<div className='error-message'>
			<p className='error-message__title'>
				❌
				<br/> 
				Something went wrong
				</p> 
			<p className='error-message__desc'>Please reload page or try again later.</p>
		</div> 
	)
}

function App() {
	let [score, setScore] = useState(0)
	let [highScore, setHighScore] = useState(0)
	let [pokemon, setPokemon] = useState([])

	let [loading, setLoading] = useState(true)
	let [error, setError] = useState(null)

	let increaseScore = () => {
		setScore(score + 1)
	}

	let resetScore = () => {
		setHighScore(score)
		setScore(0)
	}

	useEffect(() => {
		async function getPokemon() {
			try {
				let fetchPromises = pokemonNames.map(
					pokemon => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`, { mode: 'cors'})
				)
				let responseArr = await Promise.all(fetchPromises)
	
				for (let responseObj of responseArr) {
					if (responseObj.status >= 400) {
						throw new Error('Server Error')
					}
				}
	
				let pokemonData = await Promise.all(responseArr.map(res => res.json()))

				setPokemon(pokemonData.map(pokemonObj => ({ 
					name: pokemonObj.name, 
					url: pokemonObj.sprites.other.home.front_default, 
					clicked: false, 
				})))
				setLoading(false)

			} catch (err) {
				setError(err.message)
			}
		}

		getPokemon()
	}, [])

	return (
		<div className='wrapper'>
			<Score score={score} highScore={highScore} />
			{ error && 
				<ErrorMessage />
			}
			{ !error && 
				<Cards 
					pokemon={pokemon} 
					setPokemon={setPokemon} 
					increaseScore={increaseScore} 
					resetScore={resetScore}
					loading={loading}
				/>
			}
		</div>
	)
}

export default App
