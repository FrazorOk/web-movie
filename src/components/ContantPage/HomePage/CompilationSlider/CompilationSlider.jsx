import s from './CompilationSlider.module.scss';
import { selectCompilations, selectHomeFetching, selectHomeMovieCollections } from '../../../../selectors/home-selector';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getNextComplilationsMovie } from '../../../../store/home-reducer';
import SliderItem from './SliderItem';
import CompilationSliderBtns from './CompilationSliderBtns';
import React from 'react';

const CompilationSlider = () => {
	let compilations = useSelector(selectCompilations);
	let movieCollactions = useSelector(selectHomeMovieCollections);
	let homeFetching = useSelector(selectHomeFetching);

	let [currentIndex, setCurrentIndex] = useState(2);
	let dispatch = useDispatch();

	useEffect(() => {
		if (homeFetching && currentIndex <= compilations.length) {
			dispatch(getNextComplilationsMovie(compilations, currentIndex));

			setCurrentIndex(currentIndex + 1);
		}
	}, [homeFetching]);

	return (
		<>
			{movieCollactions.map((collaction, index) => {
				return (
					<div key={'collaction' + index} className={s.collaction_container}>
						<CompilationSliderBtns collaction={collaction} />
						<SliderItem collaction={collaction} />
					</div>
				);
			})}
		</>
	);
};
export default React.memo(CompilationSlider);
