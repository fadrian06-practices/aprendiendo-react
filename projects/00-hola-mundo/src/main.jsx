import { createRoot } from 'react-dom/client'
import './index.css'
import LikeButton from './components/LikeButton'

const root = createRoot(document.getElementById('root'))

root.render(
	<>
		<LikeButton text='Botón 1' />
		<LikeButton text='Botón 2' />
		<LikeButton text='Botón 3' />
	</>
)
