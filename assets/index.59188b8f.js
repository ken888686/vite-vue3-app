import{c as P,a as $,b as l,d as _,r as v,o as g,e as b,f as i,g as c,w as u,h as E,i as k,j as h,F as x,k as N,l as O,m as S}from"./vendor.d617f8c6.js";const W=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};W();const m=P({plugins:[$({storage:window.localStorage})],state(){return{isLogin:l.get("isLogin"),token:l.get("token")}},mutations:{login(e){e.isLogin=!0,l.set("isLogin",!0)},logout(e){e.isLogin=!1,l.set("isLogin",!1),l.set("token","")},updateToken(e,o){e.token=o,l.set("token",o)}},actions:{login({commit:e},o){e("login"),e("updateToken",o)},logout({commit:e}){e("logout"),e("updateToken","")}}}),f="https://vue3-course-api.hexschool.io",C="ken888686",T={login(e,o){return new Promise((n,a)=>{_.post(`${f}/v2/admin/signin`,{username:e,password:o}).then(t=>{n(t)}).catch(t=>{a(t)})})},logout(){return new Promise((e,o)=>{_.post(`${f}/v2/logout`,{},{headers:{authorization:m.state.token}}).then(n=>{e(n)}).catch(n=>{o(n)})})},check(){return new Promise((e,o)=>{_.post(`${f}/v2/api/user/check`,{},{headers:{authorization:m.state.token}}).then(n=>{e(n)}).catch(n=>{o(n)})})},getProducts(){return new Promise((e,o)=>{_.get(`${f}/v2/api/${C}/admin/products`,{headers:{authorization:m.state.token}}).then(n=>{e(n)}).catch(n=>{o(n)})})}};var A="/hex/assets/logo.03d6d6da.png",w=(e,o)=>{const n=e.__vccOpts||e;for(const[a,t]of o)n[a]=t;return n};const V={name:"Navbar",data(){return{logoSize:25}},computed:{isLogin(){return this.$store.state.isLogin}},mounted(){},methods:{logout(){T.logout().then(e=>{alert(e.data.message),this.$store.dispatch("logout"),this.$router.go()}).catch(e=>{alert(e.response.data.message),console.dir(e)})}}},j={class:"navbar navbar-expand-lg navbar-light bg-light"},D={class:"container"},R=["width","height"],z=i("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[i("span",{class:"navbar-toggler-icon"})],-1),I={id:"navbarSupportedContent",class:"collapse navbar-collapse"},B={class:"navbar-nav me-auto mb-2 mb-lg-0"},F={class:"nav-item dropdown"},H=i("a",{id:"navbarDropdown",class:"nav-link dropdown-toggle fw-bold",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," \u6BCF\u9031\u4EFB\u52D9 ",-1),q={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},K=h(" Week 1 "),G=h(" Week 2 "),J=h(" Week 3 "),M=h(" \u767B\u5165 ");function Q(e,o,n,a,t,s){const r=v("router-link");return g(),b("nav",j,[i("div",D,[c(r,{class:"navbar-brand",to:"/"},{default:u(()=>[i("img",{src:A,alt:"logo",width:t.logoSize,height:t.logoSize},null,8,R)]),_:1}),z,i("div",I,[i("ul",B,[i("li",F,[H,i("ul",q,[i("li",null,[c(r,{class:"dropdown-item",to:"/week-1"},{default:u(()=>[K]),_:1})]),i("li",null,[c(r,{class:"dropdown-item",to:"/week-2"},{default:u(()=>[G]),_:1})]),i("li",null,[c(r,{class:"dropdown-item",to:"/week-3"},{default:u(()=>[J]),_:1})])])])])]),s.isLogin?k("",!0):(g(),E(r,{key:0,to:"/login",type:"button",class:"btn btn-primary"},{default:u(()=>[M]),_:1})),s.isLogin?(g(),b("button",{key:1,type:"button",class:"btn btn-outline-primary",onClick:o[0]||(o[0]=(...d)=>s.logout&&s.logout(...d))}," \u767B\u51FA ")):k("",!0)])])}var U=w(V,[["render",Q]]);const X={components:{Navbar:U}};function Y(e,o,n,a,t,s){const r=v("Navbar"),d=v("router-view");return g(),b(x,null,[c(r),c(d)],64)}var Z=w(X,[["render",Y]]);const ee="modulepreload",y={},te="/hex/",p=function(o,n){return!n||n.length===0?o():Promise.all(n.map(a=>{if(a=`${te}${a}`,a in y)return;y[a]=!0;const t=a.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const r=document.createElement("link");if(r.rel=t?"stylesheet":ee,t||(r.as="script",r.crossOrigin=""),r.href=a,document.head.appendChild(r),t)return new Promise((d,L)=>{r.addEventListener("load",d),r.addEventListener("error",L)})})).then(()=>o())},oe=[{path:"/",name:"Home",component:()=>p(()=>import("./Home.ab5eb359.js"),["assets/Home.ab5eb359.js","assets/vendor.d617f8c6.js"])},{path:"/login",name:"Login",component:()=>p(()=>import("./Login.d2c62e16.js"),["assets/Login.d2c62e16.js","assets/Login.8ac6c1d3.css","assets/vendor.d617f8c6.js"])},{path:"/week-1",name:"Week 1",component:()=>p(()=>import("./Week-1.4276aad2.js"),["assets/Week-1.4276aad2.js","assets/Week-1.1ac72454.css","assets/vendor.d617f8c6.js"])},{path:"/week-2",name:"Week 2",component:()=>p(()=>import("./Week-2.a4a9e172.js"),["assets/Week-2.a4a9e172.js","assets/vendor.d617f8c6.js"])},{path:"/week-3",name:"Week 3",component:()=>p(()=>import("./Week-3.bdfe5ea6.js"),["assets/Week-3.bdfe5ea6.js","assets/vendor.d617f8c6.js"])}],ne=N({history:O("/hex/"),linkActiveClass:"active",routes:oe});S(Z).use(ne).use(m).mount("#app");export{w as _,T as a,ne as r,m as s};
