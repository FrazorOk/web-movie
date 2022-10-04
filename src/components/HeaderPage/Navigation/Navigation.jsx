import s from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';

let activClass = ({ isActive }) => (isActive ? s.active : '');

const Navigation = () => {
	return (
		<div className={s.navigation}>
			<NavLink className={activClass} to="/">
				ГОЛОВНА
			</NavLink>
			<NavLink className={activClass} to="/movies">
				ФІЛЬМИ
			</NavLink>
			<NavLink className={activClass} to="/tv-series">
				ТЕЛЕСЕРІАЛИ
			</NavLink>
		</div>
	);
};
export default React.memo(Navigation);
