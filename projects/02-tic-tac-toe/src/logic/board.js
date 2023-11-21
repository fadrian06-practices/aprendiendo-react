import { WINNER_COMBOS } from '../constants'

export const checkWinner = (boardToCheck) => {
	for (const [a, b, c] of WINNER_COMBOS) {
		if (
			boardToCheck[a] &&
			boardToCheck[a] === boardToCheck[b] &&
			boardToCheck[a] === boardToCheck[c]
		) {
			return boardToCheck[a]
		}
	}

	return null
}

export const checkEndGame = (newBoard) => {
	return newBoard.every((square) => square !== null)
}