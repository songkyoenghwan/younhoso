(this.webpackJsonpfoodit=this.webpackJsonpfoodit||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(9),r=n.n(c),o=n(2),i=n(8),a=n(5),s=n(6),u=n(1);function j(t){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(Object(o.a)().mark((function t(e){var n,c,r,i,a,s,u,j,d;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.order,c=void 0===n?"":n,r=e.cursor,i=void 0===r?"":r,a=e.limit,s=void 0===a?10:a,u="order=".concat(c,"&cursor=").concat(i,"&limit=").concat(s),t.next=4,fetch("https://learn.codeit.kr/api/foods?".concat(u));case 4:return j=t.sent,t.next=7,j.json();case 7:return d=t.sent,t.abrupt("return",d);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n(14);var l=n(0);function b(t){var e=new Date(t);return"".concat(e.getFullYear(),". ").concat(e.getMonth()+1,". ").concat(e.getDate())}function f(t){var e=t.item,n=t.onDelete,c=e.imgUrl,r=e.title,o=e.calorie,i=e.content,a=e.createdAt;return Object(l.jsxs)("div",{className:"FoodListItem",children:[Object(l.jsx)("img",{src:c,alt:r}),Object(l.jsx)("div",{children:r}),Object(l.jsx)("div",{children:o}),Object(l.jsx)("div",{children:i}),Object(l.jsx)("div",{children:b(a)}),Object(l.jsx)("button",{onClick:function(){return n(e.id)},children:"\uc0ad\uc81c"})]})}var O=function(t){var e=t.items,n=t.onDelete;return Object(l.jsx)("ul",{className:"FoodList",children:e.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)(f,{item:t,onDelete:n})},t.id)}))})};var h=function(){var t=Object(u.useState)("createdAt"),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(u.useState)(""),d=Object(s.a)(r,2),b=d[0],f=d[1],h=Object(u.useState)([]),v=Object(s.a)(h,2),p=v[0],x=v[1],m=function(){var t=Object(a.a)(Object(o.a)().mark((function t(e){var n,c,r;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:n=t.sent,c=n.foods,r=n.paging.nextCursor,e.cursor?x((function(t){return[].concat(Object(i.a)(t),Object(i.a)(c))})):x(c),f(r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=p.sort((function(t,e){return e[n]-t[n]}));return Object(u.useEffect)((function(){m({order:n})}),[n]),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){return c("createdAt")},children:"\ucd5c\uc2e0\uc21c"}),Object(l.jsx)("button",{onClick:function(){return c("calorie")},children:"\uce7c\ub85c\ub9ac\uc21c"}),Object(l.jsx)(O,{items:k,onDelete:function(t){var e=p.filter((function(e){return e.id!==t}));x(e)}}),b&&Object(l.jsx)("button",{onClick:function(){m({order:n,cursor:b})},children:"\ub354\ubcf4\uae30"})]})};r.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5724c892.chunk.js.map