(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{141:function(e,a,t){},145:function(e,a,t){e.exports=t(298)},171:function(e,a){},173:function(e,a){},184:function(e,a){},186:function(e,a){},213:function(e,a){},215:function(e,a){},216:function(e,a){},222:function(e,a){},224:function(e,a){},242:function(e,a){},245:function(e,a){},261:function(e,a){},264:function(e,a){},296:function(e,a,t){},298:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(142),s=t.n(r),c=t(36),o=t(37),i=t(54),m=t(39),d=t(38),u=t(4),b=t(24),p=t.n(b),f=t(15),h=t.n(f);p.a.round=!0;var v={sensor:["t_coil","t_leaving_coil","t_leaving_blower","t_supply","t_return","r_humidity"],performance:["rci_Lo","rci_Hi","pue"]};function g(){Object.keys(v).forEach((function(e){var a={unix:p.a.now()};v[e].forEach((function(e){return a[e]=Math.round(1e4*function e(){for(var a=0,t=0;0===a;)a=Math.random();for(;0===t;)t=Math.random();var n=Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*t);return(n=n/10+.5)>1||n<0?e():n}())/100})),h.a.post("http://sancaliar82.pythonanywhere.com/api/".concat(e,"/"),a).catch((function(e){return console.log("sendDataToAPI",e)}))}))}var E=function(){h.a.get("http://sancaliar82.pythonanywhere.com/api/sensor").then((function(e){return console.log(e.data[0])}))},N=t(75),x=t.n(N),w=t(143),y=t(19),k=t.n(y),S="Oc4539yCAo9B1mM-75N6yRM2quXZsLQf6kgV0PSuwKo",A={refreshToken:k.a.SHA256("refreshToken").toString(k.a.enc.Base64),accessToken:k.a.SHA256("accessToken").toString(k.a.enc.Base64),user:k.a.SHA256("user").toString(k.a.enc.Base64)},C={setRefreshToken:function(e){return localStorage.setItem(A.refreshToken,j.encrypt(e))},setAccessToken:function(e){return localStorage.setItem(A.accessToken,j.encrypt(e))},setUser:function(e){return localStorage.setItem(A.user,j.encrypt(e))},setItem:function(e,a){var t="object"===typeof a&&null!==a?JSON.stringify(a):a,n=j.encrypt(t);localStorage.setItem(e,n)},getItem:function(e){try{var a=JSON.parse(O(e));return null!==a&&a}catch(t){return O(e)}},clear:function(){return localStorage.clear()},isAuthenticated:function(){return null!==O(A.accessToken)},getAccessToken:function(){return O(A.accessToken)},getRefreshToken:function(){return O(A.refreshToken)},getUser:function(){return O(A.user)}},j={encrypt:function(e){return k.a.AES.encrypt(e,S).toString()},decrypt_utf8:function(e){try{return k.a.AES.decrypt(e,S).toString(k.a.enc.Utf8)}catch(a){return null}}};function O(e){return null!=localStorage.getItem(e)?j.decrypt_utf8(localStorage.getItem(e)):null}var T=C,L=Object(n.createContext)();var D=function(e){var a=Object(u.g)(),t={url:{auth:"http://sancaliar82.pythonanywhere.com/auth/obtain-token",refresh:"http://sancaliar82.pythonanywhere.com/auth/obtain-token/refresh"},apiKeys:["sensor","performance"],path:"/smartcabinet/auth/"};function n(){T.clear(),a.push(t.path)}h.a.interceptors.request.use((function(e){var a=T.getAccessToken();return a&&(e.headers.Authorization="Bearer ".concat(a)),e}),(function(e){return Promise.reject(e)})),h.a.interceptors.response.use((function(e){return e}),function(){var e=Object(w.a)(x.a.mark((function e(a){var l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((l=a.config).url===t.url.refresh&&401===a.response.status&&n(),401!==a.response.status||l._retry){e.next=6;break}return l._retry=!0,e.abrupt("return",h.a.post(t.url.refresh,{refresh:T.getRefreshToken()}).then((function(e){if(200===e.status)return T.setAccessToken(e.data.access),h.a.defaults.headers.common.Authorization="Bearer ".concat(e.data.access),h()(l);n()})).catch((function(e){console.log(e),n()})));case 6:return e.abrupt("return",Promise.reject(a));case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());var r={logout:n,getRequest:function(){var e={};return t.apiKeys.forEach((function(a){h.a.get("http://sancaliar82.pythonanywhere.com/api/".concat(a,"/")).then((function(t){var n=JSON.stringify(t.data[0]);T.setItem(a,n),e[a]=t.data[0]})).catch((function(e){return console.log(e)}))})),e},response:function(){var e=[];return t.apiKeys.forEach((function(a){var t=T.getItem(a);e.push(t)})),e}};return l.a.createElement(L.Provider,{value:r},e.children)},I=t(27);function M(e){var a=e.component,t=Object(I.a)(e,["component"]);return l.a.createElement(u.b,Object.assign({},t,{render:function(e){return T.isAuthenticated()?l.a.createElement(u.a,{to:{pathname:"/smartcabinet/"}}):l.a.createElement(a,e)}}))}function U(e){var a=e.component,t=Object(I.a)(e,["component"]);return l.a.createElement(u.b,Object.assign({},t,{render:function(e){return T.isAuthenticated()?l.a.createElement(a,e):l.a.createElement(u.a,{to:{pathname:"/smartcabinet/auth/",state:{from:e.location}}})}}))}t(138),t(139),t(140),t(141),t(296);var _=t(18),F=["TDI","Firefighting","UPS","PDU1","Air Conditioner","PDU2","Front Door","Rear Door"],H=["Shutdown Schedule","Server Shutdown"],R=["Firefighting","Door Access"],P=["Current Alarms","Alarms History","Alarm Notifications","Alarm Actions"],B=["Device Information","History Data"],q=["Device Management","Signal Settings","Batch Configurations"],z=["Monitoring Unit","Network Settings","User Management","Date/Time Settings","Restore System","Site Settings","System Upgrade","System Title"];function K(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"sb-sidenav-menu-nested nav"},e.map((function(e){return l.a.createElement("a",{className:"nav-link small",key:e.id},e)}))))}var W=function(){return l.a.createElement("div",{id:"layoutSidenav_nav"},l.a.createElement("nav",{className:"sb-sidenav accordion sb-sidenav-dark",id:"sidenavAccordion"},l.a.createElement("div",{className:"sb-sidenav-menu"},l.a.createElement("div",{className:"nav"},l.a.createElement("div",{className:"sb-sidenav-menu-heading"},"Core"),l.a.createElement("a",{className:"nav-link small",href:"#"},l.a.createElement(_.b,{to:"/smartcabinet/"},l.a.createElement("div",{className:"sb-nav-link-icon"},l.a.createElement("i",{className:"fas fa-fw fa-tachometer-alt"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Dashboard")))),l.a.createElement("div",{className:"sb-sidenav-menu-heading"},"Utilities"),l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseCabinet","aria-expanded":"false","aria-controls":"collapseLayouts"},l.a.createElement("div",{className:"sb-nav-link-icon"},l.a.createElement("i",{className:"fas fa-fw fa-server"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Cabinet Data")),l.a.createElement("div",{className:"sb-sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-angle-down"}))),l.a.createElement("div",{className:"collapse",id:"collapseCabinet","aria-labelledby":"headingCabinet","data-parent":"#sidenavAccordion"},K(F)),l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseUps","aria-expanded":"false","aria-controls":"collapseLayouts"},l.a.createElement("div",{className:"sb-nav-link-icon"},l.a.createElement("i",{className:"fas fa-fw fa-power-off"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"UPS Shutdown")),l.a.createElement("div",{className:"sb-sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-angle-down"}))),l.a.createElement("div",{className:"collapse",id:"collapseUps","aria-labelledby":"headingUps","data-parent":"#sidenavAccordion"},K(H)),l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseSafety","aria-expanded":"false","aria-controls":"collapseLayouts"},l.a.createElement("div",{className:"sb-nav-link-icon"},l.a.createElement("i",{className:"fas fa-fw fa-lock"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Safety")),l.a.createElement("div",{className:"sb-sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-angle-down"}))),l.a.createElement("div",{className:"collapse",id:"collapseSafety","aria-labelledby":"headingSafety","data-parent":"#sidenavAccordion"},K(R)),l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseAlarm","aria-expanded":"false","aria-controls":"collapseLayouts"},l.a.createElement("div",{className:"sb-nav-link-icon"},l.a.createElement("i",{className:"fas fa-fw fa-bell"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Alarm")),l.a.createElement("div",{className:"sb-sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-angle-down"}))),l.a.createElement("div",{className:"collapse",id:"collapseAlarm","aria-labelledby":"headingAlarm","data-parent":"#sidenavAccordion"},K(P)),l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseData","aria-expanded":"false","aria-controls":"collapseLayouts"},l.a.createElement("div",{className:"sb-nav-link-icon"},l.a.createElement("i",{className:"fas fa-fw fa-database"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Data & History")),l.a.createElement("div",{className:"sb-sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-angle-down"}))),l.a.createElement("div",{className:"collapse",id:"collapseData","aria-labelledby":"headingData","data-parent":"#sidenavAccordion"},K(B)),l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseDevice","aria-expanded":"false","aria-controls":"collapseLayouts"},l.a.createElement("div",{className:"sb-nav-link-icon"},l.a.createElement("i",{className:"fas fa-fw fa-laptop"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Device Options")),l.a.createElement("div",{className:"sb-sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-angle-down"}))),l.a.createElement("div",{className:"collapse",id:"collapseDevice","aria-labelledby":"headingDevice","data-parent":"#sidenavAccordion"},K(q)),l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseSystem","aria-expanded":"false","aria-controls":"collapseLayouts"},l.a.createElement("div",{className:"sb-nav-link-icon"},l.a.createElement("i",{className:"fas fa-fw fa-cogs"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"System")),l.a.createElement("div",{className:"sb-sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-angle-down"}))),l.a.createElement("div",{className:"collapse",id:"collapseSystem","aria-labelledby":"headingSystem","data-parent":"#sidenavAccordion"},K(z)),l.a.createElement("div",{className:"sb-sidenav-menu-heading"},"Addons"),l.a.createElement("a",{className:"nav-link small"},l.a.createElement(_.b,{to:"/smartcabinet/help/"},l.a.createElement("div",{className:"sb-nav-link-icon"},l.a.createElement("i",{className:"fas fa-fw fa-question-circle"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Help"))))))))};var J=function(e){var a=e.func,t=Object(n.useContext)(L);return l.a.createElement("div",null,l.a.createElement("nav",{className:"sb-topnav navbar navbar-expand navbar-dark bg-asphalt shadow"},l.a.createElement("div",{className:"navbar-brand"},"TKL Smart Cabinet"),l.a.createElement("button",{className:"btn btn-link btn-sm",id:"sidebarToggle",onClick:a},l.a.createElement("i",{className:"fas fa-bars"})),l.a.createElement("form",{className:"navbar-search d-none d-md-block form-inline"},l.a.createElement("div",{className:"input-group mx-3"},l.a.createElement("input",{className:"form-control form-control-sm",type:"text","aria-label":"Search","aria-describedby":"basic-addon",style:{width:"240px"}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-warning btn-sm",type:"button"},l.a.createElement("i",{className:"fas fa-search fa-sm"}))))),l.a.createElement("ul",{className:"navbar-nav d-none d-sm-block ml-auto"},l.a.createElement("li",{className:"nav-item dropdown d-flex justify-content-center align-items-center"},l.a.createElement("div",{className:"nav-link",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("div",{className:"d-inline h2 text-white mr-3"},l.a.createElement("i",{className:"fas fa-user"})),l.a.createElement("div",{className:"nav-item d-inline-block"},l.a.createElement("span",{className:"d-block text-white text-xs"},"Welcome Back!"),l.a.createElement("a",{className:"d-block dropdown-toggle text-white font-weight-bold small",href:"#"},T.getUser(),"\xa0"))),l.a.createElement("div",{className:"dropdown dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown"},l.a.createElement("div",{className:"dropdown-header text-midnight"},"User Options"),l.a.createElement("div",{className:"dropdown-item navbar-text py-1 mb-1"},l.a.createElement("h5",{className:"d-block text-center text-dark mb-1"},T.getUser()),l.a.createElement("span",{className:"d-block badge badge-success px-4"},"General Administrator")),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("div",{className:"dropdown-item"},l.a.createElement("i",{className:"fas fa-fw fa-user mr-2 text-midnight"}),"Profile"),l.a.createElement("div",{className:"dropdown-item"},l.a.createElement("i",{className:"fas fa-fw fa-cogs mr-2 text-midnight"}),"Account Settings"),l.a.createElement("div",{className:"dropdown-item"},l.a.createElement("i",{className:"fas fa-fw fa-list mr-2 text-midnight"}),"Activity Log"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("div",{className:"dropdown-item","data-toggle":"modal","data-target":"#logoutModal"},l.a.createElement("i",{className:"fas fa-fw fa-sign-out-alt mr-2 text-midnight"}),"Logout"))))),l.a.createElement("div",{className:"modal fade",id:"logoutModal",tabindex:"-1",role:"dialog","aria-labelledby":"modalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header modal-title font-weight-bold",id:"modalLabel"},"End Session?"),l.a.createElement("div",{className:"modal-body"},"Select the ",l.a.createElement("strong",null,"Logout")," button below to end your session."),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{className:"btn btn-sm btn-secondary font-weight-bold px-3",type:"button","data-dismiss":"modal"},"Cancel"),l.a.createElement("button",{className:"btn btn-sm btn-primary font-weight-bold px-3",type:"button","data-dismiss":"modal",onClick:t.logout},"Logout"))))))};var G=function(){return l.a.createElement("div",null,l.a.createElement("footer",{className:"shadow py-3 bg-white"},l.a.createElement("div",{className:"container my-auto"},l.a.createElement("div",{className:"copyright text-center text-secondary font-weight-bold small"},l.a.createElement("span",null,"Copyright \xa9 2020 - Laboratorium Termal dan Kondisi Lingkungan")))))},V=t(21);var Y=function(){return l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-sm small"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{className:"text-midnight",scope:"col"},"No."),l.a.createElement("th",{className:"text-midnight",scope:"col"},"Alarm Level"),l.a.createElement("th",{className:"text-midnight",scope:"col"},"Device Name"),l.a.createElement("th",{className:"text-midnight",scope:"col"},"Alarm Information"),l.a.createElement("th",{className:"text-midnight",scope:"col"},"Trigger Value"),l.a.createElement("th",{className:"text-midnight",scope:"col"},"Alarm Time"),l.a.createElement("th",{className:"text-midnight",scope:"col"},"Acknowledgement"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"text-dark"}),l.a.createElement("td",{className:"text-dark"},"Critical"),l.a.createElement("td",{className:"text-dark"},"PDU1"),l.a.createElement("td",{className:"text-dark"},"Emergency Fan Open Alarm"),l.a.createElement("td",{className:"text-dark"},"-"),l.a.createElement("td",{className:"text-dark"},"23:21:26 20-06-2020"),l.a.createElement("td",{className:"text-dark"},l.a.createElement("button",{className:"btn btn-block btn-sm btn-warning font-weight-bold text-xs",type:"button"},"Acknowledge"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-dark"}),l.a.createElement("td",{className:"text-dark"},"Moderate"),l.a.createElement("td",{className:"text-dark"},"Air Conditioner"),l.a.createElement("td",{className:"text-dark"},"AC Power-off Alarm"),l.a.createElement("td",{className:"text-dark"},"OFF"),l.a.createElement("td",{className:"text-dark"},"23:21:22 20-06-2020"),l.a.createElement("td",{className:"text-dark"},l.a.createElement("button",{className:"btn btn-block btn-sm btn-warning font-weight-bold text-xs",type:"button"},"Acknowledge"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-dark"}),l.a.createElement("td",{className:"text-dark"},"Low"),l.a.createElement("td",{className:"text-dark"},"Air Conditioner"),l.a.createElement("td",{className:"text-dark"},"AC Cooling Fault"),l.a.createElement("td",{className:"text-dark"},"-"),l.a.createElement("td",{className:"text-dark"},"23:21:22 20-06-2020"),l.a.createElement("td",{className:"text-dark"},l.a.createElement("button",{className:"btn btn-block btn-sm btn-warning font-weight-bold text-xs",type:"button"},"Acknowledge"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-dark"}),l.a.createElement("td",{className:"text-dark"},"Critical"),l.a.createElement("td",{className:"text-dark"},"TDI"),l.a.createElement("td",{className:"text-dark"},"Front Door Alarm"),l.a.createElement("td",{className:"text-dark"},"Open"),l.a.createElement("td",{className:"text-dark"},"16:51:60 20-06-2020"),l.a.createElement("td",{className:"text-dark"},l.a.createElement("button",{className:"btn btn-block btn-sm btn-warning font-weight-bold text-xs",type:"button"},"Acknowledge"))))))};var Q=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"nav nav-tabs mb-2",id:"nav-tab",role:"tablist"},l.a.createElement("a",{className:"nav-item nav-link text-midnight font-weight-bold small active","data-toggle":"tab",href:"#all",role:"tab","aria-controls":"all","aria-selected":"true"},"All Alarms"),l.a.createElement("a",{className:"nav-item nav-link text-midnight font-weight-bold small","data-toggle":"tab",href:"#critical",role:"tab","aria-controls":"critical","aria-selected":"false"},"Critical Alarms"),l.a.createElement("a",{className:"nav-item nav-link text-midnight font-weight-bold small","data-toggle":"tab",href:"#moderate",role:"tab","aria-controls":"moderate","aria-selected":"false"},"Moderate Alarms"),l.a.createElement("a",{className:"nav-item nav-link text-midnight font-weight-bold small","data-toggle":"tab",href:"#low",role:"tab","aria-controls":"low","aria-selected":"false"},"Low Alarms")),l.a.createElement("div",{className:"tab-content",id:"nav-content"},l.a.createElement("div",{className:"tab-pane show active",id:"all",role:"tabpanel","aria-labelledby":"v-pills-critical-tab"},l.a.createElement(Y,null)),l.a.createElement("div",{className:"tab-pane",id:"critical",role:"tabpanel","aria-labelledby":"v-pills-critical-tab"}),l.a.createElement("div",{className:"tab-pane",id:"moderate",role:"tabpanel","aria-labelledby":"v-pills-moderate-tab"}),l.a.createElement("div",{className:"tab-pane",id:"low",role:"tabpanel","aria-labelledby":"v-pills-low-tab"})))},X=t(55),Z=t.n(X),$=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n,l=e.bound,r=void 0===l?{g:[1,75],y:[75,90],r:[90,100]}:l,s=Object(I.a)(e,["bound"]);return Object(c.a)(this,t),(n=a.call(this,s)).state={series:[0],options:{series:[0],labels:[n.props.chartLabel],chart:{height:n.props.chartHeight,type:"radialBar",toolbar:{show:!1}},plotOptions:{radialBar:{startAngle:ae.startAngle,endAngle:ae.endAngle,hollow:{size:"67",margin:0,position:"front",background:"#FFFFFF",dropShadow:{enabled:!0,opacity:.2,top:3,left:0,blur:4}},track:{margin:0,dropShadow:{enabled:!0,opacity:.2,top:-3,left:0,blur:4}},dataLabels:{showOn:"always",name:{offsetY:-10,fontFamily:ee.family.custom,fontSize:ee.size.name,color:"#858796",show:!0},value:{formatter:function(e){return parseFloat(e)},fontFamily:ee.family.custom,fontSize:ee.size.value,color:"#858796",show:!0}}}},fill:{colors:[function(e){var a=e.value;return a>=r.g[0]&&a<=r.g[1]?"#2ECC71":a>=r.y[0]&&a<=r.y[1]?"#F39C12":a>=r.r[0]&&a<=r.r[1]?"#E74C3C":"#40739E"}],opacity:1,type:"gradient",gradient:{shade:"dark",type:"vertical",gradientToColors:["#40739E"],inverseColors:!1,stops:[0,100]}},stroke:{lineCap:"round"},grid:{padding:{bottom:16}}}},n}return Object(o.a)(t,[{key:"render",value:function(){var e=[this.props.series],a=this.props.chartHeight;return l.a.createElement("div",{className:"d-flex align-items-top justify-content-center"},l.a.createElement(Z.a,{options:this.state.options,series:e,type:"radialBar",height:a}))}}]),t}(n.Component),ee={size:{name:"12px",value:"32px"},family:{default:"Nunito, sans-serif",custom:"Titillium Web, sans-serif"}},ae={startAngle:-135,endAngle:135},te=$,ne=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){e.chartLabel;var n,l=e.chartHeight,r=Object(I.a)(e,["chartLabel","chartHeight"]);return Object(c.a)(this,t),(n=a.call(this,r)).chartHeight=l,n.state={series:[{data:[[13273596e5,30.95],[1327446e6,31.34],[13275324e5,31.18],[13276188e5,31.05],[1327878e6,31],[13279644e5,30.95],[13280508e5,31.24],[13281372e5,31.29],[13282236e5,31.85],[13284828e5,31.86],[13285692e5,32.28],[13286556e5,32.1],[1328742e6,32.65],[13288284e5,32.21],[13290876e5,32.35],[1329174e6,32.44],[13292604e5,32.46],[13293468e5,32.86],[13294332e5,32.75],[13297788e5,32.54],[13298652e5,32.33],[13299516e5,32.97],[1330038e6,33.41],[13302972e5,33.27],[13303836e5,33.27],[133047e7,32.89],[13305564e5,33.1],[13306428e5,33.73],[1330902e6,33.22],[13309884e5,31.99],[13310748e5,32.41],[13311612e5,33.05],[13312476e5,33.64],[13315068e5,33.56],[13315932e5,34.22],[13316796e5,33.77],[1331766e6,34.17],[13318524e5,33.82],[13321116e5,34.51],[1332198e6,33.16],[13322844e5,33.56],[13323708e5,33.71],[13324572e5,33.81],[13327128e5,34.4],[13327992e5,34.63],[13328856e5,34.46],[1332972e6,34.48],[13330584e5,34.31],[13333176e5,34.7],[1333404e6,34.31],[13334904e5,33.46],[13335768e5,33.59],[13339224e5,33.22],[13340088e5,32.61],[13340952e5,33.01],[13341816e5,33.55],[1334268e6,33.18],[13345272e5,32.84],[13346136e5,33.84],[13347e8,33.39],[13347864e5,32.91],[13348728e5,33.06],[1335132e6,32.62],[13352184e5,32.4],[13353048e5,33.13],[13353912e5,33.26],[13354776e5,33.58],[13357368e5,33.55],[13358232e5,33.77],[13359096e5,33.76],[1335996e6,33.32],[13360824e5,32.61],[13363416e5,32.52],[1336428e6,32.67],[13365144e5,32.52],[13366008e5,31.92],[13366872e5,32.2],[13369464e5,32.23],[13370328e5,32.33],[13371192e5,32.36],[13372056e5,32.01],[1337292e6,31.31],[13375512e5,32.01],[13376376e5,32.01],[1337724e6,32.18],[13378104e5,31.54],[13378968e5,31.6],[13382424e5,32.05],[13383288e5,31.29],[13384152e5,31.05],[13385016e5,29.82],[13387608e5,30.31],[13388472e5,30.7],[13389336e5,31.69],[133902e7,31.32],[13391064e5,31.65],[13393656e5,31.13],[1339452e6,31.77],[13395384e5,31.79],[13396248e5,31.67],[13397112e5,32.39],[13399704e5,32.63],[13400568e5,32.89],[13401432e5,31.99],[13402296e5,31.23],[1340316e6,31.57],[13405752e5,30.84],[13406616e5,31.07],[1340748e6,31.41],[13408344e5,31.17],[13409208e5,32.37],[134118e7,32.19],[13412664e5,32.51],[13414392e5,32.53],[13415256e5,31.37],[13417848e5,30.43],[13418712e5,30.44],[13419576e5,30.2],[1342044e6,30.14],[13421304e5,30.65],[13423896e5,30.4],[1342476e6,30.65],[13425624e5,31.43],[13426488e5,31.89],[13427352e5,31.38],[13429944e5,30.64],[13430808e5,30.02],[13431672e5,30.33],[13432536e5,30.95],[134334e7,31.89],[13435992e5,31.01],[13436856e5,30.88],[1343772e6,30.69],[13438584e5,30.58],[13439448e5,32.02],[1344204e6,32.14],[13442904e5,32.37],[13443768e5,32.51],[13444632e5,32.65],[13445496e5,32.64],[13448088e5,32.27],[13448952e5,32.1],[13449816e5,32.91],[1345068e6,33.65],[13451544e5,33.8],[13454136e5,33.92],[13455e8,33.75],[13455864e5,33.84],[13456728e5,33.5],[13457592e5,32.26],[13460184e5,32.32],[13461048e5,32.06],[13461912e5,31.96],[13462776e5,31.46],[1346364e6,31.27],[13467096e5,31.43],[1346796e6,32.26],[13468824e5,32.79],[13469688e5,32.46],[1347228e6,32.13],[13473144e5,32.43],[13474008e5,32.42],[13474872e5,32.81],[13475736e5,33.34],[13478328e5,33.41],[13479192e5,32.57],[13480056e5,33.12],[1348092e6,34.53],[13481784e5,33.83],[13484376e5,33.41],[1348524e6,32.9],[13486104e5,32.53],[13486968e5,32.8],[13487832e5,32.44],[13490424e5,32.62],[13491288e5,32.57],[13492152e5,32.6],[13493016e5,32.68],[1349388e6,32.47],[13496472e5,32.23],[13497336e5,31.68],[134982e7,31.51],[13499064e5,31.78],[13499928e5,31.94],[1350252e6,32.33],[13503384e5,33.24],[13504248e5,33.44],[13505112e5,33.48],[13505976e5,33.24],[13508568e5,33.49],[13509432e5,33.31],[13510296e5,33.36],[1351116e6,33.4],[13512024e5,34.01],[1351638e6,34.02],[13517244e5,34.36],[13518108e5,34.39],[135207e7,34.24],[13521564e5,34.39],[13522428e5,33.47],[13523292e5,32.98],[13524156e5,32.9],[13526748e5,32.7],[13527612e5,32.54],[13528476e5,32.23],[1352934e6,32.64],[13530204e5,32.65],[13532796e5,32.92],[1353366e6,32.64],[13534524e5,32.84],[13536252e5,33.4],[13538844e5,33.3],[13539708e5,33.18],[13540572e5,33.88],[13541436e5,34.09],[135423e7,34.61],[13544892e5,34.7],[13545756e5,35.3],[1354662e6,35.4],[13547484e5,35.14],[13548348e5,35.48],[1355094e6,35.75],[13551804e5,35.54],[13552668e5,35.96],[13553532e5,35.53],[13554396e5,37.56],[13556988e5,37.42],[13557852e5,37.49],[13558716e5,38.09],[1355958e6,37.87],[13560444e5,37.71],[13563036e5,37.53],[13564764e5,37.55],[13565628e5,37.3],[13566492e5,36.9],[13569084e5,37.68],[13570812e5,38.34],[13571676e5,37.75],[1357254e6,38.13],[13575132e5,37.94],[13575996e5,38.14],[1357686e6,38.66],[13577724e5,38.62],[13578588e5,38.09],[1358118e6,38.16],[13582044e5,38.15],[13582908e5,37.88],[13583772e5,37.73],[13584636e5,37.98],[13588092e5,37.95],[13588956e5,38.25],[1358982e6,38.1],[13590684e5,38.32],[13593276e5,38.24],[1359414e6,38.52],[13595004e5,37.94],[13595868e5,37.83],[13596732e5,38.34],[13599324e5,38.1],[13600188e5,38.51],[13601052e5,38.4],[13601916e5,38.07],[1360278e6,39.12],[13605372e5,38.64],[13606236e5,38.89],[136071e7,38.81],[13607964e5,38.61],[13608828e5,38.63],[13612284e5,38.99],[13613148e5,38.77],[13614012e5,38.34],[13614876e5,38.55],[13617468e5,38.11],[13618332e5,38.59],[13619196e5,39.6]]}],options:{chart:{id:"area-datetime",type:"area",height:350,zoom:{autoScaleYaxis:!0},toolbar:{show:!1}},annotations:{yaxis:[{y:30,borderColor:"#999",label:{show:!0,text:"Support",style:{color:"#fff",background:"#00E396"}}}],xaxis:[{x:new Date("14 Nov 2012").getTime(),borderColor:"#999",yAxisIndex:0,label:{show:!0,text:"Rally",style:{color:"#fff",background:"#775DD0"}}}]},dataLabels:{enabled:!1},markers:{size:0,style:"hollow"},xaxis:{type:"datetime",min:new Date("01 Mar 2012").getTime(),tickAmount:6},tooltip:{x:{format:"dd MMM yyyy"}},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,stops:[0,100]}}}},n}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex flex-column mb-2"},l.a.createElement(Z.a,{options:this.state.options,series:this.state.series,type:"area",height:this.chartHeight}))}}]),t}(n.Component);function le(e){var a=e.header,t=e.value,n=void 0===t?0:t,r=e.badge,s=void 0===r||r;return l.a.createElement("div",{className:"d-block px-2"},l.a.createElement("div",{className:"d-flex justify-content-between mx-auto mb-2"},l.a.createElement("small",{className:"d-inline font-weight-bold text-midnight"},a),s&&l.a.createElement("span",{className:"badge badge-success px-4"},"Optimal")),l.a.createElement("div",{className:"d-flex justify-content-center align-text-top mx-auto mb-2"},l.a.createElement("h1",{className:"d-inline font-custom display-3 mb-1"},n),l.a.createElement("h1",{className:"d-inline ml-1"},"\xb0C")))}var re=function(e){var a=e.header,t=e.value,n=void 0===t?0:t,r={width:"".concat(n,"%")};return l.a.createElement("div",{className:"d-block px-2 mb-3"},l.a.createElement("div",{className:"d-flex justify-content-between mx-auto mb-2"},l.a.createElement("small",{className:"font-weight-bold text-midnight"},a),l.a.createElement("small",{className:"font-weight-bold"},n)),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar progress-bar-striped bg-info",role:"progressbar","aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100",style:r})))};var se=function(){var e=Object(n.useContext)(L).response(),a=Object(V.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("div",{className:"row align-items-top mb-2"},l.a.createElement("div",{className:"d-none d-sm-block col-md-12 col-xl-4"},l.a.createElement("div",{className:"card shadow rounded-0 mb-3"},l.a.createElement("small",{className:"card-header bg-asphalt text-white text-center font-weight-bold rounded-0 py-2"},"Air Conditioner"),l.a.createElement("div",{className:"card-body pb-1"},l.a.createElement("div",{className:"col px-2"},l.a.createElement(le,{header:"Evaporator Coil",value:t.t_coil}),l.a.createElement("div",{className:"d-block dropdown-divider mb-4"}),l.a.createElement(re,{header:"Relative Humidity",value:t.r_humidity}),l.a.createElement(le,{header:"Dewpoint Temperature",value:10.23,badge:!1}))))),l.a.createElement("div",{className:"d-none d-sm-block col-md-12 col-xl-8"},l.a.createElement("div",{className:"card shadow rounded-0 mb-3"},l.a.createElement("small",{className:"card-header bg-asphalt text-white text-center font-weight-bold rounded-0 py-2"},"Rack Cooling Index (RCI)"),l.a.createElement("div",{className:"card-body pb-3"},l.a.createElement("div",{className:"row px-2"},l.a.createElement("div",{className:"col-md-12 col-xl-6"},l.a.createElement(le,{header:"Supply Temperature",value:t.t_supply})),l.a.createElement("div",{className:"col-md-12 col-xl-6"},l.a.createElement(le,{header:"Return Temperature",value:t.t_return}))),l.a.createElement("div",{className:"d-block dropdown-divider my-auto"}),l.a.createElement("div",{className:"row px-2"},l.a.createElement("div",{className:"col-md-12 col-xl-6 mb-2"},l.a.createElement(te,{chartLabel:"RCI-Lo",chartHeight:320,series:r.rci_Lo})),l.a.createElement("div",{className:"col-md-12 col-xl-6 mb-2"},l.a.createElement(te,{chartLabel:"RCI-Hi",chartHeight:320,series:r.rci_Hi}))))))),l.a.createElement("div",{className:"d-none d-sm-block card shadow mb-3"},l.a.createElement("div",{className:"card-body pb-0"},l.a.createElement(ne,{chartLabel:"Line Chart",chartHeight:320}))))};function ce(e){return l.a.createElement("div",{className:"d-block text-center my-5"},l.a.createElement("div",{className:"lead text-secondary mb-0"},"Error"),l.a.createElement("div",{className:"error text-dark mx-auto","data-text":"404"},"404"),l.a.createElement("div",{className:"lead text-secondary mb-0"},"Page Not Found"),l.a.createElement("div",{className:"small text-gray-500 mb-0"},e))}var oe=function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"d-flex justify-content-center my-4"},ce("This page is under development!")))};var ie=function(){var e=Object(n.useContext)(L).response(),a=Object(V.a)(e,2),t=a[0],r=(a[1],new Date(1e3*t.unix).toLocaleTimeString());return l.a.createElement("div",{className:"container-fluid mt-2 pt-2"},l.a.createElement("div",{className:"d-flex align-items-center justify-content-between mb-3"},l.a.createElement("div",{className:"d-none d-sm-inline h3 text-dark my-auto"},"Dashboard"),l.a.createElement("div",{className:"d-none d-sm-inline"},l.a.createElement("button",{className:"btn btn-sm btn-warning btn-icon-split font-weight-bold",type:"button",onClick:E},l.a.createElement("span",{className:"icon text-white"},l.a.createElement("i",{className:"fas fa-fw fa-sm fa-download"})),l.a.createElement("span",{className:"text px-4"},"Generate Report")))),l.a.createElement("div",{className:"d-none d-sm-block"},l.a.createElement("nav",{className:"nav nav-tabs mb-2",role:"tablist"},l.a.createElement("a",{className:"nav-item nav-link text-midnight font-weight-bold small active","data-toggle":"tab",href:"#thermal",role:"tab","aria-controls":"thermal","aria-selected":"true"},"Thermal Management"),l.a.createElement("a",{className:"nav-item nav-link text-midnight font-weight-bold small","data-toggle":"tab",href:"#energy",role:"tab","aria-controls":"energy","aria-selected":"false"},"Energy Management"),l.a.createElement("small",{className:"nav-item nav-link disabled text-dark ml-auto"},l.a.createElement("strong",{className:"text-midnight"},"Last Updated: "),r)),l.a.createElement("div",{className:"tab-content"},l.a.createElement("div",{className:"tab-pane fade show active",id:"thermal",role:"tabpanel","aria-labelledby":"v-pills-thermal-tab"},l.a.createElement(se,null)),l.a.createElement("div",{className:"tab-pane fade",id:"energy",role:"tabpanel","aria-labelledby":"v-pills-energy-tab"},ce("Under Development")))),l.a.createElement("div",{className:"d-none d-md-block mb-3"},l.a.createElement(Q,null)),l.a.createElement("div",{className:"d-block d-sm-none"},ce("Mobile view is not supported yet :(")))},me=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={toggle:!0,response:{sensor:null,performance:null}},n.toggle=n.toggle.bind(Object(i.a)(n)),p.a.round=!0,n}return Object(o.a)(t,[{key:"toggle",value:function(e){e.preventDefault(),this.setState({toggle:!this.state.toggle})}},{key:"componentWillMount",value:function(){this.setState({response:this.context.getRequest()})}},{key:"componentDidMount",value:function(){var e=this,a=30+p.a.now(),t=10+p.a.now();this.loop=setInterval((function(){var n=p.a.now();n>a&&(g(),a+=30),n>t&&(t+=10,e.setState({response:e.context.getRequest()}))}),1e3)}},{key:"componentWillUnmount",value:function(){Object.keys(this.state.response).forEach((function(e){localStorage.removeItem(e)})),clearInterval(this.loop)}},{key:"render",value:function(){return l.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},l.a.createElement("div",{id:"content",className:"sb-nav-fixed ".concat(this.state.toggle?null:"sb-sidenav-toggled")},l.a.createElement(J,{func:this.toggle}),l.a.createElement("div",{id:"layoutSidenav"},l.a.createElement(W,null),l.a.createElement("div",{id:"layoutSidenav_content"},l.a.createElement(u.d,null,l.a.createElement(U,{path:"/smartcabinet/",component:ie}),l.a.createElement(U,{path:"/smartcabinet/help/",component:oe})),l.a.createElement(G,null)))))}}]),t}(n.Component);me.contextType=L;var de=me;var ue=function(){var e=Object(u.g)(),a=Object(n.useState)(""),t=Object(V.a)(a,2),r=t[0],s=t[1],c=Object(n.useState)(""),o=Object(V.a)(c,2),i=o[0],m=o[1],d=Object(n.useState)(!1),b=Object(V.a)(d,2),p=b[0],f=b[1],v=Object(n.useState)(null),g=Object(V.a)(v,2),E=g[0],N=g[1];return l.a.createElement("div",null,l.a.createElement("nav",{className:"sb-topnav navbar navbar-expand navbar-dark bg-asphalt shadow"},l.a.createElement("div",{className:"navbar-brand"},"TKL Smart Cabinet")),l.a.createElement("div",{className:"bg-gradient-light container-fluid mt-2 pt-3 pb-5"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card shadow border-0 bg-light o-hidden"},l.a.createElement("div",{className:"card-header bg-square-midnight font-weight-bold text-white py-2"},l.a.createElement("div",{className:"d-flex flex-row align-items-baseline float-right"},l.a.createElement("div",{className:"d-inline display-2"},l.a.createElement("i",{className:"fas fa-th"})),l.a.createElement("div",{className:"d-inline h3 mx-3"},"Smart Cabinet ",l.a.createElement("sup",null,"20")))),l.a.createElement("div",{className:"card-body px-5"},l.a.createElement("div",{className:"d-flex flex-row align-items-center"},l.a.createElement("div",{className:"col-md-9 mx-auto p-4"},l.a.createElement("div",{className:"card shadow border-0 bg-midnight o-hidden"},l.a.createElement("div",{className:"card-body p-4"},l.a.createElement("h4",{className:"card-title text-white px-2"},"User Authentication"),l.a.createElement("div",{className:"col px-5 mx-auto"},E&&l.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show mb-2",role:"alert"},l.a.createElement("span",{className:"small font-weight-bold"},E),l.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("form",{className:"user"},l.a.createElement("div",{className:"form-group mb-1"},l.a.createElement("label",{className:"small font-weight-bold text-white"},"Username:"),l.a.createElement("input",{className:"form-control text-monospace",type:"text",value:r,onChange:function(e){return s(e.target.value)},required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"small font-weight-bold text-white"},"Password:"),l.a.createElement("input",{className:"form-control text-monospace",type:"password",value:i,onChange:function(e){return m(e.target.value)},required:!0}))),l.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-center"},l.a.createElement("button",{className:"btn btn-sm btn-success float-right px-5",type:"button",disabled:p,onClick:function(){f(!0),""===r||""===i?(N("Please fill the authentication fields!"),f(!1)):h.a.post("http://sancaliar82.pythonanywhere.com/auth/obtain-token",{username:r,password:i}).then((function(a){!function(e){T.setRefreshToken(e.data.refresh),T.setAccessToken(e.data.access),T.setUser(e.data.user),f(!1)}(a),e.push("/smartcabinet/")})).catch((function(e){N("Invalid credentials!"),f(!1)}))}},l.a.createElement("span",{className:"font-weight-bold"},p?"Authenticating":"Login")),l.a.createElement("a",{className:"small text-white font-weight-bold",href:""},"Forgot Password?")))))))),l.a.createElement("div",{className:"card-footer bg-light"},l.a.createElement("div",{className:"text-midnight text-center font-weight-bold small"},l.a.createElement("span",null,"Copyright \xa9 2020 - Laboratorium Termal dan Kondisi Lingkungan"))))))))};var be=function(){return l.a.createElement("div",null,l.a.createElement(D,null,l.a.createElement(u.d,null,l.a.createElement(M,{path:"/smartcabinet/auth/",component:ue}),l.a.createElement(U,{path:"/smartcabinet/",component:de}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_.a,null,l.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[145,1,2]]]);
//# sourceMappingURL=main.b1767c91.chunk.js.map