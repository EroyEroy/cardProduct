import "@styles/components/productSlider.scss"
import { useState } from "react"

export default function ProductSlider({ images }: { images: string[] }) {
	const [index, setIndex] = useState(0);

	return (
		<div
			className="productSlider"
			style={{
				backgroundImage: `url("${images[index]}")`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center"
			}}
		>
			<div className="productSlider__dots">
				{images.map((el, Elindex) =>
					<button className={`${index === Elindex ? "active" : ""}`} type="button" onClick={() => setIndex(Elindex)} key={Elindex}>
						<img src={el} alt="#" />
					</button>
				)}
			</div>
		</div>
	)
}