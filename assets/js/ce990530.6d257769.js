"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[1641],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(t),m=r,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||i;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1045:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={sidebar_postion:7},s="Monitoring Linux Instances",u={unversionedId:"Integrations/linux/sfagent_linux",id:"Integrations/linux/sfagent_linux",isDocsHomePage:!1,title:"Monitoring Linux Instances",description:"Overview",source:"@site/docs/Integrations/linux/sfagent_linux.md",sourceDirName:"Integrations/linux",slug:"/Integrations/linux/sfagent_linux",permalink:"/SFwebsite/docs/Integrations/linux/sfagent_linux",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Integrations/linux/sfagent_linux.md",tags:[],version:"current",frontMatter:{sidebar_postion:7},sidebar:"tutorialSidebar",previous:{title:"Monitoring Apache Services on SnappyFlow",permalink:"/SFwebsite/docs/Integrations/apache/overview"},next:{title:"Monitoring Windows Instances",permalink:"/SFwebsite/docs/Integrations/windows/sfagent_windows"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Instal sfAgent on Linux",id:"instal-sfagent-on-linux",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Configure sfAgent on Linux",id:"configure-sfagent-on-linux",children:[]},{value:"Upgrade sfAgent on Linux",id:"upgrade-sfagent-on-linux",children:[]}],p={toc:c};function g(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monitoring-linux-instances"},"Monitoring Linux Instances"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Monitoring of applications running on VM or bare-metal requires installation of a lightweight sfAgent. sfAgent provides following features: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Discovery of services"),(0,i.kt)("li",{parentName:"ul"},"Auto-recommendation of monitoring configuration based on discovered services"),(0,i.kt)("li",{parentName:"ul"},"Monitoring of various services based on specified configurations "),(0,i.kt)("li",{parentName:"ul"},"Log parsing and collection"),(0,i.kt)("li",{parentName:"ul"},"Orchestration of tracing (check out sfTracing for details)")),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ubuntu 18 lts "),(0,i.kt)("li",{parentName:"ul"},"ubuntu 16 lts "),(0,i.kt)("li",{parentName:"ul"},"centos 7 "),(0,i.kt)("li",{parentName:"ul"},"RHEL 7")),(0,i.kt)("h2",{id:"instal-sfagent-on-linux"},"Instal sfAgent on Linux"),(0,i.kt)("p",null,"Run the following commands to install sfAgent on VMs: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://raw.githubusercontent.com/snappyflow/apm-agent/master/install.sh -O install.sh\nchmod +x install.sh\nsudo ./install.sh\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"sfAgent executes commands such docas iostat or jcmd to fetch metrics. In order to specific path to sfAgent use -p or --include-paths"),(0,i.kt)("p",null,(0,i.kt)("b",null,"Example"),": '\"./install.sh -p /opt/jdk1.8.0_211/bin/\"'"))),(0,i.kt)("p",null,"To install sfAgent on multiple end-points using Ansible playbook, refer the following script at\u202f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/apm-agent"},"https://github.com/snappyflow/apm-agent")," "),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("p",null,"sfAgent requires certain pre-requisites for monitoring. Common pre-requisites are mentioned below. Further, all pre-requisites and configurations needed for monitoring a specific application are mentioned under ",(0,i.kt)("u",null,"Integrations")," section."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Linux OS monitoring, install iostat"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install sysstat\n")),(0,i.kt)("p",{parentName:"li"},"or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install sysstat \n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For JVM monitoring, install java headless service for jcmd & jmap command"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install \u2013y openjdk-12-jdk-headless\n")),(0,i.kt)("p",{parentName:"li"},"or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum -y install  java-1.8.0-openjdk-devel-1.8.0*\n")))),(0,i.kt)("h2",{id:"configure-sfagent-on-linux"},"Configure sfAgent on Linux"),(0,i.kt)("p",null,"sfAgent is configured through its config.yaml file. There are sections for metrics and logs where appropriate plugins with their configurations have to added to these sections. Below is an example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"key: <add profile key here> \ngenerate_name: true \ntags: \n  Name: <add name tag> \n  appName: <add application name tag> \n  projectName: <add project name tag> \nmetrics: \n  plugins: \n    - name: linux \n      enabled: true \n      interval: 30 \nlogging: \n  plugins: \n    - name: linux-syslog \n      enabled: true \n      config: \n        log_level: \n          - error \n          - warning \n          - info        \n        log_path: /var/log/auth.log,/var/log/messages,/var/log/secure \n    - name: nginx-access \n      enabled: true \n      config: \n        geo_info: true \n        log_path: /var/log/nginx/access.log, /var/log/nginx/access_log \n        ua_parser: true \n    - name: nginx-error \n      enabled: true \n      config: \n        log_level: \n          - emerg \n          - alert \n          - error \n        log_path: /var/log/nginx/error.log, /var/log/nginx/error_log \n")),(0,i.kt)("p",null,"sfAgent can be either configured or manually. In an automatic configuration step, sfAgent discovers services running in a VM and automatically generates a default configuration for monitoring the discovered services. User can further modify the  configurations as needed. Detailed configuration for a specific application types are present in ",(0,i.kt)("u",null,"Integrations")," section."),(0,i.kt)("p",null,"Follow the steps below for automatic discovery & configuration"),(0,i.kt)("iframe",{width:"570",height:"321",src:"https://www.youtube.com/embed/9CvPvMd3udk?rel=0",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"allowFullScreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run following commands to discover services and generate config:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo su \ncd /opt/sfagent \n./sfagent -generate-config \ncp config-generated.yaml config.yaml\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add the profile key and SnappyFlow tags in the configuration file."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Copy profile key from SnappyFlow and update "',(0,i.kt)("strong",{parentName:"li"},"key:"),'" '),(0,i.kt)("li",{parentName:"ul"},'Set values for "',(0,i.kt)("strong",{parentName:"li"},"Name:"),'", "',(0,i.kt)("strong",{parentName:"li"},"appName:"),'", "',(0,i.kt)("strong",{parentName:"li"},"projectName:"),'" under "',(0,i.kt)("strong",{parentName:"li"},"tags:"),'" section '),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",null,"Verify configuration and restart sfAgent"))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./sfagent -check-config \nservice sfagent restart \n")))),(0,i.kt)("h2",{id:"upgrade-sfagent-on-linux"},"Upgrade sfAgent on Linux"),(0,i.kt)("p",null,"Run following commands to upgrade sfAgent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://raw.githubusercontent.com/snappyflow/apm-agent/master/install.sh -O install.sh \nchmod +x install.sh \nsudo ./install.sh --upgrade \n")))}g.isMDXComponent=!0}}]);