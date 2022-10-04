"use strict";(self.webpackChunkweb_movie=self.webpackChunkweb_movie||[]).push([[553],{2940:function(e,i,n){n.r(i),n.d(i,{default:function(){return re}});var a=n(2791),s=n(9434),r=n(6871),t=n(6713),o=function(e){return e.movie.movieInfo},_=function(e){return e.movie.movieCast},c=function(e){return e.movie.movieVideo},l=function(e){return e.movie.movieSimilar},m=function(e){return e.movie.fetching},v=n(9918),d=n(9581),u=n(4251),p=n(184),f=a.lazy((function(){return n.e(745).then(n.bind(n,6745))})),x=function(){var e=(0,s.v9)(_);return(0,p.jsxs)("div",{className:d.Z.movie_cast,children:[(0,p.jsx)("h5",{children:"\u0423 \u0440\u043e\u043b\u044f\u0445:"}),(0,p.jsx)("ul",{className:d.Z.movie_cast__list,children:e.map((function(e,i){if(i<7&&e.profile_path)return(0,p.jsxs)("li",{className:d.Z.movie_cast__item,children:[(0,p.jsx)("div",{className:d.Z.movie_cast__container_img,children:(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(u.Z,{size:"70px",marginTop:"10px"}),children:(0,p.jsx)(f,{profile_path:e.profile_path})})}),(0,p.jsx)("p",{children:e.name})]},e.id)}))})]})},h=n(3504),j="MovieGenres_movie_genres__sp7li",g="MovieGenres_movie_genres__genre__oCcya",M=function(e){var i=e.genres;return(0,p.jsx)("div",{className:j,children:i&&i.map((function(e){return(0,p.jsx)(h.rU,{to:"/movies/&with_genres=".concat(e.id),className:g,children:e.name},e.id)}))})},N="MovieInfo_movie_info__hkzER",w="MovieInfo_movie_info__poster__XwHbu",y="MovieInfo_movie_info__text__9OOgr",b="MovieParagraf_movie_paragraf__O+40p",Z=function(e){var i=e.overview;return(0,p.jsxs)("div",{className:b,children:[(0,p.jsx)("h5",{children:"\u041e\u043f\u0438\u0441:"}),(0,p.jsx)("p",{children:i})]})},k="MovieTitle_movie_title__TGDO5",T="MovieTitle_movie_title__row__6BJFz",C="MovieTitle_movie_title__original__CNlQJ",S=function(e){var i=e.title,n=e.originalTitle;return(0,p.jsx)("div",{className:k,children:(0,p.jsxs)("span",{className:T,children:[(0,p.jsx)("span",{children:i}),(0,p.jsx)("span",{children:"/"}),(0,p.jsx)("span",{className:C,children:n})]})})},I="MovieRelease_release_movie__u0-pA",P=function(e){var i=e.releaseDate,n=e.productionCountries;return(0,p.jsxs)("div",{className:I,children:[(0,p.jsxs)("p",{children:["\u0420\u0435\u043b\u0456\u0437: ",i]}),n&&(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{children:"\u041a\u0440\u0430\u0457\u043d\u0430: "}),n.map((function(e,i){return(0,p.jsxs)("span",{children:[e.name,"; "]},i)}))]})]})},z=n(2982),B=n(885),F="MovieRating_movie_rating__W54vi",E="MovieRating_movie_rating__black_star__Zfj7Y",O=n.p+"static/media/star.aed0a6a96f1c28b7731d.png",D=function(e){var i=e.vote_average,n=(0,a.useState)([]),s=(0,B.Z)(n,2),r=s[0],t=s[1];return(0,a.useEffect)((function(){for(var e=function(e){t((function(i){return[].concat((0,z.Z)(i),[e])}))},n=0;n<Math.round(i);n++)e(n);return function(){return t(r=[])}}),[i]),(0,p.jsxs)("div",{className:F,children:[r.map((function(e,i){return(0,p.jsx)("img",{src:O,alt:""},i)})),r.map((function(e,i){if(i<10-r.length)return(0,p.jsx)("img",{src:O,className:E,alt:""},i)})),i&&(0,p.jsxs)("p",{children:[" - ",i.toFixed(1)]})]})},G=function(e){var i=e.movieInfo,n=i.poster_path,a=i.release_date,s=i.genres,r=i.overview,o=i.production_countries,_=i.vote_average;return(0,p.jsxs)("div",{className:N,children:[(0,p.jsxs)("div",{className:w,children:[n&&(0,p.jsx)("img",{src:"".concat(t.wB).concat(n),alt:""}),(0,p.jsx)(D,{vote_average:_})]}),(0,p.jsxs)("div",{className:y,children:[(0,p.jsx)(S,{title:i.title||i.name,originalTitle:i.original_title||i.original_name}),(0,p.jsx)(P,{releaseDate:a||i.last_air_date,productionCountries:o}),(0,p.jsx)(M,{genres:s}),(0,p.jsx)(Z,{overview:r}),(0,p.jsx)(x,{})]})]})},Q=a.memo(G),R="MoviePage_movie_page__cZ2ns",U="MoviePage_movie_page__backgroundImg__D4zVb",Y="MoviePage_movie_page__list__f2SrM",H="MoviePlayer_movie_players__CZIK5",J="MoviePlayer_movie_players__backgroundImg__09Ewk",V="MoviePlayer_movie_players__player__g699Y",K="MoviePlayer_movie_players__video__m1M9P",X=n.p+"static/media/pngegg.93954e1c85d3af179669.png",A=function(e){var i=e.title,n=(0,s.v9)(c);return(0,p.jsxs)("div",{className:H,children:[(0,p.jsx)("img",{src:X,className:J,alt:""}),(0,p.jsxs)("h4",{children:["\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044f \u043e\u043d\u043b\u0430\u0439\u043d ",i," \u0443 \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u0456\u0439 \u044f\u043a\u043e\u0441\u0442\u0456"]}),n.map((function(e,i){if(i<=0&&e.key)return(0,p.jsx)("div",{className:V,children:(0,p.jsx)("iframe",{className:K,src:"https://www.youtube.com/embed/".concat(e.key),title:"YouTube video player",frameBorder:"0",controls:"1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},e.id)}))]})},W=a.memo(A),q=n(8683),L=(n(3037),n(8688),"MovieSimilar_movie_similar__bpJ8l"),$="MovieSimilar_movie_similar__slider_item__gF+IB",ee="MovieSimilar_movie_similar__slider_card__F9F6x",ie=n(5717),ne=function(e){var i=e.type,n=(0,s.v9)(l);return(0,p.jsxs)("div",{className:L,children:[(0,p.jsx)("h3",{children:"\u0421\u0445\u043e\u0436\u0456:"}),(0,p.jsx)(ie.Z,(0,q.Z)((0,q.Z)({},{infinite:!1,speed:400,slidesToShow:6,swipeToSlide:!0,slidesToScroll:2,initialSlide:0}),{},{children:n.map((function(e){return(0,p.jsx)("div",{className:$,children:(0,p.jsxs)(h.rU,{to:"/".concat(i,"/").concat(e.id),className:ee,children:[(0,p.jsx)("img",{src:"".concat(t.wB).concat(e.poster_path),alt:""}),(0,p.jsx)("h4",{children:e.title||e.name})]})},e.id)}))}))]})},ae=a.memo(ne),se=n(1472),re=function(e){var i=e.type,n=(0,s.I0)(),_=(0,r.UO)().params,c=(0,s.v9)(o),l=(0,s.v9)(m);return(0,a.useEffect)((function(){n((0,v.d4)(_,i)),n((0,v.M1)(_,i)),n((0,v.VH)(_,i)),n((0,v.pn)(_,i))}),[_]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(se.Z,{}),l?(0,p.jsx)(u.Z,{size:"150px",marginTop:"150px"}):(0,p.jsxs)("div",{className:R,children:[(0,p.jsx)("div",{className:U,children:c.backdrop_path&&(0,p.jsx)("img",{src:"".concat(t.wB).concat(c.backdrop_path),alt:"sorry"})}),(0,p.jsx)("div",{className:Y,children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)(Q,{movieInfo:c}),(0,p.jsx)(W,{title:c.title||c.name}),(0,p.jsx)(ae,{type:i})]})})]})]})}},1472:function(e,i,n){n.d(i,{Z:function(){return r}});var a=n(2791),s=n(6871);function r(){var e=(0,s.TH)().pathname;return(0,a.useEffect)((function(){document.documentElement.scrollTo({top:0,left:0,behavior:"instant"})}),[e]),null}},9581:function(e,i){i.Z={movie_cast:"MovieCast_movie_cast__P-zIG",movie_cast__list:"MovieCast_movie_cast__list__QSQQ5",movie_cast__item:"MovieCast_movie_cast__item__OYNKd",movie_cast__img:"MovieCast_movie_cast__img__4XgBl",movie_cast__container_img:"MovieCast_movie_cast__container_img__z6eNU"}}}]);
//# sourceMappingURL=553.252b9fa7.chunk.js.map