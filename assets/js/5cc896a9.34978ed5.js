"use strict";(self.webpackChunkdisplay_hub=self.webpackChunkdisplay_hub||[]).push([[893],{7940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"modules/weather","title":"Weather Forecast","description":"The Weather Forecast module provides real-time weather updates for a specified location. Note","source":"@site/docs/modules/weather.md","sourceDirName":"modules","slug":"/modules/weather","permalink":"/display-hub-e-ink-display-dashboard-docs/docs/modules/weather","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/weather.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Modules","permalink":"/display-hub-e-ink-display-dashboard-docs/docs/category/modules"},"next":{"title":"News Headlines","permalink":"/display-hub-e-ink-display-dashboard-docs/docs/modules/news"}}');var n=r(4848),i=r(8453);const d={sidebar_position:1},a="Weather Forecast",o={},l=[{value:"Information Displayed",id:"information-displayed",level:3},{value:"Usage",id:"usage",level:3},{value:"API Reference",id:"api-reference",level:3},{value:"Workflow",id:"workflow",level:4},{value:"Open-Meteo API Parameters",id:"open-meteo-api-parameters",level:4}];function c(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"weather-forecast",children:"Weather Forecast"})}),"\n",(0,n.jsxs)(t.p,{children:["The Weather Forecast module provides real-time weather updates for a specified location. ",(0,n.jsx)(t.strong,{children:"Note:"})," This module supports only US ZIP codes. The module's display is a compact 1x1 square:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Weather Forecast Module",src:r(2449).A+"",width:"772",height:"1124"})}),"\n",(0,n.jsx)(t.h3,{id:"information-displayed",children:"Information Displayed"}),"\n",(0,n.jsx)("img",{src:"https://jcari-dev.github.io/display-hub-e-ink-display-dashboard-docs/img/weather_module_sample.jpg",alt:"Description",class:"module-images"}),"\n",(0,n.jsx)(t.p,{children:"The module presents the following details:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Current Temperature"}),": Includes the current temperature and the selected temperature scale (\xb0F or \xb0C)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Weather Description"}),': Provides a human-readable weather condition, such as "Clear Sky" or "Overcast."']}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'Enter a valid US ZIP code in the "Enter a ZIP Code" field.'}),"\n",(0,n.jsx)(t.li,{children:"Choose a temperature scale: \xb0F, \xb0C, or even \xb0K if you're feeling adventurous."}),"\n",(0,n.jsx)(t.li,{children:'Select a timezone. Leaving this as "Not Set" may result in Open Meteo\'s API being unable to detect your timezone correctly.'}),"\n",(0,n.jsx)(t.li,{children:'Click "Save Weather Settings." If successful, a green message will confirm the settings were saved. If not, a red message will indicate the failure.'}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"api-reference",children:"API Reference"}),"\n",(0,n.jsxs)(t.p,{children:["The Weather Forecast module retrieves real-time weather data from the ",(0,n.jsx)(t.a,{href:"https://open-meteo.com/",children:"Open-Meteo Current Weather API"}),". This integration is supported by user settings stored in the database, including the ZIP code and preferred temperature scale (\xb0F or \xb0C)."]}),"\n",(0,n.jsx)(t.h4,{id:"workflow",children:"Workflow"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ZIP Code to Coordinates"}),":\r\nThe module converts the user\u2019s ZIP code into latitude and longitude using a local dataset (",(0,n.jsx)(t.code,{children:"US.txt"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"API Request"}),":\r\nIt then queries the Open-Meteo API with the derived coordinates and user preferences, such as temperature scale."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Response Handling"}),":\r\nThe response is parsed, and current weather data, including temperature and conditions, is returned for display."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"open-meteo-api-parameters",children:"Open-Meteo API Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"latitude"})}),(0,n.jsx)(t.td,{children:"Latitude from ZIP-to-coordinate conversion."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"longitude"})}),(0,n.jsx)(t.td,{children:"Longitude from ZIP-to-coordinate conversion."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"current_weather"})}),(0,n.jsxs)(t.td,{children:["Retrieves current weather data (always ",(0,n.jsx)(t.code,{children:"True"}),")."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"temperature_unit"})}),(0,n.jsxs)(t.td,{children:["User-selected temperature scale (",(0,n.jsx)(t.code,{children:"\xb0F"})," or ",(0,n.jsx)(t.code,{children:"\xb0C"}),")."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"timezone"})}),(0,n.jsx)(t.td,{children:"Automatically detected timezone."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2449:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/weather_module-8e8ad9f719b15c7651bf3e0da2fa6c32.png"},8453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>a});var s=r(6540);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);