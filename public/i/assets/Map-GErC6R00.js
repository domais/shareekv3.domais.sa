import"./ar-sa-4CptvSCB.js";import"./moment-Zh_rDYzD.js";import{x as v,p as w,q as O,C as R,D as A,e as k,c as u,a as n,g as F,h as m,i as M,o as r,F as C,r as N,l as x,t as I,b as L}from"./index-_3IUqo53.js";import{u as U}from"./useLiteraries-nLvieqkx.js";const B=(p,s)=>{let l="";p&&s&&(l+="?lat="+p+"&lng="+s);const{data:o,error:g,isFetching:_,onFetchResponse:i}=v("events/map"+l).json();return{data:o,error:g,isFetching:_,onFetchResponse:i}},D={class:"home"},T=n("h2",{class:"my-4 d-flex justify-content-between align-items-center"},[M(" فعاليات قريبة منك "),n("a",{href:"/",class:"btn btn-light"},[n("i",{class:"fa-solid fa-home me-1"}),M(" عرض كقائمة")])],-1),V={class:"mt-3 w-100 rounded shadow",id:"map",style:{"aspect-ratio":"1/1"}},q={class:"card",style:{width:"18rem"}},S={class:"card-title"},W=["src"],P={class:"card-text"},j=["href"],J={__name:"Map",setup(p){const s=w(null),l=w(null),o=O({location:null,error:null,events:[],is_sa:!0}),g=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(_,E,{enableHighAccuracy:!0}):data.error="Geolocation is not supported by browser."},_=async e=>{o.location={lat:e.coords.latitude,lng:e.coords.longitude},(o.location.lat<15||o.location.lat>35||o.location.lng<34||o.location.lng>56)&&(o.is_sa=!1,o.location={lat:24.7136,lng:46.6753}),await i(o.location)};R(l,()=>{console.log("location_updated",l.value),i(l.value)},{debounce:500});const i=async e=>{const{data:c,onFetchResponse:h}=B(e.lat,e.lng);h(d=>{console.log(d),d.status===200&&(o.events=c.value.data)})},E=e=>{switch(e.code){case e.PERMISSION_DENIED:data.error="User denied the request for Geolocation.";break;case e.POSITION_UNAVAILABLE:data.error="Location information is unavailable.";break;case e.TIMEOUT:data.error="The request to get user location timed out.";break;case e.UNKNOWN_ERROR:data.error="An unknown error occurred.";break}};return U("upcoming"),A(async()=>{await g()}),(e,c)=>{const h=k("GMapInfoWindow"),d=k("GMapMarker"),G=k("GMapMap");return r(),u("div",D,[T,n("div",V,[F(G,{ref:"mapRef",center:o.location,onCenter_changed:c[1]||(c[1]=a=>l.value={lat:a.lat(),lng:a.lng()}),zoom:11,"map-type-id":"terrain",style:{width:"100%",height:"100%","aspect-ratio":"1/1"}},{default:m(()=>[(r(!0),u(C,null,N(o.events,a=>(r(),x(d,{key:a.id,position:{lat:a==null?void 0:a.lat,lng:a==null?void 0:a.lng},onClick:f=>s.value=a,clickable:!0,draggable:!1},{default:m(()=>{var f,y;return[s.value&&((f=s.value)==null?void 0:f.id)===(a==null?void 0:a.id)?(r(),x(h,{key:0,opened:((y=s.value)==null?void 0:y.id)===(a==null?void 0:a.id),closeclick:!0,onCloseclick:c[0]||(c[0]=b=>s.value=null),options:{pixelOffset:{width:0,height:-35},maxWidth:400,maxHeight:300}},{default:m(()=>{var b;return[n("div",q,[(r(!0),u(C,null,N((b=s.value)==null?void 0:b.events,t=>(r(),u("div",{class:"card-body",key:t.id},[n("h5",S,I(t==null?void 0:t.title),1),n("img",{src:t==null?void 0:t.image,class:"",width:"96",alt:"..."},null,8,W),n("p",P,I(t==null?void 0:t.partner.name),1),n("a",{href:`/event/${t==null?void 0:t.id}`,class:"btn btn-primary"},"عرض التفاصيل",8,j)]))),128))])]}),_:2},1032,["opened"])):L("",!0)]}),_:2},1032,["position","onClick"]))),128))]),_:1},8,["center"])])])}}};export{J as default};
