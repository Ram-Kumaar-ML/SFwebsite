"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[3751],{3316:function(e,a,n){n.r(a),n.d(a,{default:function(){return o}});var r=n(7294),t=n(6698),c=n(941),l=n(7211),s="tag_21yA";function u(e){var a=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,a.letter),r.createElement("ul",{className:"padding--none"},a.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(l.Z,e))}))),r.createElement("hr",null))}var i=function(e){var a=e.tags,n=(0,c.PZ)(a);return r.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return r.createElement(u,{key:e.letter,letterEntry:e})})))};var o=function(e){var a=e.tags,n=(0,c.MA)();return r.createElement(t.Z,{title:n,wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsTagsListPage,searchMetadatas:{tag:"doc_tags_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("main",{className:"col col--8 col--offset-2"},r.createElement("h1",null,n),r.createElement(i,{tags:a})))))}},7211:function(e,a,n){n.d(a,{Z:function(){return i}});var r=n(7294),t=n(6010),c=n(6742),l="tag_1Okp",s="tagRegular_3MiF",u="tagWithCount_1HU1";var i=function(e){var a,n=e.permalink,i=e.name,o=e.count;return r.createElement(c.Z,{href:n,className:(0,t.Z)(l,(a={},a[s]=!o,a[u]=o,a))},i,o&&r.createElement("span",null,o))}},6979:function(e,a,n){var r=n(7294),t=n(4184),c=n.n(t),l=n(5977),s=n(2263),u=n(8084);a.Z=function(e){var a=(0,r.useRef)(!1),t=(0,r.useRef)(null),i=(0,l.k6)(),o=(0,s.Z)().siteConfig,h=(void 0===o?{}:o).baseUrl,m=(0,u.usePluginData)("docusaurus-lunr-search"),d=function(){a.current||(Promise.all([fetch(""+h+m.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+h+m.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(9878),n.e(4452)]).then(n.bind(n,7780)),Promise.all([n.e(532),n.e(3343)]).then(n.bind(n,3343))]).then((function(e){var a=e[0],n=e[1],r=e[2].default;0!==a.length&&function(e,a,n){new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var r=h+n.url;document.createElement("a").href=r,i.push(r)}})}(a,n,r)})),a.current=!0)},f=(0,r.useCallback)((function(a){t.current.contains(a.target)||t.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.createElement("div",{className:"navbar__search",key:"search-box"},r.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),r.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:f,onBlur:f,ref:t}))}}}]);