"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[1900],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7030:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="Monitoring JAVA on Instances",c={unversionedId:"Integrations/java/java_instances",id:"Integrations/java/java_instances",isDocsHomePage:!1,title:"Monitoring JAVA on Instances",description:"Overview",source:"@site/docs/Integrations/java/java_instances.md",sourceDirName:"Integrations/java",slug:"/Integrations/java/java_instances",permalink:"/SFwebsite/docs/Integrations/java/java_instances",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Integrations/java/java_instances.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/SFwebsite/docs/Integrations/java/overview"},next:{title:"Monitoring JAVA on Kubernetes",permalink:"/SFwebsite/docs/Integrations/java/java_kubernetes"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monitoring-java-on-instances"},"Monitoring JAVA on Instances"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"JVM on instances is monitored using ",(0,i.kt)("a",{parentName:"p",href:"/docs/Quick_Start/getting_started#sfagent"},"sfAgent")," configured with jvm plugin. The plugin monitors JVM metrics, jvm arguments used to start Java process and deadlock metrics. JVM plugin internally uses the following utilities to collect metrics: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Jstats")," for JVM metrics "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Jolokia")," will be started by plugin to collect deadlock metrics if monitor Deadlocks parameter is set in configuration file ")),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("p",null,"Jcmd has to be installed in the instance "),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/Quick_Start/getting_started#sfagent"},"sfAgent")," section provides steps to install and automatically generate plugin configurations. User can also manually add the configuration shown below to config.yaml under ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/sfagent/")," directory "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: jvm \n\u202f enabled: true \n\u202f interval: 60 \n\u202f config: \n\u202f \u202f \u202f \u202f \u202fprocess: *         #process that needs to be monitored \n\u202f \u202f \u202f \u202f \u202fheapInterval: 3600     # polling interval to collect jvm arguments passed to the process \n\u202f \u202f \u202f \u202f \u202fmonitorDeadlocks: false    #enable/disable deadlock monitoring \n\u202f \u202f \u202f \u202f \u202fdeadLockMonitoringInterval: 300    #polling interval for deadlock monitoring. \n")),(0,i.kt)("h2",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data generated by this plugin can be viewed in ",(0,i.kt)("inlineCode",{parentName:"p"},"browse data")," page inside the respective application under ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin=jvm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"documentType=jvm")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dashboard for this data can be instantiated by importing dashboard template ",(0,i.kt)("inlineCode",{parentName:"p"},"JVM")," to the application dashboard."))))}p.isMDXComponent=!0}}]);