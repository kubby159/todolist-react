(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(7),l=c.n(i),o=c(8),a=c(6),r=c(5),d=c(0);var j=function(e){var t=e.todo,c=e.onRemove,n=e.onToggle,s=t.id,i=t.content,l=t.checked;return console.log(i),Object(d.jsxs)("li",{className:"todolist-list",style:{borderColor:l?"#19a84c":null},children:[Object(d.jsx)("span",{style:{textDecoration:l?"line-through":null,color:l?"#19a84c":"#000"},children:i}),Object(d.jsxs)("div",{className:"control-list",children:[Object(d.jsx)("div",{className:"complete btn-primary",children:Object(d.jsx)("button",{onClick:function(){return n(s)},children:Object(d.jsx)("i",{class:"far fa-check-circle",style:{color:l?"#19a84c":null}})})}),Object(d.jsx)("div",{className:"delete btn-primary",children:Object(d.jsx)("button",{id:t.id,onClick:function(){return c(s)},children:Object(d.jsx)("i",{class:"far fa-trash-alt"})},t.id)})]})]},t.id)};c(14);var b=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),l=Object(r.a)(i,2),b=l[0],u=l[1],h=function(e){u(b.filter((function(t){return t.id!==e})))},O=function(e){u(b.map((function(t){return console.log(t),t.id===e?Object(a.a)(Object(a.a)({},t),{},{checked:!t.checked}):t})))};return Object(d.jsx)("div",{children:Object(d.jsxs)("section",{className:"todolist-container",children:[Object(d.jsxs)("div",{className:"todolist-textarea",children:[Object(d.jsxs)("div",{className:"todolist-typing",children:[Object(d.jsx)("p",{className:"title",children:"Todo-list"}),Object(d.jsx)("input",{className:"text-input",placeholder:"Please type your plan",onChange:function(e){s(e.target.value)},value:c})]}),Object(d.jsx)("div",{className:"addList",children:Object(d.jsx)("button",{className:"btn",onClick:function(){var e={id:b.length,content:c,checked:!1};u([e].concat(Object(o.a)(b))),s(" ")},children:"+Add New"})})]}),Object(d.jsx)("div",{className:"todolist-show",children:Object(d.jsx)("ul",{className:"todolist-box",children:b.map((function(e){return Object(d.jsx)(j,{todo:e,onRemove:h,onToggle:O})}))})})]})})};c(15);var u=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"header-container",children:Object(d.jsx)("div",{className:"header-inner",children:Object(d.jsx)("span",{className:"header-title",children:"Super hard Work \ud83d\udd25 "})})})})};c(16);var h=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)(u,{})}),Object(d.jsx)("section",{className:"todolist-main",children:Object(d.jsx)(b,{})})]})};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7ba86191.chunk.js.map