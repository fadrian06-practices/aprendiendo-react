import { useState } from 'react'

/** @param {{userName: string, initialFollowind: boolean}} props */
export function TwitterFollowCard({
	children,
	userName = 'unknown',
	initialFollowind = false
}) {
	const [isFollowing, setIsFollowind] = useState(initialFollowind)

	const followText = isFollowing ? 'Siguiendo' : 'Seguir'
	const buttonClassName = isFollowing
		? 'tw-followCard-followBtn is-following'
		: 'tw-followCard-followBtn'

	const toggleFollow = () => {
		setIsFollowind(!isFollowing)
	}

	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img
					className="tw-followCard-avatar"
					src={`https://unavatar.io/${userName}`}
					alt={`${userName} github avatar`}
				/>
			</header>
			<div className="tw-followCard-info">
				<strong>{children}</strong>
				<span className="tw-followCard-username">@{userName}</span>
			</div>
			<aside className="tw-followCard-btnContainer">
				<button className={buttonClassName} onClick={toggleFollow} type="button">
					<span className="tw-followCard-btnText">{followText}</span>
					<span className="tw-followCard-stopFollow">Dejar de seguir</span>
				</button>
			</aside>
		</article>
	)
}
