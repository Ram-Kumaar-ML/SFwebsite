"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[6522],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),m=l,g=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1739:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(7462),l=t(3366),o=(t(7294),t(3905)),i=["components"],a={},p="Go Profiler",s={unversionedId:"Integrations/go/profiler",id:"Integrations/go/profiler",isDocsHomePage:!1,title:"Go Profiler",description:"Overview",source:"@site/docs/Integrations/go/profiler.md",sourceDirName:"Integrations/go",slug:"/Integrations/go/profiler",permalink:"/docs/Integrations/go/profiler",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/go/profiler.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monitoring ActiveMQ Message Broker running on Instances",permalink:"/docs/Integrations/activemq"},next:{title:"overview",permalink:"/docs/Integrations/kafka/overview"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Sample runtime metrics collected",id:"sample-runtime-metrics-collected",children:[]}],f={toc:c};function u(e){var n=e.components,t=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-profiler"},"Go Profiler"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"SnappyFlow profiler collects "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Profiles (supported: ",(0,o.kt)("inlineCode",{parentName:"li"},"cpu"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"heap"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"block"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"mutex"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"goroutine"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"threadcreate"),")"),(0,o.kt)("li",{parentName:"ul"},"Runtime metrics ")),(0,o.kt)("p",null,"and sends them to SnappyFlow for further visualization and analysis."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cpu")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"heap")," profiles are enabled by default and other profiles can be enabled as required."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"godoc: ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/snappyflow/sf-go-profiler/profiler"},"https://pkg.go.dev/github.com/snappyflow/sf-go-profiler/profiler"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"sample code: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snappyflow/sf-go-profiler/tree/main/example/main.go"},"https://github.com/snappyflow/sf-go-profiler/tree/main/example/main.go")))),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Pre-requisites")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install and configure snappyflow agent on vm or as a sidecar in the container, as it is required to send data to snappyflow-apm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run the below command to download or update sf-go-profiler package in your current project."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u -v github.com/snappyflow/sf-go-profiler/profiler\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/snappyflow/sf-go-profiler/profiler"\n\nmain(){\n    profile := profiler.NewProfilerConfig("server")\n    profile.Start()\n    defer profile.Stop()\n    // rest of the application code\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"profiling can conditionally enabled when required using golang flags")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/snappyflow/sf-go-profiler/profiler"\n    "flag"\n)\n\nmain(){\n    enableprofile := flag.Bool("profile",false,"enable profiler")\n    if *enableprofile {\n        profile := profiler.NewProfilerConfig("server")\n        // below line disables collection of go runtime metrics\n        // profile.DisableRuntimeMetrics()\n        // below line disables profiling\n        // profile.DisableProfiles()\n        profile.Start()\n        defer profile.Stop()\n    }\n    // rest of the application code\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"runtime metrics can be disable by calling ",(0,o.kt)("inlineCode",{parentName:"li"},"DisableRuntimeMetrics()")," similarly profiling can be disabled by calling ",(0,o.kt)("inlineCode",{parentName:"li"},"DisableProfiles()")," on profile config object.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'    profile := profiler.NewProfilerConfig("server")\n    // below line disables collection of go runtime metrics\n    profile.DisableRuntimeMetrics()\n    // below line disables profiling\n    profile.DisableProfiles()\n    profile.Start()\n    defer profile.Stop()\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"enable other supported profiles as required")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"    // enable block profile and set given block profile rate\n    profile.EnableBlockProfile(100)\n    // enable mutex profile and set given mutex profile fraction\n    profile.EnableMutexProfile(1000)\n    // enable goroutine profile\n    profile.EnableGoRoutineProfile()\n    // enable threadcreate profile\n    profile.EnableThreadCreateProfile()\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"since only heap and cpu profiles are enabled by default, all supported profiles can be enabled by call to function ",(0,o.kt)("inlineCode",{parentName:"li"},"EnableAllProfiles()"),", this sets block profile rate to ",(0,o.kt)("inlineCode",{parentName:"li"},"DefaultBlockProfileRate")," and mutex profile fraction to ",(0,o.kt)("inlineCode",{parentName:"li"},"DefaultMutexProfileFraction"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"    // enable all supported profiles\n    profile.EnableAllProfiles()\n")),(0,o.kt)("h2",{id:"sample-runtime-metrics-collected"},"Sample runtime metrics collected"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"reference: ",(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#MemStats"},"https://pkg.go.dev/runtime#MemStats"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "alloc_mb": 8.4275,\n  "frees": 28575,\n  "gc_cpu_fraction": 0.0001,\n  "go_version": "go1.16.4",\n  "interval": 60,\n  "last_gc": 1631099627396,\n  "live_objects": 27146,\n  "mallocs": 27361,\n  "max_pause_gc_ms": 0.1033,\n  "min_pause_gc_ms": 0.0366,\n  "num_cpu": 2,\n  "num_gc": 2,\n  "num_goroutines": 23,\n  "pid": 23201,\n  "sys_mb": 71.5791,\n  "time": 1631099686505,\n  "total_alloc_mb": 8.8994,\n  "total_pause_gc_ms": 0.14,\n}\n')))}u.isMDXComponent=!0}}]);