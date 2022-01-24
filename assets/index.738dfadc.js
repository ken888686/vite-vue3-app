import{c as x,a as N,b as u,d as c,e as O,f as S,r as k,o as m,g as w,h as i,i as p,w as _,j as W,k as y,l as f,F as C,m as T}from"./vendor.08a023aa.js";const A=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};A();const v=x({plugins:[N({storage:window.localStorage})],state(){return{isLogin:u.get("isLogin"),token:u.get("token")}},mutations:{login(t){t.isLogin=!0,u.set("isLogin",!0)},logout(t){t.isLogin=!1,u.set("isLogin",!1),u.set("token","")},updateToken(t,o){t.token=o,u.set("token",o)}},actions:{login({commit:t},o){t("login"),t("updateToken",o)},logout({commit:t}){t("logout"),t("updateToken","")}}}),l="https://vue3-course-api.hexschool.io",b="ken888686",d={headers:{authorization:v.state.token}},V={login(t,o){return new Promise((n,s)=>{c.post(`${l}/v2/admin/signin`,{username:t,password:o}).then(e=>{d.headers.authorization=e.data.token,n(e)}).catch(e=>{s(e)})})},logout(){return new Promise((t,o)=>{c.post(`${l}/v2/logout`,{},d).then(n=>{t(n)}).catch(n=>{o(n)})})},check(){return new Promise((t,o)=>{c.post(`${l}/v2/api/user/check`,{},d).then(n=>{t(n)}).catch(n=>{o(n)})})}},ie={getProducts(t=1,o=""){return new Promise((n,s)=>{c.get(`${l}/v2/api/${b}/admin/products?page=${t}&category=${o}`,d).then(e=>{n(e)}).catch(e=>{s(e)})})},addProduct(t){return new Promise((o,n)=>{c.post(`${l}/v2/api/${b}`,t,d).then(s=>{o(s)}).catch(s=>{n(s)})})},deleteProduct(t){return new Promise((o,n)=>{c.delete(`${l}/v2/api/${b}/admin/product/${t}`,d).then(s=>{o(s)}).catch(s=>{n(s)})})},editProduct(t,o){return new Promise((n,s)=>{c.put(`${l}/v2/api/${b}/admin/product/${t}`,o,d).then(e=>{n(e)}).catch(e=>{s(e)})})}},j="modulepreload",P={},D="/hex/",h=function(o,n){return!n||n.length===0?o():Promise.all(n.map(s=>{if(s=`${D}${s}`,s in P)return;P[s]=!0;const e=s.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":j,e||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),e)return new Promise((g,E)=>{a.addEventListener("load",g),a.addEventListener("error",E)})})).then(()=>o())},R=[{path:"/",name:"Home",component:()=>h(()=>import("./Home.0cae829d.js"),["assets/Home.0cae829d.js","assets/vendor.08a023aa.js"])},{path:"/login",name:"Login",component:()=>h(()=>import("./Login.2da34996.js"),["assets/Login.2da34996.js","assets/Login.ed2f6283.css","assets/vendor.08a023aa.js"])},{path:"/week-1",name:"Week 1",component:()=>h(()=>import("./Week-1.675e8fd9.js"),["assets/Week-1.675e8fd9.js","assets/Week-1.1ac72454.css","assets/vendor.08a023aa.js"])},{path:"/week-2",name:"Week 2",component:()=>h(()=>import("./Week-2.3c786b48.js"),["assets/Week-2.3c786b48.js","assets/vendor.08a023aa.js"])},{path:"/week-3",name:"Week 3",component:()=>h(()=>import("./Week-3.6542688c.js"),["assets/Week-3.6542688c.js","assets/vendor.08a023aa.js"])}],L=O({history:S("/hex/"),linkActiveClass:"active",routes:R});var I="/hex/assets/logo.03d6d6da.png",$=(t,o)=>{const n=t.__vccOpts||t;for(const[s,e]of o)n[s]=e;return n};const z={name:"Navbar",data(){return{logoSize:25,isProcessing:!1}},computed:{isLogin(){return v.state.isLogin}},mounted(){},methods:{logout(){this.isProcessing=!0,V.logout().then(t=>{alert(t.data.message),v.dispatch("logout"),L.push("/")}).catch(t=>{alert(t.response.data.message),console.dir(t)}).finally(()=>{this.isProcessing=!1})}}},B={class:"navbar navbar-expand-lg navbar-light bg-light"},F={class:"container"},H=["width","height"],q=i("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[i("span",{class:"navbar-toggler-icon"})],-1),K={id:"navbarSupportedContent",class:"collapse navbar-collapse"},G={class:"navbar-nav me-auto mb-2 mb-lg-0"},J={class:"nav-item dropdown"},M=i("a",{id:"navbarDropdown",class:"nav-link dropdown-toggle fw-bold",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," \u6BCF\u9031\u4EFB\u52D9 ",-1),Q={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},U=f(" Week 1 "),X=f(" Week 2 "),Y=f(" Week 3 "),Z=f(" \u767B\u5165 "),ee=["disabled"];function te(t,o,n,s,e,r){const a=k("router-link");return m(),w("nav",B,[i("div",F,[p(a,{class:"navbar-brand",to:"/"},{default:_(()=>[i("img",{src:I,alt:"logo",width:e.logoSize,height:e.logoSize},null,8,H)]),_:1}),q,i("div",K,[i("ul",G,[i("li",J,[M,i("ul",Q,[i("li",null,[p(a,{class:"dropdown-item",to:"/week-1"},{default:_(()=>[U]),_:1})]),i("li",null,[p(a,{class:"dropdown-item",to:"/week-2"},{default:_(()=>[X]),_:1})]),i("li",null,[p(a,{class:"dropdown-item",to:"/week-3"},{default:_(()=>[Y]),_:1})])])])])]),r.isLogin?y("",!0):(m(),W(a,{key:0,to:"/login",type:"button",class:"btn btn-primary"},{default:_(()=>[Z]),_:1})),r.isLogin?(m(),w("button",{key:1,type:"button",class:"btn btn-outline-primary",disabled:e.isProcessing,onClick:o[0]||(o[0]=(...g)=>r.logout&&r.logout(...g))}," \u767B\u51FA ",8,ee)):y("",!0)])])}var oe=$(z,[["render",te]]);const ne={components:{Navbar:oe}};function se(t,o,n,s,e,r){const a=k("Navbar"),g=k("router-view");return m(),w(C,null,[p(a),p(g)],64)}var re=$(ne,[["render",se]]);T(re).use(L).use(v).mount("#app");export{$ as _,V as a,ie as b,L as r,v as s};
