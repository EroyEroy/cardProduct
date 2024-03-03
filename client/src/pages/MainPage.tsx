import Mailing from "../components/Mailing";
import ProductCard from "../components/ProductCard";
import TreeLinks from "../components/TreeLinks";

export default function MainPage() {
	return (
		<>
			<TreeLinks />
			<ProductCard />
			<Mailing />
		</>
	)
}