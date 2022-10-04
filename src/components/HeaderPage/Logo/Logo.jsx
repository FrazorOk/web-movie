import { Link } from 'react-router-dom';
import s from './Logo.module.scss';
import React from 'react';

const Logo = () => {
	let scrollToTop = () => {
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className={s.logo}>
			<h1>
				<Link to="/" onClick={scrollToTop}>
					PRO100<span>FILM</span>
				</Link>
			</h1>
		</div>
	);
};
export default React.memo(Logo);
