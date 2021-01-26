(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{174:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),c=n(8),o=n.n(c),i=n(38),s=n(16),l=n(15),u=n(22),d=n(223),j=n(215),b=n(221),m=n(216),p=n(222),f=n(73),O=n.n(f),h=n(210),v=n(213),x=n(214),g=n(34),y=n(9),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(u.a)(t,2),a=n[0],c=n[1],o=function(){c(e)},i=function(e){var t=e.target;c(Object(y.a)(Object(y.a)({},a),{},Object(g.a)({},t.name,t.value)))};return[a,i,o]},k=n(20),C=n.n(k),E=n(37),N="https://my-mern-calendar-app.herokuapp.com/api",S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(N,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},I=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(N,"/").concat(e),r=localStorage.getItem("token");return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},D="[ui] Open modal",T="[ui] Close modal",A="[event] Set active",P="[event] Logout event",_="[event] Add new",L="[event] Clear active event",R="[event] Event updated",W="[event] Event deleted",F="[event] Events loaded",G="[auth] Finish checking login state",q="[auth] Login",z="[auth] Logout",V=n(31),B=n.n(V),H=n(27),J=n.n(H),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{end:J()(e.end).toDate(),start:J()(e.start).toDate()})}))},U=function(e){return{type:_,payload:e}},X=function(){return{type:L}},Y=function(e){return{type:R,payload:e}},K=function(){return{type:W}},Q=function(e){return{type:F,payload:e}},Z=function(){return{type:G}},$=function(e){return{type:q,payload:e}},ee=function(){return function(e){localStorage.clear(),e({type:P}),e(te())}},te=function(){return{type:z}},ne=n.p+"static/media/video.e38af241.mp4",ae=n.p+"static/media/poster.2a0908b6.png",re=function(){return Object(a.jsx)("video",{id:"video",poster:ae,autoPlay:!0,muted:!0,loop:!0,children:Object(a.jsx)("source",{src:ne,type:"video/mp4"})})};function ce(){return Object(a.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)("a",{href:"https://danielaliendo.github.io/CalendarApp/",children:"Daniela Liendo | CalendarApp"})," ",(new Date).getFullYear(),"."]})}var oe=Object(v.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),textTransform:"none","&:focus":{outline:"none"}},container:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},box:{padding:25,backgroundColor:"white",borderRadius:4}}})),ie=function(){var e=oe(),t=Object(l.b)(),n=w({lEmail:"danielaliendo98@gmail.com",lPassword:"123456"}),r=Object(u.a)(n,2),c=r[0],o=r[1],s=c.lEmail,f=c.lPassword;return Object(a.jsxs)(x.a,{className:e.container,component:"main",maxWidth:"xs",children:[Object(a.jsxs)(p.a,{className:e.box,boxShadow:1,children:[Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(d.a,{className:e.avatar,children:Object(a.jsx)(O.a,{})}),Object(a.jsx)(h.a,{component:"h1",variant:"h5",children:"Iniciar sesi\xf3n"}),Object(a.jsxs)("form",{onSubmit:function(e){var n,a;e.preventDefault(),t((n=s,a=f,function(){var e=Object(E.a)(C.a.mark((function e(t){var r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t($({uid:c.uid,name:c.name}))):B.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},className:e.form,children:[Object(a.jsx)(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"lEmail",value:s,onChange:o,autoComplete:"email",autoFocus:!0}),Object(a.jsx)(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"lPassword",value:f,onChange:o,label:"Contrase\xf1a",type:"password",id:"password",autoComplete:"current-password"}),Object(a.jsx)(j.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,size:"large",children:"Ingresar"}),Object(a.jsx)(m.a,{container:!0,children:Object(a.jsx)(m.a,{item:!0,children:Object(a.jsx)(i.b,{to:"/register",children:"Registrate gratis"})})})]})]}),Object(a.jsx)(p.a,{mt:8,children:Object(a.jsx)(ce,{})})]}),Object(a.jsx)(re,{})]})},se=n(217),le=n(218),ue=n(104),de=n.n(ue),je=Object(v.a)((function(e){return{root:{flexGrow:1,marginBottom:10,color:"#0ebdfb"},menuButton:{"&:focus":{outline:"none"}},title:{flexGrow:1},button:{"&:focus":{outline:"none",backgroundColor:"#f44336"},"&:hover":{backgroundColor:"#f44336"},textTransform:"none",backgroundColor:"#f44336",marginLeft:10}}})),be=function(){var e=je(),t=Object(l.c)((function(e){return e.auth})).name,n=Object(l.b)();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(se.a,{style:{backgroundColor:"#0ebdfb"},elevation:0,position:"static",children:Object(a.jsxs)(le.a,{children:[Object(a.jsxs)(h.a,{variant:"h6",className:e.title,children:["Calendario - ",t]}),Object(a.jsx)(j.a,{onClick:function(){n(ee())},variant:"contained",color:"primary",className:e.button,endIcon:Object(a.jsx)(de.a,{}),children:"Cerrar sesi\xf3n"})]})})})},me=n(92),pe=(n(138),n(139),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),fe=function(e){var t=e.event,n=t.title,r=t.user;return Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:n})," ",Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["- ",r.name]})]})},Oe=n(89),he=n.n(Oe),ve=n(90),xe=n.n(ve),ge=function(){return{type:D}},ye={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};he.a.setAppElement("#root");var we=J()().minutes(0).seconds(0).add(1,"hours"),ke=we.clone().add(1,"hours"),Ce={title:"",notes:"",start:we.toDate(),end:ke.toDate()},Ee=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,n=Object(l.b)(),c=Object(r.useState)(we.toDate()),o=Object(u.a)(c,2),i=o[0],s=o[1],d=Object(r.useState)(ke.toDate()),j=Object(u.a)(d,2),b=j[0],m=j[1],p=Object(r.useState)(!0),f=Object(u.a)(p,2),O=f[0],h=f[1],v=Object(r.useState)(Ce),x=Object(u.a)(v,2),w=x[0],k=x[1];Object(r.useEffect)((function(){k(t||Ce)}),[t,k]);var N=w.notes,S=w.title,D=w.start,A=w.end,P=function(e){var t=e.target;k(Object(y.a)(Object(y.a)({},w),{},Object(g.a)({},t.name,t.value)))},_=function(){n({type:T}),k(Ce),n(X())};return Object(a.jsxs)(he.a,{isOpen:e,onRequestClose:_,style:ye,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(a.jsx)("h1",{children:t?"Editar evento":"Nuevo evento"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,r=J()(D),c=J()(A);return r.isSameOrAfter(c)?B.a.fire("Error","La fecha fin debe ser mayor a la fecha de inicio","error"):S.trim().length<=0?h(!1):(n(t?(a=w,function(){var e=Object(E.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(Y(a)):B.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(E.a)(C.a.mark((function t(n,a){var r,c,o,i,s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,I("events",e,"POST");case 4:return i=t.sent,t.next=7,i.json();case 7:(s=t.sent).ok&&(e.id=s.evento.id,e.user={_id:c,name:o},console.log(e),n(U(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(w)),h(!0),void _())},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora inicio"}),Object(a.jsx)(xe.a,{onChange:function(e){s(e),k(Object(y.a)(Object(y.a)({},w),{},{start:e}))},value:i,className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora fin"}),Object(a.jsx)(xe.a,{onChange:function(e){m(e),k(Object(y.a)(Object(y.a)({},w),{},{end:e}))},value:b,minDate:i,className:"form-control"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titulo y notas"}),Object(a.jsx)("input",{type:"text",className:" form-control ".concat(!O&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:S,onChange:P}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:P}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Guardar"})]})]})]})},Ne=n(219),Se=n(107),Ie=n.n(Se),De=Object(v.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},addIcon:{position:"absolute",bottom:10,right:10,zIndex:4,backgroundColor:"#2196f3","&:focus":{outline:"none",backgroundColor:"#2196f3"}}}})),Te=function(){var e=De(),t=Object(l.b)();return Object(a.jsx)("div",{style:{zIndex:4},className:"animate__animated animate__bounce",children:Object(a.jsx)(Ne.a,{className:"".concat(e.addIcon," ").concat(e.root),color:"primary","aria-label":"add",onClick:function(){t(ge()),t(X())},children:Object(a.jsx)(Ie.a,{})})})},Ae=n(108),Pe=n.n(Ae),_e=Object(v.a)((function(e){var t;return{root:(t={position:"absolute",top:"76px",left:"130px",width:"140px",textAlign:"center"},Object(g.a)(t,e.breakpoints.down("md"),{top:"76px"}),Object(g.a)(t,e.breakpoints.down("sm"),{top:"68px"}),t),button:{"&:focus":{outline:"none",backgroundColor:"#f44336"},"&:hover":{backgroundColor:"#f44336"},backgroundColor:"#f44336",textTransform:"none",color:"white"}}})),Le=function(){var e=_e(),t=Object(l.b)();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(j.a,{onClick:function(){t(function(){var e=Object(E.a)(C.a.mark((function e(t,n){var a,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,I("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(K()):B.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},size:"small",variant:"contained",className:e.button,startIcon:Object(a.jsx)(Pe.a,{}),children:"Borrar"})})};J.a.locale("es");var Re=Object(me.b)(J.a),We=function(){var e=Object(l.c)((function(e){return e.auth})).uid,t=Object(r.useState)(localStorage.getItem("lastView")||"month"),n=Object(u.a)(t,2),c=n[0],o=n[1],i=Object(l.b)(),s=Object(l.c)((function(e){return e.calendar})),d=s.events,j=s.activeEvent;Object(r.useEffect)((function(){i(function(){var e=Object(E.a)(C.a.mark((function e(t){var n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=M(a.eventos),console.log(r),t(Q(r)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[i]);return Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(be,{}),Object(a.jsx)(me.a,{localizer:Re,events:d,startAccessor:"start",endAccessor:"end",messages:pe,eventPropGetter:function(t){return{style:{backgroundColor:e===t.user._id?"#367cf7":"#9E9E9E",borderRadius:0,border:"none",opacity:.8,display:"block",color:"white",position:"relative"}}},onDoubleClickEvent:function(e){i(ge())},onSelectEvent:function(e){i({type:A,payload:e})},onView:function(e){o(e),localStorage.setItem("lastView",e)},onSelectSlot:function(e){i(X())},selectable:!0,view:c,components:{event:fe}}),Object(a.jsx)(Te,{}),j&&Object(a.jsx)(Le,{}),Object(a.jsx)(Ee,{})]})},Fe=n(75),Ge=function(e){var t=e.isAuthenticated,n=e.component,r=Object(Fe.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(s.b,Object(y.a)(Object(y.a)({},r),{},{component:function(e){return t?Object(a.jsx)(s.a,{to:"/"}):Object(a.jsx)(n,Object(y.a)({},e))}}))},qe=function(e){var t=e.isAuthenticated,n=e.component,r=Object(Fe.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(s.b,Object(y.a)(Object(y.a)({},r),{},{component:function(e){return t?Object(a.jsx)(n,Object(y.a)({},e)):Object(a.jsx)(s.a,{to:"/login"})}}))};function ze(){return Object(a.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)("a",{href:"https://danielaliendo.github.io/CalendarApp/",children:"Daniela Liendo | CalendarApp"})," ",(new Date).getFullYear(),"."]})}var Ve=Object(v.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),textTransform:"none","&:focus":{outline:"none"}},container:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},box:{padding:25,backgroundColor:"white",borderRadius:4}}})),Be=function(){var e=Ve(),t=Object(l.b)(),n=w({rName:"Pedro",rEmail:"pedro@gmail.com",rPassword1:"123456",rPassword2:"123456"}),r=Object(u.a)(n,2),c=r[0],o=r[1],s=c.rName,f=c.rEmail,v=c.rPassword1,g=c.rPassword2;return Object(a.jsxs)(x.a,{className:e.container,component:"main",maxWidth:"xs",children:[Object(a.jsxs)(p.a,{className:e.box,boxshadow:1,children:[Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(d.a,{className:e.avatar,children:Object(a.jsx)(O.a,{})}),Object(a.jsx)(h.a,{component:"h1",variant:"h5",children:"Registro"}),Object(a.jsxs)("form",{className:e.form,onSubmit:function(e){if(e.preventDefault(),v!==g)return B.a.fire({title:"Error",text:"Las contrase\xf1as no son iguales",icon:"error"});var n,a,r;t((n=f,a=v,r=s,function(){var e=Object(E.a)(C.a.mark((function e(t){var c,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t($({uid:o.uid,name:o.name}))):B.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsxs)(m.a,{container:!0,spacing:2,children:[Object(a.jsx)(m.a,{item:!0,xs:12,children:Object(a.jsx)(b.a,{autoComplete:"fname",name:"rName",variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Nombre",autoFocus:!0,value:s,onChange:o})}),Object(a.jsx)(m.a,{item:!0,xs:12,children:Object(a.jsx)(b.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email",name:"rEmail",autoComplete:"email",value:f,onChange:o})}),Object(a.jsx)(m.a,{item:!0,xs:12,children:Object(a.jsx)(b.a,{variant:"outlined",required:!0,fullWidth:!0,name:"rPassword1",label:"Contrase\xf1a",type:"password",id:"password-one",autoComplete:"current-password",value:v,onChange:o})}),Object(a.jsx)(m.a,{item:!0,xs:12,children:Object(a.jsx)(b.a,{variant:"outlined",required:!0,fullWidth:!0,name:"rPassword2",label:"Repetir contrase\xf1a",type:"password",id:"password-two",autoComplete:"current-password",value:g,onChange:o})})]}),Object(a.jsx)(j.a,{size:"large",type:"submit",fullWidth:!0,color:"primary",variant:"contained",className:e.submit,children:"Registrarme"}),Object(a.jsx)(m.a,{container:!0,justify:"flex-end",children:Object(a.jsx)(m.a,{item:!0,children:Object(a.jsx)(i.b,{to:"/login",children:"Inicia sesi\xf3n"})})})]})]}),Object(a.jsx)(p.a,{mt:5,children:Object(a.jsx)(ze,{})})]}),Object(a.jsx)(re,{})]})},He=n(220),Je=Object(v.a)((function(e){return{root:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},circle:{color:"#17c2ff"}}})),Me=function(){var e=Je();return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)("p",{children:"Cargando..."}),Object(a.jsx)(He.a,{className:e.circle,disableShrink:!0})]})},Ue=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(r.useEffect)((function(){e(function(){var e=Object(E.a)(C.a.mark((function e(t){var n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t($({uid:a.uid,name:a.name}))):t(Z());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(a.jsx)(Me,{}):Object(a.jsx)(i.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(s.d,{children:[Object(a.jsx)(Ge,{exact:!0,path:"/login",component:ie,isAuthenticated:!!c}),Object(a.jsx)(Ge,{exact:!0,path:"/register",component:Be,isAuthenticated:!!c}),Object(a.jsx)(qe,{exact:!0,path:"/",component:We,isAuthenticated:!!c}),Object(a.jsx)(s.a,{to:"/"})]})})})},Xe=n(41),Ye={modalOpen:!1,buttonLogout:!1},Ke=n(93),Qe={events:[],activeEvent:null},Ze={checking:!0},$e=Object(Xe.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(y.a)(Object(y.a)({},e),{},{modalOpen:!0});case T:return Object(y.a)(Object(y.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(y.a)(Object(y.a)({},e),{},{activeEvent:t.payload});case _:return Object(y.a)(Object(y.a)({},e),{},{events:[].concat(Object(Ke.a)(e.events),[t.payload])});case L:return Object(y.a)(Object(y.a)({},e),{},{activeEvent:null});case R:return Object(y.a)(Object(y.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case W:return Object(y.a)(Object(y.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case F:return Object(y.a)(Object(y.a)({},e),{},{events:Object(Ke.a)(t.payload)});case P:return Object(y.a)({},Qe);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(y.a)(Object(y.a)(Object(y.a)({},e),t.payload),{},{checking:!1});case G:return Object(y.a)(Object(y.a)({},e),{},{checking:!1});case z:return{checking:!1};default:return e}}}),et=n(109),tt="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Xe.d,nt=Object(Xe.e)($e,tt(Object(Xe.a)(et.a))),at=function(){return Object(a.jsx)(l.a,{store:nt,children:Object(a.jsx)(Ue,{})})};n(174);o.a.render(Object(a.jsx)(at,{}),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.d4fea2f5.chunk.js.map