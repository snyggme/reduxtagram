(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(58)},43:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"increment",function(){return J}),n.d(a,"addComment",function(){return K}),n.d(a,"removeComment",function(){return Q}),n.d(a,"getPosts",function(){return V});var r=n(0),c=n.n(r),o=n(21),s=n.n(o),i=n(61),m=n(16),u=n(5),l=n(31),p=n(6),d=n(7),E={arr:[],isLoading:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_LIKES":var n=t.index;return Object(d.a)({},e,{arr:Object(p.a)(e.arr.slice(0,n)).concat([Object(d.a)({},e.arr[n],{likes:+e.arr[n].likes+1})],Object(p.a)(e.arr.slice(n+1)))});case"GET_POSTS_REQUEST":return Object(d.a)({},e,{isLoading:!0});case"GET_POSTS_SUCCESS":return{arr:Object(p.a)(t.posts),isLoading:!1};default:return e}},f=n(10);var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"GET_COMMENTS_SUCCESS"===t.type?Object(d.a)({},t.comments):"undefined"!==typeof t.postId?Object(d.a)({},e,Object(f.a)({},t.postId,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENT":return Object(p.a)(e).concat([{user:t.author,text:t.comment}]);case"REMOVE_COMMENT":return Object(p.a)(e.slice(0,t.i)).concat(Object(p.a)(e.slice(t.i+1)));default:return e}}(e[t.postId],t))):e},v=Object(u.c)({posts:h,comments:b}),O=Object(u.d)(v,Object(u.a)(l.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(43);var g=n(59),j=n(63),S=n(60),C=n(32),N=function(e){var t=e.post,n=e.i,a=e.comments;return c.a.createElement("figure",{className:"grid-figure"},c.a.createElement("div",{className:"grid-photo-wrap"},c.a.createElement(g.a,{to:"/view/".concat(t.code)},c.a.createElement("img",{src:t.display_src,alt:t.caption,className:"grid-photo"})),c.a.createElement(C.CSSTransitionGroup,{transitionName:"like",transitionEnterTimeout:400,transitionLeaveTimeout:400},c.a.createElement("span",{key:t.likes,className:"likes-heart"},t.likes))),c.a.createElement("figcaption",null,c.a.createElement("p",null,t.caption),c.a.createElement("div",{className:"control-buttons"},c.a.createElement("button",{onClick:e.increment.bind(null,n),className:"like"},c.a.createElement("i",{className:"fa fa-heart","aria-hidden":"true"})," ",t.likes),c.a.createElement(g.a,{className:"button",to:"/view/".concat(t.code)},c.a.createElement("span",{className:"comment-count"},c.a.createElement("span",null),c.a.createElement("i",{className:"fa fa-comments","aria-hidden":"true"}),a[t.code]?a[t.code].length:0)))))},k=n(11),y=n(12),T=n(18),w=n(13),_=n(19),M=n(8),x=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(T.a)(this,Object(w.a)(t).call(this,e))).authorRef=c.a.createRef(),n.commentRef=c.a.createRef(),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(Object(M.a)(n))),n.renderComments=n.renderComments.bind(Object(M.a)(Object(M.a)(n))),n}return Object(_.a)(t,e),Object(y.a)(t,[{key:"renderComments",value:function(e,t){return c.a.createElement("div",{className:"comment",key:t},c.a.createElement("p",null,c.a.createElement("strong",null,e.user),e.text,c.a.createElement("button",{className:"remove-comment",onClick:this.props.removeComment.bind(null,this.props.id.postId,t)},"\xd7")))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.id.postId,n=this.authorRef.current.value,a=this.commentRef.current.value;this.props.addComment(t,n,a),this.authorRef.current.form.reset()}},{key:"render",value:function(){return c.a.createElement("div",{className:"comments"},this.props.postComments.map(this.renderComments),c.a.createElement("form",{ref:"commentForm",className:"comment-form",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"text",ref:this.authorRef,placeholder:"author"}),c.a.createElement("input",{type:"text",ref:this.commentRef,placeholder:"comment"}),c.a.createElement("input",{type:"submit",hidden:!0})))}}]),t}(r.Component),I=function(e){var t=e.posts.findIndex(function(t){return t.code===e.id.postId}),n=e.posts[t],a=e.comments[e.id.postId]||[];return c.a.createElement("div",{className:"single-photo"},c.a.createElement(N,Object.assign({i:t,post:n},e)),c.a.createElement(x,Object.assign({postComments:a},e)))},R=function(e){function t(){return Object(k.a)(this,t),Object(T.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"photo-grid"},this.props.isLoading?c.a.createElement("div",{className:"loading"}):this.props.posts.map(function(t,n){return c.a.createElement(N,Object.assign({},e.props,{key:n,i:n,post:t}))}))}}]),t}(r.Component),L=function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,c.a.createElement(g.a,{to:"/"},"Reduxtagram")),c.a.createElement(j.a,null,c.a.createElement(S.a,{exact:!0,path:"/",render:function(t){return c.a.createElement(R,Object.assign({},t,e))}}),c.a.createElement(S.a,{path:"/view/:postId",render:function(t){var n=t.match;return c.a.createElement(I,Object.assign({id:n.params},e))}})))},G=n(62),D=n(23),P=n.n(D),U=n(34),A=function(){var e=Object(U.a)(P.a.mark(function e(t){var n,a;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://5bc443613e0ce20013533336.mockapi.io","/").concat(t));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:throw new Error(n.status);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("httpGet error ",e.t0);case 17:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t){return e.apply(this,arguments)}}(),B=!1;function J(e,t){return{type:"INCREMENT_LIKES",index:e}}function K(e,t,n){return{type:"ADD_COMMENT",postId:e,author:t,comment:n}}function Q(e,t){return{type:"REMOVE_COMMENT",i:t,postId:e}}function V(){return function(e){B||(B=!0,e({type:"GET_POSTS_REQUEST"}),A("posts").then(function(t){e({type:"GET_POSTS_SUCCESS",posts:t.posts}),e({type:"GET_COMMENTS_SUCCESS",comments:t.comments})}).catch(function(e){console.log(e)}))}}var W=Object(G.a)(Object(m.b)(function(e){return{posts:e.posts.arr,comments:e.comments,isLoading:e.posts.isLoading}},function(e){return Object(u.b)(a,e)})(L));s.a.render(c.a.createElement(function(e){var t=e.store;return c.a.createElement(m.a,{store:t},c.a.createElement(i.a,{basename:"/reduxtagram"},c.a.createElement(W,null)))},{store:O}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.fb9ee288.chunk.js.map