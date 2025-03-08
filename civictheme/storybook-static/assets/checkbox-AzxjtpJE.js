// phpcs:ignoreFile
import{t as a,D as r,a as o,T as s}from"./twig-DV4g_c5C.js";import"./label-oyIinPmn.js";o(s);s.cache(!1);a.twig({id:"@atoms/label/label.twig",data:[{type:"raw",value:`

`,position:{start:605,end:607}},{type:"logic",token:{type:"Twig.logic.type.set",key:"tag",expression:[{type:"Twig.expression.type.variable",value:"tag",match:["tag"]},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"label"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"legend"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.operator.binary",value:"in",precidence:8,associativity:"leftToRight",operator:"in"},{type:"Twig.expression.type.variable",value:"tag",match:["tag"]},{type:"Twig.expression.type.string",value:"label"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:607,end:665}},position:{start:607,end:665}},{type:"logic",token:{type:"Twig.logic.type.set",key:"size",expression:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"extra-large"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"large"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"regular"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"small"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"extra-small"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.operator.binary",value:"in",precidence:8,associativity:"leftToRight",operator:"in"},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.string",value:"regular"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:666,end:769}},position:{start:666,end:769}},{type:"logic",token:{type:"Twig.logic.type.set",key:"size_class",expression:[{type:"Twig.expression.type.string",value:"ct-label--%s"},{type:"Twig.expression.type.filter",value:"format",match:["|format","format"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:770,end:820}},position:{start:770,end:820}},{type:"logic",token:{type:"Twig.logic.type.set",key:"required_class",expression:[{type:"Twig.expression.type.variable",value:"is_required",match:["is_required"]},{type:"Twig.expression.type.string",value:"ct-label--required"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:821,end:887}},position:{start:821,end:887}},{type:"logic",token:{type:"Twig.logic.type.set",key:"required_text",expression:[{type:"Twig.expression.type.variable",value:"required_text",match:["required_text"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"(required)"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:888,end:949}},position:{start:888,end:949}},{type:"logic",token:{type:"Twig.logic.type.set",key:"theme_class",expression:[{type:"Twig.expression.type.string",value:"ct-theme-%s"},{type:"Twig.expression.type.filter",value:"format",match:["|format","format"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.variable",value:"theme",match:["theme"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"light"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:950,end:1018}},position:{start:950,end:1018}},{type:"logic",token:{type:"Twig.logic.type.set",key:"modifier_class",expression:[{type:"Twig.expression.type.string",value:"%s %s %s %s"},{type:"Twig.expression.type.filter",value:"format",match:["|format","format"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.variable",value:"theme_class",match:["theme_class"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"size_class",match:["size_class"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"required_class",match:["required_class"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_class",match:["modifier_class"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:1019,end:1135}},position:{start:1019,end:1135}},{type:"raw",value:"",position:{start:1136,end:1137}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:1137,end:1167},output:[{type:"raw",value:"<",position:{start:1168,end:1171}},{type:"output",position:{start:1171,end:1180},stack:[{type:"Twig.expression.type.variable",value:"tag",match:["tag"],position:{start:1171,end:1180}}]},{type:"raw",value:`
    class="ct-label `,position:{start:1180,end:1201}},{type:"output_whitespace_post",position:{start:1201,end:1222},stack:[{type:"Twig.expression.type.variable",value:"modifier_class",match:["modifier_class"],position:{start:1201,end:1222}}]},{type:"raw",value:`"
    `,position:{start:1222,end:1228}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"for",match:["for"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:1228,end:1253},output:[{type:"raw",value:' for="',position:{start:1253,end:1259}},{type:"output",position:{start:1259,end:1268},stack:[{type:"Twig.expression.type.variable",value:"for",match:["for"],position:{start:1259,end:1268}}]},{type:"raw",value:'" ',position:{start:1268,end:1270}}]},position:{open:{start:1228,end:1253},close:{start:1270,end:1281}}},{type:"raw",value:"    ",position:{start:1282,end:1286}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:1286,end:1318},output:[{type:"output_whitespace_both",position:{start:1318,end:1340},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:1318,end:1340}},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:1318,end:1340}}]}]},position:{open:{start:1286,end:1318},close:{start:1340,end:1351}}},{type:"raw",value:`  >
    `,position:{start:1352,end:1360}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"allow_html",match:["allow_html"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.bool",value:!1},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:1360,end:1394},output:[{type:"raw",value:"",position:{start:1395,end:1401}},{type:"output_whitespace_both",position:{start:1401,end:1420},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:1401,end:1420}},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:1401,end:1420}}]},{type:"raw",value:"",position:{start:1420,end:1425}}]},position:{open:{start:1360,end:1394},close:{start:1425,end:1435}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:1425,end:1435},output:[{type:"raw",value:"",position:{start:1436,end:1442}},{type:"output_whitespace_both",position:{start:1442,end:1457},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:1442,end:1457}}]},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_required",match:["is_required"]}],position:{start:1457,end:1478},output:[{type:"raw",value:' <span class="ct-label__required">',position:{start:1478,end:1512}},{type:"output",position:{start:1512,end:1531},stack:[{type:"Twig.expression.type.variable",value:"required_text",match:["required_text"],position:{start:1512,end:1531}}]},{type:"raw",value:"</span>",position:{start:1531,end:1538}}]},position:{open:{start:1457,end:1478},close:{start:1538,end:1551}}},{type:"raw",value:"",position:{start:1552,end:1556}}]},position:{open:{start:1425,end:1435},close:{start:1556,end:1567}}},{type:"raw",value:"  </",position:{start:1568,end:1572}},{type:"output",position:{start:1572,end:1581},stack:[{type:"Twig.expression.type.variable",value:"tag",match:["tag"],position:{start:1572,end:1581}}]},{type:"raw",value:">",position:{start:1581,end:1583}}]},position:{open:{start:1137,end:1167},close:{start:1583,end:1595}}}],precompiled:!0});const i=e=>e,l=(e={})=>{const t=a.twig({id:"/app/web/themes/contrib/civictheme/components/01-atoms/checkbox/checkbox.twig",data:[{type:"raw",value:`

`,position:{start:594,end:596}},{type:"logic",token:{type:"Twig.logic.type.set",key:"theme_class",expression:[{type:"Twig.expression.type.string",value:"ct-theme-%s"},{type:"Twig.expression.type.filter",value:"format",match:["|format","format"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.variable",value:"theme",match:["theme"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"light"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:596,end:664}},position:{start:596,end:664}},{type:"logic",token:{type:"Twig.logic.type.set",key:"is_invalid_class",expression:[{type:"Twig.expression.type.variable",value:"is_invalid",match:["is_invalid"]},{type:"Twig.expression.type.string",value:"ct-checkbox--is-invalid"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:665,end:737}},position:{start:665,end:737}},{type:"logic",token:{type:"Twig.logic.type.set",key:"modifier_class",expression:[{type:"Twig.expression.type.string",value:"%s %s %s"},{type:"Twig.expression.type.filter",value:"format",match:["|format","format"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.variable",value:"theme_class",match:["theme_class"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"is_invalid_class",match:["is_invalid_class"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_class",match:["modifier_class"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}],position:{start:738,end:846}},position:{start:738,end:846}},{type:"raw",value:"",position:{start:847,end:848}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:848,end:894},output:[{type:"raw",value:`  <input
    type="checkbox"
    class="ct-checkbox `,position:{start:895,end:947}},{type:"output_whitespace_post",position:{start:947,end:968},stack:[{type:"Twig.expression.type.variable",value:"modifier_class",match:["modifier_class"],position:{start:947,end:968}}]},{type:"raw",value:`"
    name="`,position:{start:968,end:980}},{type:"output",position:{start:980,end:990},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:980,end:990}}]},{type:"raw",value:`"
    value="`,position:{start:990,end:1003}},{type:"output",position:{start:1003,end:1014},stack:[{type:"Twig.expression.type.variable",value:"value",match:["value"],position:{start:1003,end:1014}}]},{type:"raw",value:`"
    id="`,position:{start:1014,end:1024}},{type:"output",position:{start:1024,end:1032},stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"],position:{start:1024,end:1032}}]},{type:"raw",value:`"
    `,position:{start:1032,end:1038}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_checked",match:["is_checked"]}],position:{start:1038,end:1057},output:[{type:"raw",value:"checked",position:{start:1057,end:1064}}]},position:{open:{start:1038,end:1057},close:{start:1064,end:1075}}},{type:"raw",value:"    ",position:{start:1076,end:1080}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_required",match:["is_required"]}],position:{start:1080,end:1100},output:[{type:"raw",value:"required",position:{start:1100,end:1108}}]},position:{open:{start:1080,end:1100},close:{start:1108,end:1119}}},{type:"raw",value:"    ",position:{start:1120,end:1124}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_disabled",match:["is_disabled"]}],position:{start:1124,end:1144},output:[{type:"raw",value:"disabled",position:{start:1144,end:1152}}]},position:{open:{start:1124,end:1144},close:{start:1152,end:1163}}},{type:"raw",value:"    ",position:{start:1164,end:1168}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:1168,end:1200},output:[{type:"output_whitespace_both",position:{start:1200,end:1222},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:1200,end:1222}},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:1200,end:1222}}]}]},position:{open:{start:1168,end:1200},close:{start:1222,end:1233}}},{type:"raw",value:`  />
  `,position:{start:1234,end:1241}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:1241,end:1268},output:[{type:"raw",value:"    ",position:{start:1269,end:1273}},{type:"logic",token:{type:"Twig.logic.type.include",only:4,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@atoms/label/label.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"theme"},{type:"Twig.expression.type.variable",value:"theme",match:["theme"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"content"},{type:"Twig.expression.type.variable",value:"label",match:["label"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"for"},{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"size"},{type:"Twig.expression.type.string",value:"small"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier_class"},{type:"Twig.expression.type.string",value:"ct-checkbox__label"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:1273,end:1452}},position:{start:1273,end:1452}},{type:"raw",value:"  ",position:{start:1453,end:1455}}]},position:{open:{start:1241,end:1268},close:{start:1455,end:1466}}}]},position:{open:{start:848,end:894},close:{start:1467,end:1478}}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{return i(t.render({attributes:new r,...e}))}catch(p){return i("An error occurred whilst rendering /app/web/themes/contrib/civictheme/components/01-atoms/checkbox/checkbox.twig: "+p.toString())}};export{l as C};
