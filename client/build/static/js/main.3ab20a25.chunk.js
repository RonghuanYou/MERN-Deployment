(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(28),i=c.n(s),r=(c(37),c(38),c(2)),j=c(32),o=c(4),l=c(29),h=c(9),b=c(10),u=c.n(b),d=c(0),O=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),b=i[0],O=i[1],p=Object(n.useState)(0),x=Object(o.a)(p,2),g=x[0],f=x[1],m=Object(n.useState)(""),v=Object(o.a)(m,2),y=v[0],C=v[1],_=Object(n.useState)("Captain"),P=Object(o.a)(_,2),w=P[0],k=P[1],S=Object(n.useState)(!0),N=Object(o.a)(S,2),B=N[0],E=N[1],F=Object(n.useState)(!0),Y=Object(o.a)(F,2),A=Y[0],M=Y[1],H=Object(n.useState)(!0),L=Object(o.a)(H,2),T=L[0],I=L[1],D=Object(n.useState)([]),J=Object(o.a)(D,2),R=J[0],V=J[1],W=Object(n.useState)([]),q=Object(o.a)(W,2),z=q[0],G=q[1],K=Object(n.useState)(0),Q=Object(o.a)(K,2),U=Q[0],X=Q[1],Z=Object(r.f)();Object(n.useEffect)((function(){u.a.get("http://localhost:8000/api").then((function(e){console.log(e.data.allPirates),G(e.data.allPirates)})).catch((function(e){console.error(e)}))}),[]);var $=function(){u.a.post("http://localhost:8000/api/new",{name:c,img_url:b,treasure_chests_num:g,pirate_catch_phrase:y,crew_position:w,peg_leg:B,eye_patch:A,hook_hand:T}).then((function(e){console.log(e),Z.push("/pirates")})).catch((function(e){console.log(e);var t=e.response.data.errors,c=Object.keys(t).map((function(e){return t[e].message}));V(c)}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Add Pirate"}),Object(d.jsx)(h.b,{to:"/pirates",children:"Crew Board"}),R.map((function(e,t){return Object(d.jsxs)("p",{style:{color:"red"},children:[" ",e," "]},t)})),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"Captain"===w?(z.map((function(e){"Captain"!==e.crew_position&&(Object(l.a)("count"),X(U))})),U<=z.length-1?R.includes("Captain already exists")||V([].concat(Object(j.a)(R),["Captain already exists"])):$()):$()},style:{width:800,display:"flex",justifyContent:"space-around",margin:"auto"},children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("label",{style:{margin:5},children:"Name: "}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"text",value:c})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("label",{style:{margin:5},children:"Image url: "}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{onChange:function(e){return O(e.target.value)},type:"text",value:b})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("label",{style:{margin:5},children:"# of Treasure Chests: "}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{onChange:function(e){return f(e.target.value)},type:"number",value:g})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("label",{style:{margin:5},children:"Pirate Catch Phrase: "}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{onChange:function(e){return C(e.target.value)},type:"text",value:y})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:Object(d.jsxs)("select",{onChange:function(e){return k(e.target.value)},value:w,children:[Object(d.jsx)("option",{value:"Captain",children:"Captain"}),Object(d.jsx)("option",{value:"First Mate",children:"First Mate"}),Object(d.jsx)("option",{value:"Boatswain",children:"Boatswain"}),Object(d.jsx)("option",{value:"Powder Monkey",children:"Powder Monkey"})]})}),Object(d.jsxs)("p",{children:[" ",Object(d.jsx)("input",{onChange:function(){E(!B)},type:"checkbox",checked:B})," Peg Leg"]}),Object(d.jsxs)("p",{children:[" ",Object(d.jsx)("input",{onChange:function(){M(!A)},type:"checkbox",checked:A})," Eye Patch"]}),Object(d.jsxs)("p",{children:[" ",Object(d.jsx)("input",{onChange:function(){I(!T)},type:"checkbox",checked:T}),"Hook Hand"]}),Object(d.jsx)("button",{children:"Add Pirate"})]})]})]})},p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){u.a.get("http://localhost:8000/api").then((function(e){console.log(e.data.allPirates),a(e.data.allPirates)})).catch((function(e){console.error(e)}))}),[]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Pirate Crew"}),Object(d.jsx)(h.b,{to:"/pirate/new",children:"Add Pirate"}),c.map((function(e,t){return Object(d.jsxs)("div",{style:{margin:20},children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("img",{src:e.img_url,alt:"img for ".concat(e.name),style:{width:100,height:100}}),Object(d.jsx)("button",{style:{marginRight:10},children:Object(d.jsx)(h.b,{to:"/pirate/".concat(e._id),children:"View Pirate"})}),Object(d.jsx)("button",{onClick:function(t){var n;n=e._id,u.a.delete("http://localhost:8000/api/"+n).then((function(e){console.log(e.data),a(c.filter((function(e){return e._id!==n})))})).catch((function(e){return console.error(e)}))},children:"Walk the Plank"})]},t)}))]})},x=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(r.g)().id;return Object(n.useEffect)((function(){u.a.get("http://localhost:8000/api/"+s).then((function(e){return a(e.data)})).catch((function(e){return console.error(e)}))}),[s]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:c.name}),Object(d.jsx)(h.b,{to:"/pirates",children:"Crew Board"}),Object(d.jsxs)("div",{style:{width:800,display:"flex",justifyContent:"space-around",margin:"auto"},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:c.img_url,alt:"img for ".concat(c.name),style:{width:100,height:100}}),Object(d.jsxs)("h2",{children:['"',c.pirate_catch_phrase,'"']})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsxs)("p",{children:["Position: ",c.crew_position]}),Object(d.jsxs)("p",{children:["Treasure: ",c.treasure_chests_num]}),Object(d.jsxs)("p",{children:["Peg Leg: ",c.peg_leg?"Yes":"No"," ",Object(d.jsx)("button",{children:c.peg_leg?"No":"Yes"})]}),Object(d.jsxs)("p",{children:["Eye Patch: ",c.eye_patch?"Yes":"No"," ",Object(d.jsx)("button",{children:c.eye_patch?"No":"Yes"})]}),Object(d.jsxs)("p",{children:["Hook Hand: ",c.hook_hand?"Yes":"No"," ",Object(d.jsx)("button",{children:c.hook_hand?"No":"Yes"})]})]})]})]})};var g=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/pirates",children:Object(d.jsx)(p,{})}),Object(d.jsx)(r.a,{exact:!0,path:"/pirate/new",children:Object(d.jsx)(O,{})}),Object(d.jsx)(r.a,{exact:!0,path:"/pirate/:id",children:Object(d.jsx)(x,{})})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(h.a,{children:Object(d.jsx)(g,{})})}),document.getElementById("root")),f()}},[[64,1,2]]]);
//# sourceMappingURL=main.3ab20a25.chunk.js.map