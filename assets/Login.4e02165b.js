var f=Object.defineProperty,h=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var l=(e,s,o)=>s in e?f(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,c=(e,s)=>{for(var o in s||(s={}))w.call(s,o)&&l(e,o,s[o]);if(r)for(var o of r(s))g.call(s,o)&&l(e,o,s[o]);return e},p=(e,s)=>h(e,b(s));import{m as v,o as x,c as y,a as t,l as _,v as m,p as k,n as j}from"./vendor.5e2d2e25.js";import{_ as I,r as u,s as B}from"./index.b3189932.js";import{a as S}from"./index.af28eb81.js";const V={data(){return{account:"",password:"",disabled:!1}},mounted(){},methods:p(c({},v(["login"])),{test(){u.push("/week-1")},login(){this.disabled=!0;const e=this.account,s=this.password;S.login(e,s).then(o=>{B.dispatch("login",o.data.token),u.push("/week-2")}).catch(o=>{this.disabled=!1,console.error(o)})}})},a=e=>(k("data-v-3f3c0421"),e=e(),j(),e),q={class:"container mt-4 h-100 text-center d-flex flex-column align-items-center justify-content-center"},E={class:"row justify-content-center"},L=a(()=>t("h1",{class:"h3 mb-3 font-weight-normal"}," \u8ACB\u5148\u767B\u5165 ",-1)),P={class:"col-8"},U={id:"form",class:"form-sign"},A={class:"form-floating mb-3"},C=["disabled"],D=a(()=>t("label",{for:"username"},"Email address",-1)),M={class:"form-floating"},N=["disabled"],T=a(()=>t("label",{for:"password"},"Password",-1)),z=["disabled"],F=a(()=>t("p",{class:"row mt-5 mb-3 text-muted"}," \xA9 2021~\u221E - \u516D\u89D2\u5B78\u9662 ",-1));function G(e,s,o,H,d,i){return x(),y("div",q,[t("div",E,[L,t("div",P,[t("form",U,[t("div",A,[_(t("input",{id:"username","onUpdate:modelValue":s[0]||(s[0]=n=>d.account=n),type:"email",class:"form-control",placeholder:"name@example.com",required:"",autofocus:"",disabled:d.disabled},null,8,C),[[m,d.account]]),D]),t("div",M,[_(t("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=n=>d.password=n),type:"password",class:"form-control",placeholder:"Password",required:"",disabled:d.disabled},null,8,N),[[m,d.password]]),T]),t("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"button",disabled:d.disabled,onClick:s[2]||(s[2]=(...n)=>i.login&&i.login(...n))}," \u767B\u5165 ",8,z)])])]),F])}var R=I(V,[["render",G],["__scopeId","data-v-3f3c0421"]]);export{R as default};
