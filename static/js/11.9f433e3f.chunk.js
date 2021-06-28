(this.webpackJsonpnotepad=this.webpackJsonpnotepad||[]).push([[11],{166:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){var t={message:"Something went wrong :(",status:0};return e.response?(console.warn("Request made and server responded"),t.message=e.response.data.message,t.status=e.response.status,console.warn("Response data: ",e.response.data),console.warn("Response status: ",e.response.status),console.warn("Response headers: ",e.response.headers)):e.request?(console.warn("The request was made but no response was received"),console.warn("Request",e.request)):(console.warn("Something happened in setting up the request that triggered an Error"),t.message=e.message,console.warn("Error",e.message)),t}},167:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return i}));var a=n(26),s=n(35),r=n(25),o=n(197),c=n.n(o).a.create({baseURL:"/",timeout:35e3}),i=function(){function e(){Object(s.a)(this,e)}return Object(r.a)(e,[{key:"get",value:function(e,t){return c(Object(a.a)({method:"GET",url:e},t))}},{key:"post",value:function(e,t){return c(Object(a.a)({method:"POST",url:e},t))}},{key:"delete",value:function(e,t){return c(Object(a.a)({method:"DELETE",url:e},t))}},{key:"put",value:function(e,t){return c(Object(a.a)({method:"PUT",url:e},t))}},{key:"patch",value:function(e,t){return c(Object(a.a)({method:"PATCH",url:e},t))}}]),e}(),u=n(151),l=n(152),d="https://api.github.com",h="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",p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).base=d,a.routes={gists:"/gists",public:"/gists/public"},e.setAuthorizationToken(h),a}return Object(r.a)(n,[{key:"getGistsList",value:function(e){return this.get(this.routes.gists,Object(a.a)({baseURL:this.base},e))}},{key:"create",value:function(e){return this.post(this.routes.gists,Object(a.a)({baseURL:this.base},e))}},{key:"update",value:function(e,t){return this.patch("".concat(this.routes.gists,"/").concat(e),Object(a.a)({baseURL:this.base},t))}},{key:"getNotepadById",value:function(e){return this.get("".concat(this.routes.gists,"/").concat(e),{baseURL:this.base})}},{key:"deleteById",value:function(e){return this.delete("".concat(this.routes.gists,"/").concat(e),{baseURL:this.base})}},{key:"getGistsPublicList",value:function(e){return this.get(this.routes.public,Object(a.a)({baseURL:this.base},e))}}]),n}(i),b=new(function(){function e(){Object(s.a)(this,e),this.notepad=new p(this)}return Object(r.a)(e,[{key:"setAuthorizationToken",value:function(e){e&&(c.defaults.headers.Authorization="Bearer ".concat(e))}},{key:"removeAuthorizationToken",value:function(){delete c.defaults.headers.Authorization}}]),e}())},423:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Q}));var a=n(0),s=n.n(a),r=n(129),o=n(45),c=n(144),i=n(416),u=n(54),l=n(30),d=n(371),h=n(370),p=n(418),b=n(419),j=n(149),f=n(138),g=n(369),O=n.n(g),v=n(132),m=n(134),y=n(135),x=n(372),k=n.n(x),w=n(373),N=n.n(w),L=n(234),S=n.n(L);var A={formats:{long:"MMMM Do YYYY",full:"MMMM Do YYYY HH:mm:ss"},toDateFormat:function(e,t){return S()(e).format(t)}},E=n(4),R=Object(r.a)((function(e){return{root:{width:"100%"},avatar:{backgroundColor:"#FAFAFA"}}})),z=function(e){var t=R(),n=s.a.useState(null),a=Object(l.a)(n,2),r=a[0],o=a[1],c=e.gis,i=c.description,u=c.owner,g=c.created_at,x=c.updated_at,w=c.id,L=Boolean(r),S=L?"simple-popover":void 0;return Object(E.jsxs)(p.a,{className:t.root,children:[Object(E.jsx)(b.a,{avatar:Object(E.jsx)(j.a,{"aria-label":"recipe",src:u.avatar_url,className:t.avatar}),action:Object(E.jsx)(f.a,{"aria-label":"settings",onClick:function(e){o(e.currentTarget)},children:Object(E.jsx)(O.a,{})}),title:i,subheader:Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("i",{children:["Created date: ",A.toDateFormat(g,A.formats.long)]})," | ",Object(E.jsxs)("i",{children:["Last updated date: ",A.toDateFormat(x,A.formats.full)]})]})}),Object(E.jsx)(h.a,{id:S,open:L,anchorEl:r,onClose:function(){o(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(E.jsxs)(d.a,{component:"nav",children:[Object(E.jsxs)(v.a,{button:!0,onClick:function(){return e.onEditNotepad(w)},children:[Object(E.jsx)(m.a,{children:Object(E.jsx)(k.a,{})}),Object(E.jsx)(y.a,{primary:"View"})]}),Object(E.jsxs)(v.a,{button:!0,onClick:function(){return e.onDeleteNotepad(w)},children:[Object(E.jsx)(m.a,{children:Object(E.jsx)(N.a,{})}),Object(E.jsx)(y.a,{primary:"Delete"})]})]})})]})},B=n(26),I=n(3),T=n(36),C=n(417),D=["children"],P=function(e){var t=e.children,n=Object(I.a)(e,D);return Object(E.jsx)(C.a,Object(B.a)(Object(B.a)({color:"primary",component:T.b},n),{},{children:t}))},Y=n(195),F=n.n(Y),G=n(196),M=n(35),U=n(25),q=n(12),J=n(24),H=n(167),_=function(){function e(){Object(M.a)(this,e)}return Object(U.a)(e,null,[{key:"get",value:function(e){try{var t=localStorage.getItem(e);return JSON.parse(t)}catch(n){console.warn("Error Storage: ",n)}}},{key:"set",value:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(a){console.warn("Error Storage: ",a)}}},{key:"clear",value:function(){localStorage.clear()}}]),e}(),W=n(166),V=new(function(){function e(){var t=this;Object(M.a)(this,e),this.notepads=[],Object(q.d)(this);var n=_.get("gists");n&&Object(q.g)((function(){t.notepads=n}))}return Object(U.a)(e,[{key:"getGistsList",value:function(){var e=Object(G.a)(F.a.mark((function e(){var t,n,a,s,r=this;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J.a.startProgress(),e.prev=1,(t=_.get("gists"))&&Object(q.g)((function(){r.notepads=t})),e.next=6,H.b.notepad.getGistsList();case 6:n=e.sent,this.compare(t,n.data)||(_.set("gists",n.data),Object(q.g)((function(){r.notepads=n.data}))),console.info("getGistsList ~ response",n),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),a=Object(W.a)(e.t0),s=a.message,J.a.openAlert({severity:"warning",message:s});case 15:return e.prev=15,J.a.endProgress(),e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[1,11,15,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"deleteById",value:function(){var e=Object(G.a)(F.a.mark((function e(t){var n,a,s,r=this;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J.a.startProgress(),e.prev=1,e.next=4,H.b.notepad.deleteById(t);case 4:n=e.sent,J.a.openAlert({message:"Notepad successfully deleted!"}),Object(q.g)((function(){r.notepads=r.notepads.filter((function(e){return e.id!==t})),_.set("gists",r.notepads)})),console.info("deleteById ~ response",n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),a=Object(W.a)(e.t0),s=a.message,J.a.openAlert({severity:"error",message:s});case 14:return e.prev=14,J.a.endProgress(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,10,14,17]])})));return function(t){return e.apply(this,arguments)}}()},{key:"compare",value:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}]),e}()),K=Object(r.a)((function(e){return{header:{paddingBottom:32},notepadWrapper:{"& > div":{marginBottom:"10px"}}}})),Q=Object(o.a)((function(e){var t=K();Object(a.useEffect)((function(){V.getGistsList()}),[]);var n=function(t){e.history.push({pathname:"/create-notepad",search:"id=".concat(t)})},s=function(e){V.deleteById(e)};return Object(E.jsxs)(c.a,{maxWidth:"lg",children:[Object(E.jsxs)(i.a,{container:!0,className:t.header,justify:"space-between",children:[Object(E.jsx)(i.a,{children:Object(E.jsx)(u.a,{variant:"h5",component:"h5",children:"Notepad"})}),Object(E.jsx)(i.a,{children:Object(E.jsx)(P,{to:"/create-notepad",children:"Create new Notepad"})})]}),Object(E.jsxs)(i.a,{className:t.notepadWrapper,children:[V.notepads.map((function(e){return Object(E.jsx)(z,{gis:e,onEditNotepad:n,onDeleteNotepad:s},e.id)})),!V.notepads.length&&Object(E.jsx)(i.a,{container:!0,justify:"center",children:"No Notepad to show."})]})]})}))}}]);
//# sourceMappingURL=11.9f433e3f.chunk.js.map