"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[5446],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3220:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={},s="sfAgent Installation on Linux",p={unversionedId:"Integrations/os/linux/sfagent_linux",id:"Integrations/os/linux/sfagent_linux",isDocsHomePage:!1,title:"sfAgent Installation on Linux",description:"Overview",source:"@site/docs/Integrations/os/linux/sfagent_linux.md",sourceDirName:"Integrations/os/linux",slug:"/Integrations/os/linux/sfagent_linux",permalink:"/docs/Integrations/os/linux/sfagent_linux",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/os/linux/sfagent_linux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/Quick_Start/getting_started"},next:{title:"sfAgent installation on Windows",permalink:"/docs/Integrations/os/windows/sfagent_windows"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Tested on",id:"tested-on",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Upgrade sfAgent on Linux",id:"upgrade-sfagent-on-linux",children:[]},{value:"sfAgent Configuration Format",id:"sfagent-configuration-format",children:[]}],m={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sfagent-installation-on-linux"},"sfAgent Installation on Linux"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"sfAgent is a lightweight agent installed on VMs to collect metrics, logs and tracing data."),(0,r.kt)("h2",{id:"tested-on"},"Tested on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ubuntu 16 LTS, 18 LTS, 20 LTS "),(0,r.kt)("li",{parentName:"ul"},"Centos 7, 8 "),(0,r.kt)("li",{parentName:"ul"},"RHEL 7, 8.5")),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"sfAgent requires certain pre-requisites for monitoring. Common pre-requisites are mentioned below. Further, all pre-requisites and configurations needed for monitoring a specific application are mentioned under ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrations/overview"},"Integrations")," section."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For Linux OS monitoring, install iostat"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install sysstat\n")),(0,r.kt)("p",{parentName:"li"},"or"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install sysstat \n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For JVM monitoring, install java headless service for jcmd & jmap command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install \u2013y openjdk-12-jdk-headless\n")),(0,r.kt)("p",{parentName:"li"},"or"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum -y install  java-1.8.0-openjdk-devel-1.8.0*\n")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Run the following commands to install sfAgent on VMs: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://raw.githubusercontent.com/snappyflow/apm-agent/master/install.sh -O install.sh\nchmod +x install.sh\nsudo ./install.sh\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"sfAgent executes commands such as iostat or jcmd to fetch metrics. If the utilities are not included in the PATH variable or not installed in the default location, use -p or --include-paths to add PATH in sfAgent."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./install.sh -p /opt/jdk1.8.0_211/bin/\n")))),(0,r.kt)("p",null,"To install sfAgent on multiple end-points using Ansible playbook, refer the following script at\u202f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/apm-agent"},"https://github.com/snappyflow/apm-agent")," "),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"sfAgent can be either configured manually or automatically. In an automatic configuration step, sfAgent discovers services running in a VM and automatically generates a default configuration for monitoring the discovered services. User can further modify the  configurations as needed. Check ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrations/os/linux/sfagent_linux#sfagent-configuration-format"},"Configuration format")," for more details. Detailed configuration for a specific application types are present in ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrations/overview"},"Integrations")," section."),(0,r.kt)("p",null,"Follow the steps below for automatic discovery & configuration"),(0,r.kt)("iframe",{title:"Automatic discovery & configuration",width:"570",height:"321",src:"https://www.youtube.com/embed/9CvPvMd3udk?rel=0",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"allowFullScreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run following commands to discover services and generate config:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo su \ncd /opt/sfagent \n./sfagent -generate-config \ncp config-generated.yaml config.yaml\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the profile key and SnappyFlow tags in the configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml"),")."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy profile key from SnappyFlow and update ",(0,r.kt)("inlineCode",{parentName:"p"},"key:")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set values for ",(0,r.kt)("inlineCode",{parentName:"p"},"Name:"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"appName:"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"projectName:")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"tags:")," section. ",(0,r.kt)("inlineCode",{parentName:"p"},"Name:")," is the host name and the ",(0,r.kt)("inlineCode",{parentName:"p"},"projectName:"),"  and ",(0,r.kt)("inlineCode",{parentName:"p"},"appName:")," are the project name and application name used on the Snappyflow portal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Verify configuration and restart sfAgent"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./sfagent -check-config \nservice sfagent restart \n")))))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"sfAgent log file is present in the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/sfagent/sfagent.log"),"."))),(0,r.kt)("h2",{id:"upgrade-sfagent-on-linux"},"Upgrade sfAgent on Linux"),(0,r.kt)("p",null,"Run following commands to upgrade sfAgent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://raw.githubusercontent.com/snappyflow/apm-agent/master/install.sh -O install.sh \nchmod +x install.sh \nsudo ./install.sh --upgrade \n")),(0,r.kt)("h2",{id:"sfagent-configuration-format"},"sfAgent Configuration Format"),(0,r.kt)("p",null,"sfAgent is configured through its ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," file. There are sections for metrics and logs where appropriate plugins with their configurations have to added to these sections. sfAgent config is expected in the following format: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"key: <add profile key here> \ngenerate_name: true \ntags: \n  Name: <add name tag> \n  appName: <add application name tag> \n  projectName: <add project name tag> \nmetrics: \n  plugins: \n    - name: <metric-plugin> \n      enabled: true \n      interval: <time in secs> \nlogging: \n  plugins: \n    - name: <logger-plugin>\n      enabled: true \n      config: \n        log_level: \n          - list\n          - of\n          - log\n          - levels \n        log_path: <comma separated log paths> \n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h3",{parentName:"div",id:"uninstallation"},"Uninstallation"),(0,r.kt)("p",{parentName:"div"},"Run the following commands to uninstall sfAgent on VMs: "),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://raw.githubusercontent.com/snappyflow/apm-agent/master/uninstall.sh -O uninstall.sh\nchmod +x uninstall.sh\nsudo ./uninstall.sh\n")))))}u.isMDXComponent=!0}}]);