import ScrollToTop from '../../common/ScrollToTop/ScrollToTop';
import { apiDiscaverTv } from '../../../api/api';
import MoviesDiscaver from '../MoviesDiscaver/MoviesDiscaver';

function TvsPage() {
	let getApi = apiDiscaverTv.getDiscaverTv;
	let typeApi = 'tv';

	return (
		<>
			<ScrollToTop />
			<MoviesDiscaver getApi={getApi} typeApi={typeApi} />
		</>
	);
}
export default TvsPage;
