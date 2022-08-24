import s from './BtnArrowDown.module.scss';
// props onClick
// props text
// props marginTop
// props disabled

const BtnArrowDown = (props) => {
	return (
		<>
			<button className={s.btn_arrow} disabled={props.disabled} onClick={props.onClick} style={{ marginTop: props.marginTop }}>
				<div className={s.btn_arrow_down}>
					<p className={s.text}>{props.text}</p>
					<div className={s.arrow_icon}>
						<div className={s.arrow_down_icon}></div>
					</div>
				</div>
			</button>
		</>
	);
};
export default BtnArrowDown;
