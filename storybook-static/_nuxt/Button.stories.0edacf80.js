import{r as te,c as ce,o as ie}from"./vue.esm-bundler.fd807677.js";import{_ as le}from"./_plugin-vue_export-helper.c27b6911.js";const ae={props:{text:{type:String,required:!1,default:"Ocelot"},size:{type:String,required:!1},variant:{type:String,required:!1},color:{type:String,required:!1},prependIcon:{type:String,required:!1},appendIcon:{type:String,required:!1},rounded:{type:Number,required:!1},block:{type:Boolean,required:!1},icon:{type:String,required:!1},density:{type:String,required:!1},elevation:{type:Number,required:!1},active:{type:Boolean,required:!1}}};function de(ne,me,e,ue,ge,ye){const se=te("v-btn");return ie(),ce(se,{type:"button",text:e.text,icon:e.icon,"prepend-icon":e.prependIcon,"append-icon":e.appendIcon,rounded:e.rounded,size:e.size,color:e.color,block:e.block,variant:e.variant,density:e.density,elevation:e.elevation,active:e.active,onClick:ne.onClick},null,8,["text","icon","prepend-icon","append-icon","rounded","size","color","block","variant","density","elevation","active","onClick"])}const pe=le(ae,[["render",de]]);ae.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"Ocelot"'}},{name:"size",type:{name:"string"},required:!1},{name:"variant",type:{name:"string"},required:!1},{name:"color",type:{name:"string"},required:!1},{name:"prependIcon",type:{name:"string"},required:!1},{name:"appendIcon",type:{name:"string"},required:!1},{name:"rounded",type:{name:"number"},required:!1},{name:"block",type:{name:"boolean"},required:!1},{name:"icon",type:{name:"string"},required:!1},{name:"density",type:{name:"string"},required:!1},{name:"elevation",type:{name:"number"},required:!1},{name:"active",type:{name:"boolean"},required:!1}],sourceFiles:["/home/tulex/Entwicklung/Projekte/NUXT/N4/components/layout/Button.vue"]};const qe={title:"Layout/Button",component:pe,tags:["autodocs"],argTypes:{text:{control:"text",defaultValue:"Ocelot"},onClick:{action:"clicked",options:{argTypesRegex:"^on.*"}},size:{control:"select",options:["x-small","small","medium","large","x-large"]},variant:{control:"select",options:["flat","elevated","tonal","outlined","plain"]},color:{control:"select",options:["primary","secondary","success","info","warning","error"]},rounded:{control:"select",options:["sm","md","lg","xl"]},block:{control:"boolean"},icon:{control:"select",options:["$vuetify","mdiPlus","mdi-account"]},density:{control:"select",options:["default","comfortable","compact"]},elevation:{control:{type:"range",min:0,max:24,step:1}},appendIcon:{control:"text"},prependIcon:{control:"text"},active:{control:"boolean"}}},r={args:{text:"Ocelot"}},o={args:{icon:"$vuetify"}},a={args:{size:"large"}},n={args:{size:"small"}},s={args:{prependIcon:"$vuetify"}},t={args:{appendIcon:"$vuetify"}},c={args:{block:!0}},i={args:{color:"primary"}},l={args:{color:"secondary"}},d={args:{color:"warning"}},p={args:{color:"info"}},m={args:{color:"error"}},u={args:{rounded:"xl"}},g={args:{density:"compact"}};var y,f,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: 'Ocelot'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var q,S,x;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    icon: '$vuetify'
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var b,k,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(I=(k=a.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var _,z,B;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(B=(z=n.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var N,C,w;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    prependIcon: '$vuetify'
  }
}`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var O,L,T;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    appendIcon: '$vuetify'
  }
}`,...(T=(L=t.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var X,h,E;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    block: true
  }
}`,...(E=(h=c.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var P,V,j;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  }
}`,...(j=(V=i.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var F,R,U;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    color: 'secondary'
  }
}`,...(U=(R=l.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var A,D,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    color: 'warning'
  }
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var H,J,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    color: 'info'
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,W;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    color: 'error'
  }
}`,...(W=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    rounded: 'xl'
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,oe;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    density: 'compact'
  }
}`,...(oe=(re=g.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const Se=["Normal","Icon","Large","Small","prependIcon","appendIcon","block","primary","secondary","warning","info","error","roundedXL","densityCompact"];export{o as Icon,a as Large,r as Normal,n as Small,Se as __namedExportsOrder,t as appendIcon,c as block,qe as default,g as densityCompact,m as error,p as info,s as prependIcon,i as primary,u as roundedXL,l as secondary,d as warning};
//# sourceMappingURL=Button.stories.0edacf80.js.map
