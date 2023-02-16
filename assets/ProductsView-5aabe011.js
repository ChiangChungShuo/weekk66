import{_ as g,f,r as c,o as i,c as r,b as l,a as t,F as d,g as P,t as L,w as k,e as T}from"./index-29d9b56c.js";import{S as V}from"./sweetalert2.all-43f3633d.js";const{VITE_APP_URL:u,VITE_APP_PATH:_}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"azraelk",BASE_URL:"/weekk66/",MODE:"production",DEV:!1,PROD:!0},b={data(){return{isLoading:!1,products:[]}},components:{RouterLink:f},methods:{getProducts(){this.$http.get(`${u}/api/${_}/products/all`).then(o=>{console.log(o),this.products=o.data.products}).catch(o=>{console.error(o)})},addToCart(o){const s={product_id:o,qty:1};this.$http.post(`${u}/api/${_}/cart`,{data:s}).then(n=>{console.log(n),V.fire({position:"center",icon:"success",title:"成功加入購物車",showConfirmButton:!0,confirmButtonText:"確認"})}).catch(n=>{console.error(n)})}},mounted(){this.getProducts(),this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},1e3)}},v={class:"container"},E={class:"table"},$=["src"],w=["onClick"];function x(o,s,n,A,a,p){const h=c("VueLoading"),m=c("Router-link");return i(),r(d,null,[l(h,{active:a.isLoading,"onUpdate:active":s[0]||(s[0]=e=>a.isLoading=e)},null,8,["active"]),t("div",v,[t("table",E,[t("tbody",null,[(i(!0),r(d,null,P(a.products,e=>(i(),r("tr",{key:e.id},[t("td",null,L(e.title),1),t("td",null,[t("img",{src:e.imageUrl,width:"300",alt:""},null,8,$)]),t("td",null,[l(m,{class:"btn btn-primary",to:`/product/${e.id}`},{default:k(()=>[T("產品細節")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-danger",onClick:C=>p.addToCart(e.id)}," 加入購物車 ",8,w)])]))),128))])])])],64)}const B=g(b,[["render",x]]);export{B as default};
