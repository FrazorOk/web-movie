import s from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

let activClass = ({ isActive }) => (isActive ? s.active : '');

const Navigation = () => {
	return (
		<div className={s.navigation}>
			<NavLink className={activClass} to="/web-movie/">
				ГОЛОВНА
			</NavLink>
			<NavLink className={activClass} to="/web-movie/movies">
				ФІЛЬМИ
			</NavLink>
			<NavLink className={activClass} to="/web-movie/tv-series">
				ТЕЛЕСЕРІАЛИ
			</NavLink>
		</div>
	);
};
export default Navigation;
