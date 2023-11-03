import{l as B,r as n,c as d,w as o,o as l,a as i,m as M,f as S,p as N,F as V,b as H,t as F}from"./vue.esm-bundler.fd807677.js";const q={__name:"ButtonMenu",props:{text:{type:String,default:"Ocelot Menu"},items:{type:Array,required:!1,default:()=>[{title:"Item 1"},{title:"Item 2"},{title:"Item 3"}]},openOnClick:{type:Boolean,required:!1,default:!0},openOnHover:{type:Boolean,required:!1,default:!1},openOnFocus:{type:Boolean,required:!1,default:!1},size:{type:String,required:!1},variant:{type:String,required:!1},color:{type:String,required:!1},prependIcon:{type:String,required:!1},appendIcon:{type:String,required:!1},rounded:{type:Number,required:!1},block:{type:Boolean,required:!1},icon:{type:String,required:!1},density:{type:String,required:!1},elevation:{type:Number,required:!1},active:{type:Boolean,required:!1}},setup(e){const s=B(!1);return(C,u)=>{const O=n("v-btn"),b=n("v-list-item-title"),x=n("v-list-item"),k=n("v-list"),I=n("v-menu");return l(),d(I,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=t=>s.value=t),"open-on-click":e.openOnClick,"open-on-hover":e.openOnHover,"open-on-focus":e.openOnFocus},{activator:o(({props:t})=>[i(O,M(t,{text:e.text,icon:e.icon,"prepend-icon":e.prependIcon,"append-icon":e.appendIcon,rounded:e.rounded,size:e.size,color:e.color,block:e.block,variant:e.variant,density:e.density,elevation:e.elevation,active:e.active}),null,16,["text","icon","prepend-icon","append-icon","rounded","size","color","block","variant","density","elevation","active"])]),default:o(()=>[i(k,null,{default:o(()=>[(l(!0),S(V,null,N(e.items,(t,c)=>(l(),d(x,{key:c,value:c},{default:o(()=>[i(b,null,{default:o(()=>[H(F(t.title),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue","open-on-click","open-on-hover","open-on-focus"])}}},z=q;q.__docgenInfo={exportName:"default",displayName:"ButtonMenu",description:"",tags:{},props:[{name:"text",type:{name:"string"},defaultValue:{func:!1,value:'"Ocelot Menu"'}},{name:"items",type:{name:"array"},required:!1,defaultValue:{func:!1,value:'[{ title: "Item 1" }, { title: "Item 2" }, { title: "Item 3" }]'}},{name:"openOnClick",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"openOnHover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"openOnFocus",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},required:!1},{name:"variant",type:{name:"string"},required:!1},{name:"color",type:{name:"string"},required:!1},{name:"prependIcon",type:{name:"string"},required:!1},{name:"appendIcon",type:{name:"string"},required:!1},{name:"rounded",type:{name:"number"},required:!1},{name:"block",type:{name:"boolean"},required:!1},{name:"icon",type:{name:"string"},required:!1},{name:"density",type:{name:"string"},required:!1},{name:"elevation",type:{name:"number"},required:!1},{name:"active",type:{name:"boolean"},required:!1}],sourceFiles:["/home/tulex/Entwicklung/Projekte/NUXT/N4/components/layout/ButtonMenu.vue"]};const h={title:"Layout/ButtonMenu",component:z,tags:["autodocs"],argTypes:{text:{control:"text"},items:{control:"array",options:[{title:"Item 1"},{title:"Item 2"},{title:"Item 3"}]},openOnClick:{control:"boolean"},openOnHover:{control:"boolean"},openOnFocus:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large","x-large"]},variant:{control:"select",options:["flat","elevated","tonal","outlined","plain"]},color:{control:"select",options:["primary","secondary","success","info","warning","error"]},rounded:{control:"select",options:["sm","md","lg","xl"]},block:{control:"boolean"},icon:{control:"select",options:["$vuetify","mdiPlus","mdi-account"]},density:{control:"select",options:["default","comfortable","compact"]},elevation:{control:{type:"range",min:0,max:24,step:1}},appendIcon:{control:"text"},prependIcon:{control:"text"},active:{control:"boolean"}}},a={args:{text:"Ocelot Menu"}},r={args:{openOnHover:!0}};var m,p,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'Ocelot Menu'
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,y,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    openOnHover: true
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const E=["Normal","OpenOnHOver"];export{a as Normal,r as OpenOnHOver,E as __namedExportsOrder,h as default};
//# sourceMappingURL=ButtonMenu.stories.08428dd4.js.map
