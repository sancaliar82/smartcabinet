(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{131:function(e,a,t){},143:function(e,a,t){e.exports=t(296)},152:function(e,a){},154:function(e,a){},165:function(e,a){},167:function(e,a){},194:function(e,a){},196:function(e,a){},197:function(e,a){},203:function(e,a){},205:function(e,a){},223:function(e,a){},226:function(e,a){},242:function(e,a){},245:function(e,a){},277:function(e,a,t){},296:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(140),c=t.n(r),s=t(4),i=t(25),o=t(17),m=t.n(o),d="Oc4539yCAo9B1mM-75N6yRM2quXZsLQf6kgV0PSuwKo",u={encrypt:function(e){return m.a.AES.encrypt(e,d).toString()},decrypt_utf8:function(e){return m.a.AES.decrypt(e,d).toString(m.a.enc.Utf8)}},b={refreshToken:m.a.SHA256("refreshToken").toString(m.a.enc.Base64),accessToken:m.a.SHA256("accessToken").toString(m.a.enc.Base64),user:m.a.SHA256("user").toString(m.a.enc.Base64)};function p(e){return null!=localStorage.getItem(e)?u.decrypt_utf8(localStorage.getItem(e)):null}var h={setRefreshToken:function(e){return localStorage.setItem(b.refreshToken,u.encrypt(e))},setAccessToken:function(e){return localStorage.setItem(b.accessToken,u.encrypt(e))},setUser:function(e){return localStorage.setItem(b.user,u.encrypt(e))},clear:function(){return localStorage.clear()},getAccessToken:function(){return p(b.accessToken)},getRefreshToken:function(){return p(b.refreshToken)},isAuthenticated:function(){return null!==p(b.accessToken)},getUser:function(){return p(b.user)}};function f(e){var a=e.component,t=Object(i.a)(e,["component"]);return l.a.createElement(s.b,Object.assign({},t,{render:function(e){return h.isAuthenticated()?l.a.createElement(s.a,{to:{pathname:"/"}}):l.a.createElement(a,e)}}))}function E(e){var a=e.component,t=Object(i.a)(e,["component"]);h.getAccessToken();return l.a.createElement(s.b,Object.assign({},t,{render:function(e){return h.isAuthenticated()?l.a.createElement(a,e):l.a.createElement(s.a,{to:{pathname:"/auth",state:{from:e.location}}})}}))}t(128),t(129),t(130),t(131),t(277);var g=t(27),N=t(22);function v(){return window.innerWidth<=768?"bg-white py-2 collapse-inner rounded border-left-midnight":"bg-white py-2 collapse-inner rounded"}function x(e){return l.a.createElement("div",null,e.map((function(e){return l.a.createElement("a",{className:"collapse-item",href:"#",key:e.id},e)})))}var w=function(){var e=Object(n.useState)(v()),a=Object(g.a)(e,2),t=a[0],r=a[1],c=function(){return r(v)};return Object(n.useEffect)((function(){return window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}})),l.a.createElement("div",{className:"d-flex align-items-stretch"},l.a.createElement("ul",{className:"navbar-nav bg-asphalt sidebar sidebar-dark accordion",id:"accordionSidebar"},l.a.createElement("div",{className:"sidebar-brand d-flex align-items-center justify-content-center"},l.a.createElement("div",{className:"sidebar-brand-icon mx-1 rotate-n-15"},l.a.createElement("i",{className:"fas fa-th"})),l.a.createElement("div",{className:"sidebar-brand-text mx-3"},"TKL: Smart Cabinet ",l.a.createElement("sup",null,"20"))),l.a.createElement("hr",{className:"sidebar-divider my-0"}),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link"},l.a.createElement(N.b,{to:"/"},l.a.createElement("i",{className:"fas fa-fw fa-tachometer-alt"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Dashboard")))),l.a.createElement("hr",{className:"sidebar-divider"}),l.a.createElement("div",{className:"sidebar-heading"},"Utilities"),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseCabinet","aria-expanded":"true","aria-controls":"collapseCabinet"},l.a.createElement("i",{className:"fas fa-fw fa-server"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Cabinet Data")),l.a.createElement("div",{id:"collapseCabinet",className:"collapse","aria-labelledby":"headingCabinet","data-parent":"#accordionSidebar"},l.a.createElement("div",{className:t},l.a.createElement("span",{className:"collapse-header text-midnight"},"Cabinet Data"),x(["TDI","Firefighting","UPS","PDU1","Air Conditioner","PDU2","Front Door","Rear Door"])))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseUps","aria-expanded":"true","aria-controls":"collapseUps"},l.a.createElement("i",{className:"fas fa-fw fa-power-off"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"UPS Shutdown")),l.a.createElement("div",{id:"collapseUps",className:"collapse","aria-labelledby":"headingUps","data-parent":"#accordionSidebar"},l.a.createElement("div",{className:t},l.a.createElement("span",{className:"collapse-header text-midnight"},"UPS Shutdown"),x(["Shutdown Schedule","Server Shutdown"])))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseSafe","aria-expanded":"true","aria-controls":"collapseSafe"},l.a.createElement("i",{className:"fas fa-fw fa-lock"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Safety Management")),l.a.createElement("div",{id:"collapseSafe",className:"collapse","aria-labelledby":"headingSafety","data-parent":"#accordionSidebar"},l.a.createElement("div",{className:t},l.a.createElement("span",{className:"collapse-header text-midnight"},"Safety Management"),x(["Firefighting","Door Access"])))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseAlarm","aria-expanded":"true","aria-controls":"collapseAlarm"},l.a.createElement("i",{className:"fas fa-fw fa-bell"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Alarm Management")),l.a.createElement("div",{id:"collapseAlarm",className:"collapse","aria-labelledby":"headingAlarm","data-parent":"#accordionSidebar"},l.a.createElement("div",{className:t},l.a.createElement("span",{className:"collapse-header text-midnight"},"Alarm Management"),x(["Current Alarms","Alarms History","Alarm Notifications","Alarm Actions"])))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseData","aria-expanded":"true","aria-controls":"collapseData"},l.a.createElement("i",{className:"fas fa-fw fa-database"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Data & History")),l.a.createElement("div",{id:"collapseData",className:"collapse","aria-labelledby":"headingdata","data-parent":"#accordionSidebar"},l.a.createElement("div",{className:t},l.a.createElement("span",{className:"collapse-header text-midnight"},"Data & History"),x(["Device Information","History Data"])))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseDevice","aria-expanded":"true","aria-controls":"collapseDevice"},l.a.createElement("i",{className:"fas fa-fw fa-laptop"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Device Options")),l.a.createElement("div",{id:"collapseDevice",className:"collapse","aria-labelledby":"headingDevice","data-parent":"#accordionSidebar"},l.a.createElement("div",{className:t},l.a.createElement("span",{className:"collapse-header text-midnight"},"Device Options"),x(["Device Management","Signal Settings","Batch Configurations"])))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseSystem","aria-expanded":"true","aria-controls":"collapseSystem"},l.a.createElement("i",{className:"fas fa-fw fa-cogs"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"System Options")),l.a.createElement("div",{id:"collapseSystem",className:"collapse","aria-labelledby":"headingSystem","data-parent":"#accordionSidebar"},l.a.createElement("div",{className:t},l.a.createElement("span",{className:"collapse-header text-midnight"},"System Options"),x(["Monitoring Unit","Network Settings","User Management","Date/Time Settings","Restore System","Site Settings","System Upgrade","System Title"])))),l.a.createElement("hr",{className:"sidebar-divider my-1"}),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link"},l.a.createElement(N.b,{to:"/help"},l.a.createElement("i",{className:"fas fa-fw fa-question-circle"}),l.a.createElement("span",{className:"text-light font-weight-bold mx-2"},"Help"))))))};var y=function(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-3 static-top shadow"},l.a.createElement("form",{className:"navbar-search d-none d-md-block form-inline mx-2 mr-auto my-2"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control bg-light border small","aria-label":"Search","aria-describedby":"basic-addon2"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-warning border",type:"button"},l.a.createElement("i",{className:"fas fa-search fa-sm"}))))),l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item d-none d-md-block dropdown no-arrow mx-2"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"alertsdd",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"fas fa-fw fa-bell text-midnight"}),l.a.createElement("span",{className:"badge badge-danger badge-pill badge-counter"},"36"))),l.a.createElement("div",{className:"topbar-divider d-none d-md-block"}),l.a.createElement("li",{className:"nav-item dropdown justify-content-center align-items-center"},l.a.createElement("div",{className:"nav-link",href:"",id:"userdd",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("a",{className:"d-inline h1 img-profile text-midnight mr-4",href:""},l.a.createElement("i",{className:"fas fa-user-circle"})),l.a.createElement("div",{className:"nav-item d-inline"},l.a.createElement("span",{className:"d-block text-danger text-xs"},"Welcome Back!"),l.a.createElement("a",{className:"d-block dropdown-toggle text-dark font-weight-bold small",href:""},h.getUser()))),l.a.createElement("div",{className:"dropdown dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userdd"},l.a.createElement("div",{class:"dropdown-header text-midnight"},"User Options"),l.a.createElement("div",{className:"dropdown-item navbar-text py-1 mb-1"},l.a.createElement("h5",{className:"d-block text-center text-dark mb-1"},h.getUser()),l.a.createElement("span",{className:"d-block badge badge-success px-4"},"General Administrator")),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("div",{className:"dropdown-item"},l.a.createElement("i",{className:"fas fa-fw fa-user mr-2 text-midnight"}),"Profile"),l.a.createElement("div",{className:"dropdown-item"},l.a.createElement("i",{className:"fas fa-fw fa-cogs mr-2 text-midnight"}),"Account Settings"),l.a.createElement("div",{className:"dropdown-item"},l.a.createElement("i",{className:"fas fa-fw fa-list mr-2 text-midnight"}),"Activity Log"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("div",{className:"dropdown-item","data-toggle":"modal","data-target":"#logoutModal"},l.a.createElement("i",{className:"fas fa-fw fa-sign-out-alt mr-2 text-midnight"}),"Logout"))))),l.a.createElement("div",{className:"modal fade",id:"logoutModal",tabindex:"-1",role:"dialog","aria-labelledby":"modalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header modal-title text-midnight font-weight-bold",id:"modalLabel"},"End Session?"),l.a.createElement("div",{className:"modal-body"},"Select the ",l.a.createElement("strong",null,"Logout")," button below to end your session."),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{className:"btn btn-sm btn-secondary font-weight-bold px-3",type:"button","data-dismiss":"modal"},"Cancel"),l.a.createElement("button",{className:"btn btn-sm btn-primary font-weight-bold px-3",type:"button","data-dismiss":"modal",onClick:function(){h.clear(),e.history.push("/auth")}},"Logout"))))))};var k=function(){return l.a.createElement("div",null,l.a.createElement("footer",{className:"shadow py-3 bg-white"},l.a.createElement("div",{className:"container my-auto"},l.a.createElement("div",{className:"copyright text-center text-secondary font-weight-bold small"},l.a.createElement("span",null,"Copyright \xa9 2020 - Laboratorium Termal dan Kondisi Lingkungan")))))},S=t(49),A=t(50),C=t(53),O=t(52),j=t(51),D=t.n(j),T={size:"12px"},L={size:"32px"},U="Nunito, Arial, sans-serif",M=-135,H=135,P=function(e){Object(C.a)(t,e);var a=Object(O.a)(t);function t(e){var n,l=e.chartLabel,r=e.chartHeight,c=Object(i.a)(e,["chartLabel","chartHeight"]);return Object(S.a)(this,t),(n=a.call(this,c)).chartHeight=r,n.state={series:[43.12],options:{series:[0],labels:[l],chart:{height:r,type:"radialBar",toolbar:{show:!1}},plotOptions:{radialBar:{startAngle:M,endAngle:H,hollow:{size:"67",position:"front"},track:{margin:0,dropShadow:{enabled:!0,opacity:.2,top:-3,left:0,blur:4}},dataLabels:{showOn:"always",name:{offsetY:-10,fontFamily:U,fontSize:T.size,color:"#858796",show:!0},value:{formatter:function(e){return parseFloat(e)},fontFamily:U,fontSize:L.size,color:"#858796",show:!0}}}},fill:{colors:[function(e){var a=e.value;return a<75?"#2ECC71":a>74&&a<90?"#F39C12":"#E74C3C"}],opacity:1,type:"gradient",gradient:{shade:"dark",type:"vertical",gradientToColors:["#40739E"],inverseColors:!1,stops:[0,100]}},stroke:{lineCap:"round"}}},n}return Object(A.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex align-items-top justify-content-center"},l.a.createElement(D.a,{options:this.state.options,series:this.state.series,type:"radialBar",height:this.chartHeight}))}}]),t}(n.Component),F=function(e){Object(C.a)(t,e);var a=Object(O.a)(t);function t(e){e.chartLabel;var n,l=e.chartHeight,r=Object(i.a)(e,["chartLabel","chartHeight"]);return Object(S.a)(this,t),(n=a.call(this,r)).chartHeight=l,n.state={series:[{data:[[13273596e5,30.95],[1327446e6,31.34],[13275324e5,31.18],[13276188e5,31.05],[1327878e6,31],[13279644e5,30.95],[13280508e5,31.24],[13281372e5,31.29],[13282236e5,31.85],[13284828e5,31.86],[13285692e5,32.28],[13286556e5,32.1],[1328742e6,32.65],[13288284e5,32.21],[13290876e5,32.35],[1329174e6,32.44],[13292604e5,32.46],[13293468e5,32.86],[13294332e5,32.75],[13297788e5,32.54],[13298652e5,32.33],[13299516e5,32.97],[1330038e6,33.41],[13302972e5,33.27],[13303836e5,33.27],[133047e7,32.89],[13305564e5,33.1],[13306428e5,33.73],[1330902e6,33.22],[13309884e5,31.99],[13310748e5,32.41],[13311612e5,33.05],[13312476e5,33.64],[13315068e5,33.56],[13315932e5,34.22],[13316796e5,33.77],[1331766e6,34.17],[13318524e5,33.82],[13321116e5,34.51],[1332198e6,33.16],[13322844e5,33.56],[13323708e5,33.71],[13324572e5,33.81],[13327128e5,34.4],[13327992e5,34.63],[13328856e5,34.46],[1332972e6,34.48],[13330584e5,34.31],[13333176e5,34.7],[1333404e6,34.31],[13334904e5,33.46],[13335768e5,33.59],[13339224e5,33.22],[13340088e5,32.61],[13340952e5,33.01],[13341816e5,33.55],[1334268e6,33.18],[13345272e5,32.84],[13346136e5,33.84],[13347e8,33.39],[13347864e5,32.91],[13348728e5,33.06],[1335132e6,32.62],[13352184e5,32.4],[13353048e5,33.13],[13353912e5,33.26],[13354776e5,33.58],[13357368e5,33.55],[13358232e5,33.77],[13359096e5,33.76],[1335996e6,33.32],[13360824e5,32.61],[13363416e5,32.52],[1336428e6,32.67],[13365144e5,32.52],[13366008e5,31.92],[13366872e5,32.2],[13369464e5,32.23],[13370328e5,32.33],[13371192e5,32.36],[13372056e5,32.01],[1337292e6,31.31],[13375512e5,32.01],[13376376e5,32.01],[1337724e6,32.18],[13378104e5,31.54],[13378968e5,31.6],[13382424e5,32.05],[13383288e5,31.29],[13384152e5,31.05],[13385016e5,29.82],[13387608e5,30.31],[13388472e5,30.7],[13389336e5,31.69],[133902e7,31.32],[13391064e5,31.65],[13393656e5,31.13],[1339452e6,31.77],[13395384e5,31.79],[13396248e5,31.67],[13397112e5,32.39],[13399704e5,32.63],[13400568e5,32.89],[13401432e5,31.99],[13402296e5,31.23],[1340316e6,31.57],[13405752e5,30.84],[13406616e5,31.07],[1340748e6,31.41],[13408344e5,31.17],[13409208e5,32.37],[134118e7,32.19],[13412664e5,32.51],[13414392e5,32.53],[13415256e5,31.37],[13417848e5,30.43],[13418712e5,30.44],[13419576e5,30.2],[1342044e6,30.14],[13421304e5,30.65],[13423896e5,30.4],[1342476e6,30.65],[13425624e5,31.43],[13426488e5,31.89],[13427352e5,31.38],[13429944e5,30.64],[13430808e5,30.02],[13431672e5,30.33],[13432536e5,30.95],[134334e7,31.89],[13435992e5,31.01],[13436856e5,30.88],[1343772e6,30.69],[13438584e5,30.58],[13439448e5,32.02],[1344204e6,32.14],[13442904e5,32.37],[13443768e5,32.51],[13444632e5,32.65],[13445496e5,32.64],[13448088e5,32.27],[13448952e5,32.1],[13449816e5,32.91],[1345068e6,33.65],[13451544e5,33.8],[13454136e5,33.92],[13455e8,33.75],[13455864e5,33.84],[13456728e5,33.5],[13457592e5,32.26],[13460184e5,32.32],[13461048e5,32.06],[13461912e5,31.96],[13462776e5,31.46],[1346364e6,31.27],[13467096e5,31.43],[1346796e6,32.26],[13468824e5,32.79],[13469688e5,32.46],[1347228e6,32.13],[13473144e5,32.43],[13474008e5,32.42],[13474872e5,32.81],[13475736e5,33.34],[13478328e5,33.41],[13479192e5,32.57],[13480056e5,33.12],[1348092e6,34.53],[13481784e5,33.83],[13484376e5,33.41],[1348524e6,32.9],[13486104e5,32.53],[13486968e5,32.8],[13487832e5,32.44],[13490424e5,32.62],[13491288e5,32.57],[13492152e5,32.6],[13493016e5,32.68],[1349388e6,32.47],[13496472e5,32.23],[13497336e5,31.68],[134982e7,31.51],[13499064e5,31.78],[13499928e5,31.94],[1350252e6,32.33],[13503384e5,33.24],[13504248e5,33.44],[13505112e5,33.48],[13505976e5,33.24],[13508568e5,33.49],[13509432e5,33.31],[13510296e5,33.36],[1351116e6,33.4],[13512024e5,34.01],[1351638e6,34.02],[13517244e5,34.36],[13518108e5,34.39],[135207e7,34.24],[13521564e5,34.39],[13522428e5,33.47],[13523292e5,32.98],[13524156e5,32.9],[13526748e5,32.7],[13527612e5,32.54],[13528476e5,32.23],[1352934e6,32.64],[13530204e5,32.65],[13532796e5,32.92],[1353366e6,32.64],[13534524e5,32.84],[13536252e5,33.4],[13538844e5,33.3],[13539708e5,33.18],[13540572e5,33.88],[13541436e5,34.09],[135423e7,34.61],[13544892e5,34.7],[13545756e5,35.3],[1354662e6,35.4],[13547484e5,35.14],[13548348e5,35.48],[1355094e6,35.75],[13551804e5,35.54],[13552668e5,35.96],[13553532e5,35.53],[13554396e5,37.56],[13556988e5,37.42],[13557852e5,37.49],[13558716e5,38.09],[1355958e6,37.87],[13560444e5,37.71],[13563036e5,37.53],[13564764e5,37.55],[13565628e5,37.3],[13566492e5,36.9],[13569084e5,37.68],[13570812e5,38.34],[13571676e5,37.75],[1357254e6,38.13],[13575132e5,37.94],[13575996e5,38.14],[1357686e6,38.66],[13577724e5,38.62],[13578588e5,38.09],[1358118e6,38.16],[13582044e5,38.15],[13582908e5,37.88],[13583772e5,37.73],[13584636e5,37.98],[13588092e5,37.95],[13588956e5,38.25],[1358982e6,38.1],[13590684e5,38.32],[13593276e5,38.24],[1359414e6,38.52],[13595004e5,37.94],[13595868e5,37.83],[13596732e5,38.34],[13599324e5,38.1],[13600188e5,38.51],[13601052e5,38.4],[13601916e5,38.07],[1360278e6,39.12],[13605372e5,38.64],[13606236e5,38.89],[136071e7,38.81],[13607964e5,38.61],[13608828e5,38.63],[13612284e5,38.99],[13613148e5,38.77],[13614012e5,38.34],[13614876e5,38.55],[13617468e5,38.11],[13618332e5,38.59],[13619196e5,39.6]]}],options:{chart:{id:"area-datetime",type:"area",height:350,zoom:{autoScaleYaxis:!0},toolbar:{show:!1}},annotations:{yaxis:[{y:30,borderColor:"#999",label:{show:!0,text:"Support",style:{color:"#fff",background:"#00E396"}}}],xaxis:[{x:new Date("14 Nov 2012").getTime(),borderColor:"#999",yAxisIndex:0,label:{show:!0,text:"Rally",style:{color:"#fff",background:"#775DD0"}}}]},dataLabels:{enabled:!1},markers:{size:0,style:"hollow"},xaxis:{type:"datetime",min:new Date("01 Mar 2012").getTime(),tickAmount:6},tooltip:{x:{format:"dd MMM yyyy"}},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,stops:[0,100]}}}},n}return Object(A.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex flex-column mb-2"},l.a.createElement(D.a,{options:this.state.options,series:this.state.series,type:"area",height:this.chartHeight}))}}]),t}(n.Component);var z=function(e){var a=e.header,t=e.value;return l.a.createElement("div",{className:"card border-left-midnight shadow py-2"},l.a.createElement("div",{className:"card-body pt-2 pb-0"},l.a.createElement("div",{className:"d-block px-2"},l.a.createElement("div",{className:"d-flex justify-content-between mx-auto mb-2"},l.a.createElement("div",{className:"d-inline small font-weight-bold text-midnight"},a),l.a.createElement("span",{className:"badge badge-success px-4"},"Optimal")),l.a.createElement("div",{className:"d-flex justify-content-end align-text-top mx-auto"},l.a.createElement("h1",{className:"d-inline display-4 mb-1"},t),l.a.createElement("h1",{className:"d-inline ml-1"},"\xb0C")))))};var B=function(){return l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-sm small"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{className:"text-midnight",scope:"col"},"No."),l.a.createElement("th",{className:"text-midnight",scope:"col"},"Alarm Level"),l.a.createElement("th",{className:"text-midnight",scope:"col"},"Device Name"),l.a.createElement("th",{className:"text-midnight",scope:"col"},"Alarm Information"),l.a.createElement("th",{className:"text-midnight",scope:"col"},"Trigger Value"),l.a.createElement("th",{className:"text-midnight",scope:"col"},"Alarm Time"),l.a.createElement("th",{className:"text-midnight",scope:"col"},"Acknowledgement"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"text-dark"}),l.a.createElement("td",{className:"text-dark"},"Critical"),l.a.createElement("td",{className:"text-dark"},"PDU1"),l.a.createElement("td",{className:"text-dark"},"Emergency Fan Open Alarm"),l.a.createElement("td",{className:"text-dark"},"-"),l.a.createElement("td",{className:"text-dark"},"23:21:26 20-06-2020"),l.a.createElement("td",{className:"text-dark"},l.a.createElement("button",{className:"btn btn-block btn-sm btn-warning font-weight-bold text-xs",type:"button"},"Acknowledge"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-dark"}),l.a.createElement("td",{className:"text-dark"},"Moderate"),l.a.createElement("td",{className:"text-dark"},"Air Conditioner"),l.a.createElement("td",{className:"text-dark"},"AC Power-off Alarm"),l.a.createElement("td",{className:"text-dark"},"OFF"),l.a.createElement("td",{className:"text-dark"},"23:21:22 20-06-2020"),l.a.createElement("td",{className:"text-dark"},l.a.createElement("button",{className:"btn btn-block btn-sm btn-warning font-weight-bold text-xs",type:"button"},"Acknowledge"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-dark"}),l.a.createElement("td",{className:"text-dark"},"Low"),l.a.createElement("td",{className:"text-dark"},"Air Conditioner"),l.a.createElement("td",{className:"text-dark"},"AC Cooling Fault"),l.a.createElement("td",{className:"text-dark"},"-"),l.a.createElement("td",{className:"text-dark"},"23:21:22 20-06-2020"),l.a.createElement("td",{className:"text-dark"},l.a.createElement("button",{className:"btn btn-block btn-sm btn-warning font-weight-bold text-xs",type:"button"},"Acknowledge"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-dark"}),l.a.createElement("td",{className:"text-dark"},"Critical"),l.a.createElement("td",{className:"text-dark"},"TDI"),l.a.createElement("td",{className:"text-dark"},"Front Door Alarm"),l.a.createElement("td",{className:"text-dark"},"Open"),l.a.createElement("td",{className:"text-dark"},"16:51:60 20-06-2020"),l.a.createElement("td",{className:"text-dark"},l.a.createElement("button",{className:"btn btn-block btn-sm btn-warning font-weight-bold text-xs",type:"button"},"Acknowledge"))))))};var I=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"nav nav-tabs mb-2",id:"nav-tab",role:"tablist"},l.a.createElement("a",{className:"nav-item nav-link text-midnight font-weight-bold small active","data-toggle":"tab",href:"#all",role:"tab","aria-controls":"all","aria-selected":"true"},"All Alarms"),l.a.createElement("a",{className:"nav-item nav-link text-midnight font-weight-bold small","data-toggle":"tab",href:"#critical",role:"tab","aria-controls":"critical","aria-selected":"false"},"Critical Alarms"),l.a.createElement("a",{className:"nav-item nav-link text-midnight font-weight-bold small","data-toggle":"tab",href:"#moderate",role:"tab","aria-controls":"moderate","aria-selected":"false"},"Moderate Alarms"),l.a.createElement("a",{className:"nav-item nav-link text-midnight font-weight-bold small","data-toggle":"tab",href:"#low",role:"tab","aria-controls":"low","aria-selected":"false"},"Low Alarms")),l.a.createElement("div",{class:"tab-content",id:"nav-content"},l.a.createElement("div",{class:"tab-pane show active",id:"all",role:"tabpanel","aria-labelledby":"v-pills-critical-tab"},l.a.createElement(B,null)),l.a.createElement("div",{class:"tab-pane",id:"critical",role:"tabpanel","aria-labelledby":"v-pills-critical-tab"}),l.a.createElement("div",{class:"tab-pane",id:"moderate",role:"tabpanel","aria-labelledby":"v-pills-moderate-tab"}),l.a.createElement("div",{class:"tab-pane",id:"low",role:"tabpanel","aria-labelledby":"v-pills-low-tab"})))};function R(e){return l.a.createElement("div",{className:"d-block text-center mb-5"},l.a.createElement("div",{className:"lead text-secondary mb-0"},"Error"),l.a.createElement("div",{className:"error text-dark mx-auto","data-text":"404"},"404"),l.a.createElement("div",{className:"lead text-secondary mb-0"},"Page Not Found"),l.a.createElement("div",{className:"small text-gray-500 mb-0"},e))}var q=function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"d-flex justify-content-center my-4"},R("This page is under development!")))},K=t(75),W=t.n(K),_=t(142),G=t(19),J=t.n(G),V="http://sancaliar82.pythonanywhere.com/auth/obtain-token",Y="http://sancaliar82.pythonanywhere.com/auth/obtain-token/refresh";J.a.interceptors.request.use((function(e){var a=h.getAccessToken();return a&&(e.headers.Authorization="Bearer ".concat(a)),e}),(function(e){return Promise.reject(e)})),J.a.interceptors.response.use((function(e){return e}),function(){var e=Object(_.a)(W.a.mark((function e(a){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.config,401!==a.response.status||t.url!==V){e.next=3;break}return e.abrupt("return");case 3:if(401!==a.response.status||t._retry){e.next=7;break}return t._retry=!0,e.abrupt("return",J.a.post(Y,{refresh:h.getRefreshToken()}).then((function(e){return h.setAccessToken(e.data.access),J.a.defaults.headers.common.Authorization="Bearer ".concat(e.data.access),200===e.status?J()(t):null})));case 7:return e.abrupt("return",Promise.reject(a));case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());var Q=function(){J.a.get("http://sancaliar82.pythonanywhere.com/api/sensor").then((function(e){return console.log(e.data[0])}))};var X=function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"d-flex flex-column mb-3"},l.a.createElement("div",{className:"d-flex align-items-center justify-content-between mb-3"},l.a.createElement("div",{className:"d-none d-sm-inline h3 text-dark my-auto"},"Dashboard"),l.a.createElement("div",{className:"d-none d-sm-inline"},l.a.createElement("button",{className:"btn btn-sm btn-warning btn-icon-split font-weight-bold",type:"button",onClick:Q},l.a.createElement("span",{className:"icon text-white"},l.a.createElement("i",{className:"fas fa-fw fa-sm fa-download"})),l.a.createElement("span",{className:"text px-4"},"Generate Report")))),l.a.createElement("div",{className:"row align-items-top mb-2"},l.a.createElement("div",{className:"d-none d-sm-block col-md-12 col-xl-4"},l.a.createElement("div",{className:"card border-left-midnight shadow py-2 mb-2"},l.a.createElement("div",{className:"card-body py-2"},l.a.createElement("div",{className:"d-block small font-weight-bold text-midnight px-1"},"Relative Humidity"),l.a.createElement(P,{chartLabel:"Percent",chartHeight:320})))),l.a.createElement("div",{className:"d-none d-sm-block col-md-12 col-xl-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 col-xl-6 mb-2"},l.a.createElement(z,{header:"Evaporator Coil",value:"12.76"})),l.a.createElement("div",{className:"col-md-12 col-xl-6 mb-2"},l.a.createElement(z,{header:"Leaving Evaporator",value:"15.77"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 col-xl-6 mb-2"},l.a.createElement(z,{header:"Cabinet: Supply",value:"22.31"})),l.a.createElement("div",{className:"col-md-12 col-xl-6 mb-2"},l.a.createElement(z,{header:"Cabinet: Return",value:"29.98"}))),l.a.createElement("div",{className:"d-block dropdown-divider mb-2"}),l.a.createElement("div",{className:"d-block float-right text-dark small my-1"},l.a.createElement("strong",{className:"text-midnight"},"Last Updated:")," 09:27:42 PM"))),l.a.createElement("div",{className:"d-none d-sm-block card shadow"},l.a.createElement("div",{className:"card-body pb-0"},l.a.createElement("div",{className:"d-none d-sm-block"},l.a.createElement(F,{chartLabel:"Line Chart",chartHeight:320}))))),l.a.createElement("div",{className:"d-none d-md-block mb-3"},l.a.createElement(I,null)),l.a.createElement("div",{className:"d-block d-sm-none"},R("Mobile view is not supported yet :(")))};var Z=function(e){return l.a.createElement("div",{id:"wrapper"},l.a.createElement(w,null),l.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},l.a.createElement("div",{id:"content"},l.a.createElement(y,e),l.a.createElement(s.d,null,l.a.createElement(E,{exact:!0,path:"/",component:X}),l.a.createElement(E,{exact:!0,path:"/help",component:q}))),l.a.createElement(k,null)))};var $=function(e){var a=Object(n.useState)(""),t=Object(g.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)(""),i=Object(g.a)(s,2),o=i[0],m=i[1],d=Object(n.useState)(!1),u=Object(g.a)(d,2),b=u[0],p=u[1],f=Object(n.useState)(null),E=Object(g.a)(f,2),N=E[0],v=E[1];return l.a.createElement("div",{className:"bg-gradient-light container-fluid py-5"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card shadow border-0 bg-light o-hidden"},l.a.createElement("div",{className:"card-header bg-square-midnight font-weight-bold text-white py-2"},l.a.createElement("div",{className:"d-flex flex-row align-items-baseline float-right"},l.a.createElement("div",{className:"d-inline display-2"},l.a.createElement("i",{className:"fas fa-th"})),l.a.createElement("div",{className:"d-inline h3 mx-3"},"Smart Cabinet ",l.a.createElement("sup",null,"20")))),l.a.createElement("div",{className:"card-body px-5"},l.a.createElement("div",{className:"d-flex flex-row align-items-center"},l.a.createElement("div",{className:"col-md-9 mx-auto p-4"},l.a.createElement("div",{className:"card shadow border-0 bg-midnight o-hidden"},l.a.createElement("div",{className:"card-body p-4"},l.a.createElement("h4",{className:"card-title text-white px-2"},"User Authentication"),l.a.createElement("div",{className:"col px-5 mx-auto"},N&&l.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show mb-2",role:"alert"},l.a.createElement("span",{className:"small font-weight-bold text-monospace"},N),l.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("form",{className:"user"},l.a.createElement("div",{className:"form-group mb-1"},l.a.createElement("label",{className:"small font-weight-bold text-white"},"Username:"),l.a.createElement("input",{className:"form-control text-monospace",type:"text",value:r,onChange:function(e){return c(e.target.value)},required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"small font-weight-bold text-white"},"Password:"),l.a.createElement("input",{className:"form-control text-monospace",type:"password",value:o,onChange:function(e){return m(e.target.value)},required:!0}))),l.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-center"},l.a.createElement("button",{className:"btn btn-sm btn-success float-right px-5",type:"button",disabled:b,onClick:function(){p(!0),""===r||""===o?(v("Please fill the authentication fields!"),p(!1)):J.a.post("http://sancaliar82.pythonanywhere.com/auth/obtain-token",{username:r,password:o}).then((function(a){!function(e){h.setRefreshToken(e.data.refresh),h.setAccessToken(e.data.access),h.setUser(e.data.user),p(!1)}(a),c(""),m(""),e.history.push("/")})).catch((function(e){v("Invalid credentials!"),p(!1)}))}},l.a.createElement("span",{className:"font-weight-bold"},b?"Authenticating":"Login")),l.a.createElement("a",{className:"small text-white font-weight-bold",href:""},"Forgot Password?")))))))),l.a.createElement("div",{className:"card-footer bg-light"},l.a.createElement("div",{className:"text-midnight text-center font-weight-bold small"},l.a.createElement("span",null,"Copyright \xa9 2020 - Laboratorium Termal dan Kondisi Lingkungan")))))))};var ee=function(){return l.a.createElement("div",null,l.a.createElement(s.d,null,l.a.createElement(f,{exact:!0,path:"/auth",component:$}),l.a.createElement(E,{exact:!0,path:"/",component:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N.a,null,l.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[143,1,2]]]);
//# sourceMappingURL=main.526e5a0b.chunk.js.map