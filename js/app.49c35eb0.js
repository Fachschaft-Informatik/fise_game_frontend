(function(e){function t(t){for(var n,s,u=t[0],c=t[1],i=t[2],d=0,m=[];d<u.length;d++)s=u[d],o[s]&&m.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var u=a[s];0!==o[u]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},s={app:0},o={app:0},r=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-011af3ec":"eb018d23","chunk-1bd2e5e2":"4342b14d","chunk-2f691e8a":"e8fd45c2"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-011af3ec":1,"chunk-1bd2e5e2":1,"chunk-2f691e8a":1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise(function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-011af3ec":"8c1a4a9d","chunk-1bd2e5e2":"9f800e5e","chunk-2f691e8a":"02b8eec9"}[e]+".css",o=c.p+n,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var i=r[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===n||d===o))return t()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){i=m[u],d=i.getAttribute("data-href");if(d===n||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete s[e],l.parentNode.removeChild(l),a(r)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){s[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=r);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=u(e),i=function(t){d.onerror=d.onload=null,clearTimeout(m);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");r.type=n,r.request=s,a[1](r)}o[e]=void 0}};var m=setTimeout(function(){i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var l=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("1356"),s=a.n(n);s.a},1356:function(e,t,a){},"150b":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("v-app-bar",{attrs:{app:"",dense:""}},[n("v-btn",{attrs:{id:"logo",text:"",to:"/"}},[n("v-img",{staticClass:"mx-0",attrs:{src:a("cf05"),"max-width":"2.5rem","max-height":"2.5rem",contain:"",to:"/"}}),n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[e._v("Ersti")]),n("span",{staticClass:"subtitle-1 font-weight-light"},[e._v("Spiel")])])],1),n("v-spacer"),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:"alreadyStarted"===e.status,expression:"status==='alreadyStarted' "}],attrs:{text:"",to:"/game"}},[e._v("rejoin")])],1),n("v-content",[n("router-view")],1)],1)},o=[],r=a("2f62"),u={name:"App",computed:{...Object(r["d"])(["status"])}},c=u,i=(a("034f"),a("2877")),d=a("6544"),m=a.n(d),l=a("7496"),p=a("40dc"),h=a("8336"),f=a("a75b"),g=a("adda"),y=a("2fa4"),v=a("2a7f"),b=Object(i["a"])(c,s,o,!1,null,null,null),T=b.exports;m()(b,{VApp:l["a"],VAppBar:p["a"],VBtn:h["a"],VContent:f["a"],VImg:g["a"],VSpacer:y["a"],VToolbarTitle:v["a"]});var w=a("8c4f");n["a"].use(w["a"]);var S=new w["a"]({routes:[{path:"/",name:"home",component:()=>Promise.all([a.e("chunk-011af3ec"),a.e("chunk-1bd2e5e2")]).then(a.bind(null,"bb51"))},{path:"/game",name:"game",component:()=>Promise.all([a.e("chunk-011af3ec"),a.e("chunk-2f691e8a")]).then(a.bind(null,"7d36"))}]});const k="true"==Object({NODE_ENV:"production",BASE_URL:""}).LOCAL?"localhost":"http://backend-fise-game.apps.us-west-1.starter.openshift-online.com",$="true"==Object({NODE_ENV:"production",BASE_URL:""}).LOCAL?"8808":"8080",N={cache:"no-cache",headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}},O={method:"POST",cache:"no-cache",headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}};n["a"].use(r["a"]);var x=new r["a"].Store({state:{course:null,key:null,name:null,status:null,role:null,message:null,foundTeam:null,team:null,teammates:null,gameData:null,roundLoop:null,round:-1},mutations:{setKey:(e,t)=>e.key=t.toUpperCase(),updateStatus:(e,t)=>e.status=t,setMessage:(e,t)=>e.message=t,setName:(e,t)=>e.name=t,setRole:(e,t)=>e.role=t,setCourse:(e,t)=>e.course=t,setFoundTeam:(e,t)=>e.foundTeam=t,setGameData:(e,t)=>e.gameData=t,setTeammates:(e,t)=>e.teammates=t,setTeam:(e,t)=>e.team=t,updateRound:e=>e.round=e.round+1,setRound:(e,t)=>e.round=t,setRoundLoop:(e,t)=>e.roundLoop=t},actions:{register:async({commit:e,dispatch:t,state:a})=>{try{const s=await fetch(`http://${k}:${$}/${a.key}`,N);if(200===s.status){let t=JSON.parse(JSON.stringify(O));t.body=JSON.stringify({name:a.name,course:a.course});const n=await fetch(`http://${k}:${$}/register/${a.key}`,t),s=await n.text();e("updateStatus","alreadyStarted"===s?"alreadyStarted":"alreadyRegistered"===s?"keyUsed":"registered")}else e("updateStatus","wrongKey")}catch(n){setTimeout(()=>t("register"),500*Math.random())}},getStatus:async({commit:e,dispatch:t,state:a})=>{try{const s=await fetch(`http://${k}:${$}/status/${a.key}`,N),o=await s.json();"pending"!==o.role?(e("updateStatus","findTeam"),e("setTeammates",o.teammates),e("setTeam",o.team),e("setRole",o.role)):setTimeout(()=>t("getStatus"),5e3)}catch(n){setTimeout(()=>t("getStatus"),500*Math.random())}},getMessage:async({commit:e,dispatch:t,state:a})=>{try{const s=await fetch(`http://${k}:${$}/message/${a.key}`,N),o=await s.text();"no message"!==o&&e("setMessage",o),a.foundTeam||setTimeout(()=>t("getMessage"),5e3)}catch(n){setTimeout(()=>t("getMessage"),500*Math.random())}},sendMessage:async({commit:e,dispatch:t,state:a})=>{try{let s=JSON.parse(JSON.stringify(O));s.body=JSON.stringify({message:a.message}),await fetch(`http://${k}:${$}/message/${a.key}`,s),e("setFoundTeam",!0),a.roundLoop||t("getRound")}catch(n){setTimeout(()=>t("sendMessage"),500*Math.random())}},teamFound:async({commit:e,dispatch:t,state:a})=>{try{let s=JSON.parse(JSON.stringify(O));await fetch(`http://${k}:${$}/found/${a.key}`,s),e("setFoundTeam",!0),t("getRound")}catch(n){setTimeout(()=>t("teamFound"),500*Math.random())}},getRound:async({commit:e,dispatch:t,state:a})=>{try{const s=await fetch(`http://${k}:${$}/currentRound/${a.key}`,N),o=await s.json();"registered"!==o.message&&"findTeam"!==o.message?(e("setRoundLoop",!1),e("updateRound"),e("updateStatus",o.message),e("setGameData",o.gameData),"passive"===o.message&&t("checkForNext")):(e("setRoundLoop",!0),setTimeout(()=>t("getRound"),5e3))}catch(n){console.error(n),setTimeout(()=>t("getRound"),500*Math.random())}},checkForNext:async({dispatch:e,state:t})=>{try{const n=await fetch(`http://${k}:${$}/next/${t.key}`,N),s=await n.json();t.round<s.round?e("getRound"):setTimeout(()=>e("checkForNext"),5e3)}catch(a){console.error(a),setTimeout(()=>e("checkForNext"),500*Math.random())}},triggerNext:({dispatch:e,state:t})=>{try{let n=JSON.parse(JSON.stringify(O));n.body=JSON.stringify({round:t.round}),fetch(`http://${k}:${$}/next/${t.key}`,n),e("checkForNext")}catch(a){console.error(a),setTimeout(()=>e("triggerNext"),500*Math.random())}},rejoin:async({commit:e,dispatch:t,state:a})=>{try{const s=await fetch(`http://${k}:${$}/all/${a.key}`,N),o=await s.json();"wrongKey"===o.message?e("updateStatus",o.status):(e("setCourse",o.course),e("setName",o.name),e("updateStatus",o.status),"findTeam"===o.status&&(e("setFoundTeam",o.foundTeam),e("setMessage",o.message),e("setRole",o.role),e("setRound",o.round),e("setTeam",o.team),e("setTeammates",o.teammates),e("setRound",o.round),o.foundTeam&&t("getRound")))}catch(n){console.error(n),setTimeout(()=>t("rejoin"),500*Math.random())}}}}),j=a("f309");n["a"].use(j["a"]);var R=new j["a"]({icons:{iconfont:"mdi"}});a("150b");n["a"].config.productionTip=!1,new n["a"]({router:S,store:x,vuetify:R,render:e=>e(T)}).$mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.ef242b01.png"}});
//# sourceMappingURL=app.49c35eb0.js.map