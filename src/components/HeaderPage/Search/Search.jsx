import s from './Search.module.scss';
import clipart from './clipart.png';
import { Navigate } from 'react-router-dom';
import { useSearch } from '../../../hooks/search';
import React from 'react';

const Search = () => {
	let selectedCallback = (inputValue) => {
		alert(inputValue);
	};

	let { eventsContainer, eventsInput, eventsBtn, state } = useSearch(selectedCallback);

	let { eventMouseEnter, eventMouseLeave } = eventsContainer;
	let { eventFocusInput, eventBlurInput, eventChangeInput, eventKeyDown } = eventsInput;
	let { eventClickImg } = eventsBtn;
	let { searchMode, validate, inputValue } = state;

	return (
		<>
			{validate && <Navigate to="/serch" />}
			<div className={s.search} onMouseEnter={eventMouseEnter} onMouseLeave={eventMouseLeave}>
				{searchMode && (
					<input
						type="text"
						onFocus={eventFocusInput}
						onBlur={eventBlurInput}
						onChange={eventChangeInput}
						onKeyDown={eventKeyDown}
						value={inputValue}
					/>
				)}
				<img className={s.search__icon} src={clipart} alt="sorry" onClick={eventClickImg} />
			</div>
		</>
	);
};

export default React.memo(Search);
