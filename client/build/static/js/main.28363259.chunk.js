(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){e.exports=n(28)},24:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),l=n.n(o),i=(n(24),n(25),n(9)),u=n(1),c=n(2),s=n(8),m=n(6),v=n(4),f=n(15),h=n.n(f),d=function(){function e(t){Object(m.a)(this,e),this.name=t,this.wins=void 0,this.loses=void 0,this.points=void 0,this.name=t,this.wins=0,this.loses=0,this.points=0}return Object(v.a)(e,[{key:"addScore",value:function(){}},{key:"getResults",value:function(){return{wins:this.wins,loses:this.loses,points:this.points}}}],[{key:"named",value:function(t){return new e(t)}}]),e}(),y=function(){function e(t){Object(m.a)(this,e),this.local=void 0,this.visitor=void 0,this.result=void 0,this.local=t.local,this.visitor=t.visitor,this.result=[null,null]}return Object(v.a)(e,[{key:"setGames",value:function(e,t){this.result=[e,t]}},{key:"getResult",value:function(){return this.result}},{key:"getTeams",value:function(){return{local:this.local,visitor:this.visitor}}},{key:"getPlayers",value:function(){return[].concat(Object(s.a)(this.local),Object(s.a)(this.visitor))}}]),e}(),p=function(){function e(t){Object(m.a)(this,e),this.name=t,this.players=void 0,this.schedule=void 0,this.name=t,this.players=new Map,this.schedule=[]}return Object(v.a)(e,null,[{key:"named",value:function(t){return new e(t)}}]),Object(v.a)(e,[{key:"getPlayers",value:function(){return this.players}},{key:"getPlayersNames",value:function(){var e,t=[],n=Object(i.a)(this.players);try{for(n.s();!(e=n.n()).done;){var a=Object(u.a)(e.value,2),r=a[0];a[1];t.push(r)}}catch(o){n.e(o)}finally{n.f()}return t}},{key:"addPlayers",value:function(e){var t=this;e.forEach((function(e){return t.addPlayer(e)}))}},{key:"addPlayer",value:function(e){this.players.has(e)&&new Error("Player named ".concat(e," already exists")),this.players.set(e,d.named(e))}},{key:"createRoundRobinLeague",value:function(){var e=this;return h()(this.getPlayersNames().length,this.getPlayersNames()).map((function(t){var n=[],a=Object(s.a)(t);function r(e,t){var n=e.get(t[0]),a=e.get(t[1]);if(n&&a)return[n,a];throw new Error("Not enough players!")}for(;a.length;){var o=a.shift(),l=a.shift(),i=void 0;if(o&&l){i={local:r(e.players,o),visitor:r(e.players,l)};var u=new y(i);n.push(u)}}return n}))}}]),e}(),b=n(3);function g(){var e=Object(c.a)(["\n  color: grey;\n  font-size: 18px;\n"]);return g=function(){return e},e}function E(){var e=Object(c.a)(["\n  columns: 2;\n  list-style: none;\n"]);return E=function(){return e},e}function j(){var e=Object(c.a)(["\n  text-decoration: none !important;\n  color: rgb(60, 107, 177);\n"]);return j=function(){return e},e}function O(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 50px;\n"]);return O=function(){return e},e}function k(){var e=Object(c.a)(["\n  padding: 10px 50px;\n"]);return k=function(){return e},e}function w(){var e=Object(c.a)(["\n  display: block;\n  margin-bottom: 20px;\n"]);return w=function(){return e},e}function P(){var e=Object(c.a)(["\n  padding: 15px;\n  margin-bottom: 10px;\n  width: 100%;\n  margin: 0 10px;\n  background-color: rgb(110, 156, 225, 0.3);\n"]);return P=function(){return e},e}var x=b.a.div(P()),S=b.a.label(w()),N=b.a.input(k()),R=b.a.div(O()),T=b.a.li(j()),F=b.a.ul(E()),W=b.a.span(g());var C=function(){var e=r.a.useState(""),t=Object(u.a)(e,2),n=t[0],a=t[1],o=r.a.useState(""),l=Object(u.a)(o,2),c=l[0],s=l[1],m=r.a.useState(!1),v=Object(u.a)(m,2),f=v[0],h=v[1],d=r.a.useState(null),y=Object(u.a)(d,2),b=y[0],g=y[1],E=r.a.useState(null),j=Object(u.a)(E,2),O=j[0],k=j[1],w=r.a.useState(0),P=Object(u.a)(w,2),C=P[0],G=P[1];return r.a.createElement("div",null,r.a.createElement("h1",null," ",(null===b||void 0===b?void 0:b.name)||"Tournament Generator"),!f&&r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g(p.named(c)),s(""),h(!0)}},r.a.createElement(S,null,"Tournament name"),r.a.createElement(N,{value:c,onChange:function(e){return s(e.target.value)},type:"text",autoFocus:!0})),f&&r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),null===b||void 0===b||b.addPlayer(n),a(""),G(C+1)}},r.a.createElement(S,null,"Player name"),r.a.createElement(N,{value:n,onChange:function(e){return a(e.target.value)},type:"text",autoFocus:!0})),f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Players #",C),r.a.createElement(F,null,function(){var e=[];if(b){var t,n=Object(i.a)(b.getPlayers());try{for(n.s();!(t=n.n()).done;){var a=Object(u.a)(t.value,2),o=(a[0],a[1]);e.push(o)}}catch(l){n.e(l)}finally{n.f()}}return e.map((function(e){return r.a.createElement(T,{key:e.name},e.name)}))}())),r.a.createElement("br",null),f&&(null===b||void 0===b?void 0:b.getPlayersNames())&&(null===b||void 0===b?void 0:b.getPlayersNames().length)>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){try{var e=null===b||void 0===b?void 0:b.createRoundRobinLeague();k(e)}catch(t){console.log("Oops! There has been an error!")}}},"Generate Tournament!"),r.a.createElement("p",{style:{color:"grey"}},r.a.createElement("i",null,"Enter Tournament Name and some ",r.a.createElement("br",null)," Players before generating tournament"))),function(){if(b&&O)return O.map((function(e,t){return t+=1,r.a.createElement("div",{key:"round-".concat(t)},r.a.createElement("h1",{style:{fontWeight:"bold"}},"Round ",t),r.a.createElement(R,null,e.map((function(e){var t=e.getTeams(),n=t.local,a=t.visitor,o=n[0].name,l=n[1].name,i=a[0].name,u=a[1].name;return r.a.createElement(x,{key:"".concat(o," ").concat(l," ").concat(i," ").concat(u)},o," ",r.a.createElement(W,null,"&")," ",l,r.a.createElement("p",{style:{fontWeight:"bold"}},"VS"),i," ",r.a.createElement(W,null,"&")," ",u)}))))}))}())};var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.28363259.chunk.js.map