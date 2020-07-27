(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{27:function(e,a,t){e.exports=t(42)},32:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),i=(t(32),t(19)),m=t(10),s=(t(33),t(34),t(35),function(){return l.a.createElement("header",null,l.a.createElement("h1",{className:"full-width"},l.a.createElement("span",{className:"color-red"},"DOMA"),l.a.createElement("span",{className:"color-black"},"ZON")))}),o=(t(36),function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"container"},"New Arrivals >"))}),u=(t(37),function(e){var a=e.data,t=l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:a.image,alt:"product-img"}),l.a.createElement("p",{className:"pd-title"},a.title),l.a.createElement("p",{className:"pd-price"},l.a.createElement("span",{className:"dollar-sign"},"$"),l.a.createElement("span",{className:"price"},a.price)));return l.a.createElement(l.a.Fragment,null,t)}),d=t(44),E=t(45),p=t(46),f=t(49),v=t(48),h=(t(38),function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),r=t[0],c=t[1],i=function(){return c(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{variant:"primary",onClick:function(){return c(!0)},className:"cart-btn black-btn float-right"},l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-cart4",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})),l.a.createElement("span",{className:"m-2"},e.cartCount.length)),l.a.createElement("div",{className:"clearfix"},l.a.createElement(v.a,{show:r,onHide:i},l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,null,"Shopping Cart")),l.a.createElement(v.a.Body,null,function(a){var t=e.cartCount.map((function(a){return l.a.createElement(d.a,null,l.a.createElement(E.a,{xs:12},l.a.createElement("div",{key:a.id},l.a.createElement("div",{className:"cart-item"},l.a.createElement("div",{className:"clearfix"},l.a.createElement("button",{onClick:function(a){return e.doDelete(a.currentTarget)},id:a.id,className:"close-btn float-right"},l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-x-circle",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("img",{src:a.data.image,alt:"product-pic"}),l.a.createElement("p",null,a.data.title),l.a.createElement("p",null,l.a.createElement("span",{className:"dollar-sign"},"$"),l.a.createElement("span",{className:"price"},a.data.price))),l.a.createElement("div",{className:"col-6 d-flex flex-column align-self-center"},l.a.createElement("div",{className:"price-sum"},l.a.createElement("span",{className:"dollar-sign"},"$"),a.sum),l.a.createElement(p.a,{size:"sm"},l.a.createElement(f.a,{className:"btn-add",onClick:e.doAdd,id:a.id},l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-plus",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}))),l.a.createElement("span",{className:"count-span"},a.count),l.a.createElement(f.a,{className:"btn-minus",onClick:e.doMinus,id:a.id},l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-dash ",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"}))))))))))})),n=l.a.createElement("div",{className:"total-price d-flex align-self-center justify-content-end"},l.a.createElement("span",{className:"total-title"},"Total:"),l.a.createElement("span",{className:"price total-price"},e.total));return a>0?[t,n]:l.a.createElement("span",{className:"empty-msg"},"Your cart is empty.")}(e.cartCount.length)),l.a.createElement(v.a.Footer,null,l.a.createElement(f.a,{variant:"secondary",onClick:i},"Close"),l.a.createElement(f.a,{variant:"primary",onClick:i},"Proceed to checkout")))))}),g=function(e){return l.a.createElement("div",{className:"addCart-btn"},l.a.createElement(p.a,{size:"sm"},l.a.createElement(f.a,{onClick:e.onClick,id:e.id,className:"black-btn"},"Add to cart")))},N=t(47);var b=function(){var e=Object(n.useState)(null),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),d=Object(m.a)(c,2),E=d[0],p=d[1],f=Object(n.useState)([]),v=Object(m.a)(f,2),b=v[0],w=v[1],x=Object(n.useState)(0),z=Object(m.a)(x,2),C=z[0],H=z[1],j=Object(n.useState)([]),k=Object(m.a)(j,2),O=k[0],M=k[1];Object(n.useEffect)((function(){fetch("/products").then((function(e){return e.json()})).then((function(e){p(!0),w(e)}),(function(e){p(!0),r(e)}))}),[]);var y=function(e){var a=b.filter((function(a){return a.id===+e.currentTarget.id}));if(!O.find((function(a){return a.id===+e.currentTarget.id}))){var t={id:+e.currentTarget.id,count:1,data:a[0],sum:a[0].price},n=Object(i.a)(O);n.push(t),M(n),H(C+t.sum)}},F=b.map((function(e){return l.a.createElement("li",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-3"},l.a.createElement("div",{className:"product-info"},l.a.createElement(u,{data:e}),l.a.createElement(g,{onClick:y,id:e.id})))}));return t?l.a.createElement("div",null,"Error: ",t.message):E?l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(o,null),l.a.createElement("div",{className:"container"},l.a.createElement(h,{data:b,cartCount:O,doAdd:function(e){var a=Object(i.a)(O),t=a.find((function(a){return a.id===+e.currentTarget.id}));t.count++,t.sum+=t.data.price;var n=t.sum;t.sum=+n.toFixed(2),M(a);var l=C+t.data.price;l=l.toFixed(2),H(+l)},doMinus:function(e){var a=Object(i.a)(O),t=a.find((function(a){return a.id===+e.currentTarget.id}));if(t.count>1){t.count--,t.sum-=t.data.price;var n=t.sum;t.sum=+n.toFixed(2);var l=C-t.data.price;l<0?H(l=0):(l=l.toFixed(2),H(+l))}M(a)},total:C,doDelete:function(e){var a=+e.id,t=O.filter((function(e){return e.id!==a}));M(t);var n=O.filter((function(e){return e.id===a})),l=C-n[0].sum;l=l.toFixed(2),H(+l)}}),l.a.createElement("ul",{className:"product-list row"},F))):l.a.createElement(N.a,{animation:"border",role:"status",variant:"warning",className:"loading"},l.a.createElement("span",{className:"sr-only"},"Loading..."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.89d9a7c6.chunk.js.map