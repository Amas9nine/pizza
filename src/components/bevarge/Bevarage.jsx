import React from 'react'
import ModuleObjectKeys from './Bevarage.module.css'

function Bevarage(props) {
  return (
    <div className={ModuleObjectKeys.wrapper}>
      <div className={ModuleObjectKeys.imageWrapper}>
        <img
          src={props.img || "https://cdn.picpng.com/pizza/pizza-pizza-icon-pizza-slice-56532.png"} alt="GOOD BEVARAGE"
        />
      </div>
      <div className={ModuleObjectKeys.title}> {props.title}</div>
      <div className={ModuleObjectKeys.description}>{props.description}</div>
      <div className={ModuleObjectKeys.footer}>
        <div className={ModuleObjectKeys.price}>от {props.price} сом</div>
        <button className="btn">Выбрать</button>
      </div>
    </div>
  )
}

export default Bevarage