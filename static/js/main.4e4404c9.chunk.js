(this.webpackJsonptimers=this.webpackJsonptimers||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/play_circle_outline-24px.be88024f.svg"},function(e,t,n){e.exports=n.p+"static/media/pause_circle_outline-24px.1560dca6.svg"},,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),s=(n(13),n(7)),u=n(6),i=n(1),l=(n(14),n(4)),m=n.n(l),d=n(5),p=n.n(d);var f=function(){for(var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(0),l=Object(i.a)(r,2),d=l[0],f=l[1],h=Object(a.useState)(""),g=Object(i.a)(h,2),b=g[0],v=g[1],k=function(e){if(13===e){var t=new Date,a="".concat(t.getDate()," ").concat(t.getMonth()," \n        ").concat(t.getFullYear()," \n        ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds());o([].concat(Object(u.a)(n),[{name:""===b?a:b,hours:0,minutes:0,seconds:0,start:!0,id:d}])),f(d+1),document.querySelector(".input-text").value="",v("")}},E=1;E<1e3;E++)clearTimeout(E);return setTimeout((function(){if(n[0]){var e=n.map((function(e){var t=e.hours,n=e.minutes,a=e.seconds;return!0===e.start&&(e.seconds<59?a=e.seconds+1:e.minutes<59?(n=e.minutes+1,a=0):(t=e.hours++,n=0,a=0)),{name:e.name,hours:t,minutes:n,seconds:a,start:e.start,id:e.id}}));o(e)}}),1e3),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"tracker"},"tracker"),c.a.createElement("span",{className:"enterFild"},c.a.createElement("input",{type:"text",name:"text",placeholder:"Enter tracker name",className:"input-text",onKeyDown:function(e){return k(e.keyCode)},onChange:function(e){v(e.target.value)}}),c.a.createElement("button",{type:"button",className:"input-button",onClick:function(){return k(13)}})),n.map((function(e){return c.a.createElement("div",{className:"createdTrack",key:e.id},e.name,c.a.createElement("div",{className:"rightBlock"},c.a.createElement("div",{className:"time"},c.a.createElement("span",null,e.hours<10?"0".concat(e.hours,": "):"".concat(e.hours,": ")),c.a.createElement("span",null,e.minutes<10?"0".concat(e.minutes,": "):"".concat(e.minutes,": ")),c.a.createElement("span",null,e.seconds<10?"0".concat(e.seconds):"".concat(e.seconds))),c.a.createElement("button",{type:"button",className:"playPause",onClick:function(t){return function(e,t){var a=n.map((function(n){return n.id!==e?n:(n.start?t.target.style.background="url(".concat(m.a,")"):t.target.style.background="url(".concat(p.a,")"),Object(s.a)({},n,{start:!n.start}))}));o(a)}(e.id,t)}}),c.a.createElement("button",{type:"button",className:"delete",onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));o(t)}(e.id)}})))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.4e4404c9.chunk.js.map