"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[2574],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6980:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Tomcat Windows",c={unversionedId:"Integrations/tomcat/tomcat_windows",id:"Integrations/tomcat/tomcat_windows",isDocsHomePage:!1,title:"Tomcat Windows",description:"Overview",source:"@site/docs/Integrations/tomcat/tomcat_windows.md",sourceDirName:"Integrations/tomcat",slug:"/Integrations/tomcat/tomcat_windows",permalink:"/docs/Integrations/tomcat/tomcat_windows",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/tomcat/tomcat_windows.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Integrations/tomcat/overview"},next:{title:"IIS Windows",permalink:"/docs/Integrations/iis/iis_windows"}},m=[{value:"Overview",id:"overview",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[{value:"Enabling JMX Monitoring",id:"enabling-jmx-monitoring",children:[]},{value:"Access Log Format",id:"access-log-format",children:[]}]},{value:"Configuration Settings",id:"configuration-settings",children:[]},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",children:[]}],p={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tomcat-windows"},"Tomcat Windows"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Tomcat monitoring involves metrics like server stats, context stats, jvm stats using Jolokia, and the server access logs."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("h3",{id:"enabling-jmx-monitoring"},"Enabling JMX Monitoring"),(0,r.kt)("p",null,"Tomcat Plugin is based on Jolokia agent which requires JMX monitoring to be enabled locally."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Copy the jolokia.war file from "C:/Program Files (x86)/Sfagent/" to ${TOMCAT_HOME}/webapps'),(0,r.kt)("li",{parentName:"ul"},"Add jolokia as role in tomcat-users.xml (mandatory for Jolokia 1.6 or later).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  <role rolename="jolokia"/>\n  <user username="jolokia" password="<password>" roles="jolokia"/>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Restart the Tomcat server"),(0,r.kt)("li",{parentName:"ul"},"Verify the Jolokia agent installation by accessing the URL: http://",(0,r.kt)("inlineCode",{parentName:"li"},"address"),":",(0,r.kt)("inlineCode",{parentName:"li"},"port"),"/jolokia/version.\nThe result looks similar to this:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"request": {\n  "type": "version"\n},\n"value": {\n  "agent": "1.3.7",\n  "protocol": "7.2",\n  "config": {\n    "maxCollectionSize": "0",\n    "agentId": "10.152.24.99-29844-172f5788-servlet",\n    "debug": "false",\n    "agentType": "servlet",\n    "serializeException": "false",\n    "detectorOptions": "{}",\n    "dispatcherClasses": "org.jolokia.jsr160.Jsr160RequestDispatcher",\n    "maxDepth": "15",\n    "discoveryEnabled": "false",\n    "canonicalNaming": "true",\n    "historyMaxEntries": "10",\n    "includeStackTrace": "true",\n    "maxObjects": "0",\n    "debugMaxEntries": "100"\n  },\n  "info": {\n    "product": "tomcat",\n    "vendor": "Apache",\n    "version": "8.5.23"\n  }\n},\n"timestamp": 1509955465,\n"status": 200\n}\n')))),(0,r.kt)("h3",{id:"access-log-format"},"Access Log Format"),(0,r.kt)("p",null,"Tomcat server access log format needs to be modified to capture all metrics from the access logs, which includes following steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Edit the file $TOMCAT_HOME/conf/server.xml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set suffix ",(0,r.kt)("em",{parentName:"p"},'"org.apache.catalina.valves.AccessLogValve'),'" class, pattern value to ".log"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set log format in ",(0,r.kt)("em",{parentName:"p"},'"org.apache.catalina.valves.AccessLogValve'),'" class, pattern value to pre-defined "combined" log format or'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"%h %l %u %t &quot;%r&quot; %s %b %D &quot;%{Referer}i&quot; &quot;%{User-Agent}i&quot;\n")),(0,r.kt)("p",null,"After changing log pattern to combined or the above mentioned pattern, sample log would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'49.206.1.85 - - [30/Jun/2020:13:12:32 +0000] "GET / HTTP/1.1" 200 11286 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36"\n')),(0,r.kt)("h2",{id:"configuration-settings"},"Configuration Settings"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/Quick_Start/getting_started#sfagent"},"sfAgent"),' section provides steps to install and automatically generate plugin configurations. User can also manually add the configuration shown below to config.yaml under "C:/Program Files (x86)/Sfagent/" directory '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'key: <profile key> \ngenerate_name: true \ntags: \n  Name: <unique instance name or will be generated from IP> \n  appName: <add application name> \n  projectName: <add project name> \nmetrics: \n  plugins: \n    - name: tomcat \n      enabled: true \n      interval: 300 \n      config: \n        port: 8080\n        proxy: false \n        rmiport: 9000\n        protocol: http\n        username: xxxx\n        password: xxxx\n        documentTypes:\n          - tomcatStats\n          - requestProcessorStats\n          - jvmStats\n          - contextStats \nlogging: \n  plugins: \n    - name: tomcat-access \n      enabled: true \n      config: \n        log_path: "C:\\\\Program Files\\\\Apache Software Foundation\\\\Tomcat*\\\\logs\\\\localhost_access*.log"\n        geo_info: true  \n        ua_parser: false\n        url_normalizer: false \n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Keep username and password same as jolokia role updated in tomcat-users.xml."))),(0,r.kt)("h4",{id:"tomcat-access-logger-options"},"Tomcat Access Logger Options"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Geo-IP: Useful to find geographical location of the client using the IP address. To enable, set the option "geo_info" to true in the above configuration.'),(0,r.kt)("li",{parentName:"ol"},'User-Agent Analysis: To get the host machine details like browser, Operating system and device by analysis the user-agent. To enable, set the option "ua_parser" to true in the above configuration. If enabled, by default it runs on port 8586.'),(0,r.kt)("li",{parentName:"ol"},'URL Normalizer (not supported in container deployment): Normalize incoming URL paths. To enable, set the option "url_normalizer" to true in the above configuration. If enabled, by default it runs on port 8587. ')),(0,r.kt)("h2",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,r.kt)("p",null,"Tomcat plugin provides the following document types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tomcat stats: contain metrics like tomcat sever version, uptime, thread details."),(0,r.kt)("li",{parentName:"ul"},"Request processor stats: shows request information like processing time, request count, data received and sent."),(0,r.kt)("li",{parentName:"ul"},"Context stats: contain tomcat context related metrics like hit count, lookup count etc."),(0,r.kt)("li",{parentName:"ul"},"JVM stats: contain all JVM related metrics used by tomcat server like garbage collection details, memory pools, loaded/unloaded classes etc."),(0,r.kt)("li",{parentName:"ul"},"Tomcat Access: Tomcat server access log details.")),(0,r.kt)("p",null,"Dashboard for this data can be instantiated by Importing dashboard template ",(0,r.kt)("inlineCode",{parentName:"p"},"Tomcat_Server"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Tomcat_Access")," to the application dashboard."))}u.isMDXComponent=!0}}]);