import s from './NavBarFilter.module.scss';
import { Link } from 'react-router-dom';

const NavBarFilter = () => {
	return (
		<div className={s.navbar__filter}>
			<ul>
				<li>
					<Link to={'/movies'}>ГОД</Link>
				</li>
				<li>
					<Link to={'/movies'}>2022</Link>
				</li>
				<li>
					<Link to={'/movies'}>УЖАСЫ</Link>
				</li>
				<li>
					<Link to={'/movies'}>КОМЕДИИ</Link>
				</li>
				<li>
					<Link to={'/movies'}>ТРЕЛЛЕРЫ</Link>
				</li>
				<li>
					<Link to={'/movies'}>БОЕВИКИ</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBarFilter;
