(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{13:function(n,e,t){n.exports={container:"Calculator_container__2lxmn"}},14:function(n,e,t){n.exports={container:"CalculatorDigits_container__1bPYV"}},15:function(n,e,t){n.exports={container:"Button_container__1mu3S",white:"Button_white__1kiCn",font:"Button_font__2k2M4"}},16:function(n,e,t){n.exports={container:"CalculatorDisplay_container__3rA5b",font:"CalculatorDisplay_font__1Phvv",primaryLine:"CalculatorDisplay_primaryLine__1EfLe",isError:"CalculatorDisplay_isError__3XhnR",secondaryLine:"CalculatorDisplay_secondaryLine__1n2C9"}},25:function(n,e,t){},26:function(n,e,t){},33:function(n,e,t){"use strict";t.r(e);var i=t(0),c=t.n(i),r=t(12),a=t.n(r),o=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),i(n),c(n),r(n),a(n)}))},s=(t(25),t(26),t(19)),l=t(5),u=t(13),d=t.n(u),f=["C"," ","%","/","7","8","9","x","4","5","6","-","1","2","3","+","00","0",",","="],j=window.matchMedia("(max-width: 450px)").matches?8:12,b=["\u221a","%","/","-","+","x"];console.log(j);var h=t(14),p=t.n(h),_=t(10),m=t(20),x=t(4),v=t.n(x),y=t(15),O=t.n(y),g=t(1),C=["symbol","isWhite"],E=v.a.bind(O.a),L=function(n){var e=n.symbol,t=n.isWhite,i=void 0!==t&&t,c=Object(m.a)(n,C);return Object(g.jsx)("button",Object(_.a)(Object(_.a)({className:E("container","font",i&&"white")},c),{},{children:e}))},k=function(n){var e=n.onEnter,t=n.onReset,i=n.onResult;return Object(g.jsx)("div",{className:p.a.container,children:f.map((function(n){return"="===n?Object(g.jsx)(L,{symbol:n,isWhite:!0,onClick:i},n):"C"===n?Object(g.jsx)(L,{symbol:n,onClick:t},n):" "===n?Object(g.jsx)(L,{symbol:n,onClick:t,disabled:!0},n):Object(g.jsx)(L,{symbol:n,onClick:function(){return function(n){e(n)}(n)}},n)}))})},N=t(16),w=t.n(N),D=v.a.bind(w.a),F=function(n){var e=n.primaryLine,t=n.isError,i=void 0!==t&&t,c=n.secondaryLine;return Object(g.jsxs)("div",{className:D("container","font",{isError:i}),children:[Object(g.jsx)("p",{className:D("secondaryLine"),children:c}),Object(g.jsx)("p",{className:D("primaryLine",{isError:i}),children:e})]})},S=function(){var n=c.a.useState(!1),e=Object(l.a)(n,2),t=e[0],i=e[1],r=c.a.useState(""),a=Object(l.a)(r,2),o=a[0],s=a[1],u=c.a.useState(""),h=Object(l.a)(u,2),p=h[0],_=h[1],m=function(n){!t&&j>o.length?b.includes(n)&&b.includes(o[o.length-1])&&"%"===n||b.includes(n)&&0===o.length||""!==p||s(o+n):i(!0)},x=function(){s(""),_(""),i(!1)},v=function(){var n=o;b.includes(o[o.length-1])&&"%"!==o[o.length-1]&&(n=o.slice(0,o.length-1),s(n));var e=function(n){var e=n.replaceAll(",",".").split(/[-/+%x]/).map((function(n){return parseFloat(n)})).filter((function(n){return!isNaN(n)})),t=n.split(/[,0-9]/).filter((function(n){return""!==n})),i=["+","-"],c=[e[0]],r=0;t.forEach((function(n,t){i.includes(n)?(c.push(e[t+1]),r++):("x"===n&&(c[r]*=e[t+1]),"/"===n&&(c[r]/=e[t+1]),"%"===n&&(c[r]/=100),"%+"!==n&&"%-"!==n||(c[r]/=100,c.push(e[t+1]),r++))})),r=1;var a=c[0];return t.forEach((function(n){(i.includes(n)||"%+"===n||"%-"===n)&&("+"!==n&&"%+"!==n||(a+=c[r],r++),"-"!==n&&"%-"!==n||(a-=c[r],r++))})),Number.isInteger(a)?a.toFixed(0):a.toFixed(6)}(n);"Infinity"===e||e.length>j?i(!0):_(e)};return c.a.useEffect((function(){var n=function(n){var e=n.key;f.includes(e)&&"="!==e&&"C"!==e&&m(e),"Escape"===e&&x(),"Enter"===e&&v(),"*"===e&&m("x")};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[m]),Object(g.jsxs)("div",{className:d.a.container,children:[Object(g.jsx)(F,{primaryLine:p.length>0?p:o,secondaryLine:p.length>0&&!t?o:"",isError:t}),Object(g.jsx)(k,{onEnter:m,onReset:x,onResult:v})]})},B=t(8),R=t.n(B),A=function(){return Object(g.jsx)(s.a,{basename:"/calculator",children:Object(g.jsx)("div",{className:R.a.page,children:Object(g.jsx)("div",{className:R.a.container,children:Object(g.jsx)(S,{})})})})};a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root")),o()},8:function(n,e,t){n.exports={page:"App_page__1jb25",container:"App_container__sv-M9"}}},[[33,1,2]]]);
//# sourceMappingURL=main.89fffd89.chunk.js.map