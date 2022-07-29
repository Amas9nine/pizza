import ObjModuleKeys from './BasketModel.module.css'

function BasketModel() {
  return (
	<div className={ObjModuleKeys.wrapper}>
		<div className={ObjModuleKeys.darkBlock}>Dark side</div>
		<div className={ObjModuleKeys.modal}>Modal window</div>
	</div>
  )
}

export default BasketModel