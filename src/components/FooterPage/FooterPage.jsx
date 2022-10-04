import s from './FooterPage.module.scss';
import React from 'react';

const FooterPage = () => {
	return (
		<div className={s.footer_page}>
			<div className="container">
				<div className={s.footer_page__contant}></div>
			</div>
		</div>
	);
};
export default React.memo(FooterPage);
