import{a as r}from"./index.108d9c4a.js";import{_ as c,r as _}from"./index.24ea7a67.js";import{o,c as d,a as t,F as h,q as l,t as e,f as a}from"./vendor.5e2d2e25.js";const u={data(){return{isLogin:this.$store.state.isLogin,products:[]}},mounted(){this.isLogin?r.getProducts().then(n=>{this.products=n.data.products}):_.push("/login")},methods:{}},p={class:"container"},m={class:"table mt-4"},f=t("thead",null,[t("tr",null,[t("th",null,"\u7522\u54C1\u540D\u7A31"),t("th",{width:"120"}," \u539F\u50F9 "),t("th",{width:"120"}," \u552E\u50F9 "),t("th",{width:"150"}," \u662F\u5426\u555F\u7528 "),t("th",{width:"120"}," \u522A\u9664 ")])],-1),g={id:"productList"},b={width:"120"},w={width:"120"},x={width:"100"},v={class:""},L={width:"120"},k=["data-id"],y=a(" \u76EE\u524D\u6709 "),B={id:"productCount"},j=a(" \u9805\u7522\u54C1 ");function $(n,F,N,V,i,q){return o(),d("div",p,[t("table",m,[f,t("tbody",g,[(o(!0),d(h,null,l(i.products,s=>(o(),d("tr",{key:s.id},[t("td",null,e(s.title),1),t("td",b,e(s.origin_price),1),t("td",w,e(s.price),1),t("td",x,[t("span",v,e(s.is_enabled===1?"\u555F\u7528":"\u4E0D\u555F\u7528"),1)]),t("td",L,[t("button",{type:"button",class:"btn btn-sm btn-outline-danger move deleteBtn","data-action":"remove","data-id":s.id}," \u522A\u9664 ",8,k)])]))),128))])]),t("p",null,[y,t("span",B,e(i.products.length),1),j])])}var P=c(u,[["render",$]]);export{P as default};
