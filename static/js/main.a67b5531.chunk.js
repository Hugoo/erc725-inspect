(this["webpackJsonperc725-inspect"]=this["webpackJsonperc725-inspect"]||[]).push([[0],{215:function(e,t,a){},222:function(e,t){},229:function(e,t,a){},252:function(e,t){},254:function(e,t){},330:function(e,t){},332:function(e,t){},365:function(e,t){},370:function(e,t){},372:function(e,t){},379:function(e,t){},392:function(e,t){},415:function(e,t){},424:function(e,t){},426:function(e,t){},496:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a.n(n),s=a(206),r=a.n(s),i=(a(215),a(12)),u=a.n(i),l=a(20),b=a(25),o=a(16),d=(a(229),a(207)),p=a.n(d);function f(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p.a("https://rpc.l14.lukso.network"),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){c(e)}))}),[]),a}var j=function(){var e=Object(l.a)(u.a.mark((function e(t,a,n){var c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new n.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bytes[]",name:"",internalType:"bytes[]"}],name:"getDataMultiple",inputs:[{type:"bytes32[]",name:"_keys",internalType:"bytes32[]"}]}],t),s=[],e.prev=2,e.next=5,c.methods.getDataMultiple(a).call();case 5:s=e.sent,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message),a.map(function(){var e=Object(l.a)(u.a.mark((function e(a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,n,a);case 2:c=e.sent,s.push(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,a,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(t,a,n){var c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new a.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bytes",name:"_value",internalType:"bytes"}],name:"getData",inputs:[{type:"bytes32",name:"_key",internalType:"bytes32"}]}],t),e.prev=1,e.next=4,c.methods.getData(n).call();case 4:s=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0.message);case 10:return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(u.a.mark((function e(t,a){var n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new a.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bool",name:"",internalType:"bool"}],name:"supportsInterface",inputs:[{type:"bytes4",name:"interfaceId",internalType:"bytes4"}]}],t),c=!1,e.prev=2,e.next=5,n.methods.supportsInterface("0x44c028fe").call();case 5:c=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:return s=!1,e.prev=12,e.next=15,n.methods.supportsInterface("0x2bd57b73").call();case 15:s=e.sent,e.next=21;break;case 18:e.prev=18,e.t1=e.catch(12),console.log(e.t1.message);case 21:return e.abrupt("return",{isErc725X:c,isErc725Y:s});case 22:case"end":return e.stop()}}),e,null,[[2,8],[12,18]])})));return function(t,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(u.a.mark((function e(t,a){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new a.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bytes32[]",name:"",internalType:"bytes32[]"}],name:"allDataKeys",inputs:[]}],t),c=[],e.prev=2,e.next=5,n.methods.allDataKeys().call();case 5:c=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:return e.abrupt("return",c);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,a){return e.apply(this,arguments)}}(),x=a(3),m=function(e){var t=e.address,a=e.isErc725Y,c=Object(n.useState)([]),s=Object(b.a)(c,2),r=s[0],i=s[1],o=f();return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(u.a.mark((function e(){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o&&a){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,h(t,o);case 5:return n=e.sent,e.next=8,j(t,n,o);case 8:c=e.sent,i(n.map((function(e,t){return{key:e,value:c[t]}}))),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),i([]);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[t,o,a]),a?Object(x.jsx)("div",{children:r.map((function(e){var t=function(e){switch(e){case"0xeafec4d89fa9619884b6b89135626455000000000000000000000000abf0613c":return{name:"SupportedStandards:LSP4DigitalCertificate",key:"0xeafec4d89fa9619884b6b89135626455000000000000000000000000abf0613c",keyType:"Mapping",valueContent:"0xabf0613c",valueType:"bytes"};case"0x9afb95cacc9f95858ec44aa8c3b685511002e30ae54415823f406128b85b238e":return{name:"LSP4Metadata",key:"0x9afb95cacc9f95858ec44aa8c3b685511002e30ae54415823f406128b85b238e",keyType:"Singleton",valueContent:"JSONURL",valueType:"bytes"};case"0x114bd03b3a46d48759680d81ebb2b414fda7d030a7105a851867accf1c2352e7":return{name:"LSP4Creators[]",key:"0x114bd03b3a46d48759680d81ebb2b414fda7d030a7105a851867accf1c2352e7",keyType:"Array",valueContent:"Number",valueType:"uint256",elementValueContent:"Address",elementValueType:"address"};case"0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6":return{name:"SupportedStandards:LSP3UniversalProfile",key:"0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6",keyType:"Mapping",valueContent:"0xabe425d6",valueType:"bytes"};case"0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0":return{name:"LSP3IssuedAssets[]",key:"0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0",keyType:"Array",valueContent:"Address",valueType:"address"};case"0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6":return{name:"SupportedStandards:ERC725Account",key:"0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6",keyType:"Singleton",valueContent:"0xafdeb5d6",valueType:"bytes"};case"0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47":return{name:"LSP1UniversalReceiverDelegate",key:"0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",keyType:"Singleton",valueContent:"Address",valueType:"address"};case"0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5":return{name:"LSP3Profile",key:"0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",keyType:"Singleton",valueContent:"JSONURL",valueType:"bytes"}}if(-1!==e.indexOf("0xeafec4d89fa9619884b6b89135626455000000000000000000000000"))return{name:"SupportedStandards:?????????",key:e,keyType:"Mapping",valueContent:e.substr(58),valueType:"bytes"};if(-1!==e.indexOf("0x4b80742d0000000082ac0000")){var t=e.substr(26);return{name:"AddressPermissions:Permissions:".concat(t),key:e,keyType:"AddressMappingWithGrouping",valueContent:"BitArray",valueType:"bytes4"}}if(-1!==e.indexOf("0x114bd03b3a46d48759680d81ebb2b414")){var a=parseInt(e.substr(34),10);return{name:"LSP4Creators[".concat(a,"]"),key:e,keyType:"Singleton",valueContent:"Address",valueType:"address"}}return{name:"UNKNOWN",key:e,keyType:"UNKNOWN",valueContent:"UNKNOWN",valueType:"UNKNOWN"}}(e.key);return Object(x.jsxs)("div",{className:"py-5",children:[Object(x.jsx)("h4",{className:"title is-4",children:t.name}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("span",{className:"tag is-link is-light",children:t.keyType})}),Object(x.jsx)("li",{children:Object(x.jsx)("code",{children:t.key})}),Object(x.jsx)("li",{children:t.valueType}),Object(x.jsxs)("li",{children:["Raw value: ",Object(x.jsx)("code",{children:e.value})," ","address"===t.valueType&&Object(x.jsxs)("div",{className:"buttons are-small",children:[Object(x.jsx)("a",{className:"button is-primary is-light",target:"_blank",rel:"noreferrer",href:"https://universalprofile.cloud/".concat(e.value),children:"View UP as Profile"}),Object(x.jsx)("a",{className:"button is-info is-light",target:"_blank",rel:"noreferrer",href:"https://universalprofile.cloud/asset/".concat(e.value),children:"View UP as Asset"}),Object(x.jsx)("a",{className:"button is-link is-light",target:"_blank",rel:"noreferrer",href:"https://blockscout.com/lukso/l14/address/".concat(e.value),children:"Blockscout"})]})]}),Object(x.jsx)("li",{children:"Decoded value: TODO"})]})]},e.key)}))}):null},O=function(){return Object(x.jsx)("nav",{className:"navbar is-light",children:Object(x.jsxs)("div",{className:"navbar-menu",children:[Object(x.jsx)("div",{className:"navbar-start",children:Object(x.jsx)("a",{className:"navbar-item",href:"/",children:"ERC725 Inspect \ud83d\udcdd\ud83d\udd0d"})}),Object(x.jsxs)("div",{className:"navbar-end",children:[Object(x.jsx)("div",{className:"navbar-item",children:Object(x.jsx)("div",{className:"buttons",children:Object(x.jsx)("a",{href:"https://docs.lukso.tech/networks/l14-testnet",className:"button is-light",children:"Network: LUKSO l14"})})}),Object(x.jsx)("div",{className:"navbar-item",children:Object(x.jsx)("div",{className:"field is-grouped",children:Object(x.jsx)("p",{className:"control",children:Object(x.jsx)("a",{className:"button is-primary",href:"https://github.com/Hugoo/erc725-inspect/",children:Object(x.jsx)("span",{children:"GitHub"})})})})})]})]})})},k=function(){var e=Object(n.useState)("0xb8E120e7e5EAe7bfA629Db5CEFfA69C834F74e99"),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(b.a)(s,2),i=r[0],d=r[1],p=Object(n.useState)(!1),j=Object(b.a)(p,2),v=j[0],h=j[1],k=Object(n.useState)(!1),g=Object(b.a)(k,2),N=g[0],T=g[1],w=Object(n.useState)(""),C=Object(b.a)(w,2),S=C[0],A=C[1],E=f();return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E){e.next=2;break}return e.abrupt("return");case 2:if(h(!1),T(!1),Object(o.isAddress)(a)){e.next=7;break}return A("Address is not valid"),e.abrupt("return");case 7:return d(!0),e.next=10,y(a,E);case 10:t=e.sent,h(t.isErc725X),T(t.isErc725Y),d(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a,E]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{}),Object(x.jsxs)("section",{className:"section",children:[Object(x.jsx)("div",{className:"container is-fluid",children:Object(x.jsxs)("div",{className:"columns is-vcentered",children:[Object(x.jsx)("div",{className:"column",children:Object(x.jsxs)("div",{className:"field",children:[Object(x.jsx)("label",{className:"label",children:"Contract Address"}),Object(x.jsxs)("div",{className:"control",children:[Object(x.jsx)("input",{className:"input ".concat(""===S?"is-success":"is-danger"),type:"text",placeholder:"ERC725 Contract Address",value:a,onChange:function(e){c(e.target.value)}}),Object(x.jsx)("span",{className:"icon is-small is-left",children:Object(x.jsx)("i",{className:"fas fa-user"})}),Object(x.jsx)("span",{className:"icon is-small is-right",children:Object(x.jsx)("i",{className:"fas fa-check"})})]}),S&&Object(x.jsx)("p",{className:"help is-danger",children:S})]})}),Object(x.jsxs)("div",{className:"column",children:["ERC725X: ",v?"\u2705":"\u274c",Object(x.jsx)("br",{}),"ERC725Y: ",N?"\u2705":"\u274c"]})]})}),Object(x.jsx)("div",{className:"container is-fluid",children:i?"Loading...":Object(x.jsx)("div",{children:Object(x.jsx)(m,{address:a,isErc725Y:N})})})]})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,500)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),g()}},[[496,1,2]]]);
//# sourceMappingURL=main.a67b5531.chunk.js.map