"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[9066],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(t),m=o,f=g["".concat(s,".").concat(m)]||g[m]||u[m]||r;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6548:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={},s="Application Monitoring with sfKubeAgent",p={unversionedId:"Integrations/kubernetes/sfkubeagent_installation",id:"Integrations/kubernetes/sfkubeagent_installation",isDocsHomePage:!1,title:"Application Monitoring with sfKubeAgent",description:"Overview",source:"@site/docs/Integrations/kubernetes/sfkubeagent_installation.md",sourceDirName:"Integrations/kubernetes",slug:"/Integrations/kubernetes/sfkubeagent_installation",permalink:"/docs/Integrations/kubernetes/sfkubeagent_installation",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/kubernetes/sfkubeagent_installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Monitoring with sfPod",permalink:"/docs/Integrations/kubernetes/kubernetes_monitoring_with_sfPod"},next:{title:"Prometheus Exporter",permalink:"/docs/Integrations/kubernetes/prometheus_exporter"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Integrating sfKubeAgent to application pods",id:"integrating-sfkubeagent-to-application-pods",children:[]},{value:"Example:",id:"example",children:[{value:"Pod description YAML",id:"pod-description-yaml",children:[]},{value:"Config Map",id:"config-map",children:[]}]}],u={toc:c};function g(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-monitoring-with-sfkubeagent"},"Application Monitoring with sfKubeAgent"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"sfKubeAgent is sfAgent packaged as a container and run as a sidecar within a Kubernetes application pod. It can be configured to collect both application metrics and logs similar to the way sfAgent does."),(0,r.kt)("h2",{id:"integrating-sfkubeagent-to-application-pods"},"Integrating sfKubeAgent to application pods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Instantiate sfKubeAgent docker image in the pod")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mount sfKubeAgent config map to the container. Config.yaml file used here is similar to the one used for sfAgent. Configurations for specific applications or log types can be found in Integrations section")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pass parameters projectName and appName through container\u2019s yaml file.  These are mandatory tags and SnappyFlow uses these tags to organize the end-points in a project/ application hierarchy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mount log paths that need to be monitored to sfKubeAgent container in the correct path"))),(0,r.kt)("h2",{id:"example"},"Example:"),(0,r.kt)("p",null,"Below is an example of sfKubeAgent yaml that monitors JVM and Syslog in an application pod."),(0,r.kt)("h3",{id:"pod-description-yaml"},"Pod description YAML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Pod\napiVersion: v1\nmetadata:\n name: jvm-pod\n labels:\n  snappyflow/appname: test\n  snappyflow/projectname: test-new-1\nspec:\n containers:\n - name: java-container\n   image: ruchira27/jolokia:latest\n   ports:\n   - name: jolokiaport\n     containerPort: 8778\n   # Snappyflow's sfkubeagent container\n - name: java-sfagent\n   image: snappyflowml/sfagent:latest\n   imagePullPolicy: Always\n   command:\n     - /app/sfagent\n     - -enable-console-log\n   env:\n     - name: APP_NAME\n       value: test\n     - name: PROJECT_NAME\n       value: test-new-1\n   volumeMounts:\n     - name: configmap-jmx\n       mountPath: /opt/sfagent/config.yaml\n       subPath: config.yaml\n     - name: varlog\n       mountPath: /var/log\n volumes:\n - name: configmap-jmx\n   configMap:\n     name: jmx-configmap\n - name: varlog\n   hostPath:\n     path: /var/log\n\n")),(0,r.kt)("h3",{id:"config-map"},"Config Map"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: jmx-configmap\ndata:\n  config.yaml: |-\n    key: Hc0cioeml0Sv7b7MbC+N56DKjygUlcvtP3wLtoUQitk3hw3/SevFv5loicDL9cCJDz3fImeLCuR1MrM/un4z+G2gELVeapNVCh96RhqSDvrV4MV9jMiuGi8RCa8MEj6KzAsvxnBPotbYKiM+11cm0xWOZ7K5G0C6J6T+SLX2/xk9us3BN2MhnBCH1N3xGhlDrNAy7j+KLSKsroiZcDw87iFjSaUzt0ADhCEwEJV3JBLZc2xpSM+n1hm3e4HHnVhaXcOi3Fcb9qD280Ya15t7eTsJywHyhKPcNKXpqF0OGVolLEUDc2vwklHGHIZXHF9hY/+/anS9+VSfhVpBNKVsDb+hDCLJbB8uBivJ9idRcnMvGkhir4kAUcsryCgvpay0ghqKZkjQ7zuhzKYW4/szHoXv+8g/Gn+nnxu3yFAa4aTOq6/AMNCA49S9EmU9Tn2yr+dUhiheWhKWFCTc8jd7vowehcPstNW1t8+SMfERkTqSKo1I/PSG0MGm3vrAa2yfU2GwnsyJnROSF/ylSY5JjTBlmfp7ZozKO8XPc7q+vaMwKEQzcDSqpSE26gOVMxrkYD2ksE/BQPbO2X1YTwlOqHSbr9Z0E5XOJXBSmgT7it7BgBCNro0/YcpALdoyEsJr4FBzM0K4ZwZNpnbDrbs0UIKLISaSGkYGAGBtuEXrusQ=\n    metrics:\n      plugins:\n      - name: jvmjolokia\n        enabled: true\n        interval: 300\n        config:\n          ip: 127.0.0.1\n          protocol: http\n          port: 8778\n          context: jolokia\n          monitorDeadlocks: false\n          deadLockMonitoringInterval: 300\n    logging:\n      plugins:\n      - name: linux-syslog\n        enabled: true\n        config:\n          log_level:\n            - error\n            - warning\n            - info\n          log_path: /var/log/auth.log,/var/log/messages,/var/log/secure\n")))}g.isMDXComponent=!0}}]);