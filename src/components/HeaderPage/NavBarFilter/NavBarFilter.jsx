import s from './NavBarFilter.module.scss';
import { Link } from 'react-router-dom';

const NavBarFilter = () => {
	return (
		<div className={s.navbar__filter}>
			<p>
				<Link to={'/movies'}>ГОД</Link>
			</p>
			<Link to={'/movies'}>2022</Link>
			<Link to={'/movies'}>УЖАСЫ</Link>
			<Link to={'/movies'}>КОМЕДИИ</Link>
			<Link to={'/movies'}>ТРЕЛЛЕРЫ</Link>
			<Link to={'/movies'}>БОЕВИКИ</Link>
		</div>
	);
};

export default NavBarFilter;
