// phpcs:ignoreFile
import{I as r}from"./icon-De8ZERzE.js";import{C as e}from"./constants-DyyrGQu8.js";import"./twig-DV4g_c5C.js";import"./_commonjsHelpers-C4iS2aBk.js";const m={title:"Base/Icon",component:r,argTypes:{symbol:{control:{type:"select"},options:e.ICONS},alt:{control:{type:"text"}},size:{control:{type:"radio"},options:["auto",...Object.keys(e.SCSS_VARIABLES["ct-icon-sizes-default"]),...Object.keys(e.SCSS_VARIABLES["ct-icon-sizes"])]},attributes:{control:{type:"text"}},modifier_class:{control:{type:"text"}}}},t={parameters:{layout:"centered"},args:{symbol:e.ICONS[0],alt:"Icon alt text",size:"auto",modifier_class:"",attributes:""}};var o,s,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  args: {
    symbol: Constants.ICONS[0],
    alt: 'Icon alt text',
    size: 'auto',
    modifier_class: '',
    attributes: ''
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const p=["Icon"];export{t as Icon,p as __namedExportsOrder,m as default};
