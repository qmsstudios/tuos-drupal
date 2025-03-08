// phpcs:ignoreFile
import{S as i}from"./social-links-hdqIkTSh.js";import{I as r}from"./icon-De8ZERzE.js";import"./twig-DV4g_c5C.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./item-list-BgprjUaZ.js";import"./button-QaI2GxOC.js";import"./text-icon-CbQBtcqi.js";const u={title:"Molecules/Social Links",component:i,argTypes:{theme:{control:{type:"radio"},options:["light","dark"]},items:{control:{type:"array"}},with_border:{control:{type:"boolean"}},modifier_class:{control:{type:"text"}},attributes:{control:{type:"text"}}}},t={parameters:{layout:"centered"},args:{theme:"light",items:[{title:"Facebook",icon:"facebook",url:"https://www.facebook.com"},{title:"Instagram",icon:"instagram",url:"https://www.instagram.com"},{title:"Icon with inline SVG",icon_html:r({symbol:"linkedin",size:"small"}),icon:"linkedin",url:"https://www.linkedin.com"},{title:"X",icon:"x",url:"https://www.twitter.com"},{title:"YouTube",icon:"youtube",url:"https://www.youtube.com"},{icon_html:'<img class="ct-button__icon" width="16" height="16" src="./demo/images/demo1.jpg"/>',url:"https://www.dropbox.com"}],with_border:!1,modifier_class:"",attributes:""}};var o,e,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  args: {
    theme: 'light',
    items: [{
      title: 'Facebook',
      icon: 'facebook',
      url: 'https://www.facebook.com'
    }, {
      title: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com'
    }, {
      title: 'Icon with inline SVG',
      // icon_html should take precedence.
      icon_html: Icon({
        symbol: 'linkedin',
        size: 'small'
      }),
      icon: 'linkedin',
      url: 'https://www.linkedin.com'
    }, {
      title: 'X',
      icon: 'x',
      url: 'https://www.twitter.com'
    }, {
      title: 'YouTube',
      icon: 'youtube',
      url: 'https://www.youtube.com'
    }, {
      icon_html: \`<img class="ct-button__icon" width="16" height="16" src="./demo/images/demo1.jpg"/>\`,
      url: 'https://www.dropbox.com'
      // Deliberately left without a title.
    }],
    with_border: false,
    modifier_class: '',
    attributes: ''
  }
}`,...(n=(e=t.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const h=["SocialLinks"];export{t as SocialLinks,h as __namedExportsOrder,u as default};
