(this.webpackJsonpdiffmatchpatch=this.webpackJsonpdiffmatchpatch||[]).push([[0],{100:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_axa_fr_react_toolkit_form_input_file__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(101),_axa_fr_react_toolkit_form_input_file__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_axa_fr_react_toolkit_form_input_file__WEBPACK_IMPORTED_MODULE_2__),_axa_fr_react_toolkit_form_input_select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(55),_axa_fr_react_toolkit_form_input_select__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_axa_fr_react_toolkit_form_input_select__WEBPACK_IMPORTED_MODULE_3__),cuid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(105),cuid__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_4__),stringify=__webpack_require__(225),optionsSelect=[{value:"KO",label:"KO"},{value:"OK",label:"OK"},{value:"Tout",label:"Tout"}],extensionsSelect=[{value:"Tout",label:"Tout"},{value:"PNG",label:"PNG"},{value:"JPG/JPEG",label:"JPG/JPEG"},{value:"PDF",label:"PDF"},{value:"TIFF",label:"TIFF"}],FileTreatment=function FileTreatment(_ref){var state=_ref.state,setState=_ref.setState,tryFormatOutput=function(e){try{var t=JSON.parse(e);return stringify(t)}catch(a){return e}},mapItems=function(e){return e.map((function(e){var t=tryFormatOutput(e.Left.Body),a=tryFormatOutput(e.Right.Body);return{fileName:e.FileName,left:{Body:t,TimeMs:e.Left.TimeMs,Url:e.Left.Url,FileDirectory:e.Left.FileDirectory,StatusCode:e.Left.StatusCode},right:{Body:a,TimeMs:e.Right.TimeMs,Url:e.Right.Url,FileDirectory:e.Right.FileDirectory,StatusCode:e.Right.StatusCode},id:cuid__WEBPACK_IMPORTED_MODULE_4___default()(),parse:!1,collapse:!0}}))},formatBody=function formatBody(body,side){var formattedBody=Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},body);return eval(side),formattedBody},formatJson=function(e){if(!state.filterLeft&&!state.filterRight)return e;try{var t=e.map((function(e){var a=e;if(state.filterLeft){var _=JSON.parse(e.left.Body);a.left.Body=JSON.stringify(formatBody(_,state.filterLeft))}if(state.filterRight){var l=JSON.parse(e.right.Body);a.right.Body=JSON.stringify(formatBody(l,state.filterRight))}return t}))}catch(a){return console.log(a),e}},loadFile=function(e){var t=e.values[0].file,a=new FileReader;a.onloadend=function(){var e=JSON.parse(a.result);setState(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{items:formatJson(mapItems(e))}))},a.readAsText(t)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"file-input"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_axa_fr_react_toolkit_form_input_file__WEBPACK_IMPORTED_MODULE_2__.File,{id:"file_loader",name:"placeJsonFile",accept:"application/*, text/plain",onChange:loadFile})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"select"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"select__status-filter-container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"select__title"},"\xc9tat de fichier :"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_axa_fr_react_toolkit_form_input_select__WEBPACK_IMPORTED_MODULE_3__.SelectBase,{id:"select_type",name:"SelectType",value:state.filters.filterName,options:optionsSelect,onChange:function(e){setState(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{filters:Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state.filters),{},{filterName:e.value,pagingCurrent:1})}))}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"select__title"},"Extensions de fichiers:"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_axa_fr_react_toolkit_form_input_select__WEBPACK_IMPORTED_MODULE_3__.SelectBase,{id:"extension_type",name:"ExtensionType",value:state.filters.extensionName,options:extensionsSelect,onChange:function(e){setState(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{filters:Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state.filters),{},{extensionName:e.value,pagingCurrent:1})}))}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"select__function-filter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",null,"filtre gauche"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea",{id:"leftFilter",type:"text",placeholder:"filtre",onChange:function(e){return setState(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{filterLeft:e.target.value}))},rows:"5",cols:"33"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"select__function-filter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",null,"filtre droite"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea",{id:"rigthFilter",type:"text",placeholder:"filtre",onChange:function(e){return setState(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{filterRight:e.target.value}))},rows:"5",cols:"33"}))))};__webpack_exports__.a=FileTreatment},107:function(e,t,a){e.exports=a(231)},229:function(e,t,a){},231:function(e,t,a){"use strict";a.r(t),a.d(t,"App",(function(){return L}));var _=a(0),l=a.n(_),r=a(53),s=a.n(r),n=(a(112),a(113),a(114),a(28)),i=a(34),c=a(3),o=a(98),m=a(99),u=a.n(m),d=a(54),f=a.n(d),p=a(198),E=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if("string"===typeof t)return null;for(var r in Array.isArray(t)&&t.map((function(t,_){return e(t,a,_.toString()+"_",l)})),t)if(!l.includes(r)){var s=t[r];"string"===typeof s?a[_+r]=s:"object"===typeof s&&e(s,a,_+r+"_",l)}return a},b=function(e,t){for(var a={},_=0,l=Object.entries(e);_<l.length;_++){var r,s=Object(n.a)(l[_],2),i=s[0],c=s[1],o=null;i in t&&(o=t[i]),a[i]=p(null!==c&&void 0!==c?c:"",null!==(r=o)&&void 0!==r?r:"")}return a};function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];try{var a=JSON.parse(e),_=E(a,{},"",t);return _}catch(l){return{}}}var O=function(e,t){return e.filter((function(a){return"KO"===t?a.left.Body!==a.right.Body:"OK"===t?a.left.Body===a.right.Body:e}))},g=function(e){return Array.from(e).reverse().join("")},v=function(e){var t=g(e),a=t.indexOf(".")+1,_=t.indexOf("_"),l=t.substr(a,_-a);return g(l)},M=new u.a,C=function(e,t){M.Diff_Timeout=parseFloat(10);var a=M.diff_main(e,t);return M.diff_cleanupSemantic(a),M.diff_prettyHtml(a)},P=function(e,t){if(!e)return 1;var a=t<1?1:t,_=e.length;return _>0?Math.ceil(_/a):1},D=function(e){var t=e.statusCodes,a=Object.keys(t).map((function(e,a){var _=t[e];return l.a.createElement("div",{className:"stats__results",key:e},l.a.createElement("div",{className:"stats__results-div stats__results-div--border"},l.a.createElement("span",null,"Status Code : ",e," ")),l.a.createElement("div",{className:"stats__results-div stats__results-div--border"},l.a.createElement("span",null,"Nombre \xe0 gauche : ",_.left," ")),l.a.createElement("div",{className:"stats__results-div"}," ",l.a.createElement("span",null,"Nombre \xe0 droite : ",_.right," ")))}));return l.a.createElement(l.a.Fragment,null,a)},T=function(e){var t=e.scores,a=Object.keys(t).map((function(e,a){var _=t[e];return l.a.createElement("div",{className:"stats__results",key:e},l.a.createElement("div",{className:"stats__results-div stats__results-div--border"},l.a.createElement("span",null,"Cl\xe9 : ",e," ")),l.a.createElement("div",{className:"stats__results-div stats__results-div--border"},l.a.createElement("ul",null,l.a.createElement("li",null,"Levenshtein score : ",_.score," "),l.a.createElement("li",null,"Number OK : ",_.number_ok," "),l.a.createElement("li",null,"Number KO : ",_.number_ko," "))),l.a.createElement("div",{className:"stats__results-div"}," ",l.a.createElement("span",null,"Percentage OK : ",Math.round(_.number_ok/(_.number_ok+_.number_ko)*100)," % ")))}));return l.a.createElement(l.a.Fragment,null,a)},y=function(e){var t,a,_=e.state,r=e.setState,s=O(_.items,_.filters.filterName),i=(t=s,a=_.filters.extensionName,t.filter((function(e){return"Tout"===a?t:"JPG/JPEG"===a?"JPG"===v(e.fileName).toUpperCase()||"JPEG"===v(e.fileName).toUpperCase():v(e.fileName).toUpperCase()===a}))),m=function(e,t,a){var _=0;a>1&&(_=a-1);var l=0;t>0&&(l=t);var r=e.length,s=_*l,n=r<s+l?r:s+l;return e.slice(s,n)}(i,_.filters.pagingSelect,_.filters.pagingCurrent),u=function(e){var t={rightTimeMs:0,leftTimeMs:0};return e.forEach((function(e){t.rightTimeMs=t.rightTimeMs+e.right.TimeMs,t.leftTimeMs=t.leftTimeMs+e.left.TimeMs})),t}(_.items),d=function(e){var t={};return e.forEach((function(e){if(!e.right.StatusCode||!e.left.StatusCode)return e;t[e.right.StatusCode.toString()]?t[e.right.StatusCode.toString()].right++:t[e.right.StatusCode.toString()]={right:1,left:0},t[e.left.StatusCode.toString()]?t[e.left.StatusCode.toString()].left++:t[e.left.StatusCode.toString()]={right:0,left:1}})),t}(_.items),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],_={},l=/[0-9]+_/gi;return e.forEach((function(e){for(var r=h(e.left.Body,t),s=h(e.right.Body,t),i=b(r,s),c=0,o=Object.entries(i);c<o.length;c++){var m=Object(n.a)(o[c],2),u=m[0],d=m[1],f=u;a&&(f=u.replace(l,"")),f in _?(_[f].score+=i[u],_[f].number_ok+=0===d?1:0,_[f].number_ko+=0!==d?1:0):_[f]={score:d,number_ok:0===d?1:0,number_ko:0!==d?1:0}}})),_}(_.items,["document_id","document_type"]);return l.a.createElement(l.a.Fragment,null,0===s.length?l.a.createElement("h2",{className:"table-title"},"Il n'y a aucun fichier de type ",_.filters.filterName," ou dont l'extension est ",_.filters.extensionName," !"):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"stats"},l.a.createElement("div",{className:"stats__title"},"Statistiques :"),l.a.createElement("div",{className:"stats__results"},l.a.createElement("div",{className:"stats__results-div stats__results-div--border"},l.a.createElement("span",null,"Fichiers OK : ",O(_.items,"OK").length)),l.a.createElement("div",{className:"stats__results-div stats__results-div--border"},l.a.createElement("span",null,"Fichiers KO : ",O(_.items,"KO").length)),l.a.createElement("div",{className:"stats__results-div"},l.a.createElement("span",null,"Total : ",_.items.length))),l.a.createElement("div",{className:"stats__results"},l.a.createElement("div",{className:"stats__results-div stats__results-div--border"},l.a.createElement("span",null,"Temps total gauche : ",u.leftTimeMs/1e3," secondes")),l.a.createElement("div",{className:"stats__results-div stats__results-div--border"},l.a.createElement("span",null,"Temps total droite : ",u.rightTimeMs/1e3," secondes")),l.a.createElement("div",{className:"stats__results-div"},l.a.createElement("span",null,"Diff\xe9rence : ",(u.rightTimeMs-u.leftTimeMs)/1e3," secondes soit +",Math.round(u.leftTimeMs/u.rightTimeMs*100),"% de gain"))),l.a.createElement("div",{className:"stats__results"},l.a.createElement("div",{className:"stats__results-div stats__results-div--border"},l.a.createElement("span",null,"Temps moyen gauche : ",u.leftTimeMs/_.items.length/1e3," secondes")),l.a.createElement("div",{className:"stats__results-div stats__results-div--border"},l.a.createElement("span",null,"Temps moyen droite : ",u.rightTimeMs/_.items.length/1e3," secondes")),l.a.createElement("div",{className:"stats__results-div"},l.a.createElement("span",null,"Diff\xe9rence : ",(u.rightTimeMs-u.leftTimeMs)/_.items.length/1e3," secondes soit +",Math.round(u.leftTimeMs/u.rightTimeMs*100),"% "))),l.a.createElement(D,{statusCodes:d}),l.a.createElement(T,{scores:p})),m.map((function(e){return l.a.createElement("div",{key:e.id,className:"table-result"},l.a.createElement("div",{className:"table-result__header"},l.a.createElement("div",null,l.a.createElement("p",null,"R\xe9sultat fichier : ",e.fileName),l.a.createElement("h2",null,e.left.Body!==e.right.Body?l.a.createElement("span",{className:"table-result__row--red"},"KO"):l.a.createElement("span",{className:"table-result__row--green"},"OK")," Ratio temps \xe0 gauche - temps \xe0 droite : ",(e.right.TimeMs-e.left.TimeMs)/1e3," secondes")),l.a.createElement("div",{className:"table-result__collapse-button",onClick:function(){!function(e){var t=[];_.items.map((function(a){if(a.id===e){var _=Object(c.a)(Object(c.a)({},a),{},{collapse:!a.collapse});t.push(_)}else t.push(a)})),r(Object(c.a)(Object(c.a)({},_),{},{items:t}))}(e.id)}},e.collapse?"-":"+")),e.collapse&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"table-result__parse-button-container"},l.a.createElement("button",{className:"table-result__parse-button",type:"button",onClick:function(){!function(e){var t=[];_.items.map((function(a){if(a.id===e){var _=Object(c.a)(Object(c.a)({},a),{},{parse:!a.parse});t.push(_)}else t.push(a)})),r(Object(c.a)(Object(c.a)({},_),{},{items:t}))}(e.id)}},e.parse?"D\xe9parse":"Parse")),l.a.createElement("div",{className:"table-result__column-container"},l.a.createElement("div",{className:"table-result__column"},l.a.createElement("div",{className:"table-margin"},l.a.createElement("div",null,"Copier le lien vers le fichier local dans votre presse-papiers:"),l.a.createElement("button",{className:"table-result__copy-clipboard-button",onClick:function(){var t=document.createElement("textarea");t.value=e.left.FileDirectory,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},"Cliquez ici"),l.a.createElement("h3",null,e.left.Url),l.a.createElement("div",{className:"table-result__column--time-span"},"Time: ",e.left.TimeMs/1e3," seconds"),l.a.createElement("div",null,e.parse?l.a.createElement(f.a,{id:"json-pretty",data:e.left.Body}):e.left.Body))),l.a.createElement("div",{className:"table-result__column table-result__column--border-left"},l.a.createElement("div",{className:"table-margin"},l.a.createElement("div",null,"Copier le lien vers le fichier local dans votre presse-papiers:"),l.a.createElement("button",{className:"table-result__copy-clipboard-button",onClick:function(){var t=document.createElement("textarea");t.value=e.right.FileDirectory,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},"Cliquez ici"),l.a.createElement("h3",null,e.right.Url),l.a.createElement("div",{className:"table-result__column--time-span"},"Time: ",e.right.TimeMs/1e3," seconds"),l.a.createElement("div",null,e.parse?l.a.createElement(f.a,{id:"json-pretty",data:e.right.Body}):e.right.Body)))),l.a.createElement("div",{className:"table-result__row table-result__row--overflow",dangerouslySetInnerHTML:{__html:C(e.left.Body,e.right.Body)}})))})),l.a.createElement(o.Paging,{currentPage:_.filters.pagingCurrent,numberPages:P(i,_.filters.pagingSelect),numberItems:_.filters.pagingSelect,id:"paging",onChange:function(e){r(Object(c.a)(Object(c.a)({},_),{},{filters:Object(c.a)(Object(c.a)({},_.filters),{},{pagingSelect:e.numberItems,pagingCurrent:_.filters.pagingCurrent>P(i,e.numberItems)?1:e.page})}))}})))},N=a(100),B=a(106),S=a.n(B),K=(a(229),function(){var e=Object(_.useState)({fileName:"Comparer un fichier JSON",items:[],filters:{filterName:"KO",extensionName:"Tout",pagingSelect:50,pagingCurrent:1},filterRight:null,filterLeft:null}),t=Object(n.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.Header,null,l.a.createElement(i.Name,{title:"ML-CLI",subtitle:"Made by AXA",img:S.a,alt:"Logo AXA"})),l.a.createElement(i.Title,{title:"Comparer un fichier JSON"===a.fileName?a.fileName:"Fichier en cours de visualisation : "+a.fileName}),l.a.createElement(N.a,{state:a,setState:r}),0===a.items.length?"":l.a.createElement(y,{state:a,setState:r}))}),L=function(){return l.a.createElement(K,null)};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root"));t.default=L}},[[107,1,2]]]);
//# sourceMappingURL=main.bf2a8ca8.chunk.js.map