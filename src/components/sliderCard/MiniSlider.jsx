import React from 'react'
import objModuleKeys from './MiniSlider.module.css'

function MiniSlider(props) {
  return (
	<div className={objModuleKeys.wrapper}>
		<img src={props.imgM} alt="" />
	</div>
  )
}

export default MiniSlider