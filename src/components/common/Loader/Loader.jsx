import s from './Loader.module.scss';
import loader from './loader.gif';

const Loader = (props) => {
	let { size, marginTop } = props;

	return (
		<div
			className={s.loader}
			style={{
				width: size,
				height: size,
				marginTop: marginTop,
			}}>
			<img src={loader} alt="" />
		</div>
	);
};
export default Loader;
