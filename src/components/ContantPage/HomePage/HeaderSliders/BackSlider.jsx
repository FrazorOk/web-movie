import s from './HeaderSliders.module.scss';
import { urlImg } from '../../../../api/api';

const BackSlider = (props) => {
	let { movieCollaction, currentImg } = props;

	const settings = {
		arrows: false,
		fade: true,
		dots: false,
		draggable: false,
		infinite: true,
		slidesToShow: 1,
		speed: 400,
	};

	return (
		<>
			{movieCollaction.length > 0 && (
				<div className={s.backgound_slider} style={{ backgroundImage: `url(${urlImg}${movieCollaction[currentImg].backdrop_path})` }}></div>
			)}
		</>
	);
};
export default BackSlider;
