"use strict";(self.webpackChunkweb_movie=self.webpackChunkweb_movie||[]).push([[317],{8414:function(e,i,s){s.r(i),s.d(i,{default:function(){return xe}});var r=s(9434),n=s(4003),l=s(2154),a="BtnArrowDown_btn_arrow__fJeS6",o="BtnArrowDown_btn_arrow_down__VoSGc",c="BtnArrowDown_arrow_icon__yewXe",t="BtnArrowDown_text__2FmqM",d="BtnArrowDown_arrow_down_icon__731Dj",_=s(184),m=function(e){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("button",{className:a,disabled:e.disabled,onClick:e.onClick,style:{marginTop:e.marginTop},children:(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)("p",{className:t,children:e.text}),(0,_.jsx)("div",{className:c,children:(0,_.jsx)("div",{className:d})})]})})})},u=s(1472),v=s(885),p="CompilationSlider_collaction_container__9jEOF",x="CompilationSlider_collaction_container__row__JdQXD",h="CompilationSlider_collaction_container__title__Zw9c8",j="CompilationSlider_collaction_container__link__4jFAV",f="CompilationSlider_compilations_slider__eMxgF",S="CompilationSlider_compilations_slider__item__WCkY6",N="CompilationSlider_compilations_slider__img__vF-AC",w="CompilationSlider_compilations_slider__play__Jvken",g="CompilationSlider_compilations_slider__play_container__6sqQW",C="CompilationSlider_compilations_slider__play_icon__llSoP",b="CompilationSlider_compilations_slider__triangle_icon__E3yuG",k=s(2791),H=s(8683),Z=(s(3037),s(8688),s(5717)),y=s(3504),T=s(6713),F=function(e){var i=e.collaction;return(0,_.jsx)("div",{className:f,children:(0,_.jsx)(Z.Z,(0,H.Z)((0,H.Z)({},{centerMode:!1,infinite:!1,arrows:!0,slidesToShow:6}),{},{children:i.data.map((function(e){return(0,_.jsxs)("div",{className:S,children:[(0,_.jsxs)("div",{className:N,children:[(0,_.jsx)("img",{src:"".concat(T.wB).concat(e.poster_path),alt:""}),(0,_.jsx)(y.rU,{to:"movie/".concat(e.id),className:w,children:(0,_.jsx)("div",{className:g,children:(0,_.jsx)("div",{className:C,children:(0,_.jsx)("div",{className:b})})})})]}),(0,_.jsx)("h3",{children:e.title})]},e.id)}))}))})},B=k.memo(F),D=function(e){var i=e.collaction;return(0,_.jsxs)("div",{className:x,children:[(0,_.jsx)(y.rU,{className:h,to:"movies/&".concat(i.type,"=").concat(i.id),children:i.name}),(0,_.jsx)(y.rU,{className:j,to:"movies/&".concat(i.type,"=").concat(i.id),children:"\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044f \u0432\u0441\u0456"})]})},A=k.memo(D),E=function(){var e=(0,r.v9)(l.lM),i=(0,r.v9)(l._9),s=(0,r.v9)(l.R8),a=(0,k.useState)(2),o=(0,v.Z)(a,2),c=o[0],t=o[1],d=(0,r.I0)();return(0,k.useEffect)((function(){d((0,n.$s)(e))}),[]),(0,k.useEffect)((function(){s&&c<=e.length&&(d((0,n.aP)(e,c)),t(c+1))}),[s]),(0,_.jsx)(_.Fragment,{children:i.map((function(e,i){return(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)(A,{collaction:e}),(0,_.jsx)(B,{collaction:e})]},i)}))})},M=k.memo(E),U="GenresSlider_genres_slider__NpfjS",q="GenresSlider_genres_slider__item__AX9V0",G="GenresSlider_genres_slider__page__oqKwN",P=function(){var e=(0,r.v9)(l.lM);return(0,_.jsx)("div",{className:U,children:(0,_.jsx)(Z.Z,(0,H.Z)((0,H.Z)({},{className:"slider variable-width",slidesToShow:1,centerMode:!0,infinite:!0,variableWidth:!0,arrows:!1,autoplay:!0,speed:2e3,autoplaySpeed:100,pauseOnHover:!0}),{},{children:e.map((function(e){return e.data.map((function(e){return(0,_.jsx)("div",{className:q,children:(0,_.jsx)("p",{className:G,children:e.name})})}))}))}))})},R=k.memo(P),W="HeaderSliders_sliders__Z+jHq",I="HeaderSliders_sliders__arrow__4qST9",O="HeaderSliders_sliders__arrow_next__nfnHC",X="HeaderSliders_sliders__arrow_prev__7sRZB",J="HeaderSliders_sliders__pagin__1LQT6",Q="HeaderSliders_sliders__button__6YPqh",V="HeaderSliders_header_slider__ykDZU",Y="HeaderSliders_slider_item__L4FSy",z="HeaderSliders_slider_block__lhF--",K="HeaderSliders_slider_block__title__Gfz4G",L="HeaderSliders_slider_block__bacgrount_img__rtCgk",$="HeaderSliders_slider_info__louhp",ee="HeaderSliders_slider_info__container__iw1Od",ie="HeaderSliders_slider_info__poster_block__34vMB",se="HeaderSliders_slider_info__text_block__0lKmU",re="HeaderSliders_slider_info__title__iSW5-",ne="HeaderSliders_slider_info__ganres__D-8jZ",le="HeaderSliders_slider_info__data__f+tkD",ae="HeaderSliders_slider_info__description__ERn0P",oe="HeaderSliders_slider_info__view__+znDn",ce="HeaderSliders_backgound_slider__mW7yp";function te(e){var i=e.onClick;return(0,_.jsx)("div",{className:"".concat(I," ").concat(O),onClick:i})}function de(e){var i=e.onClick;return(0,_.jsx)("div",{className:"".concat(I," ").concat(X),onClick:i})}var _e=function(e){var i=e.movieCollaction,s=e.asNavFor,n=e.slider1,a=(0,r.v9)(l.q3),o={className:"center",centerMode:!0,dots:!0,infinite:!0,arrows:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,pauseOnHover:!0,speed:400,autoplaySpeed:3500,nextArrow:(0,_.jsx)(te,{}),prevArrow:(0,_.jsx)(de,{}),dotsClass:J,customPaging:function(e){return(0,_.jsx)("div",{children:(0,_.jsx)("div",{className:Q})})},responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:766,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1,dots:!1}}]};return(0,_.jsx)("div",{className:V,children:(0,_.jsx)(Z.Z,(0,H.Z)((0,H.Z)({},o),{},{asNavFor:s,ref:n,children:i.map((function(e){return(0,_.jsx)("div",{className:Y,children:(0,_.jsxs)("div",{className:z,children:[(0,_.jsx)("p",{className:K,children:e.title}),(0,_.jsx)("img",{className:L,src:"".concat(T.wB).concat(e.backdrop_path),alt:""}),(0,_.jsx)("div",{className:$,children:(0,_.jsxs)("div",{className:ee,children:[(0,_.jsx)("div",{className:ie,children:(0,_.jsx)(y.rU,{to:"/movies",children:(0,_.jsx)("img",{src:"".concat(T.wB).concat(e.poster_path),alt:""})})}),(0,_.jsxs)("div",{className:se,children:[(0,_.jsx)(y.rU,{to:"/movies",className:re,children:e.title}),(0,_.jsx)("ul",{className:ne,children:e.genre_ids.map((function(e,i){if(i<4)return a.map((function(i){if(i.id==e)return(0,_.jsx)("li",{children:i.name},i.id)}))}))}),(0,_.jsxs)("p",{className:le,children:["\u0420\u0435\u043b\u0456\u0437: ",e.release_date]}),(0,_.jsx)("p",{className:ae,children:(i=e.overview,s=120,s||r?(r=r||"...",i.substr(0,s-r.length)+r):i)}),(0,_.jsx)(y.rU,{to:"/movies",children:(0,_.jsx)("p",{className:oe,children:"\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044f"})})]})]})})]})},e.id);var i,s,r}))}))})},me=function(e){var i=e.movieCollaction,s=e.asNavFor,r=e.slider2;return(0,_.jsx)("div",{className:ce,children:(0,_.jsx)(Z.Z,(0,H.Z)((0,H.Z)({},{arrows:!1,fade:!0,dots:!1,draggable:!1,infinite:!0,slidesToShow:1,speed:400}),{},{asNavFor:s,ref:r,children:i.map((function(e){return(0,_.jsx)("div",{className:Y,children:(0,_.jsx)("div",{className:z,children:(0,_.jsx)("img",{src:"".concat(T.wB).concat(e.backdrop_path),alt:""})})},e.id)}))}))})},ue=function(){var e=(0,k.useState)(null),i=(0,v.Z)(e,2),s=i[0],a=i[1],o=(0,k.useState)(null),c=(0,v.Z)(o,2),t=c[0],d=c[1],m=(0,k.useRef)(null),u=(0,k.useRef)(null),p=(0,r.I0)(),x=(0,r.v9)(l.Xy);return(0,k.useEffect)((function(){a(m.current),d(u.current),p((0,n.y3)())}),[null]),(0,_.jsxs)("div",{className:W,children:[(0,_.jsx)(_e,{movieCollaction:x,asNavFor:t,slider1:m}),(0,_.jsx)(me,{movieCollaction:x,asNavFor:s,slider2:u})]})},ve=k.memo(ue),pe="HomePage_home_page__xgnhR",xe=function(){var e=(0,r.I0)(),i=(0,r.v9)(l.Ym);return(0,k.useEffect)((function(){return function(){e((0,n.Is)())}}),[]),(0,_.jsxs)("div",{className:pe,children:[(0,_.jsx)(u.Z,{}),(0,_.jsx)(ve,{}),(0,_.jsxs)("div",{className:"container",children:[(0,_.jsx)(R,{}),(0,_.jsx)(M,{}),(0,_.jsx)(m,{onClick:function(){e((0,n.Pb)(!0))},disabled:i,text:"\u0431\u0456\u043b\u044c\u0448\u0435 \u043f\u0456\u0434\u0431\u0456\u0440\u043e\u043a",marginTop:"80px"})]})]})}},1472:function(e,i,s){s.d(i,{Z:function(){return l}});var r=s(2791),n=s(6871);function l(){var e=(0,n.TH)().pathname;return(0,r.useEffect)((function(){document.documentElement.scrollTo({top:0,left:0,behavior:"instant"})}),[e]),null}}}]);
//# sourceMappingURL=317.15550e13.chunk.js.map