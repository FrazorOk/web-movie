import s from './NavBar.module.scss';
import { useDispatch } from 'react-redux';
import { toggleNavBarStatus } from '../../../store/header-reducer';
import React from 'react';

const NavBar = () => {
	let dispatch = useDispatch();

	let toggleNavBar = () => {
		dispatch(toggleNavBarStatus());
	};

	return (
		<div className={s.navbar} onClick={toggleNavBar}>
			<div className={s.navbar__icon}></div>
		</div>
	);
};
export default React.memo(NavBar);
