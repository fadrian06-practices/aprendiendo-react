import './App.css'
import { useCats } from './hooks/useCats'

export function App() {
	const { error, fact, refreshFact, imageUrl } = useCats()

	return (
		<main>
			<h1>App de gatitos</h1>
			<button type='button' onClick={refreshFact}>
				Obtener un nuevo hecho
			</button>
			<section>
				{fact && !error && <p>{fact}</p>}
				{error && (
					<p>
						<strong style={{ color: 'indianred' }}>&times; {error}</strong>
					</p>
				)}
				{imageUrl && !error && <img src={imageUrl} alt={`First four words of ${fact}`} />}
			</section>
		</main>
	)
}
