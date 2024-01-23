import { catImageUrlOf, getRandomFact } from '../services/facts'
import { useEffect, useState } from 'react'

export function useCats() {
	const [fact, setFact] = useState('')
	const [imageUrl, setImageUrl] = useState('')
	const [error, setError] = useState('')

	const refreshFact = () => {
		getRandomFact()
			.then((randomFact) => {
				setFact(randomFact)
				setError('')
			})
			.catch(({ message }) => setError(message))
	}

	/** @param {{randomFact: string}} params */
	const getImageUrl = ({ randomFact }) => {
		if (!randomFact) {
			return ''
		}

		// const [firstWord] = randomFact.split(' ')
		const firstFourWords = randomFact.split(' ', 3).join(' ')
		const newImageUrl = catImageUrlOf(firstFourWords)

		setImageUrl(newImageUrl)

		return newImageUrl
	}

	useEffect(refreshFact, [])
	useEffect(() => {
		getImageUrl({ randomFact: fact })
	}, [fact])

	return { error, fact, getImageUrl, imageUrl, refreshFact }
}
