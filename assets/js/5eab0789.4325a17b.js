"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[2697],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,g=c["".concat(l,".").concat(f)]||c[f]||p[f]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9678:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="sfAgent installation on Windows",d={unversionedId:"Integrations/os/windows/sfagent_windows",id:"Integrations/os/windows/sfagent_windows",isDocsHomePage:!1,title:"sfAgent installation on Windows",description:"Overview",source:"@site/docs/Integrations/os/windows/sfagent_windows.md",sourceDirName:"Integrations/os/windows",slug:"/Integrations/os/windows/sfagent_windows",permalink:"/docs/Integrations/os/windows/sfagent_windows",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/os/windows/sfagent_windows.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sfAgent Installation on Linux",permalink:"/docs/Integrations/os/linux/sfagent_linux"},next:{title:"sfPoller Setup",permalink:"/docs/Quick_Start/sfpoller_setup"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Install sfAgent on Windows",id:"install-sfagent-on-windows",children:[]},{value:"Configure sfAgent on Windows",id:"configure-sfagent-on-windows",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Run sfAgent service",id:"run-sfagent-service",children:[]},{value:"Standard Plugins and Log Parsers",id:"standard-plugins-and-log-parsers",children:[]}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sfagent-installation-on-windows"},"sfAgent installation on Windows"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Monitoring of Windows based application requires installation of a lightweight agent, sfAgent on Windows. sfAgent provides following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Monitoring of various services based on specified configurations"),(0,i.kt)("li",{parentName:"ul"},"Log parsing and collection"),(0,i.kt)("li",{parentName:"ul"},"Trace Java, Python and Golang applications (check out sfTracing for details)")),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows Server 2012"),(0,i.kt)("li",{parentName:"ul"},"Windows Server 2016"),(0,i.kt)("li",{parentName:"ul"},"Windows Server 2019")),(0,i.kt)("h2",{id:"install-sfagent-on-windows"},"Install sfAgent on Windows"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the sfAgent executable from the link below"),(0,i.kt)("a",{href:"https://github.com/snappyflow/apm-agent-windows/releases/latest/download/SfagentSetup.exe"},"Dowload sfAgent")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run sfAgent.exe executable with Administrator privileges and complete the installation"),(0,i.kt)("img",{src:"/img/sfagent_windows/1.png"}),(0,i.kt)("img",{src:"/img/sfagent_windows/2.png"}),(0,i.kt)("img",{src:"/img/sfagent_windows/3.png"}))),(0,i.kt)("h2",{id:"configure-sfagent-on-windows"},"Configure sfAgent on Windows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to sfAgent installed location (C:\\Program Files (x86)\\sfAgent)"),(0,i.kt)("li",{parentName:"ul"},"Open file sample.yaml"),(0,i.kt)("li",{parentName:"ul"},"Add Key and edit configuration for metrics and logger"),(0,i.kt)("li",{parentName:"ul"},"Save it and rename sample.yaml as config.yaml")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Powershell.exe must be available in %PATH environment variable"),(0,i.kt)("li",{parentName:"ul"},"For winjvm plugin, java should be installed and java path should be set in %PATH environment variable")),(0,i.kt)("h2",{id:"run-sfagent-service"},"Run sfAgent service"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open task manager and service tab"),(0,i.kt)("li",{parentName:"ul"},"Search for service \u201csfAgent\u201d and right click on it and click start to start service"),(0,i.kt)("li",{parentName:"ul"},"To stop right click on running service and click stop")),(0,i.kt)("h2",{id:"standard-plugins-and-log-parsers"},"Standard Plugins and Log Parsers"),(0,i.kt)("p",null,"sfAgent for Windows includes plugins and log parsers for a number of standard applications and operating system utilities."),(0,i.kt)("p",null,"(documentation coming soon!)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Category"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Services"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Windows","[Windows Server 2012 and above]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"CPU and RAM static and dynamic parameters, Windows WinPSUtil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Web Tier"),(0,i.kt)("td",{parentName:"tr",align:"left"},"IIS Server (Server Monitoring, Access & Error Logs)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"App Tier"),(0,i.kt)("td",{parentName:"tr",align:"left"},"WinJVM, Apache Tomcat")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Database andDataflowElements"),(0,i.kt)("td",{parentName:"tr",align:"left"},"MySQL, MS-SQL")))))}c.isMDXComponent=!0}}]);