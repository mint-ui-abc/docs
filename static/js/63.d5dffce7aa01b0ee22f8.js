webpackJsonp([63],{149:function(t,_,s){t.exports=s(263)},263:function(t,_,s){var v=s(2)(null,s(403),null,null);t.exports=v.exports},403:function(t,_){t.exports={render:function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("section",[s("h1",[t._v("Message box")]),t._v(" "),s("blockquote",[s("p",[t._v("弹出式提示框，有多种交互形式。")])]),t._v(" "),s("hr"),t._v(" "),s("h2",[t._v("引入")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("例子")]),t._v(" "),s("p",[t._v("以标题与内容字符串为参数进行调用")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("或者传入一个对象")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("在 prompt 中，若用户点击了取消按钮，则 Promise 的状态会变为 rejected")]),t._v(" "),s("h2",[t._v("API")]),t._v(" "),t._m(10)],1)},staticRenderFns:[function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("pre",[s("code",{staticClass:"language-javascript"},[s("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { MessageBox } "),s("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("'mint-ui'")]),t._v(";\n")])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("pre",[s("code",{staticClass:"language-javascript"},[t._v("MessageBox("),s("span",{staticClass:"hljs-string"},[t._v("'提示'")]),t._v(", "),s("span",{staticClass:"hljs-string"},[t._v("'操作成功'")]),t._v(");\n")])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("pre",[s("code",{staticClass:"language-javascript"},[t._v("MessageBox({\n  "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v("'提示'")]),t._v(",\n  "),s("span",{staticClass:"hljs-attr"},[t._v("message")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v("'确定执行此操作?'")]),t._v(",\n  "),s("span",{staticClass:"hljs-attr"},[t._v("showCancelButton")]),t._v(": "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n});\n")])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("p",[t._v("此外，"),s("code",[t._v("MessageBox")]),t._v(" 还提供了 "),s("code",[t._v("alert")]),t._v("、"),s("code",[t._v("confirm")]),t._v(" 和 "),s("code",[t._v("prompt")]),t._v(" 三个方法，它们都返回一个 Promise")])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("pre",[s("code",{staticClass:"language-javascript"},[t._v("MessageBox.alert(message, title);\n")])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("pre",[s("code",{staticClass:"language-javascript"},[t._v("MessageBox.alert("),s("span",{staticClass:"hljs-string"},[t._v("'操作成功'")]),t._v(").then("),s("span",{staticClass:"hljs-function"},[s("span",{staticClass:"hljs-params"},[t._v("action")]),t._v(" =>")]),t._v(" {\n  ...\n});\n")])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("pre",[s("code",{staticClass:"language-javascript"},[t._v("MessageBox.confirm(message, title);\n")])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("pre",[s("code",{staticClass:"language-javascript"},[t._v("MessageBox.confirm("),s("span",{staticClass:"hljs-string"},[t._v("'确定执行此操作?'")]),t._v(").then("),s("span",{staticClass:"hljs-function"},[s("span",{staticClass:"hljs-params"},[t._v("action")]),t._v(" =>")]),t._v(" {\n  ...\n});\n")])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("pre",[s("code",{staticClass:"language-javascript"},[t._v("MessageBox.prompt(message, title);\n")])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("pre",[s("code",{staticClass:"language-javascript"},[t._v("MessageBox.prompt("),s("span",{staticClass:"hljs-string"},[t._v("'请输入姓名'")]),t._v(").then("),s("span",{staticClass:"hljs-function"},[t._v("("),s("span",{staticClass:"hljs-params"},[t._v("{ value, action }")]),t._v(") =>")]),t._v(" {\n  ...\n});\n")])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("div",{staticClass:"table-container"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("提示框的标题")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("提示框的内容")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("showConfirmButton")]),t._v(" "),s("td",[t._v("是否显示确认按钮")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("showCancelButton")]),t._v(" "),s("td",[t._v("是否显示取消按钮")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("confirmButtonText")]),t._v(" "),s("td",[t._v("确认按钮的文本")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("confirmButtonHighlight")]),t._v(" "),s("td",[t._v("是否将确认按钮的文本加粗显示")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("confirmButtonClass")]),t._v(" "),s("td",[t._v("确认按钮的类名")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("cancelButtonText")]),t._v(" "),s("td",[t._v("取消按钮的文本")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("cancelButtonHighlight")]),t._v(" "),s("td",[t._v("是否将取消按钮的文本加粗显示")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("cancelButtonClass")]),t._v(" "),s("td",[t._v("取消按钮的类名")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("showInput")]),t._v(" "),s("td",[t._v("是否显示一个输入框")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("inputValue")]),t._v(" "),s("td",[t._v("输入框的值")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("inputPlaceholder")]),t._v(" "),s("td",[t._v("输入框的占位符")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td")])])])])}]}}});
//# sourceMappingURL=63.d5dffce7aa01b0ee22f8.js.map