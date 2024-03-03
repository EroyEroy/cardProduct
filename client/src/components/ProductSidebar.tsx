import { Link } from "react-router-dom";
import "@styles/components/productSidebar.scss"

const categs = ["Интерактивные ИБП",
	"SMART и онлайн ИБП",
	"Трехфазные системы",
	"Распределители питания",
	"Мониторинг и управление",
	"ИБП для систем отопления",
	"Сетевые фильтры",
	"Стабилизатор напряжения",
	"Батареи",
	"Программное обеспечение",
	"Технологии"];

const maker = ["Мониторинг и управление",
	"ИБП для систем отопления",
	"Сетевые фильтры",
	"Стабилизатор напряжения",
	"Батареи"
];

export default function ProductSidebar() {
	return (
		<div className="productSidebar">
			<div className="productSidebar__column">
				<p className="productSidebar__title">
					Категория
				</p>
				{categs.map((el, index) =>
					<Link to="/" rel="noopener" key={index}>
						<div className="square"></div>
						{el}
					</Link>
				)}
			</div>
			<div className="productSidebar__column">
				<p className="productSidebar__title">
					Производитель
				</p>
				{maker.map((el, index) =>
					<Link to="/" rel="noopener" key={index}>
						<div className="square"></div>
						{el}
					</Link>
				)}
			</div>
		</div>
	)
}