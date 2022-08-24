import { useDispatch } from 'react-redux';
import s from './App.module.scss';
import HeaderPage from './components/HeaderPage/HeaderPage';
import FooterPage from './components/FooterPage/FooterPage';
import { toggleNavBarStatusWhenLeave } from './store/header-reducer';
import ContantPage from './components/ContantPage/ContantPage';

function App() {
	let dispatch = useDispatch();

	return (
		<div className={s.wrapper}>
			<header onMouseLeave={() => dispatch(toggleNavBarStatusWhenLeave())}>
				<HeaderPage />
			</header>
			<div className={s.main}>
				<ContantPage />
			</div>
			<footer>
				<FooterPage />
			</footer>
		</div>
	);
}

export default App;
