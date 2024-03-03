import "@styles/components/treelinks.scss"
import { Link } from "react-router-dom"

export default function TreeLinks() {
	return (
		<div className="treelinks">
			<div className="container">
				<div className="treelinks__inner">
					<Link to="/" rel="noopener">Главная</Link>
					&nbsp;
					/
					&nbsp;
					<Link to="/" rel="noopener">Каталог</Link>
					&nbsp;
					/
					&nbsp;
					<Link to="/" rel="noopener">ИБП CyberPower</Link>
					&nbsp;
					/
					&nbsp;
					<Link to="/" rel="noopener">BU600E</Link>
				</div>
			</div>
		</div>
	)
}