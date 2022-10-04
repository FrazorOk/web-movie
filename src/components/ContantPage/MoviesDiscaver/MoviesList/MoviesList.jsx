import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../../store/movies-reducer';
import { selectMoviesPagination } from '../../../../selectors/movies-selector';
import s from './MoviesList.module.scss';
import MoviesCard from './MoviesCard/MoviesCard';

const MoviesList = ({ activeCollection, typeApi }) => {
	let dispatch = useDispatch();
	let pagination = useSelector(selectMoviesPagination);

	let handlePageClick = (e) => {
		dispatch(setCurrentPage(e.selected + 1));
	};

	let maxPages = () => {
		if (pagination.totalCountPages > 500) return 500;
		return pagination.totalCountPages;
	};

	return (
		<div className={s.movies_list}>
			<div className={s.movies_list__collaction}>
				{activeCollection.map((item) => (
					<MoviesCard item={item} key={item.id} typeApi={typeApi} />
				))}
			</div>
			<ReactPaginate
				containerClassName={s.movies_list__pagination}
				pageClassName={s.movies_list__li}
				pageLinkClassName={s.movies_list__link}
				activeClassName={s.movies_list__li_active}
				previousClassName={s.movies_list__li_btn}
				nextClassName={s.movies_list__li_btn}
				forcePage={pagination.currentPage - 1}
				breakLabel="..."
				nextLabel=">"
				onPageChange={handlePageClick}
				pageRangeDisplayed={pagination.visiblePages}
				marginPagesDisplayed={1}
				pageCount={maxPages()}
				previousLabel="<"
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};
export default MoviesList;
