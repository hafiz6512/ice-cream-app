(this["webpackJsonpice-cream"]=this["webpackJsonpice-cream"]||[]).push([[0],[,function(e,t,a){e.exports={item:"Item_item__KNRXe",quantity:"Item_quantity__2uY_m",plus:"Item_plus__1sHWc",minus:"Item_minus__2p-EQ"}},function(e,t,a){e.exports={icecream:"IceCream_icecream__1MUzW",cone:"IceCream_cone__3-iC4",cherry:"IceCream_cherry__1bKAy"}},function(e,t,a){e.exports={banner:"Banner_banner__WYgz_",container:"Banner_container__1uRhO"}},function(e,t,a){e.exports={builder:"Builder_builder__qJcgI",order:"Builder_order__34KZj"}},function(e,t,a){e.exports={backdrop:"Modal_backdrop__3kA2e",modalBody:"Modal_modalBody__3e_3V"}},function(e,t,a){e.exports={scoop:"Scoop_scoop__3gVnM",chocolate:"Scoop_chocolate__3uf6h",vanilla:"Scoop_vanilla__Hd_kV",strawberry:"Scoop_strawberry__1u_1A",orange:"Scoop_orange__DsOyv",lemon:"Scoop_lemon__3K6fS"}},function(e,t,a){e.exports={logo:"Header_logo__3_SJs",reactLogo:"Header_reactLogo__22_I9"}},,,,function(e,t,a){e.exports=a.p+"static/media/banner-img.e323e8a6.jpg"},,,,function(e,t,a){e.exports={total:"TotalPrice_total__qSpfY"}},function(e,t,a){e.exports={container:"IceCreamBuilder_container__1A-4L"}},function(e,t,a){e.exports={mainBody:"Body_mainBody__2Qas3"}},function(e,t,a){e.exports={container:"Footer_container__st7Zp"}},function(e,t,a){e.exports=a.p+"static/media/logo.cd6d0863.svg"},function(e,t,a){e.exports=a.p+"static/media/react.c3fbd71b.svg"},,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),l=(a(28),a(11)),i=a.n(l),s=a(3),m=a.n(s),u=function(){return o.a.createElement("div",{className:m.a.banner},o.a.createElement("div",{className:["container",m.a.container].join(" ")},o.a.createElement("img",{src:i.a,alt:"Banner"})))},d=a(8),p=a(12),_=a(13),v=a(22),E=a(21),f=a(4),h=a.n(f),b=a(14),y=a(1),g=a.n(y),N=function(e){var t=e.name,a=e.add,n=e.remove,r=e.scoops,c=void 0===r?{}:r,l=Object(b.countBy)(c);return o.a.createElement("li",{className:g.a.item},o.a.createElement("span",null,t),l[t]>=0?o.a.createElement("span",{className:g.a.quantity},l[t]):null,o.a.createElement("div",{className:"right"},o.a.createElement("button",{onClick:a.bind(void 0,t),type:"button",className:[g.a.plus,"rounded"].join(" ")},"+"),o.a.createElement("button",{type:"button",onClick:n.bind(void 0,t),className:[g.a.minus,"rounded"].join(" ")},"-")))},x=function(e){var t=e.items,a=e.add,n=e.remove,r=e.scoops,c=Object.keys(t);return o.a.createElement("div",null,o.a.createElement("ul",null,c.map((function(e){return o.a.createElement(N,{key:e,name:e,add:a,remove:n,scoops:r})}))))},j=a(5),B=a.n(j),S=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement("div",{className:B.a.backdrop}),o.a.createElement("div",{className:B.a.modalBody},t))},k=a(15),w=a.n(k),I=function(e){var t=e.price,a=void 0===t?0:t;return o.a.createElement("div",{className:w.a.total},o.a.createElement("div",null,"Total Price"),o.a.createElement("div",null,a.toFixed(2)," Tk"))},C=function(e){var t=e.items,a=e.price,n=e.add,r=e.remove,c=e.scoops;return o.a.createElement("div",null,o.a.createElement("div",{className:h.a.builder},o.a.createElement("h3",null,"Build your own Ice Cream Sundae"),o.a.createElement(x,{items:t,add:n,remove:r,scoops:c}),o.a.createElement(I,{price:a}),o.a.createElement("button",{type:"button",className:[h.a.order,"rounded"].join(" ")},"Add to Cart")),o.a.createElement(S,null,"Hello Modal"))},O=a(2),P=a.n(O),A=a(6),M=a.n(A),R=function(e){var t=e.scoop;return o.a.createElement("div",{className:["scope-item",M.a.scoop,M.a[t]].join(" ")})},q=function(e){var t=e.scoops;return o.a.createElement("div",null,o.a.createElement("div",{className:P.a.icecream},o.a.createElement("p",{className:P.a.cone}),t.map((function(e){return o.a.createElement(R,{key:"".concat(e).concat(Math.random()),scoop:e})})),o.a.createElement("div",{className:P.a.cherry})))},H=a(16),L=a.n(H),W=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={items:{vanilla:60,chocolate:70,strawberry:65,lemon:50,orange:55},scoops:[],totalPrice:0},e.addScoop=function(t){var a=e.state,n=a.scoops,o=a.items,r=Object(d.a)(n);r.push(t),e.setState((function(e){return{scoops:r,totalPrice:e.totalPrice+o[t]}}))},e.removeScoop=function(t){var a=e.state,n=a.scoops,o=a.items,r=Object(d.a)(n),c=r.findIndex((function(e){return e===t}));r.splice(c,1),e.setState((function(e){return{scoops:r,totalPrice:e.totalPrice-o[t]}}))},e}return Object(_.a)(a,[{key:"render",value:function(){var e=this.state,t=e.items,a=e.totalPrice,n=e.scoops;return o.a.createElement("div",{className:["container",L.a.container].join(" ")},o.a.createElement(q,{scoops:n}),o.a.createElement(C,{items:t,price:a,add:this.addScoop,remove:this.removeScoop,scoops:n}))}}]),a}(n.Component),J=a(17),K=a.n(J),T=function(){return o.a.createElement("div",{className:K.a.mainBody},o.a.createElement(W,null))},V=a(18),Y=a.n(V),z=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:["container",Y.a.container].join(" ")},o.a.createElement("div",null,"Copyright \xa92020."),o.a.createElement("div",{className:"textRight"},"Built with ",o.a.createElement("span",{className:"red"},"\u2665")," by",o.a.createElement("a",{href:"https://reactjs.org/docs/create-a-new-react-app.html"},"Create React App"))))},F=a(19),Q=a.n(F),Z=a(20),D=a.n(Z),U=a(7),X=a.n(U),$=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("img",{className:X.a.logo,src:Q.a,alt:"Logo"})),o.a.createElement("div",{className:"textRight"},o.a.createElement("img",{src:D.a,alt:"React",className:X.a.reactLogo}),o.a.createElement("strong",null,"React"))))},G=function(e){var t=e.children;return o.a.createElement("div",{className:"main-layout"},t)};var ee=function(){return o.a.createElement(G,null,o.a.createElement($,null),o.a.createElement(u,null),o.a.createElement(T,null),o.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.a9c85062.chunk.js.map