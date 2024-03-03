import ProductSidebar from "./ProductSidebar";
import "@styles/components/productCard.scss"
import ProductSlider from "./ProductSlider";
import { useState } from "react";

const imagesSlider: string[] = ["./images/product.png", "./images/product.png", "./images/product.png"];

export default function ProductCard() {
	const [isDoc, setIsDoc] = useState<boolean>(false);

	return (
		<>
			<div className="productCard">
				<div className="container">
					<div className="productCard__inner">
						<ProductSidebar />
						<div className="productCard__body">
							<h1 className="productCard__title">ИБП CyberPower BU600E</h1>
							<div className="productCard__info">
								<ProductSlider images={imagesSlider} />
								<div className="productCard__right">
									<div style={{
										marginBottom: 24,
									}}>Артикул: <span style={{
										fontWeight: 800
									}}>3434е3о</span></div>
									<div>Watts <span>360</span></div>
									<div>Выходное напряжение ( В перем. ) <span>230 ± 10%</span></div>
									<div>Время работы при 90Вт ( мин ) <span>18</span></div>
									<div>Выходные разъемы <span>Schuko x 3</span></div>
									<div className="productCard__price">
										<span className="new">23 000 р.</span>
										<span className="old">
											<span className="discount">-20%</span>
											23 000 р.
										</span>
										<div className="counter">
											<button type="button">+</button>
											<span>1</span>
											<button type="button">+</button>
										</div>
									</div>
									<div className="productCard__buttons">
										<button className="button">В корзину</button>
										<button className="button button--accent">Быстрый заказ</button>
									</div>
								</div>
							</div>
							<div className="tabs">
								<button className={!isDoc ? "active" : ""} onClick={() => setIsDoc(false)} type="button">Характеристики</button>
								<button className={isDoc ? "active" : ""} onClick={() => setIsDoc(true)} type="button">Документация</button>
							</div>
							<ul className="tabsContent">
								{!isDoc
									?
									<>
										<li className="tabsContent__item">
											<span>Производитель</span>
											<span>CyberPower</span>
										</li>
										<li className="tabsContent__item">
											<span>Страна производства</span>
											<span>Тайвань</span>
										</li>
										<li className="tabsContent__item">
											<span>Мощность выход</span>
											<span>340 W</span>
										</li>
										<li className="tabsContent__item">
											<span>Напряжение вход/выход</span>
											<span>220 V</span>
										</li>
										<li className="tabsContent__item">
											<span>Количество фаз вход/выход</span>
											<span>3</span>
										</li>
									</>
									:
									<>
										<li className="tabsContent__card">
											<img src="./images/icons/file.svg" alt="документ" />
											Документ.pdf
										</li>
										<li className="tabsContent__card">
											<img src="./images/icons/file.svg" alt="документ" />
											Документ2.docx
										</li>
									</>
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}