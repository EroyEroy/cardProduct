import "@styles/components/footer.scss"
import Logo from "./Logo"
import { Link } from "react-router-dom"

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__inner">
					<div className="footer__column">
						<Logo />
						<div className="footer__social">
							<Link className="" to="" rel="noopener">
								<picture>
									<img src="./images/icons/telegram.svg" alt="telegram" />
								</picture>
							</Link>
							<Link className="" to="" rel="noopener">
								<picture>
									<img src="./images/icons/whatsapp.svg" alt="whatsapp" />
								</picture>
							</Link>
						</div>
						<span className="footer__copy">
							2024 © Все права <br /> защищены
						</span>
					</div>
					<div className="footer__column">
						<Link className="" to="" rel="noopener">
							Доставка/Оплата
						</Link>
						<Link className="" to="" rel="noopener">
							Каталог
						</Link>
						<Link className="" to="" rel="noopener">
							Политика обработки <br /> персональных данных
						</Link>
					</div>
					<div className="footer__column">
						<Link className="" to="" rel="noopener">
							О компании
						</Link>
						<Link className="" to="" rel="noopener">
							Услуги
						</Link>
						<Link className="" to="" rel="noopener">
							Гарантии
						</Link>
						<Link className="" to="" rel="noopener">
							Опыт
						</Link>
					</div>
					<div className="footer__column">
						<Link className="" to="" rel="noopener">
							Новости
						</Link>
						<Link className="" to="" rel="noopener">
							Контакты
						</Link>
					</div>
					<div className="footer__column">
						<Link className="footer__phone" to="tel:+7 (812) 904-91-57" rel="noopener">
							<picture>
								<img src="./images/icons/phone.svg" alt="phone" />
							</picture>
							+7 (812) 904-91-57
						</Link>
						<Link className="footer__address" to="https://yandex.ru/maps/2/saint-petersburg/house/gelsingforsskaya_ulitsa_4k1/Z0kYdQRlTUQCQFtjfXV2dXxmYA==/?ll=30.335416%2C59.974054&z=17" rel="noopener" target="_blank">Гельсингфорсская ул., 4 <br /> корпус 1, Санкт- <br /> Петербург, 194044</Link>
						<Link className="" to="mailto:HJYolv@woevg.com" rel="noopener">
							HJYolv@woevg.com
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}