"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[974],{974:function(n,t,e){e.r(t),e.d(t,{default:function(){return Q}});var r,o,a,i,p,s,c,x,l,u=e(861),d=e(439),f=e(687),g=e.n(f),h=e(791),b=e(243),w="https://643968a64660f26eb1b24094.mockapi.io/api/v1/users/",m=function(){var n=(0,u.Z)(g().mark((function n(t){var e;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,b.Z)("".concat(w,"?completed=false&page=1&limit=").concat(t)),n.abrupt("return",e);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Z=function(){var n=(0,u.Z)(g().mark((function n(t,e){var r,o;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.Z.put("".concat(w).concat(t),e);case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),v=e(692),k=e(168),j=e(934),S=j.Z.div(r||(r=(0,k.Z)(["\n  position: relative;\n  width: 380px;\n  height: 460px;\n  margin-left: auto;\n  margin-right: auto;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"]))),y=j.Z.div(o||(o=(0,k.Z)(["\n  position: relative;\n  width: 100%;\n  height: 222px;\n  background-image: url('/img/picture.png');\n  background-position: center center;\n  background-size: 308px 168px;\n  background-repeat: no-repeat;\n  &::after {\n    content: '';\n    position: absolute;\n    display: block;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 8px;\n    background-color: #ebd8ff;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n"]))),z=j.Z.img(a||(a=(0,k.Z)(["\n  position: absolute;\n  left: 20px;\n  top: 20px;\n"]))),F=j.Z.div(i||(i=(0,k.Z)(["\n  position: absolute;\n  bottom: -32px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  z-index: 9;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),C=j.Z.img(p||(p=(0,k.Z)(["\n  position: relative;\n  width: 62px;\n  height: 62px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #4b2a99;\n"]))),D=j.Z.div(s||(s=(0,k.Z)(["\n  width: 100%;\n  height: 238px;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  text-align: center;\n  color: #ebd8ff;\n"]))),N=j.Z.p(c||(c=(0,k.Z)(["\n  margin-top: 62px;\n  margin-bottom: 16px;\n"]))),E=j.Z.p(x||(x=(0,k.Z)(["\n  margin-bottom: 26px;\n"]))),I=j.Z.button(l||(l=(0,k.Z)(["\n  cursor: pointer;\n  width: 196px;\n  height: 50px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  background-color: #ebd8ff;\n  &.following {\n    background-color: #5cd3a8;\n  }\n"]))),J=e(184);var O,_,B,L,U,X,Y=function(n){var t=n.onData,e=(0,h.useState)(!1),r=(0,d.Z)(e,2),o=r[0],a=r[1],i=(0,h.useState)(t),p=(0,d.Z)(i,2),s=p[0],c=p[1],x=s.id,l=s.avatar,f=s.tweets,b=s.followers;(0,h.useEffect)((function(){var n=JSON.parse(localStorage.getItem("".concat(x)));n&&a(n)}),[x]);var w=function(){var n=(0,u.Z)(g().mark((function n(){var t,e;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(!o),localStorage.setItem("".concat(x),JSON.stringify(!o)),t=o?{followers:b-1}:{followers:b+1},n.next=5,Z(x,t);case 5:e=n.sent,c(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(S,{children:[(0,J.jsxs)(y,{children:[(0,J.jsx)(z,{src:"./img/logo.png",alt:"logo"}),(0,J.jsx)(F,{children:(0,J.jsx)(C,{src:l,alt:"user"})})]}),(0,J.jsxs)(D,{children:[(0,J.jsxs)(N,{children:[f," tweets"]}),(0,J.jsxs)(E,{children:[String(b).length>3?String(b).slice(0,-3)+","+String(b).slice(-3):b," ","Followers"]}),(0,J.jsx)(I,{onClick:w,className:o?"following":"",children:o?"Following":"Follow"})]})]})})},q=j.Z.ul(O||(O=(0,k.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 25px;\n  width: 1280px;\n  margin: 0 auto;\n"]))),A=j.Z.li(_||(_=(0,k.Z)(["\n  padding: 15px;\n"]))),G=j.Z.p(B||(B=(0,k.Z)(["\n  padding: 15px;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  text-align: center;\n  color: #4b2a99;\n"]))),H=function(n){var t=n.onData;return(0,J.jsx)(q,{children:t.map((function(n){return(0,J.jsxs)(A,{children:[(0,J.jsx)(Y,{onData:n}),(0,J.jsx)(G,{children:n.user})]},n.id)}))})},K=e(87),M=(0,j.Z)(K.rU)(L||(L=(0,k.Z)(["\n  display: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 10px;\n  cursor: pointer;\n  text-align: center;\n  /* padding-top: 15px; */\n  margin-top: 25px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 150px;\n  height: 54px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 22px;\n  text-transform: uppercase;\n  background-color: #373737;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  color: #ebd8ff;\n"]))),P=j.Z.button(U||(U=(0,k.Z)(["\n  display: block;\n  cursor: pointer;\n  text-align: center;\n  margin: 25px auto;\n  width: 200px;\n  height: 54px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 22px;\n  text-transform: uppercase;\n  background-color: #373737;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  color: #ebd8ff;\n"]))),Q=(j.Z.ul(X||(X=(0,k.Z)(["\n  width: 500px;\n  margin: 25px auto 0;\n"]))),function(){var n=(0,h.useState)([]),t=(0,d.Z)(n,2),e=t[0],r=t[1],o=(0,h.useState)(9),a=(0,d.Z)(o,2),i=a[0],p=a[1];(0,h.useEffect)((function(){var n=function(){var n=(0,u.Z)(g().mark((function n(t){var e,o;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m(t);case 3:e=n.sent,o=e.data,r(o),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}();n(i)}),[i]);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(M,{to:"/",children:[(0,J.jsx)(v.YiX,{className:"back-arrow"}),"Back"]}),e.length>0&&(0,J.jsx)(H,{onData:e}),e.length>=i&&(0,J.jsx)(P,{onClick:function(){p(i+9)},children:"Load more"})]})})}}]);
//# sourceMappingURL=974.bb65dc8d.chunk.js.map