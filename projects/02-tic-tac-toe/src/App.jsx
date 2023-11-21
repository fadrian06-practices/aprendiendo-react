import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkEndGame, checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Game } from './components/Game'
import { resetGameStorage, saveGame } from './storage'

export default function App() {
	const [board, setBoard] = useState(() => {
		const boardFromStorage = localStorage.getItem('board')

		return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
	})

	const [turn, setTurn] = useState(() => {
		const turnFromStorage = localStorage.getItem('turn')

		return turnFromStorage ?? TURNS.X
	})

	const [winner, setWinner] = useState(null)

	useEffect(() => {
		saveGame({ board, turn })
	}, [turn, board])

	const updateBoard = (index) => {
		if (board[index] || winner) {
			return
		}

		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)

		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)

		const newWinner = checkWinner(newBoard)

		if (newWinner) {
			confetti()
			setWinner(newWinner)
		} else if (checkEndGame(newBoard)) {
			setWinner(false)
		}
	}

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(TURNS.X)
		setWinner(null)
		resetGameStorage()
	}

	return (
		<main className="board">
			<h1>Tic tac toe</h1>
			<button type="button" onClick={resetGame}>
				Reiniciar el juego
			</button>
			<Game board={board} updateBoard={updateBoard} />
			<section className="turn">
				<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
				<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
			</section>
			<WinnerModal winner={winner} resetGame={resetGame} />
		</main>
	)
}
