import{_ as m,r as f,o as l,c as r,b,F as u,d as t,f as _,g as C,t as d,a as v,h as I,v as x}from"./index-4b7eeb9a.js";const{VITE_APP_URL:i,VITE_APP_PATH:c}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"azraelk",BASE_URL:"/weekk66/",MODE:"production",DEV:!1,PROD:!0},y={data(){return{products:[],productId:"",cart:{},cartStatus:!1,isLoading:!1,loadingItem:"",user:{email:"",name:"",tel:"",address:""},message:""}},methods:{getCarts(){this.$http.get(`${i}/api/${c}/cart`).then(e=>{this.cart=e.data.data,this.cart.carts.length===0?this.cartStatus=!1:this.cartStatus=!0}).catch(e=>{console.error(e)})},updatedCartItem(e){const s={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.$http.put(`${i}/api/${c}/cart/${e.id}`,{data:s}).then(h=>{this.getCarts(),alert(h.data.message),this.loadingItem=""}).catch(h=>{console.error(h)})},delCartItem(e){this.loadingItem=e.id,this.$http.delete(`${i}/api/${c}/cart/${e.id}`).then(s=>{this.getCarts(),alert(s.data.message),this.loadingItem=""}).catch(s=>{console.error(s)})},deleteAll(){if(confirm("確定清空購物車？"))this.$http.delete(`${i}/api/${c}/carts`).then(s=>{this.getCarts(),alert("購物車已全部刪除")}).catch(s=>alert(s.response.data.message));else return},changeLoading(e){this.loadingItem=e},onSubmit(){const e={user:this.user,message:this.message};if(this.cart.carts.length===0){alert("購物車內還沒有商品唷～");return}this.$http.post(`${i}/api/${c}/order`,{data:e}).then(s=>{alert(s.data.message),this.$refs.form.resetForm(),this.getCarts(),this.message=""}).catch(s=>{alert(s.response.data.message)})},isPhone(e){return/^(09)[0-9]{8}$/.test(e)?!0:"需要正確的電話號碼"}},mounted(){this.getCarts(),this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},1500)}},V={key:0,class:"text-center"},$=t("p",null,"購物車內還沒有商品，快去選購吧！",-1),k=[$],L={class:"text-end"},P=["disabled"],A={class:"table align-middle"},S=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",null,"圖片"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",{class:"text-end"},"單價"),t("th",{class:"text-end"},"小計")])],-1),E=["disabled","onClick"],T=t("i",{class:"fas fa-spinner fa-pulse"},null,-1),U=["src"],N={class:"input-group input-group-sm"},w=["onUpdate:modelValue","disabled","onChange"],D=["value"],q={class:"text-end"},B={class:"text-end"},R=t("td",{colspan:"5",class:"text-end"},"總計",-1),F={class:"text-end"};function H(e,s,h,M,n,p){const g=f("VueLoading");return l(),r(u,null,[b(g,{active:n.isLoading,"onUpdate:active":s[0]||(s[0]=a=>n.isLoading=a)},null,8,["active"]),n.cartStatus?(l(),r(u,{key:1},[t("div",L,[t("button",{class:"btn btn-outline-danger",type:"button",disabled:!n.cartStatus,onClick:s[1]||(s[1]=a=>p.deleteAll())}," 清空購物車 ",8,P)]),t("table",A,[S,t("tbody",null,[n.cart.carts?(l(!0),r(u,{key:0},_(n.cart.carts,a=>(l(),r("tr",{key:a.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:a.id===n.loadingItem,onClick:o=>p.delCartItem(a)},[T,v(" x ")],8,E)]),t("td",null,d(a.product.title),1),t("td",null,[t("img",{src:a.product.imageUrl,width:"50",alt:""},null,8,U)]),t("td",null,[t("div",N,[I(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":o=>a.qty=o,disabled:a.id===n.loadingItem,onChange:o=>p.updatedCartItem(a)},[(l(),r(u,null,_(20,o=>t("option",{value:o,key:"i+'12345'"},d(o),9,D)),64))],40,w),[[x,a.qty]])])]),t("td",q,d(a.product.price),1),t("td",B,d(a.total),1)]))),128)):C("",!0)]),t("tfoot",null,[t("tr",null,[R,t("td",F,d(n.cart.total),1)])])])],64)):(l(),r("div",V,k))],64)}const z=m(y,[["render",H]]);export{z as default};