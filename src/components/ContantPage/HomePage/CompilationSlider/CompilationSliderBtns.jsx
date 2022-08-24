import s from './CompilationSlider.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';

const CompilationSliderBtns = ({ collaction }) => {
	return (
		<div className={s.collaction_container__row}>
			<Link className={s.collaction_container__title} to={`/movies/&${collaction.type}=${collaction.id}`}>
				{collaction.name}
			</Link>
			<Link className={s.collaction_container__link} to={`/movies/&${collaction.type}=${collaction.id}`}>
				Дивитися всі
			</Link>
		</div>
	);
};
export default React.memo(CompilationSliderBtns);
