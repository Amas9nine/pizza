import React from 'react'
import css from './PizzaCard.module.css'

function PizzaCard(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img
          src="https://cdn.picpng.com/pizza/pizza-pizza-icon-pizza-slice-56532.png"
          alt="GOOD PIZZA"
        />
      </div>
      <div className={css.title}>{props.title}</div>
      <div className={css.description}>{props.description}</div>
      <div className={css.footer}>
        <div className={css.price}>от {props.price} сом</div>
        <button className="btn">Выбрать</button>
      </div>
    </div>
  )
}

export default PizzaCard
