import{b as h,m as d}from"./index-c5ed8602.js";import{a as b,u as z,d as A,r as B}from"./prompt-af8b533b.js";import{T as $}from"./TrashOutline-80d05170.js";import{P as j}from"./Pencil-002fd4d9.js";import{k as C,e as f,N as y,i as S,h as F,J as O,K as U,L as D}from"./naive_ui-1fdfc3bf.js";import{d as J,j as L,r as P,f as E,O as H,P as K,Y as i,W as u,R as M,H as V,c as R,F as W,l as n}from"./vue-c727071f.js";const Y={style:{"max-width":"200px"}},at=J({__name:"prompt_manager",setup(q){const p=L({promptParentListLoading:!1,promptChildListLoading:!1}),r=L({promptParentSelectValue:"",promptParentSelectLabel:""}),_=P(),g=P([]),c=P(),x=P([]),k=()=>{const e=[];for(let t=0;t<_.value.data.length;t++)e.push({value:_.value.data[t].prompt_id,label:_.value.data[t].category});return e},T=async()=>{const e={prompt_parent_id:r.promptParentSelectValue?r.promptParentSelectValue:0};r.promptParentSelectValue="请选择分类：",p.promptParentListLoading=!0,_.value=await b(e),p.promptParentListLoading=!1,g.value=k(),r.promptParentSelectValue=g.value[0].value,m()},N=()=>{const e=[];for(let t=0;t<c.value.data.length;t++)e.push({id:c.value.data[t].prompt_id,title:c.value.data[t].title,describe:c.value.data[t].prompt});return r.promptParentSelectLabel=c.value.data[0].category,e},m=async()=>{const e={prompt_parent_id:r.promptParentSelectValue};p.promptChildListLoading=!0,c.value=await b(e),p.promptChildListLoading=!1,x.value=N()},I=()=>{const e={prompt_parent_id:0,category:null,title:"",prompt:""},t=h.success({title:"添加 prompt",content:()=>["选择分类",n(C,{options:g.value,onUpdateValue:(a,o)=>{e.prompt_parent_id=a,e.category=o.label},loading:p.promptParentListLoading,placeholder:"选择添加的prompt 分类",style:"margin-bottom:10px"},{default:()=>""}),"添加标题",n(f,{onInput:a=>e.title=a,placeholder:"输入标题",style:"margin-bottom:10px"},{default:()=>""}),"添加描述",n(f,{onInput:a=>e.prompt=a,placeholder:"输入描述",style:"margin-bottom:10px",type:"textarea"},{default:()=>""})],positiveText:"确认",negativeText:"取消",onPositiveClick:()=>(t.loading=!0,new Promise((a,o)=>{z(e).then(l=>{d.success("添加成功!"),m(),a(!0)}).catch(l=>{d.error("修改失败: "+l),o(l)}).finally(()=>{t.loading=!1})}))})},w=[{title:"标题",key:"title"},{title:"描述",key:"describe"},{title:"操作",key:"actions",fixed:"right",render(e){return n("div",{class:"flex justify-start space-x-2"},[n(y,{size:"small",type:"error",circle:!0,secondary:!0,onClick:()=>{const t=h.error({title:"删除 prompt",content:"确认删除:  "+e.title+"？",negativeText:"取消",positiveText:"确认",onPositiveClick:()=>(t.loading=!0,new Promise((a,o)=>{A(e.id).then(l=>{d.success("删除成功"),m(),a(!0)}).catch(l=>{d.error("删除失败: "+l),o(l)}).finally(()=>{t.loading=!1})}))})}},{icon:()=>n(S,null,{default:()=>n($)})}),n(y,{size:"small",type:"primary",circle:!0,secondary:!0,onClick:()=>{const t=L({title:e.title,describe:e.describe}),a=h.success({title:"修改 prompt",content:()=>["prompt 标题：",n(f,{defaultValue:t.title,onInput:o=>t.title=o,placeholder:"输入标题",style:"margin-bottom:10px"},{default:()=>""}),"prompt 描述：",n(f,{defaultValue:t.describe,onInput:o=>t.describe=o,placeholder:"输入描述",style:"margin-bottom:10px",type:"textarea"},{default:()=>""})],positiveText:"确认",negativeText:"取消",onPositiveClick:()=>(a.loading=!0,new Promise((o,l)=>{const v={prompt_parent_id:r.promptParentSelectValue,category:r.promptParentSelectLabel,title:t.title,prompt:t.describe};B(e.id,JSON.stringify(v)).then(s=>{d.success("修改成功!"),m(),o(!0)}).catch(s=>{d.error("修改失败: "+s),l(s)}).finally(()=>{a.loading=!1})}))})}},{icon:()=>n(S,null,{default:()=>n(j)})})])}}];return E(()=>{T()}),(e,t)=>{const a=F,o=O,l=U,v=D;return H(),K(W,null,[i(l,{"x-gap":12,cols:4},{default:u(()=>[i(o,{offset:0},{default:u(()=>[M("div",Y,[i(a,{vertical:""},{default:u(()=>[i(V(C),{value:r.promptParentSelectValue,"onUpdate:value":[t[0]||(t[0]=s=>r.promptParentSelectValue=s),t[1]||(t[1]=s=>m())],options:g.value,"max-length":"200px",placeholder:"选择prompt分类：",loading:p.promptParentListLoading},null,8,["value","options","loading"])]),_:1})])]),_:1}),i(o,{offset:2,style:{"justify-self":"end"}},{default:u(()=>[i(V(y),{type:"primary",onClick:t[2]||(t[2]=s=>I())},{default:u(()=>[R("添加")]),_:1})]),_:1})]),_:1}),i(v,{"scroll-x":800,size:"small",columns:w,data:x.value,bordered:!0,placeholder:"请选择分类：",pagination:{pageSize:10},loading:p.promptChildListLoading,style:{"margin-top":"20px"}},null,8,["data","loading"])],64)}}});export{at as default};
//# sourceMappingURL=prompt_manager-007c83aa.js.map