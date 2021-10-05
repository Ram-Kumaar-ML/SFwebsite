"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[5378,2186],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1530:function(e,t,n){n.r(t);var a=n(1721),r=n(7294),o=n(9755),i=n.n(o),l=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.windowResolutionCheck()},n.componentWillUnmount=function(){this.windowResolutionCheck()},n.windowResolutionCheck=function(){2==i()("article header").length&&i()("article header:first-child").hide(),i()(window).width()>1e3&&(i()("main .col--3 ul.table-of-contents").hide(),window.addEventListener("scroll",(function(e){i()("article ul").hasClass("table-of-contents")&&(i()(window).scrollTop()>i()("article ul.table-of-contents").height()?i()("main .col--3 ul.table-of-contents").fadeIn():i()("main .col--3 ul.table-of-contents").fadeOut())})),window.addEventListener("resize",(function(e){i()("article ul").hasClass("table-of-contents")&&(i()(window).scrollTop()>i()("article ul.table-of-contents").height()?i()("main .col--3 ul.table-of-contents").fadeIn():i()("main .col--3 ul.table-of-contents").fadeOut())})))},n.render=function(){return r.createElement("div",null)},t}(r.Component);t.default=l},663:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return h}});var a=n(7462),r=n(3366),o=n(7294),i=n(3905),l=n(1530),s=n(6010),c="tableOfContentsInline_3fWc";function u(e){var t=e.toc,n=e.isChild;return t.length?o.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(u,{isChild:!0,toc:e.children}))}))):null}var p=function(e){var t=e.toc;return o.createElement("div",{className:(0,s.Z)(c)},o.createElement(u,{toc:t}))},d=["components"],f={},m=void 0,g={unversionedId:"Quick_Start/getting_start",id:"Quick_Start/getting_start",isDocsHomePage:!1,title:"getting_start",description:"On this page",source:"@site/docs/Quick_Start/getting_start.md",sourceDirName:"Quick_Start",slug:"/Quick_Start/getting_start",permalink:"/docs/Quick_Start/getting_start",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Quick_Start/getting_start.md",tags:[],version:"current",frontMatter:{}},h=[{value:"Setup SaaS Account",id:"setup-saas-account",children:[]},{value:"Setup On-Prem SaaS",id:"setup-on-prem-saas",children:[]},{value:"Important terminologies and concepts",id:"important-terminologies-and-concepts",children:[]},{value:"sfAgent",id:"sfagent",children:[]},{value:"sfPoller",id:"sfpoller",children:[]},{value:"sfPod",id:"sfpod",children:[]},{value:"sfKubeAgent",id:"sfkubeagent",children:[]},{value:"Profile Key",id:"profile-key",children:[]},{value:"Tagging Approach",id:"tagging-approach",children:[]},{value:"Let&#39;s Start Monitoring",id:"lets-start-monitoring",children:[]}],k={toc:h};function w(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("h2",null,"On this page"),(0,i.kt)(p,{toc:h,mdxType:"TOCInline"}),(0,i.kt)(l.default,{mdxType:"IndexJquery"}),(0,i.kt)("p",null,"SnappyFlow is offered in two modes - SaaS and On-Prem Saas "),(0,i.kt)("div",{class:"panel_container row"},(0,i.kt)("div",{class:"innerText"},(0,i.kt)("a",{href:"#setup-saas-account"},(0,i.kt)("img",{src:"/img/saas.png"}),(0,i.kt)("div",null,"Monitored end-points send data securely to SnappyFlow SaaS."))),(0,i.kt)("div",{class:"innerText"},(0,i.kt)("a",{href:"#setup-on-prem-saas"},(0,i.kt)("img",{src:"/img/onpremsaas.png"}),(0,i.kt)("div",null,"SnappyFlow is deployed within user\u2019s cloud account and all data is retained within the account. Features are identical to SaaS.")))),(0,i.kt)("h2",{id:"setup-saas-account"},"Setup SaaS Account"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to\u202f",(0,i.kt)("a",{parentName:"li",href:"https://www.snappyflow.io/"},"www.snappyflow.io")," "),(0,i.kt)("li",{parentName:"ul"},"Register for a free trial. A demo account will be created with a pre-configured sample application "),(0,i.kt)("li",{parentName:"ul"},"Request an upgrade to Full Trial by clicking on the link provided in the top bar. You will get an  email stating \u201cyour trial environment is ready\u201d once SnappyFlow team approves your trial request. ")),(0,i.kt)("h2",{id:"setup-on-prem-saas"},"Setup On-Prem SaaS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On-Prem SaaS can be deployed within your public cloud accounts using scripts provided by SnappyFlow team ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Please reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@snappyflow.io"},"support@snappyflow.io"),". A support engineer will understand your data ingest rates and provide an appropriately sized solution "))),(0,i.kt)("h2",{id:"important-terminologies-and-concepts"},"Important terminologies and concepts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#sfagent"},"sfAgent")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#sfpoller"},"sfPoller")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#sfpod"},"sfPod")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#sfkubeagent"},"sfKubeAgent")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#profile-key"},"Profile Key")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#tagging-approach"},"Tagging Approach")),(0,i.kt)("h2",{id:"sfagent"},"sfAgent"),(0,i.kt)("p",null,"It is a lightweight agent installed on VMs to collect metrics, logs and tracing data.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Installation procedures")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("a",{parentName:"li",href:"/docs/New_pages/sfagent_linux"},"sfAgent on Linux")," "),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("a",{parentName:"li",href:"/docs/New_pages/sfagent_windows"},"sfAgent on Windows"))),(0,i.kt)("h2",{id:"sfpoller"},"sfPoller"),(0,i.kt)("p",null,"Poller appliance is installed within user\u2019s cloud account and can be used to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Monitor cloud services such as RDS, ELB, Lamba, ECS, Azure App Service etc. "),(0,i.kt)("li",{parentName:"ul"},"Monitor Databases "),(0,i.kt)("li",{parentName:"ul"},"Perform Synthetic Monitoring of APIs using postman like collections "),(0,i.kt)("li",{parentName:"ul"},"Stream logs from applications to sfPoller, apply parsing rules and forward logs to SnappyFlow. ")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/New_pages/sfpoller_setup"},"Procedure for sfPoller setup")),(0,i.kt)("h2",{id:"sfpod"},"sfPod"),(0,i.kt)("p",null,"Daemon set installed on Kubernetes cluster and monitors the following elements: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Host, Pod & Container metrics "),(0,i.kt)("li",{parentName:"ul"},"Resources such as deployments, Daemon Sets etc. "),(0,i.kt)("li",{parentName:"ul"},"Kubernetes core services metrics "),(0,i.kt)("li",{parentName:"ul"},"Cluster logs "),(0,i.kt)("li",{parentName:"ul"},"Monitor Prometheus exporters running on any of the application pods ")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/New_pages/kubernetes_monitoring_with_sfPod"},"Procedure for sfPod setup")),(0,i.kt)("h2",{id:"sfkubeagent"},"sfKubeAgent"),(0,i.kt)("p",null,"sfAgent equivalent and installed as a side-car container within a Kubernetes  pod and can be configured to monitor metrics and logs of other  containers running on pods. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/New_pages/sfkubeagent_installation"},"Procedure for setting up sfKubeAgent")),(0,i.kt)("h2",{id:"profile-key"},"Profile Key"),(0,i.kt)("p",null,"Every user account has a unique system generated profile key. Data sent by collectors to SnappyFlow need to have the correct profile key and tags to be allowed into SnappyFlow. This key has to be copied by the user and pasted into the configuration file of sfAgent or within sfPoller\u2019s UI"),(0,i.kt)("h2",{id:"tagging-approach"},"Tagging Approach"),(0,i.kt)("p",null,"SnappyFlow mandates that all end-points should be assigned two tags - _tag_projectName and _tag_appName. These tags have to be added to configuration files of sfAgent or within sfPoller\u2019s UI.  Pls see the video that explains how end-points should be organized hierarchically in SnappyFlow and how tags should be assigned"),(0,i.kt)("iframe",{src:"https://www.snappyflow.io/assets/images/Key-Concepts-production.mp4",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowtransparency:"true"}),(0,i.kt)("h2",{id:"lets-start-monitoring"},"Let's Start Monitoring"),(0,i.kt)("p",null,"Try out one of the simple exercises to familiarize yourself with the product "),(0,i.kt)("h5",{id:"monitor-a-linux-instance"},(0,i.kt)("a",{parentName:"h5",href:"/docs/New_pages/sfagent_linux"},"Monitor a Linux instance")),(0,i.kt)("h5",{id:"monitor-a-kubernetes-cluster"},(0,i.kt)("a",{parentName:"h5",href:"/docs/New_pages/kubernetes_monitoring_with_sfPod"},"Monitor a Kubernetes Cluster")),(0,i.kt)("h5",{id:"monitor-a-windows-instance"},(0,i.kt)("a",{parentName:"h5",href:"/docs/New_pages/sfagent_windows"},"Monitor a Windows instance")),(0,i.kt)("h5",{id:"trace-an-application"},(0,i.kt)("a",{parentName:"h5",href:"/docs/Tracing/overview"},"Trace an application")))}w.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);