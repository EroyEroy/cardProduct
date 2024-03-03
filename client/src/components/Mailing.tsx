import "@styles/components/mailing.scss"

export default function Mailing() {
	return (
		<section className="mailing">
			<div className="container">
				<div className="mailing__inner">
					<h2 className="mailing__title">Полезная рассылка</h2>
					<form className="mailing__body">
						<div style={{
							display: "flex",
							alignItems: "flex-end",
							gap: 97
						}}>
							<div className="myInput" style={{
								width: "284px"
							}}>
								<label htmlFor="email">
									<span>Почта</span>
								</label>
								<input type="email" placeholder="E-mail..." id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
							</div>
							<button className="mailing__button button" type="submit">Отправить</button>
						</div>
						<label className="myCheckbox">
							<input type="checkbox" hidden />
							<div className="checkbox"></div>
							<span>
								Подтверждаю свое согласие на обработку своих персональных данных <br />
								в соответствии с Политикой конфиденциальности
							</span>
						</label>
					</form>
				</div>
			</div>
		</section>
	)
}