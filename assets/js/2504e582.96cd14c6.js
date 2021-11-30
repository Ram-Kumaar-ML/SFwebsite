"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[4340],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2302:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},p="Forwarding AWS Lambda logs to SnappyFlow",s={unversionedId:"Integrations/aws_lambda",id:"Integrations/aws_lambda",isDocsHomePage:!1,title:"Forwarding AWS Lambda logs to SnappyFlow",description:"Overview",source:"@site/docs/Integrations/aws_lambda.md",sourceDirName:"Integrations",slug:"/Integrations/aws_lambda",permalink:"/docs/Integrations/aws_lambda",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/aws_lambda.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monitoring HAProxy on Instances",permalink:"/docs/Integrations/haproxy"},next:{title:"Go Profiler",permalink:"/docs/Integrations/go/profiler"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Installation",id:"installation",children:[{value:"Enable Lambda extension in your function",id:"enable-lambda-extension-in-your-function",children:[]}]}],m={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"forwarding-aws-lambda-logs-to-snappyflow"},"Forwarding AWS Lambda logs to SnappyFlow"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"AWS Lambda Extension")," is designed to forward logs from your AWS Lambda functions to SnappyFlow without requiring an external transport such as CloudWatch Logs."),(0,o.kt)("p",null,"This lightweight extension runs alongside your AWS Lambda functions. Submitting Lambda logs with the extension is supported in all Lambda runtimes."),(0,o.kt)("img",{src:"/img/aws_lambda_1.svg"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"enable-lambda-extension-in-your-function"},"Enable Lambda extension in your function"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"As Lambda Layer")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add the Lambda Layer for the SnappyFlow extension to your AWS Lambda function with the following ARN:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"arn:aws:lambda:<AWS_REGION>:106947364898:layer:sf-lambda-extension:3\n")),(0,o.kt)("p",{parentName:"li"},"Replace\u202f<AWS_REGION>\u202fwith the same AWS region as your Lambda Function, for example,\u202fus-west-2"),(0,o.kt)("img",{src:"/img/aws_lambda_2.png"}),(0,o.kt)("img",{src:"/img/aws_lambda_3.png"}),(0,o.kt)("img",{src:"/img/aws_lambda_4.png"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"As Container Image")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add the SnappyFlow Lambda extension to your container image by adding the following to your Dockerfile:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"COPY --from=snappyflowml/sf-lambda-extension:latest /opt/extensions/ /opt/extensions \n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add the environment variable\u202f",(0,o.kt)("inlineCode",{parentName:"p"},"SF_PROFILE_KEY"),"\u202fand set the value to your\u202fprofile key copied from SnappyFlow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"APP_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PROJECT_NAME")," with appropriate values"))))))}c.isMDXComponent=!0}}]);