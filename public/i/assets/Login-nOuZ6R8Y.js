import{q as p,i as v,x as _,c as o,a as s,e as r,B as f,F as g,k as y,b as c,w as b,C as k,t as h,o as n}from"./index-ds_cStk2.js";const E=()=>{const a=p({email:"",verify:Array(4).fill(""),loading:!1,errors:[],valid:!1,serverError:[]}),u=v();return{login:async()=>{a.serverError=[];const{data:i,error:d,isFetching:t,onFetchResponse:l}=_("auth/login",{method:"POST",body:JSON.stringify({email:a.email})},{updateDataOnError:!0,onFetchError:m=>{a.serverError=m.data}}).json();return a.loading=t,l(m=>{m.status===200&&u.push("/verify?token="+i.value.data.token+"&email="+a.email)}),{data:i,error:d,isFetching:t}},state:a}},w={class:"home"},x={class:"container wrapper mt-3"},F={key:0,class:"card p-4"},S=s("div",{class:"text-center mb-3 fw-bold"},[s("p",null,"من فضلك أدخل البريد الالكتروني الخاص بك لإرسال رمز التحقق")],-1),L={key:0,class:"alert alert-danger",role:"alert"},A={class:"form-outline mb-4"},B={key:0,class:"text-danger"},N=["disabled"],V={key:0,class:"spinner-border spinner-border-sm me-1","aria-hidden":"true"},D={role:"status"},q={__name:"Login",setup(a){const{login:u,state:e}=E(),i=async()=>{e.errors=[],e.email||e.errors.push("الرجاء إدخال البريد الالكتروني");const d=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(d).forEach(function(t){t.checkValidity()||(t.classList.add("was-validated"),e.errors.push("الرجاء إدخال البيانات المطلوبة")),t.classList.add("was-validated")},!1),!e.errors.length&&u()};return(d,t)=>(n(),o("div",w,[s("div",x,[r(e).valid?c("",!0):(n(),o("div",F,[s("form",{class:"needs-validation",novalidate:"",onSubmit:f(i,["prevent"])},[S,r(e).errors.length?(n(),o("div",L,[s("ul",null,[(n(!0),o(g,null,y(r(e).errors,l=>(n(),o("li",null,h(l),1))),256))])])):c("",!0),s("div",A,[b(s("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=l=>r(e).email=l),placeholder:"البريد الالكتروني",id:"loginName",class:"form-control"},null,512),[[k,r(e).email]]),r(e).serverError.errors?(n(),o("small",B,h(r(e).serverError.errors.email[0]),1)):c("",!0)]),s("div",null,[s("button",{type:"submit",disabled:r(e).loading,class:"btn btn-outline-secondary btn-block"},[r(e).loading?(n(),o("span",V)):c("",!0),s("span",D,h(r(e).loading?"جاري التحقق":"أرسل رمز التحقق"),1)],8,N)])],32)]))])]))}};export{q as default};
