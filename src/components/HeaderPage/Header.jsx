import s from './Header.module.scss';
import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import Navigation from './Navigation/Navigation';
import Search from './Search/Search';
import React from 'react';

const Header = () => {
	return (
		<div className={s.header_block}>
			<div className={s.header_block__logo_row}>
				<NavBar />
				<Logo />
			</div>
			<div className={s.header_block__navigation}>
				<Search />
				<Navigation />
			</div>
		</div>
	);
};
export default React.memo(Header);
