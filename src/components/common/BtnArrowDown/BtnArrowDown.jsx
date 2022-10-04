import s from './BtnArrowDown.module.scss';

const BtnArrowDown = ({ onClick, text, marginTop, disabled }) => {
	return (
		<>
			<button className={s.btn_arrow} disabled={disabled} onClick={onClick} style={{ marginTop: marginTop }}>
				<div className={s.btn_arrow_down}>
					<p className={s.text}>{text}</p>
					<div className={s.arrow_icon}>
						<div className={s.arrow_down_icon}></div>
					</div>
				</div>
			</button>
		</>
	);
};
export default BtnArrowDown;
