(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);var o=e(4),c=e.n(o),r=e(3),i=e(1),u=(e(9),e(0)),s=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})},a="https://mate.academy/students-api/goods";function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch(a+t).then((function(t){return t.json()}))}var l;!function(t){t.GET_ALL="getAll",t.GET_FIRST_5="getFirstFive",t.GET_RED="getRed"}(l||(l={}));var f=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],c=Object(i.useState)(l.GET_ALL),a=Object(r.a)(c,2),f=a[0],b=a[1];return Object(i.useEffect)((function(){f===l.GET_RED?d("?color=red").then((function(t){return t})).then((function(t){o(t)})):f===l.GET_FIRST_5?d().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(t){o(t)})):d().then((function(t){o(t)}))}),[f]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return b(l.GET_ALL)},children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return b(l.GET_FIRST_5)},children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return b(l.GET_RED)},children:"Load red goods"}),Object(u.jsx)(s,{goods:e})]})};c.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))},9:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.0124bff4.chunk.js.map