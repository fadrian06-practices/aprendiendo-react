import { useEffect, useState } from 'react'
import './App.css'

function FollowMouse() {
	const [enabled, setEnabled] = useState(false)
	const [position, setPosition] = useState({ x: -20, y: -20 })

	useEffect(() => {
		const handleMove = ({ clientX, clientY }) => {
			setPosition({ x: clientX, y: clientY })
		}

		if (enabled) {
			window.addEventListener('pointermove', handleMove)
		}

		return () => {
			window.removeEventListener('pointermove', handleMove)
			setPosition({ x: -20, y: -20 })
		}
	}, [enabled])

	useEffect(() => {
		document.body.classList.toggle('no-cursor', enabled)

		return () => document.body.classList.remove('no-cursor')
	}, [enabled])

	return (
		<>
			<div
				style={{
					position: 'absolute',
					background: 'rgba(0, 0, 0, 0.5)',
					borderRadius: '50%',
					opacity: 0.8,
					pointerEvents: 'none',
					left: -20,
					top: -20,
					width: 40,
					height: 40,
					transform: `translate(${position.x}px, ${position.y}px)`,
					border: '3px solid white'
				}}
			/>
			<button type="button" onClick={() => setEnabled(!enabled)}>
				{enabled ? 'Desactivar' : 'Activar'} seguir puntero
			</button>
		</>
	)
}

export default function App() {
	return (
		<main>
			<FollowMouse />
		</main>
	)
}
