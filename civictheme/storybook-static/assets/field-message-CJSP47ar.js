// phpcs:ignoreFile
import{t as s,D as r,a as o,T as p}from"./twig-DV4g_c5C.js";import"./icon-De8ZERzE.js";o(p);p.cache(!1);s.twig({id:"@base/icon/icon.twig",data:[{type:"raw",value:"",position:{start:385,end:387}},{type:"logic",token:{type:"Twig.logic.type.set",key:"assets_dir",expression:[{type:"Twig.expression.type.variable",value:"assets_dir",match:["assets_dir"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"@civictheme/../assets"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:387,end:455}},position:{start:387,end:455}},{type:"raw",value:"",position:{start:456,end:457}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"symbol",match:["symbol"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:457,end:486},output:[{type:"raw",value:"",position:{start:487,end:489}},{type:"logic",token:{type:"Twig.logic.type.set",key:"source",expression:[{type:"Twig.expression.type._function",fn:"source",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.variable",value:"assets_dir",match:["assets_dir"]},{type:"Twig.expression.type.string",value:"/icons/"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.variable",value:"symbol",match:["symbol"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:".svg"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:489,end:564}},position:{start:489,end:564}},{type:"raw",value:"",position:{start:565,end:567}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"source",match:["source"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:567,end:597},output:[{type:"raw",value:"",position:{start:598,end:602}},{type:"logic",token:{type:"Twig.logic.type.set",key:"size_class",expression:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.string",value:"ct-icon--size-"},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:602,end:662}},position:{start:602,end:662}},{type:"raw",value:"",position:{start:663,end:667}},{type:"logic",token:{type:"Twig.logic.type.set",key:"base_class",expression:[{type:"Twig.expression.type.string",value:"ct-icon "},{type:"Twig.expression.type.variable",value:"size_class",match:["size_class"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"}],position:{start:667,end:715}},position:{start:667,end:715}},{type:"raw",value:"",position:{start:716,end:720}},{type:"logic",token:{type:"Twig.logic.type.set",key:"modifier",expression:[{type:"Twig.expression.type.variable",value:"modifier_class",match:["modifier_class"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:720,end:769}},position:{start:720,end:769}},{type:"raw",value:"",position:{start:770,end:774}},{type:"logic",token:{type:"Twig.logic.type.set",key:"aria_attributes",expression:[{type:"Twig.expression.type.string",value:'aria-hidden="true" role="img"'}],position:{start:774,end:835}},position:{start:774,end:835}},{type:"raw",value:"",position:{start:836,end:840}},{type:"logic",token:{type:"Twig.logic.type.set",key:"alt_attribute",expression:[{type:"Twig.expression.type.variable",value:"alt",match:["alt"]},{type:"Twig.expression.type.test",filter:"defined"},{type:"Twig.expression.type.string",value:'alt="'},{type:"Twig.expression.type.variable",value:"alt",match:["alt"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:'"'},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:840,end:909}},position:{start:840,end:909}},{type:"raw",value:"",position:{start:910,end:914}},{type:"logic",token:{type:"Twig.logic.type.set",key:"additional_attributes",expression:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:914,end:972}},position:{start:914,end:972}},{type:"raw",value:"",position:{start:973,end:977}},{type:"logic",token:{type:"Twig.logic.type.set",key:"attributes",expression:[{type:"Twig.expression.type.string",value:'class="'},{type:"Twig.expression.type.variable",value:"base_class",match:["base_class"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:'" '},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.variable",value:"aria_attributes",match:["aria_attributes"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.variable",value:"alt_attribute",match:["alt_attribute"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.variable",value:"additional_attributes",match:["additional_attributes"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"}],position:{start:977,end:1118}},position:{start:977,end:1118}},{type:"raw",value:"",position:{start:1119,end:1123}},{type:"output_whitespace_both",position:{start:1123,end:1188},stack:[{type:"Twig.expression.type.variable",value:"source",match:["source"],position:{start:1123,end:1188}},{type:"Twig.expression.type.filter",value:"replace",match:["|replace","replace"],position:{start:1123,end:1188},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:1123,end:1188}},{type:"Twig.expression.type.object.start",value:"{",match:["{"],position:{start:1123,end:1188}},{type:"Twig.expression.type.operator.binary",value:":",position:{start:1123,end:1188},precidence:16,associativity:"rightToLeft",operator:":",key:"<svg "},{type:"Twig.expression.type.string",value:"<svg ",position:{start:1123,end:1188}},{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:1123,end:1188}},{type:"Twig.expression.type.operator.binary",value:"~",position:{start:1123,end:1188},precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:" ",position:{start:1123,end:1188}},{type:"Twig.expression.type.operator.binary",value:"~",position:{start:1123,end:1188},precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.object.end",value:"}",match:["}"],position:{start:1123,end:1188}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:1123,end:1188},expression:!1}]},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:1123,end:1188}}]},{type:"raw",value:"",position:{start:1188,end:1191}}]},position:{open:{start:567,end:597},close:{start:1191,end:1204}}}]},position:{open:{start:457,end:486},close:{start:1205,end:1218}}}],precompiled:!0});const i=e=>e,l=(e={})=>{const t=s.twig({id:"/app/web/themes/contrib/civictheme/components/01-atoms/field-message/field-message.twig",data:[{type:"raw",value:`

`,position:{start:376,end:378}},{type:"logic",token:{type:"Twig.logic.type.set",key:"theme_class",expression:[{type:"Twig.expression.type.string",value:"ct-theme-%s"},{type:"Twig.expression.type.filter",value:"format",match:["|format","format"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.variable",value:"theme",match:["theme"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"light"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:378,end:446}},position:{start:378,end:446}},{type:"logic",token:{type:"Twig.logic.type.set",key:"type",expression:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"error"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"information"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"warning"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"success"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.operator.binary",value:"in",precidence:8,associativity:"leftToRight",operator:"in"},{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.string",value:"information"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:447,end:541}},position:{start:447,end:541}},{type:"logic",token:{type:"Twig.logic.type.set",key:"type_class",expression:[{type:"Twig.expression.type.string",value:"ct-field-message--%s"},{type:"Twig.expression.type.filter",value:"format",match:["|format","format"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"information"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:542,end:623}},position:{start:542,end:623}},{type:"logic",token:{type:"Twig.logic.type.set",key:"modifier_class",expression:[{type:"Twig.expression.type.string",value:"%s %s %s"},{type:"Twig.expression.type.filter",value:"format",match:["|format","format"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.variable",value:"theme_class",match:["theme_class"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"type_class",match:["type_class"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_class",match:["modifier_class"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:624,end:721}},position:{start:624,end:721}},{type:"logic",token:{type:"Twig.logic.type.set",key:"icons",expression:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"information"},{type:"Twig.expression.type.string",value:"information-mark"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"warning"},{type:"Twig.expression.type.string",value:"exclamation-mark-3"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"error"},{type:"Twig.expression.type.string",value:"close-outline"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"success"},{type:"Twig.expression.type.string",value:"approve"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:722,end:859}},position:{start:722,end:859}},{type:"raw",value:"",position:{start:860,end:861}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:861,end:891},output:[{type:"raw",value:'<div class="ct-field-message ',position:{start:892,end:923}},{type:"output_whitespace_post",position:{start:923,end:944},stack:[{type:"Twig.expression.type.variable",value:"modifier_class",match:["modifier_class"],position:{start:923,end:944}}]},{type:"raw",value:'" ',position:{start:944,end:946}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:946,end:978},output:[{type:"output_whitespace_both",position:{start:978,end:1e3},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:978,end:1e3}},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:978,end:1e3}}]}]},position:{open:{start:946,end:978},close:{start:1e3,end:1011}}},{type:"raw",value:`>
    `,position:{start:1011,end:1017}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"icons",match:["icons"]},{type:"Twig.expression.type.key.brackets",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]}]},{type:"Twig.expression.type.test",filter:"defined"}],position:{start:1017,end:1048},output:[{type:"raw",value:"      ",position:{start:1049,end:1055}},{type:"logic",token:{type:"Twig.logic.type.include",only:4,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@base/icon/icon.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"symbol"},{type:"Twig.expression.type.variable",value:"icons",match:["icons"]},{type:"Twig.expression.type.key.brackets",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]}]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"size"},{type:"Twig.expression.type.string",value:"regular"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier_class"},{type:"Twig.expression.type.string",value:"ct-field-message__icon"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:1055,end:1215}},position:{start:1055,end:1215}},{type:"raw",value:"    ",position:{start:1216,end:1220}}]},position:{open:{start:1017,end:1048},close:{start:1220,end:1231}}},{type:"raw",value:"    ",position:{start:1232,end:1236}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"allow_html",match:["allow_html"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.bool",value:!1},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:1236,end:1270},output:[{type:"raw",value:"",position:{start:1271,end:1277}},{type:"output_whitespace_both",position:{start:1277,end:1296},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:1277,end:1296}},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:1277,end:1296}}]},{type:"raw",value:"",position:{start:1296,end:1301}}]},position:{open:{start:1236,end:1270},close:{start:1301,end:1311}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:1301,end:1311},output:[{type:"raw",value:"",position:{start:1312,end:1318}},{type:"output_whitespace_both",position:{start:1318,end:1333},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:1318,end:1333}}]},{type:"raw",value:"",position:{start:1333,end:1338}}]},position:{open:{start:1301,end:1311},close:{start:1338,end:1349}}},{type:"raw",value:"  </div>",position:{start:1350,end:1359}}]},position:{open:{start:861,end:891},close:{start:1359,end:1371}}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{return i(t.render({attributes:new r,...e}))}catch(a){return i("An error occurred whilst rendering /app/web/themes/contrib/civictheme/components/01-atoms/field-message/field-message.twig: "+a.toString())}};export{l as C};
