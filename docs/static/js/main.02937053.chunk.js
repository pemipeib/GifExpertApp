(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},u=n(2),o=n(9),d=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(u.a)(n,2),i=r[0],s=r[1];return Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(o.a)(t))})),s(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(t){s(t.target.value)},placeholder:"Nombre de la busqueda"})})},j=n(10),l=n(6),b=n.n(l),f=n(8),p=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,a,c,r,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"PUUrcz0gdKvJ2Kk80H0V25xPYN4sKePt",10,n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=").concat(10,"&api_key=").concat("PUUrcz0gdKvJ2Kk80H0V25xPYN4sKePt"),t.next=5,fetch(n);case 5:return a=t.sent,t.next=8,a.json();case 8:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.title,n=t.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__backInDown",children:[Object(a.jsx)("img",{src:n,alt:e}),Object(a.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){r({data:t,loading:!1})}))}),[t]),a}(e),r=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__bounceIn",children:e}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(a.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(a.jsx)(m,Object(j.a)({},t),t.id)}))})]})},g=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(d,{setCategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(t){return Object(a.jsx)(h,{category:t},t)}))})]})};n(17);i.a.render(Object(a.jsx)(g,{}),document.getElementById("root")),s()}},[[18,1,2]]]);
//# sourceMappingURL=main.02937053.chunk.js.map