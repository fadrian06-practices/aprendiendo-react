import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

const users = [
	{
		userName: 'midudev',
		fullName: 'Miguel Ángel Durán',
		isFollowing: true
	},
	{
		userName: 'fadrian06',
		fullName: 'Franyer Sánchez',
		isFollowing: false
	},
	{
		userName: 'theviolinistgirl',
		fullName: '********',
		isFollowing: true
	}
]
export function App() {
	return (
		<main className="App">
			{users.map(({ isFollowing, userName, fullName }) => (
				<TwitterFollowCard key={userName} initialFollowind={isFollowing} userName={userName}>
					{fullName}
				</TwitterFollowCard>
			))}
		</main>
	)
}
