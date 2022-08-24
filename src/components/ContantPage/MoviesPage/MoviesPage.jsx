import ScrollToTop from '../../common/ScrollToTop/ScrollToTop';
import { apiDiscaverMovie } from '../../../api/api';
import MoviesDiscaver from '../MoviesDiscaver/MoviesDiscaver';

function MoviesPage() {
	let getApi = apiDiscaverMovie.getMoviesCollaction;

	return (
		<>
			<ScrollToTop />
			<MoviesDiscaver getApi={getApi} />
		</>
	);
}
export default MoviesPage;
