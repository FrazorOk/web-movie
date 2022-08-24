import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectHeaderNavBarStatus } from '../../selectors/header-selector';
import Header from './Header';
import NavBarFilter from './NavBarFilter/NavBarFilter';

const HeaderPage = () => {
	let navBarStatus = useSelector(selectHeaderNavBarStatus);
	let [triger, setTriger] = useState(false);

	const { scrollY } = useScroll();

	useEffect(() => {
		return scrollY.onChange((latest) => {
			if (latest >= 100) {
				setTriger((triger = true));
			} else {
				setTriger((triger = false));
			}
		});
	}, [scrollY]);

	return (
		<>
			<div className="container">
				<Header />
				{navBarStatus && <NavBarFilter />}
			</div>
			{triger && <div className="background_for_header"></div>}
		</>
	);
};
export default HeaderPage;
