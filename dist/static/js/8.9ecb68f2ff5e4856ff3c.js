webpackJsonp([8],{"6k+7":function(t,e){},QloA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("4YfN"),i=n.n(o),s=n("SJI6"),m=n("/3iR"),l={name:"post-comments-list",data:function(){var t=this;return{roles:localStorage.getItem("roles"),watchCommentPostId:"",commentPageSize:this.getPostCommentListSize(),commentTotalCount:1,commentCurrentPage:1,commentListTableLoading:!1,commentModal:!1,commentReplyModal:!1,postCommentsListTableLoading:!1,pageSize:this.getCommentsListSize(),totalCount:1,currentPage:1,postCommentsList:[],postCommentsListColumns:[{type:"index",width:60,align:"center"},{title:"ID",key:"postId",align:"center",ellipsis:!0,minWidth:60},{title:"标题",key:"title",align:"center",ellipsis:!0,minWidth:300,render:function(t,e){return t("div",[t("span",{style:{display:"inline-block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},domProps:{title:e.row.title}},e.row.title)])}},{title:"评论数",key:"commentCount",align:"center",ellipsis:!0,minWidth:100},{title:"状态",key:"postStatus",align:"center",ellipsis:!0,minWidth:90,render:function(t,e){var n=e.row.postStatus,o="",i="";return"AUDIT"===n?(o="待审核",i="orange"):"ONLINE"===n?(o="上线",i="green"):"OFFLINE"===n?(o="下线",i="red"):"PRIVATE"===n?(o="私人",i="lightskyblue"):"DRAFT"===n&&(o="草稿",i="lightskyblue"),t("Tag",{props:{color:i}},o)}},{title:"操作",key:"action",align:"center",ellipsis:!0,minWidth:200,render:function(e,n){var o=[];if("ONLINE"===n.row.postStatus){var i=e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.watchComment(n)}}},"查看评论"),s=e("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.watchPostById(n.row.postId)}}},"查看文章");o.push(i),o.push(s)}return e("div",[o])}}],commentList:[],commentColumns:[{title:"楼层",key:"floor",align:"center",minWidth:80},{title:"昵称",key:"nickname",align:"center",minWidth:100},{title:"内容",key:"content",align:"center",ellipsis:!0,minWidth:300,render:function(t,e){return t("div",[t("span",{style:{display:"inline-block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},domProps:{title:e.row.content}},e.row.content)])}},{title:"留言时间",key:"commentTime",align:"center",minWidth:150},{title:"浏览器",key:"browser",align:"center",minWidth:150},{title:"操作系统",key:"os",align:"center",minWidth:100},{title:"IP",key:"ip",align:"center",minWidth:150},{title:"IP归属地",key:"address",align:"center",minWidth:150,render:function(t,e){return t("div",[t("span",{style:{display:"inline-block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},domProps:{title:e.row.address}},e.row.address)])}},{title:"状态",key:"status",align:"center",minWidth:100,render:function(t,e){var n=e.row.status,o="",i="";return"ONLINE"===n?(o="上线",i="green"):"OFFLINE"===n&&(o="下线",i="red"),t("Tag",{props:{color:i}},o)}},{title:"操作",key:"action",align:"center",minWidth:200,render:function(e,n){var o=[];if(t.roles.indexOf("ROLE_ADMIN")>-1){var i=e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.watchCommentReply(n)}}},"查看回复"),s=e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.replyComment(n)}}},"回复"),m=e("Button",{props:{type:"error",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.deleteComment(n)}}},"删除");null!=n.row.replies&&o.push(i),"OFFLINE"===n.row.status||(o.push(s),o.push(m))}return e("div",[o])}}],commentReplyList:[],commentReplyColumns:[{title:"内容",key:"replyContent",align:"center",ellipsis:!0,minWidth:300,render:function(t,e){return t("div",[t("span",{style:{display:"inline-block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},domProps:{title:e.row.replyContent}},e.row.replyContent)])}},{title:"留言时间",key:"replyTime",align:"center",minWidth:150},{title:"浏览器",key:"browser",align:"center",minWidth:150},{title:"操作系统",key:"os",align:"center",minWidth:100}]}},methods:i()({replyPostComment:m.d},Object(s.mapMutations)(["setCommentsListPage","setCommentPostId","setCommentId","setPostCommentListPage"]),Object(s.mapGetters)(["getCommentsListSize","getPostCommentListSize"]),Object(s.mapActions)(["handlePostCommentsList","handlePostCommentList","handleDeletePostComment","handleReplyComment"]),{watchPostById:function(t){window.open("https://www.zhangbj.com/p/"+t+".html")},watchCommentReply:function(t){this.commentReplyModal=!0,this.commentReplyList=t.row.replies},replyComment:function(t){var e=this;this.$Modal.confirm({render:function(t){return t("Input",{props:{value:e.replyContent,autofocus:!0,type:"textarea",rows:10,placeholder:"请输入回复..."},on:{input:function(t){e.replyContent=t}}})},onOk:function(){e.replyPostComment(e.watchCommentPostId,t.row.commentId,e.replyContent).then(function(t){e.replyContent="",e.$Message.success("回复成功！"),e.getCommentList()}).catch(function(t){e.$Message.error(t)})}})},deleteComment:function(t){var e=this;this.setCommentId(t.row.commentId),this.handleDeletePostComment().then(function(t){e.$Message.success("删除成功!"),e.getCommentList()})},onVisibleChange:function(t){t||(this.watchCommentPostId="",this.commentList=[],this.commentCurrentPage=1,this.commentTotalCount=1)},watchComment:function(t){this.watchCommentPostId=t.row.id,this.commentModal=!0,this.getCommentList()},getCommentList:function(){var t=this;this.commentListTableLoading=!0,this.setCommentPostId(this.watchCommentPostId),this.handlePostCommentList().then(function(e){t.commentTotalCount=e.data.commentCount,t.commentList=e.data.postComment,t.commentListTableLoading=!1}).catch(function(e){t.commentListTableLoading=!1})},commentChangePage:function(t){this.commentCurrentPage=t,this.setPostCommentListPage(t),this.getCommentList()},changePage:function(t){this.setCommentsListPage(t),this.getPostCommentsList()},getPostCommentsList:function(){var t=this;this.postCommentsListTableLoading=!0,this.handlePostCommentsList().then(function(e){t.totalCount=e.data.totalCount,t.postCommentsList=e.data.post,t.postCommentsListTableLoading=!1}).catch(function(e){t.postCommentsListTableLoading=!1})}}),created:function(){this.getPostCommentsList()},mounted:function(){}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"20px",padding:"20px","background-color":"white"}},[n("Table",{attrs:{border:"",stripe:"","highlight-row":!0,data:t.postCommentsList,columns:t.postCommentsListColumns,loading:t.postCommentsListTableLoading}}),t._v(" "),n("div",{staticStyle:{margin:"20px",overflow:"hidden"}},[n("Page",{attrs:{"page-size":t.pageSize,total:t.totalCount,current:t.currentPage,"show-elevator":"","show-total":""},on:{"on-change":t.changePage}})],1),t._v(" "),n("Modal",{attrs:{width:1e3,title:"文章评论"},on:{"on-visible-change":t.onVisibleChange},model:{value:t.commentModal,callback:function(e){t.commentModal=e},expression:"commentModal"}},[n("Table",{attrs:{stripe:"",border:"",columns:t.commentColumns,data:t.commentList,loading:t.commentListTableLoading}}),t._v(" "),n("div",{staticStyle:{margin:"20px",overflow:"hidden"}},[n("Page",{attrs:{"page-size":t.commentPageSize,total:t.commentTotalCount,current:t.commentCurrentPage,"show-elevator":"","show-total":""},on:{"on-change":t.commentChangePage}})],1)],1),t._v(" "),n("Modal",{attrs:{width:1e3,title:"评论回复"},model:{value:t.commentReplyModal,callback:function(e){t.commentReplyModal=e},expression:"commentReplyModal"}},[n("Table",{attrs:{stripe:"",border:"",columns:t.commentReplyColumns,data:t.commentReplyList}})],1)],1)},staticRenderFns:[]};var r=n("C7Lr")(l,a,!1,function(t){n("6k+7")},"data-v-c2e39ad4",null);e.default=r.exports}});
//# sourceMappingURL=8.9ecb68f2ff5e4856ff3c.js.map