"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[3409],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5412:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={},l="Monitoring Apache Server on Instances",s={unversionedId:"Integrations/apache/overview",id:"Integrations/apache/overview",isDocsHomePage:!1,title:"Monitoring Apache Server on Instances",description:"Overview",source:"@site/docs/Integrations/apache/overview.md",sourceDirName:"Integrations/apache",slug:"/Integrations/apache/overview",permalink:"/docs/Integrations/apache/overview",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/apache/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monitoring MySQL databases running on cloud services (Amazon RDS) using sfPoller",permalink:"/docs/Integrations/mysql/mysql_sfpoller"},next:{title:"SnappyFlow Linux Integrations",permalink:"/docs/Integrations/os/linux/overview"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring-apache-server-on-instances"},"Monitoring Apache Server on Instances"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Apache Server\u2019s monitoring involves monitoring of the following elements: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Apache Access Logs ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Apache Error Logs ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Apache Server Health "))),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Ensure Apache access logs are in format expected by sfAgent parser"),". "),(0,o.kt)("p",{parentName:"li"},"Edit configuration file and set log format as follows: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'LogFormat\u202f"%h %l %u %t \\"%r\\" %>s %b \\"%{Referer}i\\" \\"%{User-Agent}i\\" %D" combined\u202f \n\nCustomLog\u202f"logs/access_log" combined\u202f \n')),(0,o.kt)("p",{parentName:"li"},"After configuring log format, the expected log entry would be: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'45.112.52.50 - - [28/Jun/2020:23:34:10 -0700] "GET / HTTP/1.1" 302 242 "-" "Mozilla/5.0 (Windows NT 6.2; Win64; x64)\u202fAppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36" 271\u202f \n')),(0,o.kt)("p",{parentName:"li"},"Apache configuration file can be found in these paths:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ubuntu: ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/apache2/mods-enabled/status.conf\u202f")),(0,o.kt)("li",{parentName:"ul"},"Centos: ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/httpd/conf/httpd.conf")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Check if Apache status module is enabled")),(0,o.kt)("p",{parentName:"li"},"This is required to monitor Apache server health."),(0,o.kt)("p",{parentName:"li"},"Apache web server exposes metrics through its status module,\u202f",(0,o.kt)("strong",{parentName:"p"},"mod_status"),". If\u202fapache\u202fserver is running and\u202fmod_status\u202fis enabled,\u202fapache\u202fserver\u2019s status page should be available at\u202f",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1/server-status"},"http://127.0.0.1/server-status"),"."),(0,o.kt)("p",{parentName:"li"},"Alternatively,\u202fyou can check is mod_status is enabled by running the following commands: "),(0,o.kt)("p",{parentName:"li"},"Ubuntu(or\u202fDebian\u202fbased systems): "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo\u202fapache2ctl -M | grep\u202fstatus_module\u202f \n")),(0,o.kt)("p",{parentName:"li"},"Centos/RHEL/Fedora"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo\u202fhttpd -M | grep\u202fstatus_module\u202f \n")),(0,o.kt)("p",{parentName:"li"},"if output of above command is\u202f",(0,o.kt)("inlineCode",{parentName:"p"},"status_module"),"\u202f,\u202fthen\u202fapache\u202fstatus module is enabled. If mod_status is not\u202fenabled ,\u202ffollow next step to enable it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Enable Apache status module")),(0,o.kt)("p",{parentName:"li"},"In order to enable\u202fmod_status\u202f,\u202f edit the status module\u2019s configuration file (on Debian platforms), or your main Apache configuration file (all other Unix-like platforms).\u202f "),(0,o.kt)("p",{parentName:"li"},"Debian users can find the status module\u2019s configuration file in\u202f",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/status.conf\u202f")," "),(0,o.kt)("p",{parentName:"li"},"Users of other platforms (such as Red Hat\u2013based systems) will find their main configuration file in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/apache2/apache2.conf"),",\u202f",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/httpd/conf/httpd.conf"),", or\u202f",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/apache2/httpd.conf"),".\u202f "),(0,o.kt)("p",{parentName:"li"},"\u202fIn the main configuration file, allow access from local or from a specific ip address as shown below:\u202f\u202f "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\u202f\u202f <Location /server-status>\u202f \n\u202f\u202f\u202f\u202f\u202f\u202f\u202fSetHandler\u202fserver-status\u202f \n\u202f\u202f\u202f\u202f\u202f\u202f Require local\u202f \n\u202f#\u202f\u202f\u202f\u202f\u202fRequire all granted\u202f \n\u202f\u202f\u202f\u202f\u202f\u202f Require\u202fip\u202fx.x.x.x\u202f \n\u202f\u202f </Location>\u202f \n")),(0,o.kt)("p",{parentName:"li"},"Check your configuration file for errors with the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"apachectl\u202fconfigtest\u202f\u202f \n")),(0,o.kt)("p",{parentName:"li"},"Perform a graceful restart to apply the changes without interrupting live connections: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"(apachectl\u202f-k graceful\u202for\u202fservice apache2 graceful)\u202f \n")),(0,o.kt)("p",{parentName:"li"},"After enabling\u202fmod_status\u202fand restarting Apache, status page is accessible at\u202fhttp://localhost/server-status\u202f or\u202fhttp://ipaddress/server-status."))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"sfAgent section provides steps to install and automatically generate plugin configurations. User can also manually add the configuration shown below to ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/sfagent/")," directory "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"key: <profile key> \ngenerate_name: true \ntags: \n  Name: <unique instance name or will be generated from IP> \n  appName: <add application name> \n  projectName: <add project name> \n metrics: \n  plugins: \n    - name: apache \n      enabled: true \n      interval: 300 \n      config: \n        port: 80 \n        secure: false \n        location: server-status \n logging: \n  plugins: \n    - name: apache-access \n      enabled: true \n      config: \n        geo_info: true  \n        log_path: /var/log/apache2/access.log, var/log/apache2/access_log\n        ua_parser: false \n     - name: apache-error \n      enabled: true \n      config: \n        log_level: \n          - notice \n          - warning \n          - error \n        log_path: /var/log/apache2/error.log, /var/log/httpd/error_log \n")),(0,o.kt)("h2",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,o.kt)("p",null,"Data generated by plugin can be viewed in ",(0,o.kt)("inlineCode",{parentName:"p"},"browse data")," page inside the respective application under ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin=apache")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"documentType=apache"),". Logger data is available inside ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin=apache-access")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"documentType=apacheAccess")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin=apache-error")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"documentType=apacheError"),". "),(0,o.kt)("p",null,"Dashboard for this data can be instantiated by Importing dashboard template ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache_Server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache_Access")," to the application dashboard."))}d.isMDXComponent=!0}}]);