import BasketModel from '../basketModal/BasketModel'
import moduleObjectKeyS from './Header.module.css'

function Header() {

	{/* <HEADER TWO /> { */ }
	function onBasketOpen(event) {
		// event.preventDefault()
		alert(`its ok`)
	}

	{/* <HEADER TWO /> }*/ }

	return (
		<header className='container'>
			<div className={moduleObjectKeyS.Header}>

				<div className={moduleObjectKeyS.Left}>

					<div className={moduleObjectKeyS.One}>
						<a href='#' target_blank>
							<img className={moduleObjectKeyS.imgD} alt="DODO_PIZZA" src="https://image.winudf.com/v2/image1/cnUuZG9kb3BpenphLmFwcF9pY29uXzE2MTMwNTg2NzJfMDUw/icon.png?w=&fakeurl=1" />
							<div>
								<h1>DODO PIZZA</h1>
							</div>
						</a>
					</div>

					<div className={moduleObjectKeyS.Two}>
						<div className={moduleObjectKeyS.MediumBlackHeaderP}>
							Доставка пиццы Бишкек
							<div>
								37 мин 4.62
								<img className={moduleObjectKeyS.imgStar} src="https://affaso.com/wp-content/uploads/2020/06/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png" alt="" />
								<img className={moduleObjectKeyS.imgStar} src="https://affaso.com/wp-content/uploads/2020/06/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png" alt="" />
								<img className={moduleObjectKeyS.imgStar} src="https://affaso.com/wp-content/uploads/2020/06/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png" alt="" />
								<img className={moduleObjectKeyS.imgStar} src="https://affaso.com/wp-content/uploads/2020/06/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png" alt="" />

							</div>
						</div>
					</div>

					<div className={moduleObjectKeyS.Three}>
						<a href='#' target="_blank" className={moduleObjectKeyS.MediumBlackHeaderP}>
							0 (551) 550-550
							<div className={moduleObjectKeyS.MediumGreyHeader}>
								Звонок по телефону
							</div>
						</a>
					</div>

				</div>

				<div className={moduleObjectKeyS.Right}>
					<a href='#' target="_blank">
						<img className={moduleObjectKeyS.imgD} alt="D" src="https://www.seekpng.com/png/detail/28-288889_d-twitch-emote-transparent.png" />
						<div className={moduleObjectKeyS.MediumBlackHeaderP}>
							Додокоины
						</div>
					</a>
					<div className={moduleObjectKeyS.Btn}>
						<button className='btn'>
							<a className={moduleObjectKeyS.a_GoInButton} href="#" target="_blank">
								Войти
							</a>
						</button>
					</div>
				</div>
			</div>



			{/* <HEADER TWO /> */}

			<div className={moduleObjectKeyS.HeaderTwo}>
				<div className={moduleObjectKeyS.LeftTwoHeader}>
					<a href='#' target_blank>Пицца</a>
					<a href='#' target_blank>Комбо</a>
					<a href='#' target_blank>Закуски</a>
					<a href='#' target_blank>Десерты</a>
					<a href='#' target_blank>Напитки</a>
					<a href='#' target_blank>Другие товары</a>
					<a href='#' target_blank>Акции</a>
					<a href='#' target_blank>Контакты</a>
					<a href='#' target_blank>О нас</a>
					<a href='#' target_blank>Прямой эфир</a>
				</div>
				<div className={moduleObjectKeyS.RightTwoHeader}>
					<button onClick={onBasketOpen} className='btn'>
						<a className={moduleObjectKeyS.a_Basket} href="#" target="_blank">
							Корзина
						</a>
					</button>

					<BasketModel />

				</div>
			</div>

			<div>

			</div>
		</header>
	)
}

export default Header