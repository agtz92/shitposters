(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+Jn8":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),o=a.n(n);a("zlK1"),a("DLeO"),a("3sST");function r(e){return o.a.createElement("h1",{className:"heading "+e.color+" "+e.alignment+" "+e.size},e.children)}},"/9aa":function(e,t,a){var n=a("NykK"),o=a("ExA7");e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"3sST":function(e,t,a){},"6nK8":function(e,t,a){var n=a("dVn5"),o=a("fo6e"),r=a("dt0z"),l=a("9NmV");e.exports=function(e,t,a){return e=r(e),void 0===(t=a?void 0:t)?o(e)?l(e):n(e):e.match(t)||[]}},"9NmV":function(e,t){var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+a+"]",o="\\d+",r="[\\u2700-\\u27bf]",l="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+a+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",u="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+l+"|"+i+")",d="(?:"+u+"|"+i+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,s].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),x="(?:"+[r,c,s].join("|")+")"+v,p=RegExp([u+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,u,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,u+f,"$"].join("|")+")",u+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",u+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,x].join("|"),"g");e.exports=function(e){return e.match(p)||[]}},AP2z:function(e,t,a){var n=a("nmnc"),o=Object.prototype,r=o.hasOwnProperty,l=o.toString,i=n?n.toStringTag:void 0;e.exports=function(e){var t=r.call(e,i),a=e[i];try{e[i]=void 0;var n=!0}catch(c){}var o=l.call(e);return n&&(t?e[i]=a:delete e[i]),o}},DLeO:function(e,t,a){},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},Fbxu:function(e,t,a){e.exports=a.p+"static/logo_small-d8814a8641f371546f76f872cf1b7dab.png"},KfNM:function(e,t){var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},Kz5y:function(e,t,a){var n=a("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,r=n||o||Function("return this")();e.exports=r},N1om:function(e,t,a){var n=a("sgoq")((function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}));e.exports=n},NykK:function(e,t,a){var n=a("nmnc"),o=a("AP2z"),r=a("KfNM"),l=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?o(e):r(e)}},RMg3:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("dI71"),o=a("q1tI"),r=a.n(o),l=(a("zlK1"),a("DLeO"),a("3sST"),a("Wbzz")),i=a("Fbxu"),c=a.n(i),s={transform:"translate(0px, 0px)",transition:"transform 400ms ease 0s"},u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isToggleOn:!1},a.handleClick=a.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.handleClick=function(){this.setState((function(e){return{isToggleOn:!e.isToggleOn}}))},a.render=function(){return r.a.createElement("div",{"data-collapse":"medium","data-animation":"default","data-duration":"400",role:"banner",className:"navbar w-nav "},r.a.createElement("div",{className:"divcontainernavbar"},r.a.createElement(l.a,{to:"/"},r.a.createElement("img",{loading:"lazy",style:{width:"45px",height:"45px",paddingTop:"5px"},srcSet:c.a,alt:"soynuevologo",className:"image"})),r.a.createElement("nav",{role:"navigation",className:"w-nav-menu"},r.a.createElement(l.a,{to:"/",className:"nav-link w-nav-link",activeClassName:"w--current"},"Inicio"),r.a.createElement(l.a,{to:"/categorias/",className:"nav-link w-nav-link",activeClassName:"w--current"},"Categorías")),r.a.createElement("div",{className:"w-nav-button "+(this.state.isToggleOn?"w--open":""),onClick:this.handleClick,"aria-hidden":"true"},r.a.createElement("div",{className:"w-icon-nav-menu"}))),r.a.createElement("div",{className:"w-nav-overlay mobileNav "+(this.state.isToggleOn?"showing":"not-showing"),"data-wf-ignore":"",id:"w-nav-overlay-0"},r.a.createElement("nav",{role:"navigation",className:"w-nav-menu",style:s,"data-nav-menu-open":""},r.a.createElement(l.a,{to:"/",className:"nav-link w-nav-link w--nav-link-open",activeClassName:"w--current"},"Inicio"),r.a.createElement(l.a,{to:"/categorias/",className:"nav-link w-nav-link w--nav-link-open",activeClassName:"w--current"},"Categorías"))))},t}(o.Component)},TKrE:function(e,t,a){var n=a("qRkn"),o=a("dt0z"),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(r,n).replace(l,"")}},"W/9C":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),l=(a("zlK1"),a("DLeO"),a("3sST"),a("Fbxu")),i=a.n(l);function c(){return o.a.createElement("footer",{id:"footer",className:"footer"},o.a.createElement("div",{className:"container w-container"},o.a.createElement("div",{className:"footer-flex-container"},o.a.createElement(r.a,{to:"/"},o.a.createElement("img",{loading:"lazy",style:{width:"70px",height:"70px",paddingTop:"5px"},srcSet:i.a,alt:"soynuevologo",className:"image"})),o.a.createElement("div",null,o.a.createElement("h2",{className:"footer-heading"},"Categorías"),o.a.createElement("ul",{className:"list-footer w-list-unstyled"},o.a.createElement("li",null,o.a.createElement(r.a,{to:"/categorias/celebridades/",className:"footer-link"},"Celebridades")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/categorias/cine/",className:"footer-link"},"Cine")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/categorias/deportes/",className:"footer-link"},"Deportes")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/categorias/historia/",className:"footer-link"},"Historia")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/categorias/musica/",className:"footer-link"},"Música")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/categorias/naturaleza/",className:"footer-link"},"Naturaleza")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/categorias/random/",className:"footer-link"},"Random")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/categorias/television/",className:"footer-link"},"TV")))),o.a.createElement("div",null,o.a.createElement("h2",{className:"footer-heading"},"Información"),o.a.createElement("ul",{className:"list-footer w-list-unstyled"},o.a.createElement("li",null,o.a.createElement(r.a,{to:"/privacidad/",className:"footer-link"},"Política de Privacidad")))),o.a.createElement("div",null,o.a.createElement("h2",{className:"footer-heading"},"Partners"),o.a.createElement("ul",{className:"list-footer w-list-unstyled"},o.a.createElement("li",null,o.a.createElement("a",{className:"footer-link",href:"https://www.antesdelexamen.com",rel:"noopener noreferrer"},"Bancos de preguntas UNAM"))))),o.a.createElement("div",{className:"text-bottom-footer"},"Copyright © 2021 10datos.com . Todos los derechos reservados."),o.a.createElement("div",{className:"text-bottom-footer"},"En este sitio se recolectan cookies utilizados para Google Analytics")))}},WFqU:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a("yLpj"))},Z0cm:function(e,t){var a=Array.isArray;e.exports=a},asDA:function(e,t){e.exports=function(e,t,a,n){var o=-1,r=null==e?0:e.length;for(n&&r&&(a=e[++o]);++o<r;)a=t(a,e[o],o,e);return a}},dVn5:function(e,t){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},dt0z:function(e,t,a){var n=a("zoYe");e.exports=function(e){return null==e?"":n(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var a=-1,n=null==e?0:e.length,o=Array(n);++a<n;)o[a]=t(e[a],a,e);return o}},fo6e:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},nmnc:function(e,t,a){var n=a("Kz5y").Symbol;e.exports=n},qRkn:function(e,t,a){var n=a("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},sgoq:function(e,t,a){var n=a("asDA"),o=a("TKrE"),r=a("6nK8"),l=RegExp("['’]","g");e.exports=function(e){return function(t){return n(r(o(t).replace(l,"")),e,"")}}},zlK1:function(e,t,a){},zoYe:function(e,t,a){var n=a("nmnc"),o=a("eUgh"),r=a("Z0cm"),l=a("/9aa"),i=n?n.prototype:void 0,c=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(r(t))return o(t,e)+"";if(l(t))return c?c.call(t):"";var a=t+"";return"0"==a&&1/t==-1/0?"-0":a}}}]);
//# sourceMappingURL=276ae7fdff40740676a70b1a7d90e9ef9cd649f1-0b1ff4640e96ba5d151e.js.map