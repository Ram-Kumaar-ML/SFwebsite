"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[5515],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=a.createContext({}),g=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=g(n.components);return a.createElement(s.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),u=g(t),m=r,d=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(d,o(o({ref:e},p),{},{components:t})):a.createElement(d,o({ref:e},p))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:r,o[1]=l;for(var g=2;g<i;g++)o[g]=t[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9904:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return g},toc:function(){return p},default:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={},s="Monitoring Nginx on Kubernetes",g={unversionedId:"Integrations/nginx/nginx_kubernetes",id:"Integrations/nginx/nginx_kubernetes",isDocsHomePage:!1,title:"Monitoring Nginx on Kubernetes",description:"Overview",source:"@site/docs/Integrations/nginx/nginx_kubernetes.md",sourceDirName:"Integrations/nginx",slug:"/Integrations/nginx/nginx_kubernetes",permalink:"/SFwebsite/docs/Integrations/nginx/nginx_kubernetes",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Integrations/nginx/nginx_kubernetes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monitoring Nginx on Instances",permalink:"/SFwebsite/docs/Integrations/nginx/nginx_instance"},next:{title:"Overview",permalink:"/SFwebsite/docs/Integrations/kubernetes/overview"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Pre-reading",id:"pre-reading",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Configure Nginx server to enable monitoring",id:"configure-nginx-server-to-enable-monitoring",children:[]},{value:"sfKubeAgent",id:"sfkubeagent",children:[]},{value:"Centralized logging",id:"centralized-logging",children:[]},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",children:[]}]}],c={toc:p};function u(n){var e=n.components,t=(0,r.Z)(n,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monitoring-nginx-on-kubernetes"},"Monitoring Nginx on Kubernetes"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Nginx monitoring involves monitoring of the following elements: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nginx Access Logs ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nginx Error Logs ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nginx Server Health "))),(0,i.kt)("h2",{id:"pre-reading"},"Pre-reading"),(0,i.kt)("p",null," Refer to the links below for generic approach to monitoring application metrics and logs in Kubernetes environment "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/kubernetes/sfkubeagent_installation"},"sfKubeAgent")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/kubernetes/prometheus_exporter"},"Prometheus Exporter")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/kubernetes/centralized_logging_of_application_pod_logs"},"Centralized Log Monitoring")," ")),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/Integrations/nginx/nginx_instance"},"Nginx monitoring on instances")," for sfAgent configurations "),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"configure-nginx-server-to-enable-monitoring"},"Configure Nginx server to enable monitoring"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure format of access logs so that it can be parsed by SnappyFlow "),(0,i.kt)("li",{parentName:"ol"},"Enable Nginx status module to monitor Nginx server health")),(0,i.kt)("p",null,"These configurations can be achieved with the below ConfigMap:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apiVersion: v1 \nkind: ConfigMap \nmetadata: \n  name: nginx-configmap \n  labels: \n    snappyflow/appname: <app_name> \n    snappyflow/projectname: <project_name> \ndata: \n  nginx.conf: | \n    worker_processes  5; \n    events { \n        worker_connections  4096; \n    } \n    http { \n        default_type application/octet-stream; \n        log_format upstream_time  '$remote_addr:$remote_port $remote_user [$time_local] ' \n                       '\"$request\" $status $body_bytes_sent ' \n                       '\"$http_referer\" \"$http_user_agent\" \"$http_referer\" ' \n                       'rt=$request_time uct=$upstream_connect_time uht=$upstream_header_time urt=$upstream_response_time'; \n        server { \n            listen          80; \n            error_log /var/log/nginx/error1.log; \n            access_log /var/log/nginx/access1.log upstream_time; \n            location /nginx_status { \n                stub_status; \n            } \n        } \n    } \n")),(0,i.kt)("h3",{id:"sfkubeagent"},"sfKubeAgent"),(0,i.kt)("p",null,"sfKubeAgent is deployed as sidecar container in the NGINX pod and can be used to monitor Nginx server health as well as Access Logs & Error Logs. Below YAML files provide example for setting up NGINX monitoring with sfKubeAgent. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"sfKubeAgent ConfigMap\u202f(sfAgent-config.yaml)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1 \nkind: ConfigMap \nmetadata: \n  name: sfagent-configmap \n  labels: \n    snappyflow/appname: <app_name> \n    snappyflow/projectname: <project_name> \ndata: \n    config.yaml: |+ \n      --- \n      key: "<profile_key>" \n      metrics: \n        plugins: \n        - name: kube-sfagent-nginx \n          enabled: true \n          interval: 300 \n          config: \n            location: nginx_status \n            port: 80 \n            secure: false \n      logging: \n        plugins: \n        - name: nginx-access \n          enabled: true \n          config: \n            log_path: "/var/log/nginx/access1.log" \n        - name: nginx-error \n          enabled: true \n          config: \n            log_path: "/var/log/nginx/error1.log" \n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pod description YAML running NGINX and sfKubeAgent")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1 \nmetadata: \n name: my-first-pod \n labels: \n  snappyflow/appname: <app_name> \n  snappyflow/projectname: <project_name> \nspec: \n containers: \n - name: nginx-container \n   image: nginx:latest \n   imagePullPolicy: IfNotPresent \n   ports: \n   - name: http \n     containerPort: 80 \n     protocol: TCP \n   volumeMounts: \n   - name: varlog \n     mountPath: /var/log/nginx \n   - name: nginx-config \n     mountPath: /etc/nginx/nginx.conf \n     subPath: nginx.conf \n   # Snappyflow's sfkubeagent container \n - name: nginx-sfagent \n   image: snappyflowml/sfagent:latest \n   imagePullPolicy: Always \n   command: \n     - /app/sfagent \n     - -enable-console-log \n   env: \n     - name: APP_NAME \n       value: <app_name> \n     - name: PROJECT_NAME \n       value: <project_name> \n   volumeMounts: \n     - name: nginx-sfagent-config \n       mountPath: /opt/sfagent/config.yaml \n       subPath: config.yaml \n     - name: varlog \n       mountPath: /var/log/nginx \n volumes: \n - name: nginx-sfagent-config \n   configMap: \n     name: sfagent-configmap \n - name: nginx-config \n   configMap: \n     name: nginx-configmap \n - name: varlog \n   emptyDir: {} \n")),(0,i.kt)("h3",{id:"centralized-logging"},"Centralized logging"),(0,i.kt)("p",null,"Log monitoring (both access and error logs) can be implemented through ",(0,i.kt)("a",{parentName:"p",href:"/docs/integrations/kubernetes/centralized_logging_of_application_pod_logs"},"Centralized Logging")," approach as well which does not require sfKubeAgent. Centralized logging however requires running a busybox container as a sidecar container to stream logs to container\u2019s stdout. "),(0,i.kt)("p",null,"Add the label - snappyflow/component: nginx, which signals to apply Nginx to container\u2019s stdout. "),(0,i.kt)("h3",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data generated by plugin can be viewed in ",(0,i.kt)("inlineCode",{parentName:"li"},"browse data")," page inside the respective application under ",(0,i.kt)("inlineCode",{parentName:"li"},"plugin=jvm")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"documentType=jvm")," "),(0,i.kt)("li",{parentName:"ul"},"Dashboard for this data can be instantiated by Importing dashboard template ",(0,i.kt)("inlineCode",{parentName:"li"},"JVM")," to the application dashboard.")))}u.isMDXComponent=!0}}]);