import ScrollToTop from '../../common/ScrollToTop/ScrollToTop';
import { apiDiscaverMovie } from '../../../api/api';
import MoviesDiscaver from '../MoviesDiscaver/MoviesDiscaver';

function MoviesPage() {
	let getApi = apiDiscaverMovie.getMoviesCollaction;
	let typeApi = 'movie';

	return (
		<>
			<ScrollToTop />
			<MoviesDiscaver getApi={getApi} typeApi={typeApi} />
		</>
	);
}
export default MoviesPage;
