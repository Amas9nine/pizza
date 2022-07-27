import React from 'react'
import ModuleObjectKeys from './Bevarage.module.css'

function Bevarage(props) {
  return (
	<div className={ModuleObjectKeys.wrapper}>
      <div className={ModuleObjectKeys.imageWrapper}>
        <img
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/b5f113ca1255415a89e6c2b542484a27_292x292.jpeg"
          alt="GOOD BEVARAGE"
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