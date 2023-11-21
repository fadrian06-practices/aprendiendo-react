import { Square } from './Square'

export function Game({ board, updateBoard }) {
	return (
		<section className="game">
			{board.map((square, index) => {
				const key = index

				return (
					<Square key={key} index={index} updateBoard={updateBoard}>
						{square}
					</Square>
				)
			})}
		</section>
	)
}
