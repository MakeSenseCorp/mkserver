(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){"use strict";var n=a(0),r=a(23),i=n.createContext({dashboardServerApi:new r.a});a.d(t,"a",function(){return i})},13:function(e,t,a){e.exports={applicationWrapper:"ApplicationTile_applicationWrapper__3mpah",smartHome:"ApplicationTile_smartHome__1pjCt",applicationTitle:"ApplicationTile_applicationTitle__15K0O",applicationThumbnailWrapper:"ApplicationTile_applicationThumbnailWrapper__306lE",imageThumbnail:"ApplicationTile_imageThumbnail__9GLke",imageSize:"ApplicationTile_imageSize__1BSQi",textThumbnail:"ApplicationTile_textThumbnail__1A_9K",applicationContent:"ApplicationTile_applicationContent__ky93E",mkAppModalWrapper:"ApplicationTile_mkAppModalWrapper__eMAJz"}},15:function(e,t,a){e.exports={contentHeader:"Header_contentHeader__3aK_q",sectionTitle:"Header_sectionTitle__z3AZM",headerUserWrapper:"Header_headerUserWrapper__1_ouL",headerUserThumbnail:"Header_headerUserThumbnail__3gkWz",headerUserName:"Header_headerUserName__2RS0U",headerOptions:"Header_headerOptions__1mXey",headerTriangle:"Header_headerTriangle__3hdkD"}},23:function(e,t,a){"use strict";var n=a(10),r=a.n(n),i=a(12),c=a(2),s=a(70),o=[{name:"Smart Home",id:"2323-234234-1234",viewportSize:{width:800,height:800}}],l=s,p=function e(){var t=this;Object(c.a)(this,e),this.makeSenseApi=window.MkSAPIBuilder.GetInstance(),this.nodeInfoCallbackList={},this.nodeSettingsFilesCallbackList={},this.OnGetNodeInfoCallback=function(e){t.nodeInfoCallbackList[e.data.payload.uuid](e)},this.OnGetFileCallback=function(e){var a=e&&e.data&&e.data.payload&&"js"===e.data.payload.file_type?"onScriptFileReturned":"onHtmlFileReturned";t.nodeSettingsFilesCallbackList[e.header.source][a](e)},this.getApplicationsList=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("/applications"),e.abrupt("return",Promise.resolve(o));case 2:case"end":return e.stop()}},e,this)})),this.getApplicationThumbnail=function(){return console.log("/applications/:appId:/thumbnail"),Promise.resolve(l)},this.getDeviceStatus=function(e){var a=new Promise(function(a){t.nodeInfoCallbackList[e]=function(e){a(e.data.payload)}});return t.makeSenseApi.GetNodeInfo(e),a},this.getNodeSettingsScript=function(e){return new Promise(function(a){t.nodeSettingsFilesCallbackList[e]?t.nodeSettingsFilesCallbackList[e].onScriptFileReturned=function(e){a(e.data.payload.content)}:t.nodeSettingsFilesCallbackList[e]={onHtmlFileReturned:function(e){a(e.data.payload.content)},onScriptFileReturned:function(e){a(e.data.payload.content)}},t.makeSenseApi.GetFileContent(e,{ui_type:"config",file_name:"",file_type:"js"})})},this.getNodeSettingsHtml=function(e){return new Promise(function(a){t.nodeSettingsFilesCallbackList[e]?t.nodeSettingsFilesCallbackList[e].onHtmlFileReturned=function(e){a(e.data.payload.content)}:t.nodeSettingsFilesCallbackList[e]={onHtmlFileReturned:function(e){a(e.data.payload.content)},onScriptFileReturned:function(e){a(e.data.payload.content)}},t.makeSenseApi.GetFileContent(e,{ui_type:"config",file_name:"",file_type:"html"})})},this.getDeviceList=function(){return new Promise(function(e,a){t.makeSenseApi.Webface.GetUserNodeList(function(t){var n=t.nodes.data.map(function(e){return{uuid:e.uuid}});e(n),t&&t.error&&a("OnGatewayDataArrivedCallback received an error")})})},this.makeSenseApi.ConnectGateway(),this.makeSenseApi.Gateway.OnGatewayDataArrivedCallback=function(e){},this.makeSenseApi.Gateway.OnGetNodeInfoCallback=this.OnGetNodeInfoCallback,this.makeSenseApi.Gateway.OnGetFileCallback=this.OnGetFileCallback,this.makeSenseApi.Gateway.UpdateCallbackTable()};a.d(t,"a",function(){return p})},26:function(e,t,a){e.exports={root:"Dashboard_root__1mK5D",siteContent:"Dashboard_siteContent__2b2YJ"}},28:function(e,t,a){e.exports={myApplicationsHeader:"PageHeader_myApplicationsHeader__1ZyhV",searchButton:"PageHeader_searchButton__2_K6d"}},29:function(e,t,a){e.exports={pageWrapper:"ApplicationsPage_pageWrapper__3hmUP",pageContentWrapper:"ApplicationsPage_pageContentWrapper__3WpoV"}},30:function(e,t,a){e.exports={pageWrapper:"DevicePage_pageWrapper__fMst9",pageContentWrapper:"DevicePage_pageContentWrapper__qo2y-"}},42:function(e,t,a){e.exports={mainWrapper:"FavoritesPage_mainWrapper__1hXRZ"}},47:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return NodeSettings});var _Users_datablock_makeSence_Dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_Users_datablock_makeSence_Dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Users_datablock_makeSence_Dashboard_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Users_datablock_makeSence_Dashboard_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_Users_datablock_makeSence_Dashboard_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Providers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),NodeSettings=function(_React$Component){function NodeSettings(){var e,t;Object(_Users_datablock_makeSence_Dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,NodeSettings);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=Object(_Users_datablock_makeSence_Dashboard_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(e=Object(_Users_datablock_makeSence_Dashboard_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(NodeSettings)).call.apply(e,[this].concat(n)))).context=void 0,t}return Object(_Users_datablock_makeSence_Dashboard_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(NodeSettings,_React$Component),Object(_Users_datablock_makeSence_Dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(NodeSettings,[{key:"decodeDomProperty",value:function(e){for(var t=e.toString(),a="",n=0;n<t.length&&"00"!==t.substr(n,2);n+=2)a+=String.fromCharCode(parseInt(t.substr(n,2),16));return a}},{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_5__.createElement("section",null,react__WEBPACK_IMPORTED_MODULE_5__.createElement("script",null,eval(this.decodeDomProperty(this.props.script))),react__WEBPACK_IMPORTED_MODULE_5__.createElement("div",{dangerouslySetInnerHTML:{__html:this.decodeDomProperty(this.props.html)}}))}}]),NodeSettings}(react__WEBPACK_IMPORTED_MODULE_5__.Component);NodeSettings.contextType=_Providers__WEBPACK_IMPORTED_MODULE_6__.a},49:function(e,t,a){e.exports=a(84)},7:function(e,t,a){e.exports={cardWrapper:"DeviceCard_cardWrapper__j7iwR",expandStripeWrapper:"DeviceCard_expandStripeWrapper__1hieZ",expandStripe:"DeviceCard_expandStripe__1cPAG",expanded:"DeviceCard_expanded__3wFkb",deviceTypeIcon:"DeviceCard_deviceTypeIcon__2tjw1",Section:"DeviceCard_Section__3JnEA",IconSectionBackground:"DeviceCard_IconSectionBackground__vIFtK",deviceContentWrapper:"DeviceCard_deviceContentWrapper__29hte",subTitle:"DeviceCard_subTitle__1RrMZ",text:"DeviceCard_text__3CWeH",deviceType:"DeviceCard_deviceType__3tZai",deviceName:"DeviceCard_deviceName__UWFEu",deviceSettingsMenu:"DeviceCard_deviceSettingsMenu__3UuzE",deviceSettingsMenuIcon:"DeviceCard_deviceSettingsMenuIcon__3Tdq9",deviceStatus:"DeviceCard_deviceStatus__2TuN0",cardSummary:"DeviceCard_cardSummary__1jeCJ",nodeSettingPageWrapper:"DeviceCard_nodeSettingPageWrapper__2yGyC",placeHolderWidth:"DeviceCard_placeHolderWidth__2lE0X",nodeSettingPage:"DeviceCard_nodeSettingPage__3T9KM"}},70:function(e,t,a){e.exports=a.p+"static/media/react_logo.5d5d9eef.svg"},8:function(e,t,a){e.exports={sideMenuWrapper:"SideMenu_sideMenuWrapper__2IDZB",sideMenuTitle:"SideMenu_sideMenuTitle__1TZj-",sideMenuItem:"SideMenu_sideMenuItem__a2gnL",sideMenuItemIcon:"SideMenu_sideMenuItemIcon__nuKFs",sideMenuIPinnedApps:"SideMenu_sideMenuIPinnedApps__3kYSq",selected:"SideMenu_selected__2vfi7"}},80:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=a(2),o=a(3),l=a(5),p=a(4),d=a(6),u=a(26),_=a.n(u),m=a(15),h=a.n(m),v=function(){return r.a.createElement("header",{className:h.a.contentHeader},r.a.createElement("h1",{className:h.a.sectionTitle},"MAKE SENSE"),r.a.createElement("div",{className:h.a.headerUserWrapper},r.a.createElement("div",{className:h.a.headerUserThumbnail}),r.a.createElement("div",{className:h.a.headerUserName},"Boris Kadaner"),r.a.createElement("div",{className:h.a.headerOptions},r.a.createElement("div",{className:h.a.headerTriangle}))))},b=a(8),E=a.n(b),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("svg",{className:this.props.className,version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"64px",height:"64px",viewBox:"0 0 64 64",enableBackground:"new 0 0 64 64"},n.createElement("g",null,n.createElement("path",{d:"M32,64c8.547,0,16.583-3.329,22.627-9.374c6.045-6.044,9.374-14.079,9.374-22.626s-3.329-16.582-9.374-22.626 C48.583,3.329,40.547,0,32,0C23.452,0,15.417,3.329,9.373,9.374C3.328,15.418-0.001,23.453-0.001,32s3.329,16.582,9.374,22.626 C15.417,60.671,23.452,64,32,64z M10.787,10.788C16.453,5.121,23.986,2,32,2c8.013,0,15.547,3.121,21.213,8.788 C58.88,16.454,62.001,23.987,62.001,32s-3.121,15.546-8.788,21.212C47.547,58.879,40.013,62,32,62 c-8.014,0-15.547-3.121-21.213-8.788C5.12,47.546,1.999,40.013,1.999,32S5.12,16.454,10.787,10.788z"}),n.createElement("rect",{x:"31",y:"17",width:"2",height:"22"}),n.createElement("rect",{x:"31",y:"43",width:"2",height:"4"})))}}]),t}(n.Component),f=a(20),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("svg",{className:this.props.className,version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"64px",height:"64px",viewBox:"0 0 64 64",enableBackground:"new 0 0 64 64"},n.createElement("g",null,n.createElement("path",{d:"M48,4c-7.357,0-13.639,4.146-16,9.929C29.639,8.146,23.357,4,16,4C5.985,4,0,12.644,0,21 c0,8.589,5.326,17.755,15.83,27.242c7.738,6.989,15.59,11.577,15.668,11.623L32,60.156l0.502-0.291 c0.079-0.046,7.93-4.634,15.668-11.623C58.674,38.755,64,29.589,64,21C64,12.644,58.015,4,48,4z M32,57.833 C28.031,55.41,2,38.828,2,21C2,13.627,7.237,6,16,6c7.214,0,15,4.971,15,13h2c0-8.029,7.786-13,15-13c8.763,0,14,7.627,14,15 C62,38.818,35.968,55.409,32,57.833z"})))}}]),t}(n.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("svg",{className:this.props.className,version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"64px",height:"64px",viewBox:"0 0 64 64",enableBackground:"new 0 0 64 64",color:"#768093"},n.createElement("g",null,n.createElement("path",{d:"M0,58h64V6H0V58z M2,56V16h60v40H2z M62,8v6H2V8H62z"}),n.createElement("rect",{x:"6",y:"10",width:"4",height:"2"}),n.createElement("rect",{x:"14",y:"10",width:"4",height:"2"}),n.createElement("rect",{x:"22",y:"10",width:"4",height:"2"}),n.createElement("rect",{x:"6",y:"24",width:"27",height:"2"}),n.createElement("rect",{x:"6",y:"32",width:"27",height:"2"}),n.createElement("rect",{x:"6",y:"40",width:"27",height:"2"}),n.createElement("path",{d:"M37,42h21V24H37V42z M39,26h17v14H39V26z"})))}}]),t}(n.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("svg",{className:this.props.className,version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"64px",height:"64px",viewBox:"0 0 64 64",enableBackground:"new 0 0 64 64",color:"#768093"},n.createElement("g",null,n.createElement("path",{d:"M0,58h64V6H0V58z M2,56V16h60v40H2z M62,8v6H2V8H62z"}),n.createElement("rect",{x:"6",y:"10",width:"4",height:"2"}),n.createElement("rect",{x:"14",y:"10",width:"4",height:"2"}),n.createElement("rect",{x:"22",y:"10",width:"4",height:"2"}),n.createElement("rect",{x:"6",y:"24",width:"27",height:"2"}),n.createElement("rect",{x:"6",y:"32",width:"27",height:"2"}),n.createElement("rect",{x:"6",y:"40",width:"27",height:"2"}),n.createElement("path",{d:"M37,42h21V24H37V42z M39,26h17v14H39V26z"})))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("svg",{className:this.props.className,version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"64px",height:"64px",viewBox:"0 0 64 64",enableBackground:"new 0 0 64 64"},n.createElement("g",null,n.createElement("path",{d:"M53,27h-1v-5c0-0.17-0.229-17-20-17S12,21.83,12,22v5h-1C4.935,27,0,31.935,0,38s4.935,11,11,11h3V31v-4v-5 c0-0.612,0.205-15,18-15c17.739,0,17.998,14.389,18,15v5v1v20v1v3.323l-13,5.2V54H27v6h9.192L52,53.677V49h1 c6.065,0,11-4.935,11-11S59.065,27,53,27z M12,47h-1c-4.963,0-9-4.038-9-9s4.037-9,9-9h1v2V47z M29,58v-2h6v2H29z M53,47h-1V29h1 c4.963,0,9,4.038,9,9S57.963,47,53,47z"})))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("svg",{className:this.props.className,version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"64px",height:"64px",viewBox:"0 0 64 64",enableBackground:"new 0 0 64 64"},n.createElement("g",null,n.createElement("path",{d:"M59,63.236l5-10V2H54v4h-4v11h2V8h2v45.236L59,63.236z M56,4h6v48.764l-3,6l-3-6V4z"}),n.createElement("path",{d:"M46,7H32.531l-0.75-3H28V0H18v4h-3.781l-0.75,3H0v57h46V7z M15.781,6H20V2h6v4h4.219l1.5,6H14.281L15.781,6z M44,62H2V9 h10.969l-1.25,5h22.562l-1.25-5H44V62z"})))}}]),t}(n.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("svg",{className:this.props.className,version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"64px",height:"64px",viewBox:"0 0 64 64",enableBackground:"new 0 0 64 64"},n.createElement("g",null,n.createElement("path",{d:"M53.144,20.271L59.414,14L50,4.586l-6.27,6.27L39,9.279V0H25v9.279l-4.73,1.576L14,4.586L4.586,14l6.27,6.271L9.279,25H0 v14h9.279l1.577,4.729L4.586,50L14,59.414l6.27-6.27L25,54.721V64h14v-9.279l4.73-1.576l6.27,6.27L59.414,50l-6.27-6.271L54.721,39 H64V25h-9.279L53.144,20.271z M62,37h-8.721l-2.423,7.271L56.586,50L50,56.586l-5.73-5.73L37,53.279V62H27v-8.721l-7.27-2.424 L14,56.586L7.414,50l5.73-5.729L10.721,37H2V27h8.721l2.423-7.271L7.414,14L14,7.414l5.73,5.73L27,10.721V2h10v8.721l7.27,2.424 L50,7.414L56.586,14l-5.73,5.729L53.279,27H62V37z"}),n.createElement("path",{d:"M32,25c-3.86,0-7,3.141-7,7s3.14,7,7,7s7-3.141,7-7S35.86,25,32,25z M32,37c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S34.757,37,32,37z"})))}}]),t}(n.Component),w=a(14),x=a.n(w),N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("section",null,n.createElement("div",{className:E.a.sideMenuTitle},"GENERAL"),n.createElement(j,Object.assign({},this.props,{pageName:"FAVORITES_PAGE"}),n.createElement(O,{className:E.a.sideMenuItemIcon}),"Favorites"),n.createElement(j,Object.assign({},this.props,{pageName:"APPLICATION_PAGE"}),n.createElement(S,{className:E.a.sideMenuItemIcon}),"applications"),n.createElement(j,Object.assign({},this.props,{pageName:"SENSORS_PAGE"}),n.createElement(C,{className:E.a.sideMenuItemIcon}),"Devices"),n.createElement(j,Object.assign({},this.props,{pageName:"HELP_PAGE"}),n.createElement(k,{className:E.a.sideMenuItemIcon}),"Help"))}}]),t}(n.Component),j=function(e){var t,a=e.pageSelector,r=e.selectedPage,i=e.children,c=e.pageName;return n.createElement("a",{onClick:function(){return a(c)},className:x()((t={},Object(f.a)(t,E.a.sideMenuItem,!0),Object(f.a)(t,E.a.selected,r===c),t))},n.createElement(n.Fragment,null,i))},A=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("section",null,n.createElement("div",{className:E.a.sideMenuTitle},"SETTINGS"),n.createElement("a",{className:E.a.sideMenuItem},n.createElement(y,{className:E.a.sideMenuItemIcon}),"Account"),n.createElement("a",{className:E.a.sideMenuItem},n.createElement(M,{className:E.a.sideMenuItemIcon}),"Dashboard Settings"))}}]),t}(n.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("section",{className:E.a.sideMenuIPinnedApps},n.createElement("div",{className:E.a.sideMenuTitle},"PINNED APPS"),"TODO")}}]),t}(n.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("nav",{className:E.a.sideMenuWrapper},n.createElement("div",null,n.createElement(N,this.props),n.createElement(A,this.props),n.createElement(D,this.props)),n.createElement("div",{className:E.a.sideMenuItem},n.createElement(g,{className:E.a.sideMenuItemIcon}),"Logout"))}}]),t}(n.Component),T=a(10),P=a.n(T),I=a(12),W=a(13),H=a.n(W),B=a(21),U={isMkAppOpen:!1},V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state=U,a.renderThumbnail=function(){var e=a.props,t=e.appThumbnail,r=e.name;return n.createElement("div",{className:H.a.applicationThumbnailWrapper},t?n.createElement("div",{className:H.a.imageThumbnail},n.createElement("img",{src:t,className:H.a.imageSize})):n.createElement("div",{className:H.a.textThumbnail},r.charAt(0).toUpperCase()))},a.openMKAppMainView=function(){a.setState({isMkAppOpen:!0})},a.closeMKAppMainView=function(){a.setState({isMkAppOpen:!1})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.viewportSize,t=this.state.isMkAppOpen;return n.createElement("div",{onDoubleClick:this.openMKAppMainView,className:"\n          ".concat(H.a.applicationWrapper," \n          ").concat(H.a.smartHome)},n.createElement("div",{className:H.a.applicationTitle},this.renderThumbnail(),this.props.name),n.createElement("div",{className:H.a.applicationContent},t?n.createElement(B.a,{closeOnEsc:!0,classNames:{modal:H.a.mkAppModalWrapper},onClose:this.closeMKAppMainView,open:this.state.isMkAppOpen},n.createElement("iframe",{src:"",frameBorder:"0",width:e.width,height:e.height})):n.createElement("div",null,"put knobs here")))}}]),t}(n.Component),z=a(18),R=a(11),F={appThumbnail:null},K=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state=F,a.context=void 0,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(I.a)(P.a.mark(function e(){var t;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.context.dashboardServerApi.getApplicationThumbnail();case 3:t=e.sent,this.setState({appThumbnail:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.createElement(n.Fragment,null,this.props.render(Object(z.a)({appThumbnail:this.state.appThumbnail},this.props.mkAppInitData)))}}]),t}(n.Component);K.contextType=R.a;var G=a(28),q=a.n(G),Z=function(e){var t=e.children;return r.a.createElement("header",{className:q.a.myApplicationsHeader},t,r.a.createElement("div",{className:q.a.searchButton},"Search..."))},J=a(29),Y=a.n(J),X=function(){return n.createElement("div",null,"SKELETON")},$={appList:[]},Q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state=$,a.context=void 0,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(I.a)(P.a.mark(function e(){var t;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.context.dashboardServerApi.getApplicationsList();case 2:t=e.sent,this.setState({appList:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.appList;return n.createElement("section",{className:Y.a.pageWrapper},n.createElement(Z,null,"MY APPLICATIONS"),n.createElement("div",{className:Y.a.pageContentWrapper},e&&e.map(function(e,t){return n.createElement(K,{key:t,mkAppInitData:e,render:function(e){return e?n.createElement(V,e):n.createElement(X,null)}})})))}}]),t}(n.Component);Q.contextType=R.a;var ee=a(42),te=a.n(ee),ae=(n.Component,a(30)),ne=a.n(ae),re=a(7),ie=a.n(re),ce=a(43),se=a(44),oe=a(32),le=a(33);function pe(){var e=Object(oe.a)(["\n    background-image: linear-gradient(\n      to right,\n      "," 0,\n      rgba(249, 250, 251, 0.8) 10%,\n      "," 20%\n    );\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-size: 800px 104px;\n    display: inline-block;\n    position: absolute;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: infinite;\n    animation-name: ",";\n    animation-timing-function: linear;\n  "]);return pe=function(){return e},e}function de(){var e=Object(oe.a)(["\n    0% {\n      background-position: 0 0;\n    }\n  \n    100% {\n      background-position: "," 0;\n    }\n  "]);return de=function(){return e},e}var ue=function(e){var t=e.width,a=e.color,r=Object(le.b)(de(),t),i=le.a.div(pe(),a,a,r);return n.createElement(i,null)},_e=function(e){var t=e.fontSize,a=e.color,r=e.weight,i=e.width,c=e.skeletonColor,s=e.showSkeleton,o=e.children,l=Object(z.a)({fontSize:t,color:a,display:"inline-block",height:t,lineHeight:t},function(e){switch(e){case"thin":return{fontFamily:'"Open Sans Light", sans-serif',weight:e};case"normal":return{fontFamily:'"Open Sans Normal", sans-serif',weight:e};case"bold":return{fontFamily:'"Open Sans Bold", sans-serif',weight:e}}}(r)),p={backgroundColor:c,content:"",width:i};return n.createElement(n.Fragment,null,s?n.createElement("div",{style:Object(z.a)({},l,p)}):n.createElement("div",{style:Object(z.a)({},l,{})},o))},me=function(e){var t=e.showSkeleton,a=e.children;return n.createElement(_e,{fontSize:"10px",color:"#768093",skeletonColor:"#ecedf4",weight:"bold",width:"70px",showSkeleton:t},n.createElement(n.Fragment,null,a))},he=function(e){var t=e.showSkeleton,a=e.children;return n.createElement(_e,{color:"#2f3148",skeletonColor:"#ecedf4",weight:"normal",fontSize:"14px",width:"100px",showSkeleton:t},n.createElement(n.Fragment,null,a))},ve=a(47),be=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={nodeSettings:{},deviceStatus:{},isLoading:!0,isNodeSettingsLoaded:!0,isNodeSettingsOpenned:!1},a.context=void 0,a.handleNodeSettingsModalClick=Object(I.a)(P.a.mark(function e(){var t;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.context.dashboardServerApi.getNodeSettingsHtml(a.props.uuid);case 2:return e.t0=e.sent,e.next=5,a.context.dashboardServerApi.getNodeSettingsScript(a.props.uuid);case 5:e.t1=e.sent,t={html:e.t0,script:e.t1},a.setState({nodeSettings:t,isNodeSettingsOpenned:!0});case 8:case"end":return e.stop()}},e,this)})),a.closeNodeSettingsModal=function(){a.setState({isNodeSettingsOpenned:!1})},a.deviceTypeSection=function(){return n.createElement("div",{className:"".concat(ie.a.Section," ").concat(ie.a.deviceContentWrapper," ").concat(ie.a.deviceType)},n.createElement("div",{className:ie.a.subTitle},n.createElement(me,{showSkeleton:a.state.isLoading},"DEVICE TYPE")),n.createElement(he,{showSkeleton:a.state.isLoading},a.state.deviceStatus.type))},a.deviceNameSection=function(){var e=a.state,t=e.deviceStatus,r=t.description,i=t.name,c=e.isLoading;return n.createElement("div",{className:"".concat(ie.a.Section," ").concat(ie.a.deviceContentWrapper," ").concat(ie.a.deviceName)},n.createElement("div",{className:ie.a.subTitle},n.createElement(me,{showSkeleton:c},"DEVICE NAME")),n.createElement("div",{className:ie.a.text},n.createElement(he,{showSkeleton:c},i," - ",r)))},a.deviceIdSection=function(){return n.createElement("div",{className:"".concat(ie.a.Section," ").concat(ie.a.deviceContentWrapper," ").concat(ie.a.deviceName)},n.createElement("div",{className:ie.a.subTitle},n.createElement(me,{showSkeleton:a.state.isLoading},"DEVICE ID")),n.createElement("div",{className:ie.a.text},n.createElement(he,{showSkeleton:a.state.isLoading},a.state.deviceStatus.uuid)))},a.deviceConnectionSection=function(){return n.createElement("div",{className:"".concat(ie.a.Section," ").concat(ie.a.deviceContentWrapper," ").concat(ie.a.deviceStatus)},n.createElement("div",{className:ie.a.subTitle},n.createElement(me,{showSkeleton:a.state.isLoading},"STATUS")),n.createElement("div",{className:ie.a.text},n.createElement(he,{showSkeleton:a.state.isLoading},"Connected")))},a.deviceOptionsMenu=function(){return n.createElement("div",{className:"".concat(ie.a.deviceContentWrapper," ").concat(ie.a.deviceSettingsMenu)},n.createElement("span",{className:ie.a.deviceSettingsMenuIcon,onClick:a.handleNodeSettingsModalClick},n.createElement(ce.a,{icon:se.a,size:"2x",color:"#768093"})))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(I.a)(P.a.mark(function e(){var t;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.context.dashboardServerApi.getDeviceStatus(this.props.uuid);case 2:t=e.sent,this.setState({deviceStatus:t,isLoading:!1});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.isExpanded,t=this.state,a=t.isLoading,r=(t.isNodeSettingsOpenned,t.nodeSettings),i=e?ie.a.expanded:"";return n.createElement("section",{className:"".concat(ie.a.cardWrapper," ").concat(i)},n.createElement("div",{className:ie.a.cardSummary},n.createElement("div",{className:"".concat(ie.a.Section," ").concat(ie.a.IconSectionBackground)},n.createElement(S,{className:ie.a.deviceTypeIcon})),this.deviceTypeSection(),this.deviceNameSection(),this.deviceIdSection(),this.deviceConnectionSection(),this.deviceOptionsMenu(),a&&n.createElement(ue,{width:"1400px",color:"rgba(249, 250, 251, 0.001)"}),n.createElement(B.a,{closeOnEsc:!0,classNames:{modal:ie.a.mkAppModalWrapper},onClose:this.closeNodeSettingsModal,open:this.state.isNodeSettingsOpenned},n.createElement(ve.a,{html:r.html,script:r.script}))))}}]),t}(n.Component);be.contextType=R.a;var Ee={deviceList:[],expandedCard:-1},ge=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state=Ee,a.context=void 0,a.toggleExpandCollapse=function(e){var t=a.state.expandedCard;a.setState({expandedCard:t===e?-1:e})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(I.a)(P.a.mark(function e(){var t;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.context.dashboardServerApi.getDeviceList();case 2:t=e.sent,this.setState({deviceList:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.deviceList,r=t.expandedCard;return n.createElement("section",{className:ne.a.pageWrapper},n.createElement(Z,null,"MY DEVICES"),n.createElement("div",{className:ne.a.pageContentWrapper,id:"device_context"},a.map(function(t,a){return n.createElement(be,Object.assign({toggleExpandCollapse:e.toggleExpandCollapse,key:a,cardIndex:a,isExpanded:r===a},t))})))}}]),t}(n.Component);ge.contextType=R.a;var fe={selectedDashboardPage:"APPLICATION_PAGE"},Oe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state=fe,a.selectDashboardPage=function(e){a.setState({selectedDashboardPage:e})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.selectedDashboardPage;return n.createElement("div",{className:_.a.root},n.createElement(v,null),n.createElement("main",{className:_.a.siteContent},n.createElement(L,{pageSelector:this.selectDashboardPage,selectedPage:e}),"APPLICATION_PAGE"===e&&n.createElement(Q,null),"SENSORS_PAGE"===e&&n.createElement(ge,null)))}}]),t}(n.Component),Se=a(86),Ce=a(23);a(80),a(82),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(){return n.createElement(Se.a,null,n.createElement(R.a.Provider,{value:{dashboardServerApi:new Ce.a}},n.createElement(Oe,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,2,1]]]);
//# sourceMappingURL=main.e2d80770.chunk.js.map