require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{F70a:function(e,t,a){"use strict";var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"profile"},[a("i-cell-group",{attrs:{mpcomid:"5"}},[a("i-cell",{attrs:{title:"userID",value:e.myInfo.userID,"value-class":"cell-value",mpcomid:"0"}}),e._v(" "),a("i-cell",{attrs:{title:"头像",mpcomid:"2"}},[a("i-avatar",{attrs:{"i-class":"avatar",src:e.myInfo.avatar,mpcomid:"1"},slot:"footer"})],1),e._v(" "),a("i-cell",{attrs:{title:"昵称","value-class":"cell-value",value:e.myInfo.nick||"暂无","is-link":"",url:"../update-profile/main?type=user&key=nick",mpcomid:"3"}}),e._v(" "),a("i-cell",{attrs:{title:"个性签名","value-class":"cell-value","is-link":"",url:"../update-profile/main?type=user&key=signature",mpcomid:"4"}},[a("div",{staticClass:"signature",slot:"footer"},[e._v("\n        "+e._s(e.myInfo.selfSignature||"暂无")+"\n      ")])])],1)],1)},staticRenderFns:[]};t.a=i},"N/V5":function(e,t,a){"use strict";var i=a("rkie"),n=a("F70a");var l=function(e){a("i9ym")},r=a("ybqe")(i.a,n.a,l,null,null);t.a=r.exports},eWRe:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("5nAL"),n=a.n(i),l=a("N/V5");new n.a(l.a).$mount()},i9ym:function(e,t){},rkie:function(e,t,a){"use strict";var i=a("Dd8w"),n=a.n(i),l=a("NYxO");t.a={data:function(){return{nick:"",gender:!1,avatar:""}},computed:n()({},Object(l.c)({myInfo:function(e){return e.user.myInfo}})),methods:{onChange:function(e){this.avatar=e.target.value}}}}},["eWRe"]);