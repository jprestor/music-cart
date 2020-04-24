(this["webpackJsonpa-first-project"]=this["webpackJsonpa-first-project"]||[]).push([[0],{29:function(e,t,a){e.exports=a(50)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),o=a(3),i=a(55),u=a(56),s=a(53),m=a(52),f=(a(39),function(e){var t=e.count,a="cart-items-counter";return t&&(a+=" active"),r.a.createElement("span",{className:a},t||"")}),E=Object(o.b)((function(e){return{count:e.shoppingCart.totalCount}}))((function(e){var t=e.count;return r.a.createElement("header",{className:"page-header  navbar-light  bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.a,{className:"navbar-brand  nav-link",to:"/"},"MusicCart")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.a,{className:"nav-link",to:"/top-albums/"},"Top albums")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.a,{className:"nav-link",to:"/top-singles/"},"Top singles")),r.a.createElement("li",{className:"nav-item  nav-item--cart"},r.a.createElement(m.a,{className:"nav-link",to:"/cart/"},"Cart ",r.a.createElement(f,{count:t}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.a,{className:"nav-link",to:"/login/"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.a,{className:"nav-link",to:"/account/"},"Account")))))})),d=(a(40),function(){return r.a.createElement("footer",{className:"page-footer  container"},r.a.createElement("section",{className:"copyrights"}))}),p=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"home-page-title"},"Welcome to ",r.a.createElement("i",null,"MusicCart"),"!",r.a.createElement("br",null)," ",r.a.createElement("span",null,"Top place to buy music")))},g=a(5),h=a(8),b=function e(){var t=this;Object(h.a)(this,e),this.email="admin@example.com",this.password="admin",this.errorMessage="Invalid email and password",this.callApi=function(e,a){return new Promise((function(n,r){setTimeout((function(){e===t.email&&a===t.password?n():r(new Error(t.errorMessage))}),1e3)}))}},v=function(e){return{type:"ITEM_ADDED_TO_CART",payload:e}},y=function(e){return function(){return function(t){t("FETCH_DATA_REQUEST"),e().then((function(e){t({type:"FETCH_ITEMS_SUCCESS",payload:e})})).catch((function(e){t(function(e){return{type:"FETCH_DATA_FAILURE",payload:e}}(e))}))}}},N=r.a.createContext(),T=N.Provider,_=N.Consumer,C=function(){return function(e){return function(t){return r.a.createElement(_,null,(function(a){return r.a.createElement(e,Object.assign({},t,{lastfmService:a}))}))}}},O=(a(41),function(e){var t=e.left,a=e.right;return r.a.createElement("div",{className:"row mb2"},r.a.createElement("div",{className:"col-md-6"},t),r.a.createElement("div",{className:"col-md-6"},a))}),S=function(e){var t=e.item,a=e.onAddedToCart,c=e.onShowInfo,l=t.artist,o=t.title,i=t.imageSmall;return r.a.createElement(n.Fragment,null,r.a.createElement("img",{className:"item-image",src:i}),r.a.createElement("div",{className:"item-details"},r.a.createElement("p",null,r.a.createElement("b",{className:"item-title"},o),r.a.createElement("span",null," - "),r.a.createElement("span",{className:"item-artist"},l)),r.a.createElement("div",{className:"item-buttons"},r.a.createElement("button",{className:"btn btn-info",onClick:c},"Show info"),r.a.createElement("button",{className:"btn btn-danger",onClick:a},"Add to cart"))))},j=(a(42),a(43),function(){return r.a.createElement("div",null,"loading...")}),w=(a(44),function(e){e.error;return r.a.createElement("div",{className:"error-box"},r.a.createElement("h4",null,"Something wrong!"),r.a.createElement("p",null,"However, we caught the case."))}),I=function(e){var t=e.items,a=e.onShowInfo,n=e.onAddedToCart;return r.a.createElement("ul",{className:"item-list"},t.map((function(e){var t=e.id;return r.a.createElement("li",{className:"item-list-item",key:t},r.a.createElement(S,{item:e,onShowInfo:function(){return a(t)},onAddedToCart:function(){return n(t)}}))})))},A=function(e){var t=e.items,a=e.loading,c=e.error,l=e.onAddedToCart,o=e.onShowInfo,i=e.fetchData;return Object(n.useEffect)((function(){i()}),[]),a?r.a.createElement(j,null):c?r.a.createElement(w,null):r.a.createElement(I,{onShowInfo:o,onAddedToCart:l,items:t})},D=a(28),k=(a(45),Object(o.b)((function(e){return{items:e.itemsList.items}}))((function(e){var t=e.items,a=e.id,c=Object(n.useState)(null),l=Object(D.a)(c,2),o=l[0],i=l[1];if(Object(n.useEffect)((function(){var e=t.find((function(e){return e.id===a}));i(e)}),[a,t]),!o)return r.a.createElement("div",null);var u=o.category,s=o.artist,m=o.title,f=o.playcount,E=o.text,d=o.imageBig,p=o.price;return r.a.createElement("div",{className:"item-details"},r.a.createElement("img",{src:d,alt:""}),r.a.createElement("p",null,r.a.createElement("b",null,"Artist: "),s),r.a.createElement("p",null,r.a.createElement("b",null,u,": "),m),r.a.createElement("p",null,r.a.createElement("b",null,"Price: "),"$",p),r.a.createElement("p",null,r.a.createElement("b",null,"Playcount: "),f),r.a.createElement("p",null,r.a.createElement("b",null,"Info: "),E))}))),x=a(57),R=Object(g.c)(C(),Object(o.b)((function(e){var t=e.itemsList,a=t.items,n=t.loading,r=t.error;return{items:a=a.filter((function(e){return"single"===e.category})),loading:n,error:r}}),(function(e,t){var a=t.lastfmService;return Object(g.b)({fetchData:y(a.getSingles),onAddedToCart:v},e)})))(A),L=Object(x.a)((function(e){var t=e.history,a=e.match.params.id;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Top Singles Catalog"),r.a.createElement(O,{left:r.a.createElement(R,{onShowInfo:function(e){return t.push(e)}}),right:r.a.createElement(k,{id:a})}))})),M=Object(g.c)(C(),Object(o.b)((function(e){var t=e.itemsList,a=t.items,n=t.loading,r=t.error;return{items:a=a.filter((function(e){return"album"===e.category})),loading:n,error:r}}),(function(e,t){var a=t.lastfmService;return Object(g.b)({fetchData:y(a.getAlbums),onAddedToCart:v},e)})))(A),F=Object(x.a)((function(e){var t=e.history,a=e.match.params.id;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Top Albums Catalog"),r.a.createElement(O,{left:r.a.createElement(M,{onShowInfo:function(e){return t.push(e)}}),right:r.a.createElement(k,{id:a})}))})),U=(a(47),{onDecrease:function(e){return{type:"ITEM_DECREASED_IN_CART",payload:e}},onIncrease:v,onDelete:function(e){return{type:"ITEM_DELETED_FROM_CART",payload:e}}}),P=Object(o.b)((function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}}),U)((function(e){var t=e.items,a=e.total,n=e.onIncrease,c=e.onDecrease,l=e.onDelete;return r.a.createElement("div",{className:"shopping-cart-table"},r.a.createElement("h2",null,"Your Order"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Count"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t.map((function(e,t){var a=e.id,o=e.artist,i=e.title,u=e.category,s=e.count,m=e.total;return r.a.createElement("tr",{id:a,key:a},r.a.createElement("td",null,t+1),r.a.createElement("td",null,"".concat(i," - ").concat(o," {{").concat(u,"}}")),r.a.createElement("td",null,s),r.a.createElement("td",null,"$",m),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return l(a)},className:"btn btn-outline-danger btn-sm float-right"},"Delete All",r.a.createElement("i",{className:"fa fa-minus-circle"})),r.a.createElement("button",{onClick:function(){return n(a)},className:"btn btn-outline-success btn-sm float-right"},"Add",r.a.createElement("i",{className:"fa fa-plus-circle"})),r.a.createElement("button",{onClick:function(){return c(a)},className:"btn btn-outline-warning btn-sm float-right"},"Remove",r.a.createElement("i",{className:"fa fa-trash-o"}))))})))),r.a.createElement("div",{className:"total"},"Total: $",a))})),G=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:""},"Cart"),r.a.createElement(P,null))},H=a(15),B=a(17),$=a(16),J=a(18),K=a(54),Q=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(B.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onSubmit=function(e){e.preventDefault();var t=a.props.login,n=a.state;t(n.email,n.password),a.setState({email:"",password:""})},a}return Object(J.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,c=this.props,l=c.loginSuccess,o=c.pending,i=c.loginError;return l?r.a.createElement(K.a,{to:"/account/"}):r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{name:"loginForm",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group-collection"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",name:"email",onChange:function(t){return e.setState({email:t.target.value})},value:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",onChange:function(t){return e.setState({password:t.target.value})},value:n}))),r.a.createElement("input",{type:"submit",value:"Login"}),o&&r.a.createElement(j,null),i&&r.a.createElement("div",null,i.message)))}}]),t}(n.Component),W=Object(o.b)((function(e){var t=e.login;return{pending:t.pending,loginSuccess:t.success,loginError:t.error}}),(function(e){var t=(new b).callApi;return Object(g.b)({login:function(e,a){return function(e,t,a){return function(n){n("SET_LOGIN_PENDING"),e(t,a).then((function(){n("SET_LOGIN_SUCCESS")})).catch((function(e){n(function(e){return{type:"SET_LOGIN_ERROR",payload:e}}(e))}))}}(t,e,a)}},e)}))(Q),Y=Object(o.b)((function(e){return{loginSuccess:e.login.success}}))((function(e){return e.loginSuccess?r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"mb-5"},"Account page"),r.a.createElement("h4",null,"This page is full of secrets!!!")):r.a.createElement(K.a,{to:"/login"})})),q=(a(48),function(){return r.a.createElement(n.Fragment,null,r.a.createElement(E,null),r.a.createElement("main",{className:"page-main  container"},r.a.createElement(u.a,null,r.a.createElement(s.a,{path:"/",component:p,exact:!0}),r.a.createElement(s.a,{path:"/top-albums/:id?",component:F}),r.a.createElement(s.a,{path:"/top-singles/:id?",component:L}),r.a.createElement(s.a,{path:"/cart/",component:G}),r.a.createElement(s.a,{path:"/login/",component:W}),r.a.createElement(s.a,{path:"/account/",component:Y}),r.a.createElement(s.a,{render:function(){return r.a.createElement("h2",null,"Page not found")}}))),r.a.createElement(d,null))}),z=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(B.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(J.a)(t,e),Object(H.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(w,null):this.props.children}}]),t}(n.Component),V=a(10),X=a.n(V),Z=a(19),ee=a(27),te=function(e,t){if(void 0===e)return{success:!1,pending:!1,error:null};switch(t.type){case"SET_LOGIN_PENDING":return{success:!1,pending:!0,error:null};case"SET_LOGIN_SUCCESS":return{success:!0,pending:!1,error:null};case"SET_LOGIN_ERROR":return{success:!1,pending:!1,error:t.payload};default:return e.login}},ae=a(7),ne=function(e,t){return t?(e.forEach((function(e){t=t.filter((function(t){return t.id!==e.id}))})),[].concat(Object(ae.a)(e),Object(ae.a)(t))):e},re=function(e,t){if(void 0===e)return{items:[],loading:!0,error:null};var a=e.itemsList?e.itemsList.items:[];switch(t.type){case"FETCH_DATA_REQUEST":return{items:ne(a),loading:!0,error:null};case"FETCH_ITEMS_SUCCESS":return{items:ne(a,t.payload),loading:!1,error:null};case"FETCH_DATA_FAILURE":return{items:[],loading:!1,error:t.payload};default:return e.itemsList}},ce=function(e,t,a){var n=e.itemsList.items,r=e.shoppingCart.cartItems,c=n.find((function(e){return e.id===t})),l=r.findIndex((function(e){return e.id===t})),o=function(e,t,a){return 0===t.count?[].concat(Object(ae.a)(e.slice(0,a)),Object(ae.a)(e.slice(a+1))):-1===a?[].concat(Object(ae.a)(e),[t]):[].concat(Object(ae.a)(e.slice(0,a)),[t],Object(ae.a)(e.slice(a+1)))}(r,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=t.id,r=void 0===n?e.id:n,c=t.category,l=void 0===c?e.category:c,o=t.title,i=void 0===o?e.title:o,u=t.artist,s=void 0===u?e.artist:u,m=t.count,f=void 0===m?0:m,E=t.total,d=void 0===E?0:E;return{id:r,category:l,title:i,artist:s,count:f+a,total:d+a*e.price}}(c,r[l],a),l),i=0,u=0;return o.forEach((function(e){i+=e.count,u+=e.total})),{cartItems:o,totalCount:i,orderTotal:u}},le=function(e,t){if(void 0===e)return{cartItems:[],totalCount:0,orderTotal:0};switch(t.type){case"ITEM_ADDED_TO_CART":return ce(e,t.payload);case"ITEM_DECREASED_IN_CART":return ce(e,t.payload,-1);case"ITEM_DELETED_FROM_CART":var a=e.shoppingCart.cartItems.find((function(e){return e.id===t.payload}));return ce(e,t.payload,-a.count);default:return e.shoppingCart}},oe=function(e,t){return{login:te(e,t),itemsList:re(e,t),shoppingCart:le(e,t)}},ie=Object(g.d)(oe,Object(g.a)(ee.a,(function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}}),(function(){return function(e){return function(t){return console.log(t.type),e(t)}}}))),ue=new function e(){var t=this;Object(h.a)(this,e),this._apiKey="58a12fdc7d2606d49f7abdabae85de78",this._getUrl=function(e,a){return"http://ws.audioscrobbler.com/2.0/?method=".concat(e,"&api_key=").concat(t._apiKey,"&format=json&limit=10")},this.getResource=function(){var e=Object(Z.a)(X.a.mark((function e(t){var a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", received ").concat(a.status));case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getSingles=Object(Z.a)(X.a.mark((function e(){var a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"chart.getTopTracks",e.next=3,t.getResource(t._getUrl("chart.getTopTracks"));case 3:return a=e.sent,e.abrupt("return",a.tracks.track.map(t._transformSingle));case 5:case"end":return e.stop()}}),e)}))),this.getAlbums=Object(Z.a)(X.a.mark((function e(){var a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user.gettopalbums&user=rj",e.next=3,t.getResource(t._getUrl("user.gettopalbums&user=rj"));case 3:return a=e.sent,e.abrupt("return",a.topalbums.album.map(t._transformAlbum));case 5:case"end":return e.stop()}}),e)}))),this._extractImage=function(e,t){var a,n=e.image[t?3:1];for(var r in n)n[r].length>10&&(a=n[r]);return a},this._dummyText="Light unto very they're were of. Hath saying god seasons be. Day creeping earth let. Them created face for from. Behold seed had don't is days that winged created blessed of life image one i.",this._transformSingle=function(e){return{id:e.playcount,category:"single",artist:e.artist.name,title:e.name,playcount:e.playcount,text:t._dummyText,imageSmall:t._extractImage(e),imageBig:t._extractImage(e,!0),price:Math.floor(50*Math.random())+1}},this._transformAlbum=function(e){return{id:e.playcount,category:"album",artist:e.artist.name,title:e.name,playcount:e.playcount,text:t._dummyText,imageSmall:t._extractImage(e),imageBig:t._extractImage(e,!0),price:Math.floor(50*Math.random())+51}}};l.a.render(r.a.createElement(o.a,{store:ie},r.a.createElement(z,null,r.a.createElement(T,{value:ue},r.a.createElement(i.a,null,r.a.createElement(q,null))))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.9e43fcb0.chunk.js.map