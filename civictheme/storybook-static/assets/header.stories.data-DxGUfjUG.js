// phpcs:ignoreFile
import{t as r,D as l,a as c,T as p}from"./twig-DV4g_c5C.js";import{L as y}from"./logo-jyY9ROf_.js";import{L as d}from"./logo.stories.data-DWX2HUon.js";import{P as m}from"./paragraph-BxGZvWqG.js";import{C as o,N as n}from"./navigation.stories.data-BXOMOWCJ.js";import{S as v}from"./search-DcPG07jG.js";import{M as w,a as g,b as i}from"./mobile-navigation.stories-CLrwo5Rp.js";c(p);p.cache(!1);const a=t=>t,k=(t={})=>{const e=r.twig({id:"/app/web/themes/contrib/civictheme/components/03-organisms/header/header.twig",data:[{type:"raw",value:`

`,position:{start:457,end:459}},{type:"logic",token:{type:"Twig.logic.type.set",key:"theme_class",expression:[{type:"Twig.expression.type.string",value:"ct-theme-%s"},{type:"Twig.expression.type.filter",value:"format",match:["|format","format"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.variable",value:"theme",match:["theme"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"light"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:459,end:527}},position:{start:459,end:527}},{type:"logic",token:{type:"Twig.logic.type.set",key:"modifier_class",expression:[{type:"Twig.expression.type.string",value:"%s %s"},{type:"Twig.expression.type.filter",value:"format",match:["|format","format"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.variable",value:"theme_class",match:["theme_class"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_class",match:["modifier_class"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:528,end:610}},position:{start:528,end:610}},{type:"raw",value:`
`,position:{start:611,end:612}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"content_top1",match:["content_top1"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"content_top2",match:["content_top2"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"},{type:"Twig.expression.type.variable",value:"content_top3",match:["content_top3"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"},{type:"Twig.expression.type.variable",value:"content_middle1",match:["content_middle1"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"},{type:"Twig.expression.type.variable",value:"content_middle2",match:["content_middle2"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"},{type:"Twig.expression.type.variable",value:"content_middle3",match:["content_middle3"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"},{type:"Twig.expression.type.variable",value:"content_bottom1",match:["content_bottom1"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"}],position:{start:612,end:832},output:[{type:"raw",value:'  <header class="ct-header ',position:{start:833,end:860}},{type:"output_whitespace_post",position:{start:860,end:881},stack:[{type:"Twig.expression.type.variable",value:"modifier_class",match:["modifier_class"],position:{start:860,end:881}}]},{type:"raw",value:`" role="banner">

    `,position:{start:881,end:903}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"content_top1",match:["content_top1"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"content_top2",match:["content_top2"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"},{type:"Twig.expression.type.variable",value:"content_top3",match:["content_top3"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"}],position:{start:903,end:995},output:[{type:"raw",value:`      <div class="ct-header__top hide-xxs show-m">

        `,position:{start:996,end:1056}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"content_top1",match:["content_top1"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:1056,end:1090},output:[{type:"raw",value:"          ",position:{start:1091,end:1101}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"content_top1",position:{start:1101,end:1125},output:[{type:"raw",value:`            <div class="container">
              <div class="row">
                <div class="col-xxs-12">
                  <div class="ct-header__content-top1">
                    `,position:{start:1126,end:1311}},{type:"output",position:{start:1311,end:1333},stack:[{type:"Twig.expression.type.variable",value:"content_top1",match:["content_top1"],position:{start:1311,end:1333}},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:1311,end:1333}}]},{type:"raw",value:`
                  </div>
                </div>
              </div>
            </div>
          `,position:{start:1333,end:1432}}]},position:{open:{start:1101,end:1125},close:{start:1432,end:1446}}},{type:"raw",value:"        ",position:{start:1447,end:1455}}]},position:{open:{start:1056,end:1090},close:{start:1455,end:1466}}},{type:"raw",value:`
        `,position:{start:1467,end:1476}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"content_top2",match:["content_top2"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"content_top3",match:["content_top3"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"}],position:{start:1476,end:1539},output:[{type:"raw",value:`          <div class="container">
            <div class="row">

              `,position:{start:1540,end:1619}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"content_top2",position:{start:1619,end:1643},output:[{type:"raw",value:`                <div class="col-xxs-12 col-m-4">
                  <div class="ct-header__content-top2">
                    `,position:{start:1644,end:1769}},{type:"output",position:{start:1769,end:1791},stack:[{type:"Twig.expression.type.variable",value:"content_top2",match:["content_top2"],position:{start:1769,end:1791}},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:1769,end:1791}}]},{type:"raw",value:`
                  </div>
                </div>
              `,position:{start:1791,end:1854}}]},position:{open:{start:1619,end:1643},close:{start:1854,end:1868}}},{type:"raw",value:`
              `,position:{start:1869,end:1884}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"content_top3",position:{start:1884,end:1908},output:[{type:"raw",value:`                <div class="col-xxs-12 col-m-8">
                  <div class="ct-header__content-top3">
                    `,position:{start:1909,end:2034}},{type:"output",position:{start:2034,end:2056},stack:[{type:"Twig.expression.type.variable",value:"content_top3",match:["content_top3"],position:{start:2034,end:2056}},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:2034,end:2056}}]},{type:"raw",value:`
                  </div>
                </div>
              `,position:{start:2056,end:2119}}]},position:{open:{start:1884,end:1908},close:{start:2119,end:2133}}},{type:"raw",value:`
            </div>
          </div>
        `,position:{start:2134,end:2179}}]},position:{open:{start:1476,end:1539},close:{start:2179,end:2190}}},{type:"raw",value:`      </div>
    `,position:{start:2191,end:2208}}]},position:{open:{start:903,end:995},close:{start:2208,end:2219}}},{type:"raw",value:`
    `,position:{start:2220,end:2225}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"content_middle1",match:["content_middle1"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"content_middle2",match:["content_middle2"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"},{type:"Twig.expression.type.variable",value:"content_middle3",match:["content_middle3"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"}],position:{start:2225,end:2326},output:[{type:"raw",value:`      <div class="ct-header__middle">

        `,position:{start:2327,end:2374}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"content_middle1",match:["content_middle1"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:2374,end:2411},output:[{type:"raw",value:"          ",position:{start:2412,end:2422}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"content_middle1",position:{start:2422,end:2449},output:[{type:"raw",value:`            <div class="container">
              <div class="row">
                <div class="col-xxs-12">
                  <div class="ct-header__content-middle1">
                    `,position:{start:2450,end:2638}},{type:"output",position:{start:2638,end:2663},stack:[{type:"Twig.expression.type.variable",value:"content_middle1",match:["content_middle1"],position:{start:2638,end:2663}},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:2638,end:2663}}]},{type:"raw",value:`
                  </div>
                </div>
              </div>
            </div>
          `,position:{start:2663,end:2762}}]},position:{open:{start:2422,end:2449},close:{start:2762,end:2776}}},{type:"raw",value:"        ",position:{start:2777,end:2785}}]},position:{open:{start:2374,end:2411},close:{start:2785,end:2796}}},{type:"raw",value:`
        `,position:{start:2797,end:2806}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"content_middle2",match:["content_middle2"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"content_middle3",match:["content_middle3"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"}],position:{start:2806,end:2875},output:[{type:"raw",value:`          <div class="container">
            <div class="row row--no-wrap">
              `,position:{start:2876,end:2967}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"content_middle2",match:["content_middle2"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:2967,end:3004},output:[{type:"raw",value:"                ",position:{start:3005,end:3021}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"content_middle2",position:{start:3021,end:3048},output:[{type:"raw",value:`                  <div class="col col--no-grow">
                    <div class="ct-header__content-middle2">
                      `,position:{start:3049,end:3181}},{type:"output",position:{start:3181,end:3206},stack:[{type:"Twig.expression.type.variable",value:"content_middle2",match:["content_middle2"],position:{start:3181,end:3206}},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:3181,end:3206}}]},{type:"raw",value:`
                    </div>
                  </div>
                `,position:{start:3206,end:3275}}]},position:{open:{start:3021,end:3048},close:{start:3275,end:3289}}},{type:"raw",value:"              ",position:{start:3290,end:3304}}]},position:{open:{start:2967,end:3004},close:{start:3304,end:3315}}},{type:"raw",value:`
              `,position:{start:3316,end:3331}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"content_middle3",match:["content_middle3"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:3331,end:3368},output:[{type:"raw",value:"                ",position:{start:3369,end:3385}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"content_middle3",position:{start:3385,end:3412},output:[{type:"raw",value:`                  <div class="col">
                    <div class="ct-header__content-middle3">
                      `,position:{start:3413,end:3532}},{type:"output",position:{start:3532,end:3557},stack:[{type:"Twig.expression.type.variable",value:"content_middle3",match:["content_middle3"],position:{start:3532,end:3557}},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:3532,end:3557}}]},{type:"raw",value:`
                    </div>
                  </div>
                `,position:{start:3557,end:3626}}]},position:{open:{start:3385,end:3412},close:{start:3626,end:3640}}},{type:"raw",value:"              ",position:{start:3641,end:3655}}]},position:{open:{start:3331,end:3368},close:{start:3655,end:3666}}},{type:"raw",value:`            </div>
          </div>
        `,position:{start:3667,end:3711}}]},position:{open:{start:2806,end:2875},close:{start:3711,end:3722}}},{type:"raw",value:`      </div>
    `,position:{start:3723,end:3740}}]},position:{open:{start:2225,end:2326},close:{start:3740,end:3751}}},{type:"raw",value:`
    `,position:{start:3752,end:3757}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"content_bottom1",match:["content_bottom1"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:3757,end:3794},output:[{type:"raw",value:"      ",position:{start:3795,end:3801}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"content_bottom1",position:{start:3801,end:3828},output:[{type:"raw",value:`        <div class="container">
          <div class="row">
            <div class="col-xxs-12">
              <div class="ct-header__content-bottom1">
                `,position:{start:3829,end:3997}},{type:"output",position:{start:3997,end:4022},stack:[{type:"Twig.expression.type.variable",value:"content_bottom1",match:["content_bottom1"],position:{start:3997,end:4022}},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"],position:{start:3997,end:4022}}]},{type:"raw",value:`
              </div>
            </div>
          </div>
        </div>
      `,position:{start:4022,end:4101}}]},position:{open:{start:3801,end:3828},close:{start:4101,end:4115}}},{type:"raw",value:"    ",position:{start:4116,end:4120}}]},position:{open:{start:3757,end:3794},close:{start:4120,end:4131}}},{type:"raw",value:`
  </header>
`,position:{start:4132,end:4145}}]},position:{open:{start:612,end:832},close:{start:4145,end:4156}}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{return a(e.render({attributes:new l,...t}))}catch(s){return a("An error occurred whilst rendering /app/web/themes/contrib/civictheme/components/03-organisms/header/header.twig: "+s.toString())}},N={args:(t="light",e={})=>({theme:t,content_top1:"",content_top2:m({theme:t,content:"A design system by Salsa Digital"}).trim(),content_top3:o({...n.args(t),name:"secondary",title:null,type:"dropdown",modifier_class:"ct-flex-justify-content-end"}),content_middle1:"",content_middle2:y(d.args(t)),content_middle3:[o({...n.args(t),name:"primary",title:null,type:"drawer",modifier_class:"ct-flex-justify-content-end"}).trim(),v({theme:t,text:"Search",url:"/search",modifier_class:`ct-flex-justify-content-end ${e.mobileSearchLink?"hide-xxs show-m-flex":""}`}).trim(),w({theme:t,icon:"bars",text:"Menu"}).trim(),g({...i.args,top_menu:e.mobileSearchLink?i.args.top_menu.concat({title:"Search",url:"/search",icon:"magnifier",in_active_trail:!1,is_expanded:!1}):i.args.top_menu}).trim()].join(""),content_bottom1:"",modifier_class:""})};export{k as C,N as H};
