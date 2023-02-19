import{S as R,N as V,P as k}from"./pagination-a10a3030.js";import{h as y,f as h,g as L,i as X,j as Y,k as U,p as J,n as K,l as $,m as ee,_ as te,r as I,o as ne,c as ae,a as t,b as m,w as b,F as ie,d as oe,e as x}from"./index-b72bab2d.js";function D(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function B(e,r){const a=["__proto__","constructor","prototype"];Object.keys(r).filter(i=>a.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=r[i]:D(r[i])&&D(e[i])&&Object.keys(r[i]).length>0?r[i].__swiper__?e[i]=r[i]:B(e[i],r[i]):e[i]=r[i]})}function P(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function W(e={}){return e.pagination&&typeof e.pagination.el>"u"}function G(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function Q(e=""){const r=e.split(" ").map(i=>i.trim()).filter(i=>!!i),a=[];return r.forEach(i=>{a.indexOf(i)<0&&a.push(i)}),a.join(" ")}function le(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}const Z=["modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control","injectStyles","injectStylesUrls"];function M(e={},r=!0){const a={on:{}},i={},l={};B(a,R.defaults),B(a,R.extendedDefaults),a._emitClasses=!0,a.init=!1;const u={},o=Z.map(n=>n.replace(/_/,"")),f=Object.assign({},e);return Object.keys(f).forEach(n=>{typeof e[n]>"u"||(o.indexOf(n)>=0?D(e[n])?(a[n]={},l[n]={},B(a[n],e[n]),B(l[n],e[n])):(a[n]=e[n],l[n]=e[n]):n.search(/on[A-Z]/)===0&&typeof e[n]=="function"?r?i[`${n[2].toLowerCase()}${n.substr(3)}`]=e[n]:a.on[`${n[2].toLowerCase()}${n.substr(3)}`]=e[n]:u[n]=e[n])}),["navigation","pagination","scrollbar"].forEach(n=>{a[n]===!0&&(a[n]={}),a[n]===!1&&delete a[n]}),{params:a,passedParams:l,rest:u,events:i}}function se({el:e,nextEl:r,prevEl:a,paginationEl:i,scrollbarEl:l,swiper:u},o){P(o)&&r&&a&&(u.params.navigation.nextEl=r,u.originalParams.navigation.nextEl=r,u.params.navigation.prevEl=a,u.originalParams.navigation.prevEl=a),W(o)&&i&&(u.params.pagination.el=i,u.originalParams.pagination.el=i),G(o)&&l&&(u.params.scrollbar.el=l,u.originalParams.scrollbar.el=l),u.init(e)}function de(e,r,a,i,l){const u=[];if(!r)return u;const o=n=>{u.indexOf(n)<0&&u.push(n)};if(a&&i){const n=i.map(l),s=a.map(l);n.join("")!==s.join("")&&o("children"),i.length!==a.length&&o("children")}return Z.filter(n=>n[0]==="_").map(n=>n.replace(/_/,"")).forEach(n=>{if(n in e&&n in r)if(D(e[n])&&D(r[n])){const s=Object.keys(e[n]),p=Object.keys(r[n]);s.length!==p.length?o(n):(s.forEach(c=>{e[n][c]!==r[n][c]&&o(n)}),p.forEach(c=>{e[n][c]!==r[n][c]&&o(n)}))}else e[n]!==r[n]&&o(n)}),u}function q(e,r,a){e===void 0&&(e={});const i=[],l={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},u=(o,f)=>{Array.isArray(o)&&o.forEach(n=>{const s=typeof n.type=="symbol";f==="default"&&(f="container-end"),s&&n.children?u(n.children,"default"):n.type&&(n.type.name==="SwiperSlide"||n.type.name==="AsyncComponentWrapper")?i.push(n):l[f]&&l[f].push(n)})};return Object.keys(e).forEach(o=>{if(typeof e[o]!="function")return;const f=e[o]();u(f,o)}),a.value=r.value,r.value=i,{slides:i,slots:l}}function re({swiper:e,slides:r,passedParams:a,changedParams:i,nextEl:l,prevEl:u,scrollbarEl:o,paginationEl:f}){const n=i.filter(d=>d!=="children"&&d!=="direction"&&d!=="wrapperClass"),{params:s,pagination:p,navigation:c,scrollbar:_,virtual:v,thumbs:w}=e;let E,z,A,O,S,N,j,T;i.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&s.thumbs&&!s.thumbs.swiper&&(E=!0),i.includes("controller")&&a.controller&&a.controller.control&&s.controller&&!s.controller.control&&(z=!0),i.includes("pagination")&&a.pagination&&(a.pagination.el||f)&&(s.pagination||s.pagination===!1)&&p&&!p.el&&(A=!0),i.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||o)&&(s.scrollbar||s.scrollbar===!1)&&_&&!_.el&&(O=!0),i.includes("navigation")&&a.navigation&&(a.navigation.prevEl||u)&&(a.navigation.nextEl||l)&&(s.navigation||s.navigation===!1)&&c&&!c.prevEl&&!c.nextEl&&(S=!0);const H=d=>{e[d]&&(e[d].destroy(),d==="navigation"?(e.isElement&&(e[d].prevEl.remove(),e[d].nextEl.remove()),s[d].prevEl=void 0,s[d].nextEl=void 0,e[d].prevEl=void 0,e[d].nextEl=void 0):(e.isElement&&e[d].el.remove(),s[d].el=void 0,e[d].el=void 0))};i.includes("loop")&&e.isElement&&(s.loop&&!a.loop?N=!0:!s.loop&&a.loop?j=!0:T=!0),n.forEach(d=>{if(D(s[d])&&D(a[d]))B(s[d],a[d]);else{const g=a[d];(g===!0||g===!1)&&(d==="navigation"||d==="pagination"||d==="scrollbar")?g===!1&&H(d):s[d]=a[d]}}),n.includes("controller")&&!z&&e.controller&&e.controller.control&&s.controller&&s.controller.control&&(e.controller.control=s.controller.control),i.includes("children")&&r&&v&&s.virtual.enabled&&(v.slides=r,v.update(!0)),i.includes("children")&&r&&s.loop&&(T=!0),E&&w.init()&&w.update(!0),z&&(e.controller.control=s.controller.control),A&&(e.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),e.el.shadowEl.appendChild(f)),f&&(s.pagination.el=f),p.init(),p.render(),p.update()),O&&(e.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),e.el.shadowEl.appendChild(o)),o&&(s.scrollbar.el=o),_.init(),_.updateSize(),_.setTranslate()),S&&(e.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),e.el.shadowEl.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),e.el.shadowEl.appendChild(u))),l&&(s.navigation.nextEl=l),u&&(s.navigation.prevEl=u),c.init(),c.update()),i.includes("allowSlideNext")&&(e.allowSlideNext=a.allowSlideNext),i.includes("allowSlidePrev")&&(e.allowSlidePrev=a.allowSlidePrev),i.includes("direction")&&e.changeDirection(a.direction,!1),(N||T)&&e.loopDestroy(),(j||T)&&e.loopCreate(),e.update()}function ue(e,r,a){if(!a)return null;const i=p=>{let c=p;return p<0?c=r.length+p:c>=r.length&&(c=c-r.length),c},l=e.value.isHorizontal()?{[e.value.rtlTranslate?"right":"left"]:`${a.offset}px`}:{top:`${a.offset}px`},{from:u,to:o}=a,f=e.value.params.loop?-r.length:0,n=e.value.params.loop?r.length*2:r.length,s=[];for(let p=f;p<n;p+=1)p>=u&&p<=o&&s.push(r[i(p)]);return s.map(p=>(p.props||(p.props={}),p.props.style||(p.props.style={}),p.props.swiperRef=e,p.props.style=l,y(p.type,{...p.props},p.children)))}const ce=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())},fe={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(e,r){let{slots:a,emit:i}=r;const{tag:l,wrapperTag:u}=e,o=h("swiper"),f=h(null),n=h(!1),s=h(!1),p=h(null),c=h(null),_=h(null),v={value:[]},w={value:[]},E=h(null),z=h(null),A=h(null),O=h(null),{params:S,passedParams:N}=M(e,!1);q(a,v,w),_.value=N,w.value=v.value;const j=()=>{q(a,v,w),n.value=!0};S.onAny=function(d){for(var g=arguments.length,C=new Array(g>1?g-1:0),F=1;F<g;F++)C[F-1]=arguments[F];i(d,...C)},Object.assign(S.on,{_beforeBreakpoint:j,_containerClasses(d,g){o.value=g}});const T={...S};if(delete T.wrapperClass,c.value=new R(T),c.value.virtual&&c.value.params.virtual.enabled){c.value.virtual.slides=v.value;const d={cache:!1,slides:v.value,renderExternal:g=>{f.value=g},renderExternalUpdate:!1};B(c.value.params.virtual,d),B(c.value.originalParams.virtual,d)}L(()=>{!s.value&&c.value&&(c.value.emitSlidesClasses(),s.value=!0);const{passedParams:d}=M(e,!1),g=de(d,_.value,v.value,w.value,C=>C.props&&C.props.key);_.value=d,(g.length||n.value)&&c.value&&!c.value.destroyed&&re({swiper:c.value,slides:v.value,passedParams:d,changedParams:g,nextEl:E.value,prevEl:z.value,scrollbarEl:O.value,paginationEl:A.value}),n.value=!1}),J("swiper",c),X(f,()=>{K(()=>{ce(c.value)})}),Y(()=>{p.value&&(se({el:p.value,nextEl:E.value,prevEl:z.value,paginationEl:A.value,scrollbarEl:O.value,swiper:c.value},S),i("swiper",c.value))}),U(()=>{c.value&&!c.value.destroyed&&c.value.destroy(!0,!1)});function H(d){return S.virtual?ue(c,d,f.value):(d.forEach((g,C)=>{g.props||(g.props={}),g.props.swiperRef=c,g.props.swiperSlideIndex=C}),d)}return()=>{const{slides:d,slots:g}=q(a,v,w);return y(l,{ref:p,class:Q(o.value)},[g["container-start"],y(u,{class:le(S.wrapperClass)},[g["wrapper-start"],H(d),g["wrapper-end"]]),P(e)&&[y("div",{ref:z,class:"swiper-button-prev"}),y("div",{ref:E,class:"swiper-button-next"})],G(e)&&y("div",{ref:O,class:"swiper-scrollbar"}),W(e)&&y("div",{ref:A,class:"swiper-pagination"}),g["container-end"]])}}},pe={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(e,r){let{slots:a}=r,i=!1;const{swiperRef:l}=e,u=h(null),o=h("swiper-slide"),f=h(!1);function n(c,_,v){_===u.value&&(o.value=v)}Y(()=>{!l||!l.value||(l.value.on("_slideClass",n),i=!0)}),$(()=>{i||!l||!l.value||(l.value.on("_slideClass",n),i=!0)}),L(()=>{!u.value||!l||!l.value||(typeof e.swiperSlideIndex<"u"&&(u.value.swiperSlideIndex=e.swiperSlideIndex),l.value.destroyed&&o.value!=="swiper-slide"&&(o.value="swiper-slide"))}),U(()=>{!l||!l.value||l.value.off("_slideClass",n)});const s=ee(()=>({isActive:o.value.indexOf("swiper-slide-active")>=0,isVisible:o.value.indexOf("swiper-slide-visible")>=0,isPrev:o.value.indexOf("swiper-slide-prev")>=0,isNext:o.value.indexOf("swiper-slide-next")>=0}));J("swiperSlide",s);const p=()=>{f.value=!0};return()=>y(e.tag,{class:Q(`${o.value}`),ref:u,"data-swiper-slide-index":typeof e.virtualIndex>"u"&&l&&l.value&&l.value.params.loop?e.swiperSlideIndex:e.virtualIndex,onLoadCapture:p},e.zoom?y("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof e.zoom=="number"?e.zoom:void 0},[a.default&&a.default(s.value),e.lazy&&!f.value&&y("div",{class:"swiper-lazy-preloader"})]):[a.default&&a.default(s.value),e.lazy&&!f.value&&y("div",{class:"swiper-lazy-preloader"})])}};const ge={data(){return{modules:[V,k]}},components:{Swiper:fe,SwiperSlide:pe}},ve={class:"container my-5"},he=t("h2",{class:"d-flex justify-content-center mb-4"},"最新消息",-1),me={class:"row"},be={class:"col-12 col-md-4"},_e={class:"card"},ye=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676584071318.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lpf3C1%2F2mtC8DlCQwSUTyiI5J5s5tH8kL1t5xkh6jzQIoq5nuVnghoLYfxdtvEk3CuRsbb6iMxlbE5fUOf3BeOgWmFFl6j%2Fd8PMT1ieomE%2FXCgmGb1yQp%2FjBrJYQF25iHMWM%2FoJmqbmGPFzdALk5hUxUH4e5d5tDZs2Ezgf1DJHupv9HkrSx6GUaHZWR8cZHBHIYiQqlA%2FWTyahby2EGbAE74q1%2B53vSpo7WlIaD2Mv5xmHfVYogLq7QJ9NJmE1HMM7DDT3fRe9TNaWwWwSj%2BUWQKLGB16qPx7sa6IqNDNo0adRUqxP7MNhPPIZDwJI141mEDEz07Y7toOg%2FgZy4hQ%3D%3D",class:"card-img-top",alt:"img"},null,-1),Se={class:"card-body"},we=t("h5",{class:"card-title"},"聖誕優惠",-1),xe=t("del",null,"指定款NT$1399",-1),Be=t("p",{class:"card-text"},"聖誕優惠價NT$999",-1),ze={class:"col-12 col-md-4"},Te={class:"card"},Ce=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676584071318.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lpf3C1%2F2mtC8DlCQwSUTyiI5J5s5tH8kL1t5xkh6jzQIoq5nuVnghoLYfxdtvEk3CuRsbb6iMxlbE5fUOf3BeOgWmFFl6j%2Fd8PMT1ieomE%2FXCgmGb1yQp%2FjBrJYQF25iHMWM%2FoJmqbmGPFzdALk5hUxUH4e5d5tDZs2Ezgf1DJHupv9HkrSx6GUaHZWR8cZHBHIYiQqlA%2FWTyahby2EGbAE74q1%2B53vSpo7WlIaD2Mv5xmHfVYogLq7QJ9NJmE1HMM7DDT3fRe9TNaWwWwSj%2BUWQKLGB16qPx7sa6IqNDNo0adRUqxP7MNhPPIZDwJI141mEDEz07Y7toOg%2FgZy4hQ%3D%3D",class:"card-img-top",alt:"img"},null,-1),De={class:"card-body"},Ee=t("h5",{class:"card-title"},"聖誕優惠",-1),Ae=t("del",null,"指定款NT$1399",-1),Oe=t("p",{class:"card-text"},"聖誕優惠價NT$999",-1),Ne={class:"col-12 col-md-4"},je={class:"card"},Fe=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676584071318.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lpf3C1%2F2mtC8DlCQwSUTyiI5J5s5tH8kL1t5xkh6jzQIoq5nuVnghoLYfxdtvEk3CuRsbb6iMxlbE5fUOf3BeOgWmFFl6j%2Fd8PMT1ieomE%2FXCgmGb1yQp%2FjBrJYQF25iHMWM%2FoJmqbmGPFzdALk5hUxUH4e5d5tDZs2Ezgf1DJHupv9HkrSx6GUaHZWR8cZHBHIYiQqlA%2FWTyahby2EGbAE74q1%2B53vSpo7WlIaD2Mv5xmHfVYogLq7QJ9NJmE1HMM7DDT3fRe9TNaWwWwSj%2BUWQKLGB16qPx7sa6IqNDNo0adRUqxP7MNhPPIZDwJI141mEDEz07Y7toOg%2FgZy4hQ%3D%3D",class:"card-img-top",alt:"img"},null,-1),He={class:"card-body"},Ie=t("h5",{class:"card-title"},"聖誕優惠",-1),qe=t("del",null,"指定款NT$1399",-1),Re=t("p",{class:"card-text"},"聖誕優惠價NT$999",-1),Me=oe('<div class="about bg-warning d-flex justify-content-center p-5 mb-5"><div class="card mb-3" style="max-width:1200px;"><div class="row g-4"><div class="col-md-4"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676585388198.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=TosivJb3LmGFvvIHDlGbsqFEj5b130YpcOF1AAQZzvdN0q7%2Bx9ivlHIpdbZx%2BMuybBisuH26wfGdf%2BeaN5NjPTW2yky8LxtQ3qkt7wLZxTfFzuTEMCXq6g6mLAbBbFVvu%2FGgVUKK2%2FKvfFzXLbiJx%2FR1H7Z7XwJ76L7a4rHRQKBJM3ZGhLicm8R72B%2Fmwv7nyWo4pHAWNR%2F0NwMFNQNsPjDJ46u0EjnI96XiuNqEItA2hpCHIhjVk5%2BQO72bXfwVvTE72QhoQeDiNAYDltyLlHg8UiN676WDVPEQFfhvvqjLMnjoBZO0PTAl9UtEBg9z4B7yafbcturcIAAHwPJAuA%3D%3D" class="img-fluid rounded-start" alt="img"></div><div class="col-md-8"><div class="card-body"><h5 class="card-title" style="color:#4e6752;font-weight:600;font-size:40px;"> 關於 Ｍorizanko - 冉冉森林 </h5><p class="card-text" style="font-weight:400;font-size:20px;line-height:49px;"> mori來自日語的もり是森林的意思， zanko則是日語的殘光、餘暉。 冉冉森林是希望帶給大家像森林般的變化萬千， 但不是那種強而濃烈的瞬息萬變。 希望像夕陽的餘暉、日出的塵霧冉冉、湖泊的水光粼粼， 緩緩的、輕輕慢慢的，用我看世界的角度及獨特的色彩風格， 創作在指尖上，帶著一點光透，滲透這片美甲的森林。 希望每個來到冉冉森林的人都能喜歡我們的風格， 也在每一次尋找不同色彩的過程中，更認識自己。 </p></div></div></div></div></div>',1),Le={class:"container"},Ye={class:"row"},Ue=t("h2",{class:"d-flex justify-content-center mb-5"},"熱門款式",-1),Je={class:"col-12 col-md-3"},Pe={class:"swiper-slide"},We={class:"card"},Ge=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676484277483.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LGt6CRZe00SsaAx%2FYJAsXqo65x7N4xg%2Bhdm%2BAcIijOsjycqYSQUJeT67JqZ%2FDSTXcaLUbXUCroaw%2BTvPYSMBgx5lH4aTHA%2BX6VSBawOkRomp68Z5oRpGJVtZmBrA9lszddaTVowQgzaHE7%2FhWOafDDOaqmR%2BmgFex0wnDaHSfAHZUXRk%2BaKjteig6pqipUw0LYfnLIDph6p995vwmcgbMi9b1I0Jz7opsmxf9xT2vHBOgkYTghAA7AALWzY6%2FDGDB7t6mpkCqP%2BzUYzcjb4MFNYS6qt732NndQY3nM4HACl9c9YSbwEWiDY4o6nbDRaTU1wzJxiq1HDL06KBDiYavw%3D%3D",class:"card-img-top",alt:"product-image"},null,-1),Qe={class:"card-body"},Ze=t("h6",{class:"card-title"},"大漂亮",-1),Ve=t("div",{class:"card-text d-flex justify-content-between align-items-center"},[t("del",null,"NT 1399 元"),t("strong",{class:"text-danger"},"NT 999元")],-1),ke=t("button",{class:"btn btn-outline-primary w-100 mt-2 I-btn"}," 前往商品 ",-1),Xe={class:"col-12 col-md-3"},Ke={class:"swiper-slide"},$e={class:"card"},et=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676484277483.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LGt6CRZe00SsaAx%2FYJAsXqo65x7N4xg%2Bhdm%2BAcIijOsjycqYSQUJeT67JqZ%2FDSTXcaLUbXUCroaw%2BTvPYSMBgx5lH4aTHA%2BX6VSBawOkRomp68Z5oRpGJVtZmBrA9lszddaTVowQgzaHE7%2FhWOafDDOaqmR%2BmgFex0wnDaHSfAHZUXRk%2BaKjteig6pqipUw0LYfnLIDph6p995vwmcgbMi9b1I0Jz7opsmxf9xT2vHBOgkYTghAA7AALWzY6%2FDGDB7t6mpkCqP%2BzUYzcjb4MFNYS6qt732NndQY3nM4HACl9c9YSbwEWiDY4o6nbDRaTU1wzJxiq1HDL06KBDiYavw%3D%3D",class:"card-img-top",alt:"product-image"},null,-1),tt={class:"card-body"},nt=t("h6",{class:"card-title"},"大漂亮",-1),at=t("div",{class:"card-text d-flex justify-content-between align-items-center"},[t("del",null,"NT 1399 元"),t("strong",{class:"text-danger"},"NT 999元")],-1),it=t("button",{class:"btn btn-outline-primary w-100 mt-2 I-btn"}," 前往商品 ",-1),ot={class:"col-12 col-md-3"},lt={class:"swiper-slide"},st={class:"card"},dt=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676484277483.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LGt6CRZe00SsaAx%2FYJAsXqo65x7N4xg%2Bhdm%2BAcIijOsjycqYSQUJeT67JqZ%2FDSTXcaLUbXUCroaw%2BTvPYSMBgx5lH4aTHA%2BX6VSBawOkRomp68Z5oRpGJVtZmBrA9lszddaTVowQgzaHE7%2FhWOafDDOaqmR%2BmgFex0wnDaHSfAHZUXRk%2BaKjteig6pqipUw0LYfnLIDph6p995vwmcgbMi9b1I0Jz7opsmxf9xT2vHBOgkYTghAA7AALWzY6%2FDGDB7t6mpkCqP%2BzUYzcjb4MFNYS6qt732NndQY3nM4HACl9c9YSbwEWiDY4o6nbDRaTU1wzJxiq1HDL06KBDiYavw%3D%3D",class:"card-img-top",alt:"product-image"},null,-1),rt={class:"card-body"},ut=t("h6",{class:"card-title"},"大漂亮",-1),ct=t("div",{class:"card-text d-flex justify-content-between align-items-center"},[t("del",null,"NT 1399 元"),t("strong",{class:"text-danger"},"NT 999元")],-1),ft=t("button",{class:"btn btn-outline-primary w-100 mt-2 I-btn"}," 前往商品 ",-1),pt={class:"col-12 col-md-3"},gt={class:"swiper-slide"},vt={class:"card"},ht=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676484277483.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LGt6CRZe00SsaAx%2FYJAsXqo65x7N4xg%2Bhdm%2BAcIijOsjycqYSQUJeT67JqZ%2FDSTXcaLUbXUCroaw%2BTvPYSMBgx5lH4aTHA%2BX6VSBawOkRomp68Z5oRpGJVtZmBrA9lszddaTVowQgzaHE7%2FhWOafDDOaqmR%2BmgFex0wnDaHSfAHZUXRk%2BaKjteig6pqipUw0LYfnLIDph6p995vwmcgbMi9b1I0Jz7opsmxf9xT2vHBOgkYTghAA7AALWzY6%2FDGDB7t6mpkCqP%2BzUYzcjb4MFNYS6qt732NndQY3nM4HACl9c9YSbwEWiDY4o6nbDRaTU1wzJxiq1HDL06KBDiYavw%3D%3D",class:"card-img-top",alt:"product-image"},null,-1),mt={class:"card-body"},bt=t("h6",{class:"card-title"},"大漂亮",-1),_t=t("div",{class:"card-text d-flex justify-content-between align-items-center"},[t("del",null,"NT 1399 元"),t("strong",{class:"text-danger"},"NT 999元")],-1),yt=t("button",{class:"btn btn-outline-primary w-100 mt-2 I-btn"}," 前往商品 ",-1),St={class:"about bg-warning d-flex justify-content-center p-5 mb-5"},wt={class:"card mb-3",style:{"max-width":"1200px"}},xt={class:"row g-4"},Bt={class:"col-md-8"},zt={class:"card-body"},Tt=t("h5",{class:"card-title",style:{color:"#4e6752","font-weight":"600","font-size":"40px"}}," Morizanko 預約須知 ",-1),Ct=t("p",{class:"card-text",style:{"font-weight":"400","font-size":"20px","line-height":"45px"}},[x(" ⚠️ 施作過程中可能會有小狀況發生及剪甘皮的受傷風險，會小心及避免。 "),t("br"),x(" 🕰 施作時間約需保留2-3小時，須耐久坐。（如需卸甲，則時間另計） "),t("br"),x(" 🌱首次預約時會請您先傳一下手部照片「指甲長度須超過指甲肉」 "),t("br"),x(" 「如有崁甲、灰指甲、咬甲」先去把指甲的健康照顧好，再預約變美美喔 "),t("br"),x(" 🤎如有事須更改時間或取消預約，請於「預約日期三天前」通知。 "),t("br")],-1),Dt={class:"d-flex justify-content-between"},Et=t("p",{style:{"font-weight":"400","font-size":"25px"}}," 🧡預約詢問請私訊官方Line ",-1),At=t("button",{class:"btn btn-primary text-nowrap"}," 查看更多 ",-1),Ot=t("div",{class:"col-md-4"},[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676603236410.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Jq3QRBK0tEeUQ%2F7yPLrhMR6us7y%2FWqeUBA%2BSNPamkxtHLh2s200j10w2KVi0EFGtyYQYSsILe%2FeMVQ16D4qQ4MLdI2QT7D2o4fMAV39IbHgJG5YAOHpS0b8%2BgncqRqYHjBZ9jAWty5gIbraG4B1cWydKUDz%2FgUJMNT1CCxxvf5JTw%2FS6aX%2BI1Jqa3BAQ4iSdoRjHnKCA7kMwThQFR%2Fjq%2BIXAoRWyhMShlljq7kW7Xh%2FTyASxzWGsIRtJUpmx93M5fXfijeemrROcVQNHf9jTrM4KN5sRZbQSoaJsXxtZw2nRyVZjnTq%2B7SECJwG3x2%2Bcipp%2BJfoqirB7Jy7nbmgFcw%3D%3D",class:"img-fluid rounded-start",alt:"img"})],-1);function Nt(e,r,a,i,l,u){const o=I("router-link"),f=I("RouterLink"),n=I("swiper-slide");return ne(),ae(ie,null,[t("div",ve,[he,t("div",me,[t("div",be,[t("div",_e,[ye,t("div",Se,[we,xe,Be,m(o,{class:"btn btn-primary",to:"/news"},{default:b(()=>[x("活動詳情")]),_:1})])])]),t("div",ze,[t("div",Te,[Ce,t("div",De,[Ee,Ae,Oe,m(o,{class:"btn btn-primary",to:"/news"},{default:b(()=>[x("活動詳情")]),_:1})])])]),t("div",Ne,[t("div",je,[Fe,t("div",He,[Ie,qe,Re,m(o,{class:"btn btn-primary",to:"/news"},{default:b(()=>[x("活動詳情")]),_:1})])])])])]),Me,t("div",Le,[t("div",Ye,[Ue,t("div",Je,[m(n,null,{default:b(()=>[t("div",Pe,[t("div",We,[Ge,t("div",Qe,[Ze,Ve,m(f,{class:"nav-link",to:"/products"},{default:b(()=>[ke]),_:1})])])])]),_:1})]),t("div",Xe,[m(n,null,{default:b(()=>[t("div",Ke,[t("div",$e,[et,t("div",tt,[nt,at,m(f,{class:"nav-link",to:"/products"},{default:b(()=>[it]),_:1})])])])]),_:1})]),t("div",ot,[m(n,null,{default:b(()=>[t("div",lt,[t("div",st,[dt,t("div",rt,[ut,ct,m(f,{class:"nav-link",to:"/products"},{default:b(()=>[ft]),_:1})])])])]),_:1})]),t("div",pt,[m(n,null,{default:b(()=>[t("div",gt,[t("div",vt,[ht,t("div",mt,[bt,_t,m(f,{class:"nav-link",to:"/products"},{default:b(()=>[yt]),_:1})])])])]),_:1})])])]),t("div",St,[t("div",wt,[t("div",xt,[t("div",Bt,[t("div",zt,[Tt,Ct,t("div",Dt,[Et,m(f,{class:"nav-link",to:"/reserve"},{default:b(()=>[At]),_:1})])])]),Ot])])])],64)}const Ht=te(ge,[["render",Nt]]);export{Ht as default};
