(this.webpackJsonpswoop=this.webpackJsonpswoop||[]).push([[0],[,,,,,,function(n,t,e){n.exports=e.p+"static/media/swoop.a31528de.png"},,,function(n,t,e){n.exports=e(16)},,,,,function(n,t,e){},function(n,t,e){},function(n,t,e){"use strict";e.r(t);var o=e(0),r=e.n(o),a=e(4),i=e.n(a),c=(e(14),e(1)),u=e(2),s=e(7),l=e(5),h=e(8),v=(e(15),"testing");var p=function(n){return o.createElement("div",void 0,v)},f=e(6),g=e.n(f),m=function n(t,e){Object(c.a)(this,n),this.x=t,this.y=e};function d(n,t,e,o,r){for(var a=[],i=0;i<o.length;i++)a.push(new m(o[i].x-o[0].x,o[i].y-o[0].y));var c=o.map((function(n){return new m(n.x,n.y)})),u=c.length,s=function(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=[],o=0;o<u;o++)e.push(n[o+t]);for(var r=0;r<u;r++)e.push(new m(n[t+u-1].x+a[r].x,n[t+u-1].y+a[r].y));return e};c=s(c);var l=0,h=setInterval((function(){var o=l%u,a=function(n,t,e){var o=n.map((function(n){return function(n,t){var e=n.x%t;return Math.trunc(n.x/t)%2===0?new m(e,n.y):new m(t-e,n.y)}(n,t)}));o=o.map((function(n){return function(n,t){return n.y>t||n.y<0?null:n}(n,e)}));for(var r=[],a=0;a<o.length;a++)null!=o[a]&&r.push(o[a]);return r}(r(o,u/3,c),t,e);0===a.length?clearInterval(h):function(n,t){n.clearRect(0,0,1500,600),n.lineWidth=3,n.beginPath(),n.moveTo(t[0].x,t[0].y);for(var e=0;e<t.length;e++)n.lineTo(t[e].x,t[e].y);n.stroke()}(n,a),o===u-1&&(c=s(c,u)),l++}),25)}var y=function(){function n(){Object(c.a)(this,n),this.xs=[],this.ys=[]}return Object(u.a)(n,[{key:"onStart",value:function(n){var t=n.clientX,e=n.clientY;this.xs=[t],this.ys=[e]}},{key:"onMove",value:function(n){var t=n.clientX,e=n.clientY;this.xs.push(t),this.ys.push(e)}},{key:"getFragment",value:function(n,t,e){for(var o=e.length,r=[],a=n;a<n+t;a++){var i=a;r.length<t&&(a>=o&&(i=a%o),r.push(e[i]))}return r}}]),n}(),w=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this,n))).pen=new y,e.onStart=function(n){return e.pen.onStart(n)},e.onMove=function(n){return e.pen.onMove(n)},e.onStop=function(){var n=document.getElementById("canvas");if(n.getContext){for(var t=n.getContext("2d"),o=n.getBoundingClientRect(),r=e.pen,a=r.xs,i=r.ys,c=a.length<i.length?a.length:i.length,u=[],s=0;s<c;s++)u.push(new m(a[s]-o.x,i[s]-o.y));d(t,n.width,n.height,u,e.pen.getFragment)}},e}return Object(h.a)(t,n),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{className:"App-logo",src:g.a,alt:"swoop-logo"}),r.a.createElement("canvas",{id:"canvas",width:"1200",height:"600",onPointerDown:this.onStart,onPointerMove:this.onMove,onPointerUp:this.onStop}),r.a.createElement(p,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f02bcaa1.chunk.js.map