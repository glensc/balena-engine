webpackJsonp([0],{209:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return{__html:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=r(o),u=n(43),i=(r(u),n(16));t.default=function(e){var t=e.html;return l.default.createElement(i.Container,{pt:2,pb:5},l.default.createElement(i.Box,{dangerouslySetInnerHTML:a(t)}))}},260:function(e,t,n){e.exports=n.p+"resin.fa0a02be3bfbe916473827be2e61d109.svg"},301:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),l=n(1),u=r(l),i=n(306),c=n(136),f=n(325),s=r(f),d=n(637),p=r(d),m=n(2),y=n(166);if("undefined"!=typeof document){n(638);var h=JSON.parse(document.getElementById("__LANDR__LOCALS").innerHTML),b=JSON.parse(document.getElementById("__LANDR__ROUTES").innerHTML),g=document.getElementById("mount"),v=function(){return o.default.createElement(c.BrowserRouter,{basename:void 0},(0,y.renderRoutes)((0,s.default)(b),h))};u.default.render(o.default.createElement(v,null),g)}var _=function(e){var t=e.path,n=e.assets,r=e.locals,a=e.pages,l={},u=o.default.createElement(c.StaticRouter,{location:t,context:l},(0,y.renderRoutes)((0,s.default)(a),r)),f=new m.ServerStyleSheet,d=(0,i.renderToString)(u);f.collectStyles(d);var h=f.getStyleElement(),b=n.filter(function(e){return e.endsWith(".js")});return Promise.resolve((0,i.renderToStaticMarkup)(o.default.createElement(p.default,{locals:r,styleTags:h,scriptTags:b,pages:a},d)))};t.default=_},325:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(326),o=r(a),l=n(586),u=r(l);t.default=function(e){return[{component:u.default,routes:e.map(function(e){return{path:e.path,exact:Boolean(e.exact),component:o.default[e.component].default}})}]}},326:function(e,t,n){"use strict";var r=n(208),a={};!function(e){e.keys().forEach(function(t){return a[r(t).name]=e(t)})}(n(327)),e.exports=a},327:function(e,t,n){function r(e){return n(a(e))}function a(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./Changelog.js":328,"./Docs.js":540,"./Error.js":547,"./Index.js":548};r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=327},328:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),l=n(209),u=r(l);t.default=function(e){var t=e.changelog;return o.default.createElement(u.default,t)}},43:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.isURLExternal=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),l=function(e){return e&&e.__esModule?e:{default:e}}(o),u=n(16),i=n(136),c=t.isURLExternal=function(e){return e&&-1!==e.indexOf("http")},f=function(e){var t=e.to,n=e.children,o=r(e,["to","children"]),f=c(t);return l.default.createElement(u.Link,a({},o,{to:t,href:t,is:f?"a":i.Link}),n)};t.default=f},540:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),l=n(256),u=(n(166),n(2)),i=(n(16),n(43)),c=(r(i),n(546)),f=(r(c),n(209)),s=r(f),d=function(e){var t=(0,l.matchPath)(e.route.path,{path:"/docs/:slug"}).params.slug;return e.docs.find(function(e){return e.slug===t})},p=function(e){var t=d(e);return o.default.createElement(s.default,t)};t.default=(0,l.withRouter)((0,u.withTheme)(p))},546:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),l=n(43),u=r(l);t.default=function(e){e.items;links.map(function(e){return o.default.createElement(Box,null,o.default.createElement(u.default,{style:{width:"100%"},color:"white",p:2,to:link.to},link.text))})}},547:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),l=n(16),u=n(43),i=r(u);t.default=function(e){return o.default.createElement(l.Container,null,o.default.createElement(l.Flex,{justify:"center"},o.default.createElement(l.Box,{my:"30vh"},o.default.createElement("h1",null,"Oops, Nothing to see here."),o.default.createElement(i.default,{to:"/"},"Take me home"))))}},548:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),l=n(549),u=r(l),i=n(577),c=r(i),f=n(582),s=r(f),d=n(583),p=r(d),m=n(584),y=r(m),h=n(2),b=(r(h),(0,h.withTheme)(function(e){return o.default.createElement("div",null,o.default.createElement(u.default,e),e.config.settings.features&&o.default.createElement(s.default,e),e.config.settings.features&&o.default.createElement(p.default,e),e.releases[0]&&o.default.createElement(c.default,{release:e.releases[0]}),e.faqs.length>0&&o.default.createElement(y.default,{faqs:e.faqs}))}));t.default=b},549:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),l=n(2),u=(r(l),n(46)),i=r(u),c=n(16),f=n(43),s=r(f),d=n(62),p=r(d),m=n(559),y=r(m),h=n(567),b=r(h),g=n(568),v=r(g),_=n(570);t.default=function(e){var t=e.releases[0],n=(0,i.default)(t,"assets"),r=(0,i.default)(t,"tag_name"),a=(0,i.default)(e,"config.settings.callToActionCommand");return o.default.createElement(c.Banner,{bg:e.theme.colors.gray.dark,color:"white"},o.default.createElement(c.Image,{align:"center",style:{height:"100px"},mb:3,src:p.default[""+e.repository.name]}),o.default.createElement(c.Heading.h2,{align:"center",mb:3},e.config.settings.lead||e.repository.description||e.repository.name),a?o.default.createElement(c.Box,null,o.default.createElement(b.default,null,e.config.settings.callToActionCommand),o.default.createElement(c.Text.p,{align:"center"},"Or ",o.default.createElement("a",{href:"#downloads"},"download"))):n&&o.default.createElement(y.default,{mb:3,assets:n}),o.default.createElement(c.Flex,{mb:3},o.default.createElement(c.Box,{mx:1},o.default.createElement(v.default,{href:e.repository.html_url,"data-size":"small","data-show-count":"true"},"Star")),o.default.createElement(c.Box,{mx:1},o.default.createElement(_.Share,{options:{text:e.repository.name+" - "+e.repository.description},url:""},"Tweet"))),o.default.createElement(c.Text,{mb:3},r&&r+" - ",o.default.createElement(s.default,{to:"/changelog/"},"See whats new")),p.default.screenshot&&o.default.createElement(c.Image,{src:p.default.screenshot}))}},550:function(e,t,n){function r(e){return n(a(e))}function a(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./balena.svg":551,"./favicon.ico":552,"./features/bandwidth.svg":553,"./features/failure-resistant.svg":554,"./features/footprint.svg":555,"./features/multiple.svg":556,"./features/storage.svg":557,"./features/undisturbed.svg":558};r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=550},551:function(e,t,n){e.exports=n.p+"balena.787f31517a4b9291d23d54ad258b0de6.svg"},552:function(e,t,n){e.exports=n.p+"favicon.7ae76b28a3978ad26f2786695ff3b7f5.ico"},553:function(e,t,n){e.exports=n.p+"bandwidth.9964f2c4c138f7992e3eae2113f56b03.svg"},554:function(e,t,n){e.exports=n.p+"failure-resistant.0210426369449749826c690bb8e9594b.svg"},555:function(e,t,n){e.exports=n.p+"footprint.87da52347bd99c071fcd864b56cb583a.svg"},556:function(e,t,n){e.exports=n.p+"multiple.b6381c266ffd7549a547f85bcd1f499f.svg"},557:function(e,t,n){e.exports=n.p+"storage.8114239d3e2f30be62231bdeaea977a2.svg"},558:function(e,t,n){e.exports=n.p+"undisturbed.c8217557fd2d37bb499a5c9f4d49a87d.svg"},559:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=n(1),p=r(d),m=n(560),y=r(m),h=n(561),b=r(h),g=n(566),v=r(g),_=n(16),E=n(2),x=n(43),w=r(x),O=function(e,t){var n=(t.tracker,e.asset),r=e.color,a=i(e,["asset","color"]);return p.default.createElement(w.default,s({style:{width:"100%"}},a,{color:r,to:n.browser_download_url}),n.prettyName||n.name)},j=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={primaryAsset:null,assets:e.assets},n}return u(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this.state.assets;if(e.length<1||!e[0].os)return void this.setState({primaryAsset:null,assets:e});var t=new y.default;t.sniff(window.navigator.userAgent),t.os.arch=(0,v.default)();var n=function(e,t){return e?0:t},r=(0,b.default)(e,function(e){var r=n(e.os.toLowerCase()===t.os.name.toLowerCase(),2);return 0===r&&(r+=(e.arch,t.os.arch,1)),r});this.setState({primaryAsset:r.shift(),assets:r})}},{key:"render",value:function(e){var t=this,n=this.context.tracker,r=[].concat(a(this.state.assets)).filter(function(e){return"CLI"!==e.type});return p.default.createElement(_.DropDownButton,s({},e,{emphasized:!0,primary:!0,joined:!this.state.primaryAsset,label:this.state.primaryAsset?p.default.createElement(O,{px:3,onClick:function(){n.create("download",t.state.primaryAsset)},asset:this.state.primaryAsset,color:"white"}):p.default.createElement(_.Text,{px:3},"Download")}),r.map(function(t){return p.default.createElement(O,{py:2,asset:t,onClick:function(){n.create("download",t)},color:e.theme.colors.gray.dark})}))}}]),t}(d.Component);j.contextTypes={tracker:p.default.PropTypes.object},t.default=(0,E.withTheme)(j)},567:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  max-width: 100%;\n  padding: 20px;\n  overflow: scroll;\n  border-radius: ","px;\n  background: ",";\n"],["\n  max-width: 100%;\n  padding: 20px;\n  overflow: scroll;\n  border-radius: ","px;\n  background: ",";\n"]),o=n(1),l=(r(o),n(16),n(2)),u=r(l),i=n(20),c=u.default.pre(a,function(e){return e.theme.radius},function(e){return(0,i.darken)(e.theme.colors.gray.dark)});e.exports=c},568:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),s=n(1),d=r(s),p={render:function(){}},m=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return f.default.createElement("span",null,f.default.createElement("a",this.props,this.props.children))}},{key:"componentDidMount",value:function(){p=n(569);try{p.render(this._=d.default.findDOMNode(this).firstChild)}catch(e){}}}]),t}(f.default.Component);t.default=m},577:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var o=a(["\n  border-bottom: ",";\n"],["\n  border-bottom: ",";\n"]),l=a(["\n  border-top: ",";\n"],["\n  border-top: ",";\n"]),u=n(1),i=r(u),c=n(16),f=n(43),s=r(f),d=n(2),p=(r(d),n(46)),m=(r(p),n(578)),y=r(m),h=n(153),b=r(h),g=c.Box.extend(o,function(e){return"2px solid "+e.theme.colors.gray.light}),v=c.Flex.extend(l,function(e){return"1px solid "+e.theme.colors.gray.light}),_=function(e,t){var n=e.assets,r=e.title,a=t.tracker;return i.default.createElement(c.Box,null,r&&i.default.createElement(c.Heading.h5,{align:"center",mt:5},r),i.default.createElement(c.Flex,{wrap:!0},i.default.createElement(g,{py:2,px:1,width:2/3},i.default.createElement(c.Text,{bold:!0},"Asset")),i.default.createElement(g,{py:2,px:1,width:1/6},i.default.createElement(c.Text,{bold:!0},"OS")),i.default.createElement(g,{py:2,px:1,width:1/6},i.default.createElement(c.Text,{bold:!0},"Arch"))),n.map(function(e,t){return i.default.createElement(v,{wrap:!0,py:2,key:t},i.default.createElement(c.Box,{py:2,px:1,width:[2/3]},i.default.createElement(s.default,{color:"white",to:e.browser_download_url,onClick:function(){a.create("download",e)}},e.name)),i.default.createElement(c.Box,{py:2,px:1,width:1/6},i.default.createElement(c.Text,null,e.os)),i.default.createElement(c.Box,{py:2,px:1,width:1/6},i.default.createElement(c.Text,null,e.arch)))}))};_.contextTypes={tracker:i.default.PropTypes.object},t.default=function(e){var t=e.release,n=(0,y.default)(t.assets,"type");return i.default.createElement(c.Box,{id:"downloads",color:"white",bg:"primary.main"},i.default.createElement(c.Container,{py:5},i.default.createElement(c.Heading.h2,{align:"center",mb:5},"Downloads"),(0,b.default)(n,function(e,t){return i.default.createElement(_,{assets:e,title:"undefined"!==t&&t})})))}},582:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  min-height: 100px;\n"],["\n  min-height: 100px;\n"]),o=n(1),l=r(o),u=n(16),i=n(62),c=r(i),f=u.Flex.extend(a);t.default=function(e){return l.default.createElement(u.Flex,{py:5},l.default.createElement(u.Container,null,l.default.createElement(u.Heading.h2,{mb:5,align:"center"},"Features"),l.default.createElement(u.Flex,{wrap:!0,mb:5},e.config.settings.features.map(function(e){return l.default.createElement(u.Box,{align:"center",px:2,width:[1,1/3]},l.default.createElement(f,{align:"center",justify:"center"},l.default.createElement(u.Box,null,l.default.createElement(u.Image,{m:"auto",mb:2,h:["100px","70px"],w:["50px","70px"],src:c.default[""+e.image]}))),l.default.createElement(u.Heading.h4,{mb:2,align:"center"},e.title),l.default.createElement(u.Text,{align:"center",dangerouslySetInnerHTML:{__html:e.description}}))}))))}},583:function(e,t,n){"use strict";function r(e){return{__html:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  max-width: 450px;\n  color: white;\n"],["\n  max-width: 450px;\n  color: white;\n"]),o=n(1),l=function(e){return e&&e.__esModule?e:{default:e}}(o),u=n(16),i=u.Box.extend(a);t.default=function(e){return l.default.createElement(u.Flex,{bg:e.theme.colors.gray.dark,py:5},l.default.createElement(u.Container,null,l.default.createElement(u.Heading.h2,{mb:5,color:"white",align:"center"},"Why ",e.repository.name,"?"),l.default.createElement(u.Flex,{wrap:!0,justify:"center"},l.default.createElement(i,null,l.default.createElement(u.Text.p,{align:"left",dangerouslySetInnerHTML:r(e.config.settings.motivation)})))))}},584:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),l=n(16),u=n(585),i=r(u),c=n(2),f=function(e){var t=e.faqs.map(function(t){return{title:o.default.createElement(l.Heading.h4,{mb:2,align:"center"},t.title,o.default.createElement(l.Divider,{w:"50%",color:e.theme.colors.gray.light})),render:function(){return o.default.createElement(l.Text.p,{align:"center",dangerouslySetInnerHTML:{__html:t.html}})}}});return o.default.createElement(l.Flex,{py:5},o.default.createElement(l.Container,null,o.default.createElement(l.Heading.h2,{mb:5,align:"center"},"Frequently Asked Questions"),o.default.createElement(i.default,{items:t})))};t.default=(0,c.withTheme)(f)},585:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":i(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":i(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=u(["\n  overflow: hidden;\n  max-width: 500px;\n  max-height: ",";\n  transition: max-height 0.4s ease-in-out;\n"],["\n  overflow: hidden;\n  max-width: 500px;\n  max-height: ",";\n  transition: max-height 0.4s ease-in-out;\n"]),s=u(["\n  cursor: pointer;\n"],["\n  cursor: pointer;\n"]),d=n(1),p=r(d),m=n(16),y=n(2),h=(r(y),m.Box.extend(f,function(e){return e.isOpen?"100vh":"0"})),b=m.Box.extend(s),g=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={openIndex:null},e}return l(t,e),c(t,[{key:"toggle",value:function(e){this.state.openIndex===e&&(e=null),this.setState({openIndex:e})}},{key:"render",value:function(e){var t=this,n=e.items;return p.default.createElement(m.Box,null,n.map(function(e,n){var r=t.state.openIndex===n;return p.default.createElement(b,{key:n,onClick:function(){t.toggle(n)}},p.default.createElement(m.Box,null,e.title),p.default.createElement(h,{isOpen:r},e.render()))}))}}]),t}(d.Component);t.default=g},586:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["",""],["",""]),o=n(1),l=r(o),u=n(587),i=r(u),c=n(166),f=n(16),s=n(2),d=(n(136),n(590)),p=r(d),m=n(592),y=r(m),h=n(594),b=r(h),g=n(62),v=(r(g),n(607)),_=r(v);t.default=function(e){var t=(0,i.default)(e.config.settings.theme);return(0,s.injectGlobal)(a,(0,u.globalStyles)(t)),l.default.createElement(_.default,{prefix:e.repository.name,analytics:e.config.settings.analytics},l.default.createElement(f.Provider,{theme:t},l.default.createElement(b.default,e),l.default.createElement(p.default,e),(0,c.renderRoutes)(e.route.routes,e),l.default.createElement(y.default,e)))}},587:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.globalStyles=t.monospace=t.font=t.radius=t.weights=t.fontSizes=t.space=t.breakpoints=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(20),l=n(588),u=r(l),i=n(46),c=r(i),f=n(27),s=r(f),d={light:"#f4f4f4",main:"#c6c8c9",dark:"#292b2c"},p=function(e){return(0,s.default)(e)?e:{main:e,light:(0,o.lighten)(e),dark:(0,o.darken)(e)}},m={primary:"#2297DE",secondary:"#FFC523",tertiary:"#4D5057",quartenary:"#EBEFF4",danger:"#FF423D",warning:"#FCA321",success:"#76C950",info:"#1496E1",text:"#3c3e42",gray:d},y=function(e){return(0,u.default)(e,function(e,t,n){return e[n]=p(t),e},{})},h=t.breakpoints=[32,48,64,80],b=t.space=[0,4,8,16,36,45,128],g=t.fontSizes=[12,14,16,20,24,32,48,64,72,96],v=t.weights=[400,700],_=t.radius=4,E=t.font="Roboto, Arial, sans-serif",x=t.monospace="'Ubuntu Mono', 'Courier New', monospace",w=function(e){return{colors:y(a({},m,(0,c.default)(e,"colors"))),breakpoints:h,space:b,fontSizes:g,weights:v,font:E,monospace:x,radius:_}},O=function(e){return"\n* { box-sizing: border-box; }\nbody { margin: 0; }\np {\n  line-height: 1.5;\n}\nul {\n  list-style: none;\n  margin-bottom: "+e.space[4]+"px;\n  li {\n    margin-bottom: "+e.space[2]+"px;\n  }\n}\nimg { max-width: 100%; }\na {\n  color: "+e.colors.primary.main+";\n  text-decoration: none;\n  cursor: pointer;\n}\nblockquote {\n  font-style: italic;\n  padding: 20px;\n  > p {\n    box-shadow: inset 0 -5px 0px 0px "+e.colors.primary.main+";\n  }\n}\ncode {\n  background: "+e.colors.gray.light+";\n  padding: 5px;\n}\npre > code {\n  background: none;\n}\n"};t.default=w,t.globalStyles=O},590:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=r(o),u=n(591),i=r(u),c=n(2),f=n(43),s=r(f),d=n(16),p=n(62),m=r(p),y=n(259),h=r(y),b=n(260),g=r(b),v=(0,c.withTheme)(function(e){var t=e.repository,n=a(e,["repository"]),r=l.default.createElement(d.Box,null,l.default.createElement(s.default,{to:"/"},m.default[""+t.name]?l.default.createElement(d.Image,{style:{height:"40px"},src:m.default[""+t.name]}):l.default.createElement(d.Text,{color:"white"},t.name)));return l.default.createElement("div",null,l.default.createElement(d.Box,{bg:"gray.dark",color:"white"},l.default.createElement(d.Container,{align:"left"},l.default.createElement(d.Box,{p:2},l.default.createElement(d.Flex,{align:"center"},l.default.createElement(d.Text.span,null,"An open source project by"),l.default.createElement(s.default,{target:!0,to:"https://resin.io"},l.default.createElement(d.Image,{ml:2,style:{height:"25px"},src:g.default})))))),l.default.createElement(d.Navbar,{align:"center",brand:r,color:"white",bg:n.theme.colors.gray.dark},!(0,h.default)(n.changelog)&&l.default.createElement(s.default,{color:"white",to:"/changelog/"},"Changelog"),!(0,h.default)(n.docs)&&l.default.createElement(s.default,{color:"white",to:"/docs/"+n.docs[0].slug},"Docs"),l.default.createElement(s.default,{color:"white",to:t.html_url},l.default.createElement(i.default,null))))});t.default=v},592:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=r(o),u=n(16),i=n(43),c=r(i),f=n(593),s=(r(f),n(2)),d=(r(s),n(46)),p=r(d),m=n(260),y=r(m),h=n(62),b=r(h),g=function(e){var t=e.repository,n=a(e,["repository"]);return l.default.createElement(u.Box,{py:50,bg:n.theme.colors.gray.dark,color:"white"},l.default.createElement(u.Flex,{my:2,align:"center",justify:"center"},l.default.createElement(c.default,{target:!0,to:"/"},l.default.createElement(u.Image,{mr:3,style:{height:"35px"},src:b.default[t.name]})),l.default.createElement(u.Text.span,null,"An open source project by"),l.default.createElement(c.default,{target:!0,to:"https://resin.io"},l.default.createElement(u.Image,{ml:3,style:{height:"30px"},src:y.default}))),l.default.createElement(u.Box,null,l.default.createElement(u.Text,{color:"gray.main",align:"center"},(0,p.default)(t,"license.name"))))};t.default=(0,s.withTheme)(g)},594:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),l=n(595),u=n(62),i=r(u),c=n(603),f=r(c),s=n(262),d=r(s),p=n(2),m=function(e,t){return"/"===t?e:(0,f.default)((0,d.default)(t.replace(/\//g," ")))+" - "+e};t.default=(0,p.withTheme)(function(e){return o.default.createElement(l.Helmet,{defaultTitle:e.repository.name+" - "+(e.config.settings.lead||e.repository.description),titleTemplate:"%s | "+m(e.repository.name,e.location.pathname),link:[{rel:"icon",href:i.default.favicon,type:"image/x-icon"},{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"}],meta:[{name:"theme-color",content:e.theme.colors.primary},{name:"og:type",content:"website"},{name:"og:site_name",content:e.repository.name},{name:"og:description",content:e.repository.description},{name:"og:image",content:i.default[e.repository.name]}]})})},607:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=(r(f),n(608)),d=r(s),p=n(259),m=r(p),y=n(636),h=r(y),b=n(256),g=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tracker:{}},n}return l(t,e),c(t,[{key:"componentDidMount",value:function(){if((0,m.default)(this.state.tracker)){var e=(0,d.default)(i({prefix:(0,h.default)(this.props.prefix)+" Website"},this.props.analytics));e.start(),e.page.visit({url:window.location.pathname}),this.props.history.listen(function(t){e.page.visit({url:t})}),this.setState({tracker:e})}}},{key:"getChildContext",value:function(){return{tracker:this.state.tracker}}},{key:"render",value:function(){return f.Children.only(this.props.children)}}]),t}(f.Component);g.childContextTypes={tracker:f.PropTypes.object.isRequired},t.default=(0,b.withRouter)(g)},62:function(e,t,n){"use strict";var r=n(208),a={};!function(e){e.keys().forEach(function(t){return a[r(t).name]=e(t)})}(n(550)),e.exports=a},637:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e){return JSON.stringify(e).replace(/<\/script/g,"<\\/script").replace(/<!--/g,"<\\!--")}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=r(l),i=n(62),c=r(i);t.default=function(e){var t=e.children,n=e.styleTags,r=e.scriptTags,l=e.pages,i=a(e,["children","styleTags","scriptTags","pages"]),f={__html:o(i.locals)},s={__html:o(l)},d="";return u.default.createElement("html",null,u.default.createElement("head",null,u.default.createElement("title",null,i.locals.repository.name+" - "+(i.locals.config.settings.lead||i.locals.repository.description)),u.default.createElement("meta",{name:"og:type",content:"website"}),u.default.createElement("meta",{name:"og:site_name",content:i.locals.repository.name}),u.default.createElement("meta",{name:"og:image",content:c.default[i.locals.repository.name]}),u.default.createElement("meta",{name:"og:description",content:i.locals.config.settings.lead||i.locals.repository.description}),u.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),u.default.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto|Ubuntu+Mono"}),n),u.default.createElement("body",null,u.default.createElement("div",{id:"mount",dangerouslySetInnerHTML:{__html:t}}),u.default.createElement("script",{id:"__LANDR__LOCALS",type:"application/json",dangerouslySetInnerHTML:f}),u.default.createElement("script",{id:"__LANDR__ROUTES",type:"application/json",dangerouslySetInnerHTML:s}),r.map(function(e){return u.default.createElement("script",{key:e,src:d+e})})))}}},[301]);