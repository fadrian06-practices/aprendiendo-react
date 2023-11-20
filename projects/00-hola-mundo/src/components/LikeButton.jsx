import LikeIcon from '../icons/LikeIcon'

/** @param {{text: string}} props */
export default function LikeButton({ text }) {
	return (
		<button type='button'>
			<LikeIcon />
			{text}
		</button>
	)
}
