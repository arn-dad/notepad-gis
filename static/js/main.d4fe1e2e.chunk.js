(this.webpackJsonpnotepad=this.webpackJsonpnotepad||[]).push([[3],{24:function(e,t,n){"use strict";var a=n(35),i=n(25),r=n(12),o=function(){function e(){Object(a.a)(this,e),this.inProgress=!1,this.alert={open:!1,severity:"success",autoHideDuration:3e3,message:"Done!"},Object(r.d)(this)}return Object(i.a)(e,[{key:"startProgress",value:function(){var e=this;Object(r.g)((function(){return e.inProgress=!0}))}},{key:"endProgress",value:function(){var e=this;Object(r.g)((function(){return e.inProgress=!1}))}},{key:"openAlert",value:function(e){var t=this,n=e.open,a=void 0===n||n,i=e.severity,o=void 0===i?"success":i,c=e.autoHideDuration,s=void 0===c?3e3:c,l=e.message,d=void 0===l?"Done!":l;Object(r.g)((function(){t.alert.open=a,t.alert.severity=o,t.alert.autoHideDuration=s,t.alert.message=d}))}},{key:"closeAlert",value:function(){var e=this;Object(r.g)((function(){return e.alert.open=!1}))}}]),e}();t.a=new o},92:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),o=n.n(r),c=n(45),s=n(142),l=n(143),d=n(144),u=n(36),j=n(129),h=n(141),p=n(4),b=Object(j.a)((function(e){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},imgPlaceholder:{width:"50%",height:"auto"}}})),O=function(){var e=b();return Object(p.jsx)("div",{className:e.root,children:Object(p.jsx)("img",{className:e.imgPlaceholder,src:"".concat("/notepad-gis","/images/404.png"),alt:"Page not Found"})})},x=[{id:"dashboard",exact:!0,component:i.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(7),n.e(10)]).then(n.bind(null,425))})),isPrivate:!1,path:"/"},{id:"notepad",exact:!0,component:i.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(8),n.e(11)]).then(n.bind(null,423))})),isPrivate:!1,path:"/notepad"},{id:"create-notepad",exact:!0,component:i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(9)]).then(n.bind(null,424))})),isPrivate:!1,path:"/create-notepad/:id?"},{id:"not_found",exact:!0,component:O,isPrivate:!1,path:"*"}],g=[{id:"dashboard",label:"Dashboard",to:"/",iconName:"Dashboard"},{id:"notepad",label:"Notepad",to:"/notepad",iconName:"Assignment"}],m=n(72),f=Object(m.a)({typography:{fontFamily:["Arial"].join(","),h5:{fontSize:"24px"},h6:{fontSize:"18px"},button:{fontSize:"14px"}}}),v=n(3),w=n(30),y=n(9),P=n(26),N=n(5),k=n(71),S=n(147),A=n(136),B=n(137),D=n(54),C=n(139),I=n(138),z=n(149),H=n(70),F=n.n(H),G=n(69),L=n.n(G),E=n(132),T=n(134),J=n(135),R=function(e){var t=e.label,n=e.to,a=e.Icon;return Object(p.jsxs)(E.a,{style:{color:"#334455"},component:u.b,to:n,children:[Object(p.jsx)(T.a,{children:Object(p.jsx)(a,{})}),Object(p.jsx)(J.a,{primary:t})]})},U=["id","iconName"],W=Object(j.a)((function(e){return{toolbar:{paddingRight:24},toolbarIcon:Object(P.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(y.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}}));function Y(e){var t=e.links,n=W(),a=i.a.useState(!0),r=Object(w.a)(a,2),o=r[0],c=r[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(A.a,{position:"absolute",className:Object(N.a)(n.appBar,o&&n.appBarShift),children:Object(p.jsxs)(B.a,{className:n.toolbar,children:[Object(p.jsx)(I.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(N.a)(n.menuButton,o&&n.menuButtonHidden),children:Object(p.jsx)(F.a,{})}),Object(p.jsx)(D.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:n.title,children:"Gists Notepad"}),Object(p.jsx)(I.a,{color:"inherit",children:Object(p.jsx)(z.a,{children:"G"})})]})}),Object(p.jsxs)(S.a,{variant:"permanent",classes:{paper:Object(N.a)(n.drawerPaper,!o&&n.drawerPaperClose)},open:o,children:[Object(p.jsx)("div",{className:n.toolbarIcon,children:Object(p.jsx)(I.a,{onClick:function(){c(!1)},children:Object(p.jsx)(L.a,{})})}),Object(p.jsx)(C.a,{}),t.map((function(e){var t=e.id,n=e.iconName,a=Object(v.a)(e,U);return Object(p.jsx)(R,Object(P.a)({Icon:k[n]},a),t)}))]})]})}var M=n(148),X=n(145),_=n(24),q=Object(c.a)((function(){var e=function(e,t){"clickaway"!==t&&_.a.closeAlert()};return Object(p.jsx)(M.a,{onExited:function(){return _.a.closeAlert()},open:_.a.alert.open,autoHideDuration:_.a.alert.autoHideDuration,onClose:e,children:Object(p.jsx)(X.a,{onClose:e,severity:_.a.alert.severity,children:_.a.alert.message})})})),K=n(14),Q=["component","isAuth"],V=["location"],Z=function(e){var t=e.component,n=e.isAuth,a=Object(v.a)(e,Q);return Object(p.jsx)(K.b,Object(P.a)(Object(P.a)({},a),{},{render:function(e){var a=e.location,i=Object(v.a)(e,V);return n?Object(p.jsx)(t,Object(P.a)(Object(P.a)({},i),{},{location:a})):Object(p.jsx)(K.a,{to:{pathname:"/",state:{from:a}}})}}))},$=function(e){var t=e.routes,n=e.auth;return Object(p.jsx)(K.d,{children:t.map((function(e){var t=e.id,a=e.isPrivate,i=e.exact,r=e.path,o=e.component;return a?Object(p.jsx)(Z,{exact:i,path:r,isAuth:n,component:o},t):Object(p.jsx)(K.b,{exact:!0,path:r,render:function(e){return Object(p.jsx)(o,Object(P.a)({},e))}},t)}))})},ee=n(35),te=n(25),ne=n(12),ae=new(function(){function e(){Object(ee.a)(this,e),this.isAuth=!1,Object(ne.d)(this)}return Object(te.a)(e,[{key:"checkUserAuthentication",value:function(){this.isAuth=!1,this.isAuth||_.a.openAlert({severity:"info",autoHideDuration:5e3,message:"You are not authorized, You have limited access to perform actions."})}}]),e}()),ie=Object(j.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,workspace:{height:"calc(100% - 64px)",position:"relative"},progressBar:{position:"absolute",width:"100%"},content:{flexGrow:1,height:"100vh ",overflow:"auto"},container:{height:"calc(100% - 4px)",paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}}));var re=Object(c.a)((function(){var e=ie();return Object(a.useEffect)((function(){ae.checkUserAuthentication()}),[]),Object(p.jsx)(h.a,{theme:f,children:Object(p.jsxs)("div",{className:e.root,children:[Object(p.jsx)(s.a,{}),Object(p.jsxs)(u.a,{children:[Object(p.jsx)(Y,{links:g}),Object(p.jsxs)("main",{className:e.content,children:[Object(p.jsx)("div",{className:e.appBarSpacer}),Object(p.jsxs)("div",{className:e.workspace,children:[_.a.inProgress&&Object(p.jsx)(l.a,{className:e.progressBar,color:"secondary"}),Object(p.jsxs)(d.a,{maxWidth:"xl",className:e.container,children:[Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:Object(p.jsx)($,{routes:x,auth:!0})}),Object(p.jsx)(q,{})]})]})]})]})]})})})),oe=function(e){e&&e instanceof Function&&n.e(12).then(n.bind(null,421)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))};o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(re,{})}),document.getElementById("root")),oe()}},[[92,4,5]]]);
//# sourceMappingURL=main.d4fe1e2e.chunk.js.map