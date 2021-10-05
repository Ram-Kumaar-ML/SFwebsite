"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[4433],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(t),d=r,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||i;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5396:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],o={},l="Postgres on Instances",p={unversionedId:"New_Pages/postgres_instances",id:"New_Pages/postgres_instances",isDocsHomePage:!1,title:"Postgres on Instances",description:"Overview",source:"@site/docs/New_Pages/postgres_instances.md",sourceDirName:"New_Pages",slug:"/New_Pages/postgres_instances",permalink:"/docs/New_Pages/postgres_instances",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/New_Pages/postgres_instances.md",tags:[],version:"current",frontMatter:{}},c=[{value:"Overview",id:"overview",children:[{value:"Metrics plugin",id:"metrics-plugin",children:[]},{value:"Logger plugin",id:"logger-plugin",children:[]}]},{value:"Pre-requisites",id:"pre-requisites",children:[{value:"Enable PostgreSQL general logs",id:"enable-postgresql-general-logs",children:[]},{value:"Enable Slow Query Logs",id:"enable-slow-query-logs",children:[]},{value:"Set access permissions",id:"set-access-permissions",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",children:[]}],u={toc:c};function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"postgres-on-instances"},"Postgres on Instances"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"PostgreSQL on instances is monitored using ",(0,i.kt)("a",{parentName:"p",href:"/docs/Quick_Start/getting_start#sfagent"},"sfAgent")," configured with postgres plugin "),(0,i.kt)("h3",{id:"metrics-plugin"},"Metrics plugin"),(0,i.kt)("p",null,"Collects metric data organized in following ",(0,i.kt)("inlineCode",{parentName:"p"},"documentTypes")," in metrics index: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"serverDetails "),(0,i.kt)("li",{parentName:"ul"},"databaseDetails "),(0,i.kt)("li",{parentName:"ul"},"tableDetails "),(0,i.kt)("li",{parentName:"ul"},"IndexDetails "),(0,i.kt)("li",{parentName:"ul"},"queryDetails ")),(0,i.kt)("h3",{id:"logger-plugin"},"Logger plugin"),(0,i.kt)("p",null,"Collects general logs and slow query logs. General logs are sent to log index under ",(0,i.kt)("inlineCode",{parentName:"p"},"documentType: postgres-general")," and slow queries logs are parsed and data is sent metrics index in ",(0,i.kt)("inlineCode",{parentName:"p"},"documentType: postgres-slowquery")),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("h3",{id:"enable-postgresql-general-logs"},"Enable PostgreSQL general logs"),(0,i.kt)("p",null,"Logging needs to be configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"postgresql.conf")," file. This file can be located by executing the command shown below: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"postgres=# show config_file; \n           config_file             \n---------------------------------- \n /data/pgsql/data/postgresql.conf \n(1 row) \n")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"postgresql.conf")," file, uncomment and configure the variables shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," log_min_messages = warning  # set level as appropriate \nlog_line_prefix = '< %m > ' \n")),(0,i.kt)("h3",{id:"enable-slow-query-logs"},"Enable Slow Query Logs"),(0,i.kt)("p",null,"Configuring\u202f",(0,i.kt)("inlineCode",{parentName:"p"},"log_min_duration_statement = 200"),"\u202fwill log any query which takes more than 200ms to execute which. Set the value to appropriate value "),(0,i.kt)("h3",{id:"set-access-permissions"},"Set access permissions"),(0,i.kt)("p",null,"Username used for DB access should have appropriate permissions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"grant SELECT ON pg_stat_database to <username>; \ngrant pg_monitor to <username>; \n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"root user has these permissions by default "))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/Quick_Start/getting_start#sfagent"},"sfAgent")," section for steps to install and automatically generate plugin configurations. User can also manually add the configuration shown below to ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/sfagent/ directory")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"key: <profile_key> \ntags: \n  Name: <name> \n  appName: <app_name> \n  projectName: <project_name> \nmetrics: \n  plugins: \n    - name: postgres \n      enabled: true \n      interval: 60 \n      config: \n        documentsTypes: \n          - databaseDetails \n          - indexDetails \n          - queryDetails \n          - serverDetails \n          - tableDetails \n        host: 127.0.0.1 \n        password: <password> \n        port: 5432 \n        user: <username> \nlogging: \n  plugins: \n    - name: postgres-general \n      enabled: true \n      config: \n        log_level: \n          - error \n          - warning \n          - info \n          - log \n        log_path: /var/log/postgresql/postgresql-10-main.log \n    - name: postgres-slowquery \n      enabled: true \n      config: \n        log_path: /var/log/postgresql/postgresql-10-main.log \n")),(0,i.kt)("h2",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data generated by plugin can be viewed in ",(0,i.kt)("inlineCode",{parentName:"li"},"browse data")," page inside the respective application under ",(0,i.kt)("inlineCode",{parentName:"li"},"plugin=postgres")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"documentType=")," ",(0,i.kt)("inlineCode",{parentName:"li"},"serverDetails"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"databaseDetails"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tableDetails"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"IndexDetails"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"queryDetails"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"postgres-slowquery")," "),(0,i.kt)("li",{parentName:"ul"},"Dashboard for this data can be instantiated by Importing dashboard template ",(0,i.kt)("inlineCode",{parentName:"li"},"PostgreSQL")," to the application dashboard")))}g.isMDXComponent=!0}}]);