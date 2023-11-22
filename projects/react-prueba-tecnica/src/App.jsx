import './App.css'
import { useEffect, useState } from 'react'

const ENDPOINTS = Object.freeze({
	RANDOM_FACT: 'https://catfact.ninja/factt',
	/** @param {string} fact */
	catImageUrlOf(fact) {
		return `https://cataas.com/cat/says/${fact}?fontSize=50&fontColor=white`
	}
})

export function App() {
	const [fact, setFact] = useState('')
	const [imageUrl, setImageUrl] = useState('')
	const [error, setError] = useState('')

	useEffect(() => {
		fetch(ENDPOINTS.RANDOM_FACT)
			.then((res) => {
				if (!res.ok) {
					throw new Error()
				}

				return res.json()
			})
			.then(({ fact: randomFact }) => setFact(randomFact))
			.catch(() => setError('Error consultando el hecho aleatorio'))
	}, [])

	useEffect(() => {
		// const [firstWord] = fact.split(' ')
		const firstFourWords = fact.split(' ', 3).join(' ')
		setImageUrl(ENDPOINTS.catImageUrlOf(firstFourWords))
	}, [fact])

	return (
		<main>
			<h1>App de gatitos</h1>
			<section>
				{fact && !error && <p>{fact}</p>}
				{error && (
					<p>
						<strong style={{ color: 'indianred' }}>&times; {error}</strong>
					</p>
				)}
				{imageUrl && <img src={imageUrl} alt={`First four words of ${fact}`} />}
			</section>
		</main>
	)
}
