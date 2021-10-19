"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[3577],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6176:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Monitoring ActiveMQ Message Broker running on Instances",c={unversionedId:"Integrations/activemq",id:"Integrations/activemq",isDocsHomePage:!1,title:"Monitoring ActiveMQ Message Broker running on Instances",description:"Overview",source:"@site/docs/Integrations/activemq.md",sourceDirName:"Integrations",slug:"/Integrations/activemq",permalink:"/docs/Integrations/activemq",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/activemq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Monitoring using StatsD",permalink:"/docs/Integrations/statsd/custom_monitoring"},next:{title:"Go Profiler",permalink:"/docs/Integrations/go/profiler"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Parameters required in metrics plugin",id:"parameters-required-in-metrics-plugin",children:[]}]},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monitoring-activemq-message-broker-running-on-instances"},"Monitoring ActiveMQ Message Broker running on Instances"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Activemq sfAgent plugin provides metrics related to message traffic distribution and other internal transactions among the brokers. "),(0,i.kt)("p",null,"Metrics collected by the plugin are organized across the following categories"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Broker stats: contain transactional data and metrics related to broker state"),(0,i.kt)("li",{parentName:"ul"},"Topic stats: provide metrics for analyzing internal transactions associated with each topic"),(0,i.kt)("li",{parentName:"ul"},"Queue stats: provide metrics for analyzing internal transactions associated with each queue"),(0,i.kt)("li",{parentName:"ul"},"JVM stats: contain all JVM related metrics like garbage collection details, memory pools, loaded/unloaded classes etc.")),(0,i.kt)("p",null,"Activemq logger plugin collects general logs comprising state change and broker specific information generated by the activemq message broker"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Activemq Metric Plugin is based on Jolokia agent which requires JMX monitoring to be enable locally. Following property needs to be included during the start of activemq process"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"-Dcom.sun.management.jmxremote\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"JCMD command must be installed in the machine"))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/quick_start/getting_started/#sfagent"},"sfAgent")," section provides steps to install and automatically generate plugin configurations.  User can also manually add the configuration shown below to ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/sfagent/")," directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"key: <Profile_key>\ntags:\n  Name: <instance_name>\n  appName: <app_name>\n  projectName: <project_name>\nmetrics:\n  plugins:\n    - name: activemq\n      enabled: true\n      interval: 300\n      config:\n        process: activemq\n        port: 8161\n        documentsTypes:\n          - brokerStats\n          - topicStats\n          - queueStats\n          - jvmStats\nlogging:\n  plugins:\n    - name: activemq-log\n      enabled: true\n      config:\n        log_path: <..activemq logpath..>\n        log_level:\n          - error\n          - warning\n          - info\n          - warn\n")),(0,i.kt)("h3",{id:"parameters-required-in-metrics-plugin"},"Parameters required in metrics plugin"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"process"),": Activemq process name (It should be part of java main class)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"port"),": Broker Port"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"documentTypes"),": User can either leave this empty to collect all ",(0,i.kt)("inlineCode",{parentName:"p"},"documentTypes")," or mention specific ",(0,i.kt)("inlineCode",{parentName:"p"},"documentTypes")," to collect. Available options for plugin type activemq are ",(0,i.kt)("inlineCode",{parentName:"p"},"brokerStats"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"topicStats"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"queueStats"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"jvmStats")),(0,i.kt)("p",null,"Logger plugin requires log path to be specified. Wildcard characters are supported"),(0,i.kt)("h2",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,i.kt)("p",null,"Data collected by plugins can be viewed in SnappyFlow\u2019s browse data section "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Metrics")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"plugin"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"activemq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"documentType"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"brokerStats"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"topicStats"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"queueStats"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"jvmStats")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Dashboard template"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"ActiveMQ"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Logs")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Plugin"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"activemq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"documentType"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"activemq-logs"))),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/integrations/zookeeper"},"Zookeeper")),(0,i.kt)("p",null,"Elasticsearch"),(0,i.kt)("p",null,"Kafka-REST"),(0,i.kt)("p",null,"Kafka-Connect"))}m.isMDXComponent=!0}}]);