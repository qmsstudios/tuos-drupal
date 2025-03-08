// phpcs:ignoreFile
import{C as u,H as a}from"./header.stories.data-DxGUfjUG.js";import"./twig-DV4g_c5C.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./logo-jyY9ROf_.js";import"./image-CfJAamwf.js";import"./logo.stories.data-DWX2HUon.js";import"./constants-DyyrGQu8.js";import"./paragraph-BxGZvWqG.js";import"./navigation.stories.data-BXOMOWCJ.js";import"./menu-CICykRYl.js";import"./link-DcuBT3V7.js";import"./text-icon-CbQBtcqi.js";import"./icon-De8ZERzE.js";import"./heading-Qdw9vS4K.js";import"./search-DcPG07jG.js";import"./mobile-navigation.stories-CLrwo5Rp.js";import"./button-QaI2GxOC.js";const W={title:"Organisms/Header",component:u,argTypes:{theme:{control:{type:"radio"},options:["light","dark"]},content_top1:{control:{type:"text"}},content_top2:{control:{type:"text"}},content_top3:{control:{type:"text"}},content_middle1:{control:{type:"text"}},content_middle2:{control:{type:"text"}},content_middle3:{control:{type:"text"}},content_bottom1:{control:{type:"text"}},modifier_class:{control:{type:"text"}}}},e={parameters:{layout:"fullscreen"},args:a.args("light")},r={parameters:{layout:"fullscreen",backgrounds:{default:"Dark"}},args:a.args("dark")},t={parameters:{layout:"fullscreen"},args:a.args("light",{mobileSearchLink:!0})};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  args: HeaderData.args('light')
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Dark'
    }
  },
  args: HeaderData.args('dark')
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,l,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  args: HeaderData.args('light', {
    mobileSearchLink: true
  })
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const E=["Header","HeaderDark","HeaderWithMobileNavSearchLink"];export{e as Header,r as HeaderDark,t as HeaderWithMobileNavSearchLink,E as __namedExportsOrder,W as default};
