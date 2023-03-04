import{M as v}from"./modal-a2f6b804.js";import{P as x}from"./PaginationModal-a3dc2b1d.js";import{_ as g,o as l,c as a,b as t,t as s,A as M,F as _,z as m,E as P,K as w,f as k,r as b,d as $}from"./index-b0ebcb20.js";const D={props:{tempOrders:{type:Object,default(){return{}},required:!0},data(){return{order:{}}},watch:{tempOrders(){this.order=this.tempOrders}}}},C={class:"modal-dialog modal-xl"},L={class:"modal-content border-0"},E=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"couponsModalLabel",class:"modal-title"},[t("span",null,"詳細訂單")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),V={class:"modal-body"},A={class:"row"},T={class:"col-md-6"},B=t("span",{class:"ms-2"},"訂購人資料",-1),U={class:"table"},q=t("th",null,"姓名",-1),I=t("th",null,"Email",-1),R=t("th",null,"電話",-1),S=t("th",null,"地址",-1),j={class:"col-md-6"},z=t("span",{class:"ms-2"},"訂購細節",-1),N={class:"table"},F=t("th",null,"訂單編號",-1),H=t("th",null,"訂購時間",-1),K=t("th",null,"付款狀態",-1),G=t("th",null,"總金額",-1),J={class:"row"},Q={class:"col"},W=t("span",{class:"ms-2"},"訂購商品",-1),X={class:"table"},Y={class:"text-end"},Z={class:"form-check d-flex justify-content-end pe-5"},tt=["id"],st=["for"],et={class:"modal-footer"},ot=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function dt(d,e,i,y,u,c){var p,r,h,n;return l(),a("div",C,[t("div",L,[E,t("div",V,[t("div",A,[t("div",T,[B,t("table",U,[t("tbody",null,[t("tr",null,[q,t("td",null,s((p=this.$props.tempOrders.user)==null?void 0:p.name),1)]),t("tr",null,[I,t("td",null,s((r=this.$props.tempOrders.user)==null?void 0:r.email),1)]),t("tr",null,[R,t("td",null,s((h=this.$props.tempOrders.user)==null?void 0:h.tel),1)]),t("tr",null,[S,t("td",null,s((n=this.$props.tempOrders.user)==null?void 0:n.address),1)])])])]),t("div",j,[z,t("table",N,[t("tbody",null,[t("tr",null,[F,t("td",null,s(this.$props.tempOrders.id),1)]),t("tr",null,[H,t("td",null,s(new Date(this.$props.tempOrders.create_at*1e3).toLocaleDateString()),1)]),t("tr",null,[K,t("td",null,[t("span",{class:M({"text-success":this.$props.tempOrders.is_paid,"text-danger":!this.$props.tempOrders.is_paid})},s(this.$props.tempOrders.is_paid?"已付款":"未付款"),3)])]),t("tr",null,[G,t("td",null,s(this.$props.tempOrders.total),1)])])])]),t("div",J,[t("div",Q,[W,t("table",X,[t("tbody",null,[(l(!0),a(_,null,m(this.$props.tempOrders.products,o=>(l(),a("tr",{key:o.id},[t("th",null,s(o.product.title),1),t("td",null,s(o.qty)+" / "+s(o.product.unit),1),t("td",Y,"$ "+s(o.final_total),1)]))),128))])])])]),t("div",Z,[P(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"{this.$props.tempOrders.id}","onUpdate:modelValue":e[0]||(e[0]=o=>this.$props.tempOrders.is_paid=o)},null,8,tt),[[w,this.$props.tempOrders.is_paid]]),t("label",{class:"form-check-label px-3",for:"{this.$props.tempOrders.id}"},[t("span",null,s(this.$props.tempOrders.is_paid?"已付款":"未付款"),1)],8,st)])])]),t("div",et,[ot,t("button",{type:"button",class:"btn btn-custom_medium-green text-white",onClick:e[1]||(e[1]=o=>d.$emit("update-orders",d.order))}," 修改 ")])])])}const lt=g(D,[["render",dt]]),at={props:{tempOrders:{type:Object,default(){return{}},required:!0}}},rt={class:"modal-dialog"},nt={class:"modal-content border-0"},it=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delOrdersModalLabel",class:"modal-title"},[t("span",null,"刪除訂單")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ct={class:"modal-body"},pt={class:"text-danger"},ut={class:"container"},ht={class:"row"},_t={class:"col"},mt=t("span",{class:"ms-2"},"訂購商品",-1),bt={class:"table"},$t={class:"text-end"},ft={class:"modal-footer"},Ot=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function gt(d,e,i,y,u,c){var p;return l(),a("div",rt,[t("div",nt,[it,t("div",ct,[k(" 是否刪除 "),t("strong",pt,s((p=this.$props.tempOrders)==null?void 0:p.id),1),k(" 訂單(刪除後將無法恢復)。 ")]),t("div",ut,[t("div",ht,[t("div",_t,[mt,t("table",bt,[t("tbody",null,[(l(!0),a(_,null,m(this.$props.tempOrders.products,r=>(l(),a("tr",{key:r.id},[t("th",null,s(r.product.title),1),t("td",null,s(r.qty)+" / "+s(r.product.unit),1),t("td",$t,"$ "+s(r.final_total),1)]))),128))])])])])]),t("div",ft,[Ot,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=r=>d.$emit("delOrders"))}," 確認刪除 ")])])])}const yt=g(at,[["render",gt]]),{VITE_APP_URL:f,VITE_APP_PATH:O}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"azraelk",BASE_URL:"/weekk66",MODE:"production",DEV:!1,PROD:!0},vt={name:"OrdersView",props:["token"],data(){return{orders:[],tempOrders:{},page:{},states:{isLoading:!1,fullPage:!1},isLoading:!1,fullPage:!1,isNew:!1}},components:{Pagination:x,OrderModal:lt,DelorderModal:yt},methods:{getData(d=1){this.states={isLoading:!0,fullPage:!0};const e=`${f}/api/${O}/admin/orders?page=${d}`;this.$http.get(e).then(i=>{this.states={isLoading:!1,fullPage:!1},this.orders=i.data.orders,this.page=i.data.pagination}).catch(i=>{alert(i.response.data.message),this.states={isLoading:!1,fullPage:!1}})},openModal(d,e){d==="edit"?(this.tempOrders={...e},this.modal=new v(this.$refs.ordersModal,{keyboard:!1,backdrop:"static"}),this.modal.show()):d==="delete"&&(this.tempOrders={...e},this.modal=new v(this.$refs.delOrderModal,{keyboard:!1,backdrop:"static"}),this.modal.show())},updateOrders(){const d=`${f}/api/${O}/admin/order/${this.tempOrders.id}`;this.$http.put(d,{data:this.tempOrders}).then(()=>{this.$swal.fire({toast:!0,position:"top-end",icon:"success",title:"修改優惠券成功",showConfirmButton:!1,timer:1500}),this.modal.hide(),this.getData()}).catch(e=>{alert(e.response.data.message)})},delOrders(){const d=`${f}/api/${O}/admin/order/${this.tempOrders.id}`;this.$http.delete(d).then(()=>{this.$swal.fire({toast:!0,position:"top-end",icon:"success",title:"刪除優惠券成功",showConfirmButton:!1,timer:1500}),this.modal.hide(),this.getData()}).catch(e=>{alert(e.data.message)})}},mounted(){this.getData()}},kt={class:"container-fluid"},xt={class:"table mt-4"},Mt=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"訂單編號"),t("th",{class:"text-center"},"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",{class:"text-center"},"編輯")])],-1),Pt={class:"text-center pe-4"},wt={class:"list-unstyled"},Dt={key:0,class:"text-success"},Ct={key:1,class:"text-danger"},Lt={class:"text-center"},Et={class:"btn-group"},Vt=["onClick"],At=["onClick"],Tt={id:"ordersModal",ref:"ordersModal",class:"modal fade",tabindex:"-1","aria-labelledby":"ordersModalLabel","aria-hidden":"true"},Bt={id:"delOrderModal",ref:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModalLabel","aria-hidden":"true"};function Ut(d,e,i,y,u,c){const p=b("Pagination"),r=b("OrderModal"),h=b("DelorderModal");return l(),a("div",kt,[t("table",xt,[Mt,t("tbody",null,[(l(!0),a(_,null,m(u.orders,n=>(l(),a("tr",{key:n.id},[t("td",null,s(new Date(n.create_at*1e3).toLocaleDateString()),1),t("td",null,s(n.id),1),t("td",Pt,[t("ul",wt,[(l(!0),a(_,null,m(n.products,o=>(l(),a("li",{key:o.id},s(o.product.title)+" ： "+s(o.qty)+" "+s(o.product.unit),1))),128))])]),t("td",null,"$ "+s(n.total),1),t("td",null,[n.is_paid?(l(),a("span",Dt,"已付款")):(l(),a("span",Ct,"未付款"))]),t("td",Lt,[t("div",Et,[t("button",{type:"button",class:"btn btn-sm btn-outline-custom_dark-green",onClick:o=>c.openModal("edit",n)}," 編輯 ",8,Vt),t("button",{type:"button",class:"btn btn-sm btn-outline-custom_red ms-md-2",onClick:o=>c.openModal("delete",n)}," 刪除 ",8,At)])])]))),128))])]),$(p,{pages:u.page,onChangePage:c.getData},null,8,["pages","onChangePage"]),t("div",Tt,[$(r,{"temp-orders":u.tempOrders,onUpdateOrders:c.updateOrders},null,8,["temp-orders","onUpdateOrders"])],512),t("div",Bt,[$(h,{"temp-orders":u.tempOrders,onDelOrders:c.delOrders},null,8,["temp-orders","onDelOrders"])],512)])}const St=g(vt,[["render",Ut]]);export{St as default};