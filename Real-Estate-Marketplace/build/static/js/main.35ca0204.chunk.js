(this["webpackJsonprealestate-marketplace"]=this["webpackJsonprealestate-marketplace"]||[]).push([[0],{403:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"buyer","type":"address"}],"name":"PropertyPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"PropertyRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"PropertyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"PropertyWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"buyProperty","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getAllProperties","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_Id","type":"uint256"}],"name":"getProperty","outputs":[{"components":[{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"location","type":"string"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bool","name":"forSale","type":"bool"}],"internalType":"struct RealEstateMarketplace.Property","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"properties","outputs":[{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"location","type":"string"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"bool","name":"forSale","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"putPropertyForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"location","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"registerProperty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"updatePropertyPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"withdrawProperty","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},404:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},412:function(e,t,n){},414:function(e,t,n){},430:function(e,t){},431:function(e,t){},433:function(e,t){},437:function(e,t){},461:function(e,t){},463:function(e,t){},477:function(e,t){},479:function(e,t){},507:function(e,t){},509:function(e,t){},526:function(e,t){},527:function(e,t){},600:function(e,t){},601:function(e,t){},693:function(e,t){},698:function(e,t){},880:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(59),i=n.n(s),p=(n(412),n(67)),o=n(18),u=n(24),c=n.n(u),l=(n(414),n(889)),d=n(883),y=n(888),m=n(884),b=n(885),f=n(891),j=n(890),x=n(398),h=n(1),v=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),p=Object(o.a)(i,2),u=p[0],c=p[1],v=Object(a.useState)(""),T=Object(o.a)(v,2),O=T[0],w=T[1],g=Object(a.useState)(!1),k=Object(o.a)(g,2),P=k[0],M=k[1],S=function(){return M(!1)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l.a,{bg:"light",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(l.a.Brand,{href:"#home",children:"Real Estate Marketplace"}),Object(h.jsx)(l.a.Toggle,{}),Object(h.jsx)(y.a,{className:"me-auto",children:Object(h.jsxs)(m.a,{bg:"secondary",className:"ms-auto",children:["Balance ",e.cUSDBalance,"cUSD"]})}),Object(h.jsx)(l.a.Collapse,{className:"justify-content-end",children:Object(h.jsx)(b.a,{onClick:function(){return M(!0)},variant:"dark",children:Object(h.jsx)("h5",{children:" New Property "})})})]})}),Object(h.jsxs)(f.a,{show:P,onHide:S,centered:!0,children:[Object(h.jsx)(f.a.Header,{closeButton:!0,children:Object(h.jsx)(f.a.Title,{children:"Add Property"})}),Object(h.jsx)(j.a,{children:Object(h.jsxs)(f.a.Body,{children:[Object(h.jsx)(x.a,{controlId:"inputImage",label:"Image",className:"mb-3",children:Object(h.jsx)(j.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Image"})}),Object(h.jsx)(x.a,{controlId:"inputLocation",label:"location",className:"mb-3",children:Object(h.jsx)(j.a.Control,{type:"text",onChange:function(e){c(e.target.value)},placeholder:"Enter Location"})}),Object(h.jsx)(x.a,{controlId:"inputPrice",label:"price",className:"mb-3",children:Object(h.jsx)(j.a.Control,{type:"number",onChange:function(e){w(e.target.value)},placeholder:"Enter price"})})]})}),Object(h.jsxs)(f.a.Footer,{children:[Object(h.jsx)(b.a,{variant:"outline-secondary",onClick:S,children:"Close"}),Object(h.jsx)(b.a,{variant:"dark",disabled:!(r&&u&&O),onClick:function(){e.addProperty(r,u,O),S()},children:"Add new property"})]})]})]})},T=n(97),O=n(886),w=n(397),g=n(892),k=n(893),P=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)([]),p=Object(o.a)(i,2),u=p[0],c=p[1];return Object(h.jsx)(O.a,{xs:1,md:3,className:"g-4",children:e.properties.map((function(t){return Object(h.jsx)(w.a,{children:Object(h.jsxs)(g.a,{className:"h-100",children:[Object(h.jsx)(g.a.Header,{children:Object(h.jsxs)(k.a,{direction:"horizontal",gap:2,children:[Object(h.jsxs)(m.a,{bg:"secondary",className:"ms-auto",children:[t.id," ID"]}),Object(h.jsxs)(m.a,{bg:"secondary",className:"ms-auto",children:[t.price/1e18," cUSD"]})]})}),Object(h.jsx)("div",{className:" ratio ratio-4x3",children:Object(h.jsx)("img",{src:t.image,alt:t.location,style:{objectFit:"cover"}})}),Object(h.jsxs)(g.a.Body,{className:"d-flex  flex-column text-center",children:[Object(h.jsx)(g.a.Title,{className:"flex-grow-1",children:t.location}),Object(h.jsx)(m.a,{bg:"secondary",className:"ms-auto",children:t.forSale?"Forsale":"Not Forsale"}),t.owner===e.walletAddress&&!0===t.forSale&&Object(h.jsx)("button",{type:"button",onClick:function(){return e.withdrawSale(t.id)},class:"btn btn-dark btn-sm mt-1",children:"withdraw sale"}),t.owner===e.walletAddress&&Object(h.jsx)("form",{children:Object(h.jsxs)("div",{class:"form-r",children:[Object(h.jsx)("input",{type:"number",class:"form-control mt-3",value:r[t.id]||"",onChange:function(e){var n=Object(T.a)(r);n[t.id]=e.target.value,s(n)},placeholder:"Enter new price"}),Object(h.jsx)("button",{type:"button",onClick:function(){return e.changePrice(t.id,r[t.id])},class:"btn btn-dark btn-sm mt-1",children:"Change Price"})]})}),t.owner===e.walletAddress&&!1===t.forSale&&Object(h.jsx)("form",{children:Object(h.jsxs)("div",{class:"form-r",children:[Object(h.jsx)("input",{type:"number",class:"form-control mt-3",value:u[t.id]||"",onChange:function(e){var n=Object(T.a)(u);n[t.id]=e.target.value,c(n)},placeholder:"enter price"}),Object(h.jsx)("button",{type:"button",onClick:function(){console.log("Price for property ID",t.id,":",u[t.id]),e.sellProperty(t.id,u[t.id])},class:"btn btn-dark mt-1",children:"Sell property"})]})}),t.owner!==e.walletAddress&&!0===t.forSale&&Object(h.jsx)("button",{type:"button",onClick:function(){return e.buyProperty(t.id)},class:"btn btn-dark mt-1",children:"Buy Property"})]})]})},t.id)}))})},M=n(399),S=n.n(M),I=n(402),C=n(403),A=n(404),F=n(29),N=n.n(F),B="0x4f43Ab8Cba473D1B38C395EDF0CD5a308Dee19D7";var D=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),i=Object(o.a)(s,2),u=i[0],l=i[1],d=Object(a.useState)(null),y=Object(o.a)(d,2),m=y[0],b=y[1],f=Object(a.useState)(0),j=Object(o.a)(f,2),x=j[0],T=j[1],O=Object(a.useState)([]),w=Object(o.a)(O,2),g=w[0],k=w[1],M=function(){var e=Object(p.a)(c.a.mark((function e(){var t,n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.celo){e.next=22;break}return e.prev=1,e.next=4,window.celo.enable();case 4:return t=new S.a(window.celo),n=Object(I.newKitFromWeb3)(t),e.next=8,n.web3.eth.getAccounts();case 8:return a=e.sent,r=a[0],n.defaultAccount=r,e.next=13,l(r);case 13:return e.next=15,b(n);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.log(e.t0);case 20:e.next=23;break;case 22:alert("Error Occurred");case 23:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(){return e.apply(this,arguments)}}(),F=Object(a.useCallback)(Object(p.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getTotalBalance(u);case 3:t=e.sent,n=t.cUSD.shiftedBy(-18).toFixed(2),a=new m.web3.eth.Contract(C,B),r(a),T(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[u,m]),D=function(){var e=Object(p.a)(c.a.mark((function e(){var t,a,r,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,n.methods.getAllProperties().call();case 4:for(a=e.sent,r=function(e){var a=new Promise(function(){var t=Object(p.a)(c.a.mark((function t(a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.methods.getProperty(e).call();case 2:r=t.sent,a({index:e,image:r.image,location:r.location,id:r.id,price:r.price,owner:r.owner,forSale:r.forSale});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());t.push(a)},s=1;s<=Number(a);s++)r(s);return e.next=9,Promise.all(t);case 9:i=e.sent,k(i),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log({e:e.t0});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(c.a.mark((function e(t,a,r){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new N.a(r).shiftedBy(18).toString(),e.prev=1,e.next=4,n.methods.registerProperty(t,a,s).send({from:u});case 4:D(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),U=function(){var e=Object(p.a)(c.a.mark((function e(t,a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new N.a(a).shiftedBy(18).toString(),e.prev=1,e.next=4,n.methods.updatePropertyPrice(t,r).send({from:u});case 4:D(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(p.a)(c.a.mark((function e(t,a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new N.a(a).shiftedBy(18).toString(),e.prev=1,e.next=4,n.methods.putPropertyForSale(t,r).send({from:u});case 4:D(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(p.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.methods.withdrawProperty(t).send({from:u});case 3:D(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(p.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=new m.web3.eth.Contract(A,"0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1"),e.next=4,a.methods.approve(B,g[t].price).send({from:u});case 4:return e.next=6,n.methods.buyProperty(t).send({from:u});case 6:D(),F(),alert("you have successfully sent cusd to this user"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){M()}),[]),Object(a.useEffect)((function(){m&&u&&F()}),[m,u,F]),Object(a.useEffect)((function(){n&&D()}),[n,D]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(v,{cUSDBalance:x,addProperty:E}),Object(h.jsx)(P,{properties:g,changePrice:U,sellProperty:J,withdrawSale:L,walletAddress:u,buyProperty:R})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,894)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};n(876),n(877);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root")),E()}},[[880,1,2]]]);
//# sourceMappingURL=main.35ca0204.chunk.js.map