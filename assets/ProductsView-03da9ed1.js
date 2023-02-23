import{_ as P,o as i,c as n,a as t,q as g,s as u,F as k,t as b,u as l,v as x,r as p,b as h,d as T,w as C,e as m}from"./index-8f52f471.js";import{S as w}from"./sweetalert2.all-f521015d.js";const y={props:["pages"],data(){return{}},methods:{goToPage(c){this.$emit("goToPage",c)}}},V={"aria-label":"Page navigation example"},E={class:"pagination justify-content-end"},L=t("span",{"aria-hidden":"true"},"«",-1),A=[L],B={key:0,class:"page-link"},R=["onClick"],S=t("span",{"aria-hidden":"true"},"»",-1),D=[S];function I(c,e,s,$,d,r){return i(),n("nav",V,[t("ul",E,[t("li",{class:g(["page-item",{disabled:!s.pages.has_pre}])},[t("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=u(a=>r.goToPage(s.pages.current_page-1),["prevent"]))},A)],2),(i(!0),n(k,null,b(s.pages.total_pages,(a,_)=>(i(),n("li",{key:_,class:"page-item"},[a===s.pages.current_page?(i(),n("span",B,l(a),1)):(i(),n("a",{key:1,class:"page-link",href:"#",onClick:u(o=>r.goToPage(a),["prevent"])},l(a),9,R))]))),128)),t("li",{class:g(["page-item",{disabled:!s.pages.has_next}])},[t("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=u(a=>r.goToPage(s.pages.current_page+1),["prevent"]))},D)],2)])])}const N=P(y,[["render",I]]);const{VITE_APP_URL:v,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"azraelk",BASE_URL:"/weekk66",MODE:"production",DEV:!1,PROD:!0},U={data(){return{isLoading:!1,products:[],pagination:{}}},components:{RouterLink:x,PaginationComponent:N},methods:{getProducts(c=1){this.$http.get(`${v}/api/${f}/products?page=${c}`).then(e=>{console.log(e),this.products=e.data.products,this.pagination=e.data.pagination}).catch(e=>{console.error(e)})},addToCart(c){const e={product_id:c,qty:1};this.$http.post(`${v}/api/${f}/cart`,{data:e}).then(s=>{console.log(s),w.fire({position:"center",icon:"success",title:"成功加入購物車",showConfirmButton:!0,confirmButtonText:"確認"})}).catch(s=>{console.error(s)})}},mounted(){this.getProducts(),this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},1e3)}},q={class:"container"},z=T('<nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="#">首頁</a></li><li class="breadcrumb-item active" aria-current="page">美甲款式</li></ol></nav>',1),F={class:"row mt-5"},G=T('<div class="col-md-2"><div class="list-group"><a href="#" class="list-group-item list-group-item-action active" aria-current="true"> 所有款式 </a><a href="#" class="list-group-item list-group-item-action">單色</a><a href="#" class="list-group-item list-group-item-action">跳色</a><a href="#" class="list-group-item list-group-item-action">漸層</a><a href="#" class="list-group-item list-group-item-action">暈染</a><a href="#" class="list-group-item list-group-item-action">指定款</a></div></div>',1),H={class:"col-md-10"},M={class:"row g-4"},O={class:"card"},j=["src"],J=t("span",null,"詳細資訊",-1),K={class:"card-body"},Q={class:"card-title"},W={class:"card-text"},X=t("br",null,null,-1),Y=["onClick"];function Z(c,e,s,$,d,r){const a=p("router-link"),_=p("pagination-component");return i(),n("div",q,[z,t("div",F,[G,t("div",H,[t("div",M,[(i(!0),n(k,null,b(d.products,o=>(i(),n("div",{class:"col-md-4 col-sm-6",key:o.id},[t("div",O,[h(a,{class:"products-img",role:"button",to:`/product/${o.id}`},{default:C(()=>[t("img",{src:o.imageUrl,class:"card-img-top",style:{width:"100%",height:"350px"}},null,8,j),J]),_:2},1032,["to"]),t("div",K,[t("h5",Q,l(o.title),1),t("p",W,[m(l(o.description)+" ",1),X,m(" "+l(o.content),1)]),t("button",{type:"button",class:"btn btn-danger mt-auto fs-6 w-100",onClick:tt=>r.addToCart(o.id)}," 加入購物車 ",8,Y)])])]))),128)),h(_,{pages:d.pagination,onGoToPage:r.getProducts},null,8,["pages","onGoToPage"])])])])])}const at=P(U,[["render",Z]]);export{at as default};