(this.webpackJsonpdiffmatchpatch=this.webpackJsonpdiffmatchpatch||[]).push([[0],{109:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_axa_fr_react_toolkit_form_input_file__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(110),_axa_fr_react_toolkit_form_input_file__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_axa_fr_react_toolkit_form_input_file__WEBPACK_IMPORTED_MODULE_2__),_axa_fr_react_toolkit_form_input_select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(60),_axa_fr_react_toolkit_form_input_select__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_axa_fr_react_toolkit_form_input_select__WEBPACK_IMPORTED_MODULE_3__),cuid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(114),cuid__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_4__),json_stable_stringify__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(115),json_stable_stringify__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_5__),react_ace__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(61),react_ace__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_6__),ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(246),ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_7__),ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(247),ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_8__),optionsSelect=[{value:"KO",label:"KO"},{value:"OK",label:"OK"},{value:"Tout",label:"Tout"}],extensionsSelect=[{value:"Tout",label:"Tout"},{value:"PNG",label:"PNG"},{value:"JPG/JPEG",label:"JPG/JPEG"},{value:"PDF",label:"PDF"},{value:"TIFF",label:"TIFF"}],FileTreatment=function FileTreatment(_ref){var state=_ref.state,setState=_ref.setState,tryFormatOutput=function(e){try{var t=JSON.parse(e);return Object(json_stable_stringify__WEBPACK_IMPORTED_MODULE_5__.stringify)(t)}catch(_){return e}},mapItems=function(e){return e.map((function(e){var t=tryFormatOutput(e.Left.Body),_=tryFormatOutput(e.Right.Body);return{fileName:e.FileName,left:{Body:t,TimeMs:e.Left.TimeMs,Url:e.Left.Url,FileDirectory:e.Left.FileDirectory,StatusCode:e.Left.StatusCode},right:{Body:_,TimeMs:e.Right.TimeMs,Url:e.Right.Url,FileDirectory:e.Right.FileDirectory,StatusCode:e.Right.StatusCode},id:cuid__WEBPACK_IMPORTED_MODULE_4___default()(),parse:!1,collapse:!0}}))},formatBody=function formatBody(bodyJson,side){var rowBodyInput=bodyJson,rowBodyOutput=rowBodyInput;return eval(side),rowBodyOutput},formatJson=function(e){if(!state.filterLeft&&!state.filterRight)return e;try{return e.map((function(e){var t=e;return state.filterLeft&&(t.left.Body=formatBody(e.left.Body,state.filterLeft)),state.filterRight&&(t.right.Body=formatBody(e.right.Body,state.filterRight)),t}))}catch(t){return console.log(t),e}},loadFile=function(e){var t=e.values[0].file,_=new FileReader;_.onloadend=function(){var e=JSON.parse(_.result);setState(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{items:formatJson(mapItems(e))}))},_.readAsText(t)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"file-input"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_axa_fr_react_toolkit_form_input_file__WEBPACK_IMPORTED_MODULE_2__.File,{id:"file_loader",name:"placeJsonFile",accept:"application/*, text/plain",onChange:loadFile})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"select"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"select__status-filter-container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"select__title"},"\xc9tat de fichier :"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_axa_fr_react_toolkit_form_input_select__WEBPACK_IMPORTED_MODULE_3__.SelectBase,{id:"select_type",name:"SelectType",value:state.filters.filterName,options:optionsSelect,onChange:function(e){setState(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{filters:Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state.filters),{},{filterName:e.value,pagingCurrent:1})}))}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"select__title"},"Extensions de fichiers:"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_axa_fr_react_toolkit_form_input_select__WEBPACK_IMPORTED_MODULE_3__.SelectBase,{id:"extension_type",name:"ExtensionType",value:state.filters.extensionName,options:extensionsSelect,onChange:function(e){setState(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{filters:Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state.filters),{},{extensionName:e.value,pagingCurrent:1})}))}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"select__function-filter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",null,"filtre gauche"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_ace__WEBPACK_IMPORTED_MODULE_6___default.a,{mode:"javascript",theme:"github",onChange:function(e){return setState(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{filterLeft:e}))},value:state.filterLeft,name:"AceEditorLeft",editorProps:{$blockScrolling:!0}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"select__function-filter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",null,"filtre droite"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_ace__WEBPACK_IMPORTED_MODULE_6___default.a,{mode:"javascript",theme:"github",onChange:function(e){return setState(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_gitaxa_ml_cli_diffmatchpatch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{filterRight:e}))},value:state.filterRight,name:"AceEditorRight",editorProps:{$blockScrolling:!0}}))))};__webpack_exports__.a=FileTreatment},117:function(e,t,_){e.exports=_(250)},122:function(e,t,_){},123:function(e,t,_){},248:function(e,t,_){},250:function(e,t,_){"use strict";_.r(t),_.d(t,"App",(function(){return K}));var a=_(0),r=_.n(a),l=_(57),n=_.n(l),s=(_(122),_(123),_(124),_(125),_(126),_(29)),i=_(36),c=_(3),o=_(108),u=_(58),m=_.n(u),d=_(59),f=_.n(d),E=_(210),p=function e(t){var _=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if("string"===typeof t)return null;for(var l in Array.isArray(t)&&t.map((function(t,a){return e(t,_,a.toString()+"_",r)})),t)if(!r.includes(l)){var n=t[l];"string"===typeof n?_[a+l]=n:"object"===typeof n&&e(n,_,a+l+"_",r)}return _},b=function(e,t){for(var _={},a=0,r=Object.entries(e);a<r.length;a++){var l,n=Object(s.a)(r[a],2),i=n[0],c=n[1],o=null;i in t&&(o=t[i]),_[i]=E(null!==c&&void 0!==c?c:"",null!==(l=o)&&void 0!==l?l:"")}return _};function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];try{var _=JSON.parse(e),a=p(_,{},"",t);return a}catch(r){return{}}}var h=function(e,t){return e.filter((function(_){return"KO"===t?_.left.Body!==_.right.Body:"OK"===t?_.left.Body===_.right.Body:e}))},g=function(e){return Array.from(e).reverse().join("")},M=function(e){var t=g(e),_=t.indexOf(".")+1,a=t.indexOf("_"),r=t.substr(_,a-_);return g(r)},v=new m.a,P=function(e,t){v.Diff_Timeout=parseFloat(10);var _=v.diff_main(e,t);return v.diff_cleanupSemantic(_),v.diff_prettyHtml(_)},D=function(e,t){if(!e)return 1;var _=t<1?1:t,a=e.length;return a>0?Math.ceil(a/_):1},C=function(e){var t=e.statusCodes,_=Object.keys(t).map((function(e,_){var a=t[e];return r.a.createElement("div",{className:"stats__results",key:e},r.a.createElement("div",{className:"stats__results-div stats__results-div--border"},r.a.createElement("span",null,"Status Code : ",e," ")),r.a.createElement("div",{className:"stats__results-div stats__results-div--border"},r.a.createElement("span",null,"Nombre \xe0 gauche : ",a.left," ")),r.a.createElement("div",{className:"stats__results-div"}," ",r.a.createElement("span",null,"Nombre \xe0 droite : ",a.right," ")))}));return r.a.createElement(r.a.Fragment,null,_)},T=function(e){var t=e.scores,_=Object.keys(t).map((function(e,_){var a=t[e];return r.a.createElement("div",{className:"stats__results",key:e},r.a.createElement("div",{className:"stats__results-div stats__results-div--border"},r.a.createElement("span",null,"Cl\xe9 : ",e," ")),r.a.createElement("div",{className:"stats__results-div stats__results-div--border"},r.a.createElement("ul",null,r.a.createElement("li",null,"Levenshtein score : ",a.score," "),r.a.createElement("li",null,"Number OK : ",a.number_ok," "),r.a.createElement("li",null,"Number KO : ",a.number_ko," "))),r.a.createElement("div",{className:"stats__results-div"}," ",r.a.createElement("span",null,"Percentage OK : ",Math.round(a.number_ok/(a.number_ok+a.number_ko)*100)," % ")))}));return r.a.createElement(r.a.Fragment,null,_)},B=function(e){var t,_,a=e.state,l=e.setState,n=h(a.items,a.filters.filterName),i=(t=n,_=a.filters.extensionName,t.filter((function(e){return"Tout"===_?t:"JPG/JPEG"===_?"JPG"===M(e.fileName).toUpperCase()||"JPEG"===M(e.fileName).toUpperCase():M(e.fileName).toUpperCase()===_}))),u=function(e,t,_){var a=0;_>1&&(a=_-1);var r=0;t>0&&(r=t);var l=e.length,n=a*r,s=l<n+r?l:n+r;return e.slice(n,s)}(i,a.filters.pagingSelect,a.filters.pagingCurrent),m=function(e){var t={rightTimeMs:0,leftTimeMs:0};return e.forEach((function(e){t.rightTimeMs=t.rightTimeMs+e.right.TimeMs,t.leftTimeMs=t.leftTimeMs+e.left.TimeMs})),t}(a.items),d=function(e){var t={};return e.forEach((function(e){if(!e.right.StatusCode||!e.left.StatusCode)return e;t[e.right.StatusCode.toString()]?t[e.right.StatusCode.toString()].right++:t[e.right.StatusCode.toString()]={right:1,left:0},t[e.left.StatusCode.toString()]?t[e.left.StatusCode.toString()].left++:t[e.left.StatusCode.toString()]={right:0,left:1}})),t}(a.items),E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],_=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a={},r=/[0-9]+_/gi;return e.forEach((function(e){for(var l=O(e.left.Body,t),n=O(e.right.Body,t),i=b(l,n),c=0,o=Object.entries(i);c<o.length;c++){var u=Object(s.a)(o[c],2),m=u[0],d=u[1],f=m;_&&(f=m.replace(r,"")),f in a?(a[f].score+=i[m],a[f].number_ok+=0===d?1:0,a[f].number_ko+=0!==d?1:0):a[f]={score:d,number_ok:0===d?1:0,number_ko:0!==d?1:0}}})),a}(a.items,["document_id","document_type"]);return r.a.createElement(r.a.Fragment,null,0===n.length?r.a.createElement("h2",{className:"table-title"},"Il n'y a aucun fichier de type ",a.filters.filterName," ou dont l'extension est ",a.filters.extensionName," !"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stats"},r.a.createElement("div",{className:"stats__title"},"Statistiques :"),r.a.createElement("div",{className:"stats__results"},r.a.createElement("div",{className:"stats__results-div stats__results-div--border"},r.a.createElement("span",null,"Fichiers OK : ",h(a.items,"OK").length)),r.a.createElement("div",{className:"stats__results-div stats__results-div--border"},r.a.createElement("span",null,"Fichiers KO : ",h(a.items,"KO").length)),r.a.createElement("div",{className:"stats__results-div"},r.a.createElement("span",null,"Total : ",a.items.length))),r.a.createElement("div",{className:"stats__results"},r.a.createElement("div",{className:"stats__results-div stats__results-div--border"},r.a.createElement("span",null,"Temps total gauche : ",m.leftTimeMs/1e3," secondes")),r.a.createElement("div",{className:"stats__results-div stats__results-div--border"},r.a.createElement("span",null,"Temps total droite : ",m.rightTimeMs/1e3," secondes")),r.a.createElement("div",{className:"stats__results-div"},r.a.createElement("span",null,"Diff\xe9rence : ",(m.rightTimeMs-m.leftTimeMs)/1e3," secondes soit +",Math.round(m.leftTimeMs/m.rightTimeMs*100),"% de gain"))),r.a.createElement("div",{className:"stats__results"},r.a.createElement("div",{className:"stats__results-div stats__results-div--border"},r.a.createElement("span",null,"Temps moyen gauche : ",m.leftTimeMs/a.items.length/1e3," secondes")),r.a.createElement("div",{className:"stats__results-div stats__results-div--border"},r.a.createElement("span",null,"Temps moyen droite : ",m.rightTimeMs/a.items.length/1e3," secondes")),r.a.createElement("div",{className:"stats__results-div"},r.a.createElement("span",null,"Diff\xe9rence : ",(m.rightTimeMs-m.leftTimeMs)/a.items.length/1e3," secondes soit +",Math.round(m.leftTimeMs/m.rightTimeMs*100),"% "))),r.a.createElement(C,{statusCodes:d}),r.a.createElement(T,{scores:E})),u.map((function(e){return r.a.createElement("div",{key:e.id,className:"table-result"},r.a.createElement("div",{className:"table-result__header"},r.a.createElement("div",null,r.a.createElement("p",null,"R\xe9sultat fichier : ",e.fileName),r.a.createElement("h2",null,e.left.Body!==e.right.Body?r.a.createElement("span",{className:"table-result__row--red"},"KO"):r.a.createElement("span",{className:"table-result__row--green"},"OK")," Ratio temps \xe0 gauche - temps \xe0 droite : ",(e.right.TimeMs-e.left.TimeMs)/1e3," secondes")),r.a.createElement("div",{className:"table-result__collapse-button",onClick:function(){!function(e){var t=[];a.items.map((function(_){if(_.id===e){var a=Object(c.a)(Object(c.a)({},_),{},{collapse:!_.collapse});t.push(a)}else t.push(_)})),l(Object(c.a)(Object(c.a)({},a),{},{items:t}))}(e.id)}},e.collapse?"-":"+")),e.collapse&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"table-result__parse-button-container"},r.a.createElement("button",{className:"table-result__parse-button",type:"button",onClick:function(){!function(e){var t=[];a.items.map((function(_){if(_.id===e){var a=Object(c.a)(Object(c.a)({},_),{},{parse:!_.parse});t.push(a)}else t.push(_)})),l(Object(c.a)(Object(c.a)({},a),{},{items:t}))}(e.id)}},e.parse?"D\xe9parse":"Parse")),r.a.createElement("div",{className:"table-result__column-container"},r.a.createElement("div",{className:"table-result__column"},r.a.createElement("div",{className:"table-margin"},r.a.createElement("div",null,"Copier le lien vers le fichier local dans votre presse-papiers:"),r.a.createElement("button",{className:"table-result__copy-clipboard-button",onClick:function(){var t=document.createElement("textarea");t.value=e.left.FileDirectory,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},"Cliquez ici"),r.a.createElement("h3",null,e.left.Url),r.a.createElement("div",{className:"table-result__column--time-span"},"Time: ",e.left.TimeMs/1e3," seconds"),r.a.createElement("div",null,e.parse?r.a.createElement(f.a,{id:"json-pretty",data:e.left.Body}):e.left.Body))),r.a.createElement("div",{className:"table-result__column table-result__column--border-left"},r.a.createElement("div",{className:"table-margin"},r.a.createElement("div",null,"Copier le lien vers le fichier local dans votre presse-papiers:"),r.a.createElement("button",{className:"table-result__copy-clipboard-button",onClick:function(){var t=document.createElement("textarea");t.value=e.right.FileDirectory,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},"Cliquez ici"),r.a.createElement("h3",null,e.right.Url),r.a.createElement("div",{className:"table-result__column--time-span"},"Time: ",e.right.TimeMs/1e3," seconds"),r.a.createElement("div",null,e.parse?r.a.createElement(f.a,{id:"json-pretty",data:e.right.Body}):e.right.Body)))),r.a.createElement("div",{className:"table-result__row table-result__row--overflow",dangerouslySetInnerHTML:{__html:P(e.left.Body,e.right.Body)}})))})),r.a.createElement(o.Paging,{currentPage:a.filters.pagingCurrent,numberPages:D(i,a.filters.pagingSelect),numberItems:a.filters.pagingSelect,id:"paging",onChange:function(e){l(Object(c.a)(Object(c.a)({},a),{},{filters:Object(c.a)(Object(c.a)({},a.filters),{},{pagingSelect:e.numberItems,pagingCurrent:a.filters.pagingCurrent>D(i,e.numberItems)?1:e.page})}))}})))},y=_(109),N=_(116),I=_.n(N),L=(_(248),function(){var e=Object(a.useState)({fileName:"Comparer un fichier JSON",items:[],filters:{filterName:"KO",extensionName:"Tout",pagingSelect:50,pagingCurrent:1},filterRight:'\ntry { \n    let body = JSON.parse(rawBodyInput);\n    rawBodyOutput = JSON.stringify(body);\n} catch(ex) {\n    console.log("Plantage parsing right");\n    console.log(ex.toString());\n    rawBodyOutput = rawBodyInput;\n}',filterLeft:'\ntry { \n    let body = JSON.parse(rawBodyInput);\n    rawBodyOutput = JSON.stringify(body);\n} catch(ex) {\n    console.log("Plantage parsing right");\n    console.log(ex.toString());\n    rawBodyOutput = rawBodyInput;\n}'}),t=Object(s.a)(e,2),_=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Header,null,r.a.createElement(i.Name,{title:"ML-CLI",subtitle:"Made by AXA",img:I.a,alt:"Logo AXA"})),r.a.createElement(i.Title,{title:"Comparer un fichier JSON"===_.fileName?_.fileName:"Fichier en cours de visualisation : "+_.fileName}),r.a.createElement(y.a,{state:_,setState:l}),0===_.items.length?"":r.a.createElement(B,{state:_,setState:l}))}),K=function(){return r.a.createElement(L,null)};n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root"));t.default=K}},[[117,1,2]]]);
//# sourceMappingURL=main.8952c249.chunk.js.map