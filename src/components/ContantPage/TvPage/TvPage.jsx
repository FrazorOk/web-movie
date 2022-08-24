import ScrollToTop from '../../common/ScrollToTop/ScrollToTop';
import { apiDiscaverTv } from '../../../api/api';
import MoviesDiscaver from '../MoviesDiscaver/MoviesDiscaver';

function TvPage() {
	let getApi = apiDiscaverTv.getDiscaverTv;

	return (
		<>
			<ScrollToTop />
			<MoviesDiscaver getApi={getApi} />
		</>
	);
}
export default TvPage;
