import { Link } from "react-router-dom"

export default function Logo() {
	return (
		<Link className="logo" to="/" rel="noopener">
			<picture>
				<img src="./images/logo.png" alt="логотип" />
			</picture>
		</Link>
	)
}