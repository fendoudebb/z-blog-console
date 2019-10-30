webpackJsonp([6],{"7PXo":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("4YfN"),n=s.n(i),a={name:"message-detail",props:{row:Object}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("span",{staticClass:"expand-key"},[e._v("ID: ")]),e._v(" "),s("span",{staticClass:"expand-value"},[e._v(e._s(e.row.id))]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("span",{staticClass:"expand-key"},[e._v("User-Agent: ")]),e._v(" "),s("span",{staticClass:"expand-value"},[e._v(e._s(e.row.userAgent))]),e._v(" "),s("br"),e._v(" "),s("br")])},staticRenderFns:[]};var r=s("C7Lr")(a,l,!1,function(e){s("I1JB")},"data-v-2f9b2168",null).exports,o=s("SJI6"),c={name:"message-board",components:{expandRow:r},data:function(){var e=this;return{roles:localStorage.getItem("roles"),messageReplyModal:!1,messageReplyList:[],messageReplyColumns:[{title:"回复",key:"replyContent",align:"center",ellipsis:!0,minWidth:300,render:function(e,t){return e("div",[e("span",{style:{display:"inline-block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},domProps:{title:t.row.replyContent}},t.row.replyContent)])}},{title:"回复时间",key:"replyTime",align:"center",ellipsis:!0,minWidth:150},{title:"浏览器",key:"browser",align:"center",ellipsis:!0,minWidth:150},{title:"操作系统",key:"os",align:"center",ellipsis:!0,minWidth:150},{title:"回复IP",key:"ip",align:"center",ellipsis:!0,minWidth:150}],messageListTableLoading:!1,messageList:[],messageListColumns:[{type:"expand",width:50,render:function(e,t){return e(r,{props:{row:t.row}})}},{title:"楼层",key:"floor",align:"center",ellipsis:!0,minWidth:80},{title:"昵称",key:"nickname",align:"center",ellipsis:!0,minWidth:150},{title:"留言",key:"content",align:"center",ellipsis:!0,minWidth:300,render:function(e,t){return e("div",[e("span",{style:{display:"inline-block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},domProps:{title:t.row.content}},t.row.content)])}},{title:"留言时间",key:"commentTime",align:"center",ellipsis:!0,minWidth:150},{title:"浏览器",key:"browser",align:"center",ellipsis:!0,minWidth:150},{title:"操作系统",key:"os",align:"center",ellipsis:!0,minWidth:150},{title:"留言IP",key:"ip",align:"center",ellipsis:!0,minWidth:150},{title:"状态",key:"status",align:"center",ellipsis:!0,minWidth:100,render:function(e,t){var s=t.row.status,i="",n="";return"ONLINE"===s?(i="上线",n="green"):"OFFLINE"===s&&(i="下线",n="red"),e("Tag",{props:{color:n}},i)}},{title:"操作",key:"action",align:"center",ellipsis:!0,minWidth:150,render:function(t,s){var i=[];if(e.roles.indexOf("ROLE_ADMIN")>-1){var n=t("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.watchReplyMessage(s)}}},"查看回复"),a=t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.replyMessage(s)}}},"回复"),l=t("Button",{props:{type:"error",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.deleteMessage(s)}}},"删除");null!=s.row.replies&&i.push(n),i.push(a),i.push(l)}return t("div",[i])}}]}},methods:n()({},Object(o.mapMutations)(["setMessageBoardListPage","setMessageId","setReplyMessageId","setReplyContent"]),Object(o.mapGetters)(["getMessageBoardListSize"]),Object(o.mapActions)(["handleMessageBoardList","handleDeleteMessage","handleReplyMessage"]),{watchReplyMessage:function(e){this.messageReplyModal=!0,this.messageReplyList=e.row.replies},replyMessage:function(e){var t=this;this.$Modal.confirm({render:function(e){return e("Input",{props:{value:t.reply,autofocus:!0,placeholder:"请输入回复..."},on:{input:function(e){t.reply=e}}})},onOk:function(){t.setReplyMessageId(e.row.id),t.setReplyContent(t.reply),t.handleReplyMessage().then(function(e){t.reply="",t.$Message.success("回复成功！"),t.getMessageBoardList()})}})},deleteMessage:function(e){var t=this;this.$Modal.confirm({title:"删除留言",content:"是否删除"+e.row.nickname+"用户的留言？",okText:"确认删除",closable:!0,onOk:function(){t.setMessageId(e.row.id),t.handleDeleteMessage().then(function(e){t.$Message.success("删除成功！"),t.getMessageBoardList()})}})},changePage:function(e){this.setMessageBoardListPage(e),this.getMessageBoardList()},getMessageBoardList:function(){var e=this;this.messageListTableLoading=!0,this.handleMessageBoardList().then(function(t){e.totalCount=t.data.totalCount,e.messageList=t.data.comments,e.messageListTableLoading=!1}).catch(function(t){e.messageListTableLoading=!1})}}),created:function(){this.getMessageBoardList()}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{margin:"20px",padding:"20px","background-color":"white"}},[s("Table",{attrs:{border:"",stripe:"",data:e.messageList,columns:e.messageListColumns,loading:e.messageListTableLoading}}),e._v(" "),s("div",{staticStyle:{margin:"20px",overflow:"hidden"}},[s("Page",{attrs:{"page-size":e.pageSize,total:e.totalCount,current:e.currentPage,"show-elevator":"","show-total":""},on:{"on-change":e.changePage}})],1),e._v(" "),s("Modal",{attrs:{width:1e3,title:"留言回复"},model:{value:e.messageReplyModal,callback:function(t){e.messageReplyModal=t},expression:"messageReplyModal"}},[s("Table",{attrs:{stripe:"",border:"",columns:e.messageReplyColumns,data:e.messageReplyList}})],1)],1)},staticRenderFns:[]};var d=s("C7Lr")(c,p,!1,function(e){s("cSB/")},"data-v-5a6cbf8c",null);t.default=d.exports},I1JB:function(e,t){},"cSB/":function(e,t){}});
//# sourceMappingURL=6.23504c42012decfa5c3c.js.map