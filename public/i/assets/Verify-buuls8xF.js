import{j as k,i as I,q as b,u as w,x as E,r as V,c as i,a as r,e as s,F as m,k as g,b as v,t as p,f as B,g as F,B as j,o as u,h as K,w as N,C as S}from"./index-ds_cStk2.js";const $=()=>{const a=k(),e=I(),l=b({email:a.query.email||"",verify:Array(5).fill(""),errors:[],serverError:[],loading:!1}),{setToken:f,setUser:t}=w();return{state:l,verify:async()=>{l.serverError=[];const{data:c,error:_,isFetching:h,onFetchResponse:y}=E("auth/verify",{method:"POST",body:JSON.stringify({code:l.verify.join(""),token:a.query.token})},{updateDataOnError:!0,onFetchError:o=>{l.serverError=o.data}}).json();return l.loading=h,y(o=>{o.status===200&&(f(c.value.data.token),t(c.value.data.user),e.push("/"))}),{data:c,error:_,isFetching:h}}}},q=a=>({handleInput:t=>{if(a.verify[t-1].length===0&&t>1){const n=document.getElementById(`code-${t-1}`);n&&n.focus()}else if(t<5&&a.verify[t-1].length>0){const n=document.getElementById(`code-${t+1}`);n&&n.focus()}else t===5&&a.verify[t-1].length>0},handleKeydown:(t,n)=>{if(n.key==="Backspace"&&t>1&&a.verify[t-1].length===0){const c=document.getElementById(`code-${t-1}`);c&&c.focus()}},replaceInput:t=>{a.verify[t-1]=""}}),C={class:"home"},T={class:"container wrapper mt-3"},D={class:"position-relative"},O={key:0,class:"alert alert-danger",role:"alert"},R={class:"my-0 py-0"},U={class:"card p-4 text-center"},A=r("h6",null,"من فضلك ادخل رمز التحقق",-1),M=r("span",null," ارسل إلي",-1),G={class:"d-flex flex-row justify-content-center"},J=["id","onUpdate:modelValue","onInput","onKeydown","onFocus"],L={key:0,class:"text-danger"},P={class:"mt-4"},x=["disabled"],z={key:0,class:"spinner-border spinner-border-sm me-1","aria-hidden":"true"},H={role:"status"},W={__name:"Verify",setup(a){const{state:e,verify:l}=$(),{handleInput:f,handleKeydown:t,replaceInput:n}=q(e),c=()=>{e.errors=[],(!e.verify.join("")||e.verify.join("").length<5)&&e.errors.push("الرجاء إدخال البيانات المطلوبة"),!e.errors.length&&l()};return(_,h)=>{const y=V("router-link");return u(),i("div",C,[r("div",T,[r("div",D,[s(e).errors.length?(u(),i("div",O,[r("ul",R,[(u(!0),i(m,null,g(s(e).errors,o=>(u(),i("li",null,p(o),1))),256))])])):v("",!0),r("div",U,[A,r("div",null,[M,r("small",null,p(s(e).email),1),B(y,{to:"/login",class:"text-decoration-none ms-3"},{default:F(()=>[K("تغيير")]),_:1})]),r("form",{id:"otp",class:"mt-2",novalidate:"",onSubmit:j(c,["prevent"]),dir:"ltr"},[r("div",G,[(u(),i(m,null,g(5,o=>N(r("input",{id:"code-"+o,key:o,"onUpdate:modelValue":d=>s(e).verify[o-1]=d,autocomplete:"off",autofocus:"",maxlength:1,class:"m-2 text-center form-control rounded",required:"",onInput:d=>s(f)(o),onKeydown:d=>s(t)(o,d),onFocus:d=>s(n)(o)},null,40,J),[[S,s(e).verify[o-1]]])),64))]),s(e).serverError.errors?(u(),i("small",L,p(s(e).serverError.errors.token[0]),1)):v("",!0),r("div",P,[r("button",{type:"submit",class:"btn btn-outline-secondary px-4 validate",disabled:s(e).loading},[s(e).loading?(u(),i("span",z)):v("",!0),r("span",H,p(s(e).loading?"جاري التحقق":"تسجيل الدخول"),1)],8,x)])],32)])])])])}}};export{W as default};
