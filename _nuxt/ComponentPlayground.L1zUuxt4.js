import{M as m,I as p,d as c,a9 as i,r as l,N as e,l as u}from"./entry.UKBRYakB.js";import{u as d}from"./asyncData.CQAKK6cS.js";import f from"./Ellipsis.t4jIU0bz.js";import y from"./ComponentPlaygroundData.iPSU6VLZ.js";import"./TabsHeader.22Q1SgFJ.js";import"./ComponentPlaygroundProps.bMQ_Xb-b.js";import"./ProseH4.gG3lkcUw.js";import"./ProseCodeInline.EHOJO7oC.js";import"./Badge.0DQMt38Y.js";import"./MDCSlot.QhL_mCeO.js";import"./slot.nZtAowyq.js";import"./ProseP.OZ-hnUuw.js";import"./index.g2h6splT.js";import"./ComponentPlaygroundSlots.vue.-uhgbIMx.js";import"./ComponentPlaygroundTokens.vue.RxOhG0XO.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-af8cd031"]]);export{V as default};