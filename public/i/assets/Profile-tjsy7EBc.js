import{h as g}from"./moment-R4p5uN3T.js";import"./ar-sa-e_jogrDw.js";import{d as w}from"./default-event-TthUPv4k.js";import{e as j,o,c as l,a as t,f as e,g as N,h as A,t as a,i as d,b as r,x as C,u as B,F as y,r as x,l as $}from"./index-S5AGkiou.js";const E={class:"event1"},F=["src","alt"],M={class:"dtails"},V={class:"title"},Y={class:"d-flex justify-content-between align-items-center mt-3"},D={class:"partner"},S=["src","alt"],T={class:"d-flex"},P={key:0,class:"date text-end"},U={class:"ms-0"},q=t("i",{class:"fa-regular fa-calendar-days ms-2"},null,-1),G=t("br",null,null,-1),L={class:"d-flex flex-row-reverse align-items-center"},O=t("i",{class:"fa-regular fa-clock ms-2"},null,-1),z={dir:"ltr"},H=t("div",{class:"atendees"},[t("div",{class:"number"}),t("div",{class:"actions"})],-1),k={__name:"ProfileEvent",props:{event:{type:Object,required:!0}},setup(s){return(n,i)=>{const _=j("router-link");return o(),l("div",E,[t("img",{src:s.event.image?s.event.image:e(w),alt:s.event.title,class:"img"},null,8,F),t("div",M,[t("div",V,[N(_,{to:{name:"event-details",params:{id:s.event.id}},class:"fw-semibold"},{default:A(()=>[d(a(s.event.title??"N/A"),1)]),_:1},8,["to"])]),t("div",Y,[t("div",D,[t("img",{src:s.event.partner.logo,alt:s.event.partner.logo},null,8,S),t("div",T,[d(a(s.event.partner.name??"N/A")+" ",1),t("span",null,a(s.event.partner.city??"N/A"),1)])]),s.event.start_date?(o(),l("div",P,[t("span",U,a(e(g)(s.event.start_date).format("DD-MM-YYYY")),1),q,G,t("div",L,[O,t("div",z,a(e(g)(s.event.start_date).format("hh:mm A")),1)])])):r("",!0)]),H])])}}},I=()=>{const{data:s,error:n,isFetching:i}=C("events/user").json();return{data:s,error:n,isFetching:i}},J={class:"home"},K={key:0,class:"profile mb-5"},Q={class:"d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom"},R={class:"d-flex align-items-center"},W=["src"],X={class:"text-secondary"},Z={class:"d-flex justify-content-between align-items-center"},tt=t("i",{class:"fa-solid fa-circle-check me-2 text-primary"},null,-1),et={class:"d-flex justify-content-between align-items-center pb-0"},st=t("i",{class:"fa-solid fa-circle-check me-2 text-primary"},null,-1),at={class:"nav nav-tabs",id:"myTab",role:"tablist"},nt={class:"nav-item",role:"presentation"},ot={class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home-tab-pane",type:"button",role:"tab","aria-controls":"home-tab-pane","aria-selected":"true"},it={class:"nav-item",role:"presentation"},lt={class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile-tab-pane",type:"button",role:"tab","aria-controls":"profile-tab-pane","aria-selected":"false"},ct={class:"tab-content py-4",id:"myTabContent"},rt={class:"tab-pane fade show active",id:"home-tab-pane",role:"tabpanel","aria-labelledby":"home-tab",tabindex:"0"},dt=t("h2",{class:"my-4 d-flex justify-content-between align-items-center"}," فعالياتك المحجوزة القادمة ",-1),_t={key:0},mt=t("div",{class:"alert alert-info"},"لا يوجد لديك حجوزات قادمة",-1),ht=[mt],ut={class:"tab-pane fade",id:"profile-tab-pane",role:"tabpanel","aria-labelledby":"profile-tab",tabindex:"0"},bt=t("h2",{class:"my-4 d-flex justify-content-between align-items-center"}," فعالياتك المحجوزة السابقة ",-1),vt={key:0},ft=t("div",{class:"alert alert-info"},"لا يوجد لديك حجوزات سابقة",-1),pt=[ft],jt={__name:"Profile",setup(s){const{data:n}=I(),{getUser:i}=B(),_=Math.floor(Math.random()*16777215).toString(16);return(gt,yt)=>{var m,h,u,b,v,f,p;return o(),l("div",J,[e(i)?(o(),l("div",K,[t("div",Q,[t("div",R,[t("img",{src:`https://ui-avatars.com/api/?name=${e(i).name}&background=${e(_)}&color=fff`,class:"img me-3",alt:""},null,8,W),t("h4",null,a(e(i).name),1)]),t("div",X,a((m=e(n))==null?void 0:m.data.count)+" فعالية ",1)]),t("p",Z,[t("span",null,[tt,d(" "+a(e(i).email),1)])]),t("p",et,[t("span",null,[st,d(" "+a(e(i).phone),1)])])])):r("",!0),t("ul",at,[t("li",nt,[t("button",ot," حجوزاتك القادمة ("+a((h=e(n))==null?void 0:h.data.upcoming.length)+") ",1)]),t("li",it,[t("button",lt," حجوزاتك السابقة ("+a((u=e(n))==null?void 0:u.data.past.length)+") ",1)])]),t("div",ct,[t("div",rt,[dt,((b=e(n))==null?void 0:b.data.upcoming.length)===0?(o(),l("div",_t,ht)):r("",!0),(o(!0),l(y,null,x((v=e(n))==null?void 0:v.data.upcoming,c=>(o(),$(k,{key:c.id,event:c},null,8,["event"]))),128))]),t("div",ut,[bt,((f=e(n))==null?void 0:f.data.past.length)===0?(o(),l("div",vt,pt)):r("",!0),(o(!0),l(y,null,x((p=e(n))==null?void 0:p.data.past,c=>(o(),$(k,{key:c.id,event:c},null,8,["event"]))),128))])])])}}};export{jt as default};
