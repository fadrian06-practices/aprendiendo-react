const ENDPOINTS = Object.freeze({
	RANDOM_FACT: 'https://catfact.ninja/fact',
	CAT_PREFIX_IMAGE_URL: 'https://cataas.com/cat/says',
	/** @param {string} fact */
	catImageUrlOf(fact) {
		return `${this.CAT_PREFIX_IMAGE_URL}/${fact}?fontSize=50&fontColor=white`
	}
})

/** @type {() => Promise<string>} */
export const getRandomFact = async () => {
	try {
		const res = await fetch(ENDPOINTS.RANDOM_FACT)

		if (!res.ok) {
			throw new Error()
		}

		const { fact } = await res.json()

		return fact
	} catch {
		throw new Error('Error consultando el hecho aleatorio')
	}
}

export const { catImageUrlOf, CAT_PREFIX_IMAGE_URL } = ENDPOINTS
