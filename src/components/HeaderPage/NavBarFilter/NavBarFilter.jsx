import s from './NavBarFilter.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCompilations } from '../../../selectors/home-selector';
import React from 'react';

const NavBarFilter = () => {
	let compilations = useSelector(selectCompilations);

	return (
		<div className={s.navbar__filter}>
			<ul>
				<li>
					<Link to={'/movies/&sort_by=vote_count.desc'}>Популярне</Link>
				</li>
				<li>
					<Link to={'/movies/&primary_release_year=2022'}>НОВИНКИ 2022</Link>
				</li>
				<li>
					<Link to={'/movies/&primary_release_year=2021'}>2021</Link>
				</li>
				<li>
					<Link to={'/movies/&primary_release_year=2020'}>2020</Link>
				</li>
				<li>
					<Link to={'/movies/&primary_release_year=2019'}>2019</Link>
				</li>

				{compilations.map((item, index) => {
					return item.data.map((elem) => {
						if (index > 1) {
							return (
								<li key={index}>
									<Link to={`/movies/&${item.type}=${elem.id}`} className={s.genres_slider__page}>
										{elem.name}
									</Link>
								</li>
							);
						}
					});
				})}
			</ul>
		</div>
	);
};

export default React.memo(NavBarFilter);
