import{d as p,M as g}from"./index.f841d732.js";import"./paths.85c5da9b.js";import{u as d}from"./index.36ca14b8.js";import"./iframe.407f12c7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.de833af9.js";import"./index.d37d4223.js";import"./index.d3ee7b3e.js";import"./index.356e4a49.js";var m={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=p,x=Symbol.for("react.element"),u=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,j=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function h(r,s,a){var t,o={},n=null,c=null;a!==void 0&&(n=""+a),s.key!==void 0&&(n=""+s.key),s.ref!==void 0&&(c=s.ref);for(t in s)f.call(s,t)&&!y.hasOwnProperty(t)&&(o[t]=s[t]);if(r&&r.defaultProps)for(t in s=r.defaultProps,s)o[t]===void 0&&(o[t]=s[t]);return{$$typeof:x,type:r,key:n,ref:c,props:o,_owner:j.current}}i.Fragment=u;i.jsx=h;i.jsxs=h;m.exports=i;var e=m.exports;const k=""+new URL("accessibility.28fb292b.svg",import.meta.url).href,v=""+new URL("checkmark.2ef51f9a.svg",import.meta.url).href,w=""+new URL("document.246f1e93.svg",import.meta.url).href,N=""+new URL("typography.5f56ef21.svg",import.meta.url).href,_=""+new URL("github.d6de3d00.svg",import.meta.url).href,L=""+new URL("discord.f9b4ffd7.svg",import.meta.url).href,R=""+new URL("youtube.91fcf259.svg",import.meta.url).href,S=""+new URL("chromatic.81f6d7bc.svg",import.meta.url).href,C=""+new URL("figma.49a0f106.svg",import.meta.url).href,U=""+new URL("tutorials.15f3265c.svg",import.meta.url).href,D=""+new URL("styling.460e4f81.jpg",import.meta.url).href,A=""+new URL("context.5396baa3.jpg",import.meta.url).href,T=""+new URL("assets.dcf6c508.jpg",import.meta.url).href;function l(r){const s=Object.assign({h1:"h1",p:"p",code:"code"},d(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Configure your project"}),`
`,e.jsx(s.h1,{id:"configure-your-project",children:"Configure your project"}),`
`,e.jsx(s.p,{children:"Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community."}),`
`,e.jsxs("div",{className:"sb-section",children:[e.jsxs("div",{className:"sb-section-item",children:[e.jsx("img",{src:D,alt:"A wall of logos representing different styling technologies"}),e.jsxs("div",{className:"sb-block",children:[e.jsx("h3",{children:"Add styling and CSS"}),e.jsx("p",{children:"Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook."}),e.jsx("a",{href:"https://storybook.js.org/docs/{{renderer}}/configure/styling-and-css",target:"_blank",children:e.jsxs(s.p,{children:[`Read more on how to set up styling
`,e.jsx("span",{className:"sb-chevron",children:"›"})]})})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx("img",{src:A,alt:"An abstraction representing the composition of data for a component"}),e.jsxs("div",{className:"sb-block",children:[e.jsx("h3",{children:"Provide context and mocking"}),e.jsx("p",{children:`Often when a story doesn't render, it's because your component is
expecting a specific environment or context (like a theme provider) to be available.
Learn more about solving these issues by providing context and mocking to Storybook.`}),e.jsxs("a",{href:"https://storybook.js.org/docs/{{renderer}}/writing-stories/decorators#context-for-mocking",target:"_blank",children:["Read more on how to set up context ",e.jsx("span",{className:"sb-chevron",children:"›"})]})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx("img",{src:T,alt:"A representation of typography and image assets"}),e.jsxs("div",{className:"sb-block",children:[e.jsx("h3",{children:"Load assets and resources"}),e.jsxs("p",{children:["To link static files (like fonts) to your projects and stories, use the ",e.jsx(s.code,{children:"staticDirs"})," configuration option to specify folders to load when starting Storybook."]}),e.jsxs("a",{href:"https://storybook.js.org/docs/{{renderer}}/configure/images-and-assets",target:"_blank",children:["Read more on how to load assets ",e.jsx("span",{className:"sb-chevron",children:"›"})]})]})]})]}),`
`,e.jsx(s.h1,{id:"do-more-with-storybook",children:"Do more with Storybook"}),`
`,e.jsx(s.p,{children:"Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs."}),`
`,e.jsx("br",{}),`
`,e.jsx("div",{className:"sb-section",children:e.jsxs("div",{className:"sb-features-grid-container",children:[e.jsxs("div",{className:"sb-grid-item",children:[e.jsx("img",{src:w,alt:"Document"}),e.jsx("h3",{children:"Autodocs"}),e.jsx("p",{children:"Auto-generate living, interactive reference documentation from your components and stories."}),e.jsxs("a",{href:"https://storybook.js.org/docs/{{renderer}}/writing-docs/autodocs",target:"_blank",children:["Learn more ",e.jsx("span",{className:"sb-chevron",children:"›"})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx("img",{src:v,alt:"Checkmark"}),e.jsx("h3",{children:"Testing"}),e.jsx("p",{children:"Use stories to test a component in all its variations, no matter how complex."}),e.jsxs("a",{href:"https://storybook.js.org/docs/{{renderer}}/writing-tests/introduction",target:"_blank",children:["Learn more ",e.jsx("span",{className:"sb-chevron",children:"›"})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx("img",{src:S,alt:"Chromatic"}),e.jsx("h3",{children:"Publish to Chromatic"}),e.jsx("p",{children:"Publish your Storybook to review and collaborate with your entire team."}),e.jsxs("a",{href:"https://storybook.js.org/docs/{{renderer}}/sharing/publish-storybook#publish-storybook-with-chromatic",target:"_blank",children:["Learn more ",e.jsx("span",{className:"sb-chevron",children:"›"})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx("img",{src:C,alt:"Figma"}),e.jsx("h3",{children:"Figma Plugin"}),e.jsx("p",{children:"Embed your stories into Figma to cross-reference the design and live implementation in one place."}),e.jsxs("a",{href:"https://storybook.js.org/docs/{{renderer}}/sharing/design-integrations#embed-storybook-in-figma-with-the-plugin",target:"_blank",children:["Learn more ",e.jsx("span",{className:"sb-chevron",children:"›"})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx("img",{src:k,alt:"Accessibility"}),e.jsx("h3",{children:"Accessibility"}),e.jsx("p",{children:"Automatically test your components for a11y issues as you develop."}),e.jsxs("a",{href:"https://storybook.js.org/docs/{{renderer}}/writing-tests/accessibility-testing",target:"_blank",children:["Learn more ",e.jsx("span",{className:"sb-chevron",children:"›"})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx("img",{src:N,alt:"Typography"}),e.jsx("h3",{children:"Theming"}),e.jsx("p",{children:"Theme Storybook's UI to personalize it to your project."}),e.jsxs("a",{href:"https://storybook.js.org/docs/{{renderer}}/configure/theming",target:"_blank",children:["Learn more ",e.jsx("span",{className:"sb-chevron",children:"›"})]})]})]})}),`
`,e.jsx(s.h1,{id:"explore-and-connect",children:"Explore and Connect"}),`
`,e.jsx(s.p,{children:"Connect with our community on Discord or start contributing directly on Github. You might also be interesting in watching some videos on Youtube explaining how to take full advantage of Storybook."}),`
`,e.jsx("br",{}),`
`,e.jsx("div",{className:"sb-section",children:e.jsxs("div",{className:"sb-card-grid-container",children:[e.jsxs("a",{className:"sb-explore-card",href:"https://discord.gg/storybook",target:"_blank",children:[e.jsx("img",{src:L,alt:"Discord"}),e.jsx("span",{children:"Discord"})]}),e.jsxs("a",{className:"sb-explore-card",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[e.jsx("img",{src:_,alt:"Github"}),e.jsx("span",{children:"Github"})]}),e.jsxs("a",{className:"sb-explore-card",href:"https://www.youtube.com/@chromaticui",target:"_blank",children:[e.jsx("img",{src:R,alt:"Youtube"}),e.jsx("span",{children:"Youtube"})]}),e.jsxs("a",{className:"sb-explore-card",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[e.jsx("img",{src:U,alt:"Tutorials"}),e.jsx("span",{children:"Tutorials"})]})]})}),`
`,e.jsx("style",{children:`
  .sb-section {
    width: 100%;
    margin-bottom: 64px;
  }

  .sb-section img {
    border-radius: 10px;
    max-height: 170px;
  }

  .sb-section-item {
    width: 100%;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    gap: 18px;
    align-items: center;
  }

  .sb-section-item a,
  .sb-grid-item a {
    font-size: 13px;
    transition: transform 150ms ease-out,color 150ms ease-out;
  }

  .sb-section-item img {
    width: 297px;
  }

  .sb-section-item a > p,
  .sb-grid-item a > p {
    all: unset;
  }

  .sb-block {
    flex: 1;
    margin-left: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px 20px;
  }

  .sb-grid-item img {
    max-height: 48px;
    margin-bottom: 12px;
  }

  .sb-card-grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }

  .sb-explore-card {
    border-radius: 8px;
    border: 2px solid #00000010;
    padding: 20px;
    display: grid;
    justify-content: center;
    font-weight: 700;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    gap: 8px;
  }

  .sb-explore-card:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .sb-explore-card:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .sb-card-background {
    width: 100%;
    height: 150px;
    background-color: #ccc;
  }

  @media screen and (max-width: 600px) {
    .sb-section-item {
      flex-direction: column;
      align-items: flex-start;
    }
    .sb-block {
      margin-left: 0;
      margin-top: 10px;
    }
    .sb-features-grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
    .sb-card-grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  `})]})}function X(r={}){const{wrapper:s}=Object.assign({},d(),r.components);return s?e.jsx(s,Object.assign({},r,{children:e.jsx(l,r)})):l(r)}export{X as default};
//# sourceMappingURL=Configure.12d17cbc.js.map
