var ThemeCommsTest=function(e){function t(t){var r=t[0];var o=t[1];var u,i,a=0,c=[];for(;a<r.length;a++){i=r[a];if(Object.prototype.hasOwnProperty.call(n,i)&&n[i]){c.push(n[i][0])}n[i]=0}for(u in o){if(Object.prototype.hasOwnProperty.call(o,u)){e[u]=o[u]}}if(s)s(t);while(c.length){c.shift()()}}var r={};var n={0:0};function o(e){return u.p+"chunk."+{1:"2d82841320757b58e563",2:"63ce64b87c7ec459d246"}[e]+".js"}function u(t){if(r[t]){return r[t].exports}var n=r[t]={i:t,l:false,exports:{}};e[t].call(n.exports,n,n.exports,u);n.l=true;return n.exports}u.e=function e(t){var r=[];var i=n[t];if(i!==0){if(i){r.push(i[2])}else{var a=new Promise((function(e,r){i=n[t]=[e,r]}));r.push(i[2]=a);var c=document.createElement("script");var s;c.charset="utf-8";c.timeout=120;if(u.nc){c.setAttribute("nonce",u.nc)}c.src=o(t);var f=new Error;s=function(e){c.onerror=c.onload=null;clearTimeout(l);var r=n[t];if(r!==0){if(r){var o=e&&(e.type==="load"?"missing":e.type);var u=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+u+")";f.name="ChunkLoadError";f.type=o;f.request=u;r[1](f)}n[t]=undefined}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s;document.head.appendChild(c)}}return Promise.all(r)};u.m=e;u.c=r;u.d=function(e,t,r){if(!u.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};u.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};u.t=function(e,t){if(t&1)e=u(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);u.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r};u.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};u.d(t,"a",t);return t};u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};u.p="/src/theme/comms/test/dist//build/";u.oe=function(e){console.error(e);throw e};var i=window["webpackJsonpThemeCommsTest"]=window["webpackJsonpThemeCommsTest"]||[];var a=i.push.bind(i);i.push=t;i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=a;return u(u.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){var n=function e(){return r.e(2).then(r.bind(null,2))};var o=function e(){return r.e(1).then(r.bind(null,3))};$dispatcher.$emit("hub:register-components",{"comms-test-demo-component":n,"comms-test-advanced-component":o})}]);