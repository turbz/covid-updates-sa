(this["webpackJsonpcovid-updates-sa"]=this["webpackJsonpcovid-updates-sa"]||[]).push([[0],{22:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/world-map.9d33950f.svg"},25:function(e,t,a){e.exports=a.p+"static/media/southafrica.52c2f26e.png"},26:function(e,t,a){e.exports=a.p+"static/media/down-arrow.a39be97c.svg"},27:function(e,t,a){e.exports=a.p+"static/media/up-arrow.b8f1b1dc.svg"},28:function(e,t,a){e.exports=a.p+"static/media/logo.833b6f8d.jpg"},6:function(e,t,a){e.exports=a.p+"static/media/graph.72aa0b5e.svg"},72:function(e,t,a){e.exports=a(85)},77:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(23),m=a.n(u),d=(a(77),a(78),a(2)),l=a(1),c=a(4),b=a.n(c);function i(e){var t=e.covidData,a=e.onToggleLineCharts,u=Object(n.useState)(""),m=Object(d.a)(u,2),c=m[0],i=m[1],o=Object(n.useState)(!0),s=Object(d.a)(o,2),p=s[0],v=s[1],E=function(e){return b()().subtract(e,"days").format("YYYY/MM/DD")},f=function(e){return b()().subtract(e,"days").format("DD-MMM-YYYY")},h=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],g=function(e){return t.slice(0,9).map((function(t){var a=t.daily_cases.filter((function(a){return(a.date<=E(e)&&""===c||a.date<=E(e)&&t.province===c)&&a})).reduce((function(e,t){return e+t.number}),0);return{province:t.province,recoveries:t.recoveries,deaths:t.deaths,positive:a}}))},C=h.map((function(e){var t=function(t){return g(e).filter((function(e){return e.province===t&&e}))},a=t("Eastern Cape").reduce((function(e,t){return e+t.positive}),0),n=t("Free State").reduce((function(e,t){return e+t.positive}),0),r=t("Gauteng").reduce((function(e,t){return e+t.positive}),0),u=t("KwaZulu-Natal").reduce((function(e,t){return e+t.positive}),0),m=t("Limpopo").reduce((function(e,t){return e+t.positive}),0),d=t("Mpumalanga").reduce((function(e,t){return e+t.positive}),0),l=t("North West").reduce((function(e,t){return e+t.positive}),0),c=t("Northern Cape").reduce((function(e,t){return e+t.positive}),0),b=t("Western Cape").reduce((function(e,t){return e+t.positive}),0);return{date:f(e),GP:r,WC:b,KZN:u,EC:a,FS:n,LP:m,MP:d,NW:l,NC:c}})),N=h.map((function(e){var t=g(e).reduce((function(e,t){return e+t.positive}),0);return{date:f(e),total:t}}));return console.log(C),Object(n.useEffect)((function(){var e=l.k("#linechart").append("svg").attr("viewBox","-40 -40 940 500").attr("width","100%").attr("height","100%").style("margin"," 0 1em").classed("svg-content",!0),t=["date","total"],a=["date","EC","FS","GP","KZN","LP","MP","NW","NC","WC","UN"],n=function(){return p?C:N},r=l.n("%d-%b-%Y"),u=(p?a:t).slice(1).map((function(e){return{id:e,values:n().map((function(t){return{date:r(t.date),measurement:+t[e]}}))}})),m=l.j().range([0,860]),d=l.h().rangeRound([340,0]);m.domain(l.d(n(),(function(e){return r(e.date)}))),d.domain([0,l.f(u,(function(e){return l.f(e.values,(function(e){return e.measurement+4}))}))]);var c=l.c().ticks(u[0].values.length).scale(d),b=l.b().ticks(l.l.every(1)).tickFormat(l.m("%b %d")).scale(m);e.append("g").attr("class","axis").attr("transform","translate(0,340)").call(b),e.append("g").attr("class","axis").call(c),e.append("g").attr("class","axis").call(c).append("text").attr("transform","rotate(-90)").attr("dy",".75em").attr("y",6).style("text-anchor","end").text("Frequency");var i=l.e().x((function(e){return m(e.date)})).y((function(e){return d(e.measurement)})),o=0,s=e.selectAll("lines").data(u).enter().append("g");s.append("path").attr("class",(function(){return"line-"+o++})).attr("d",(function(e){return i(e.values)})),s.append("text").attr("class","serie_label").datum((function(e){return{id:e.id,value:e.values[e.values.length-1]}})).attr("transform",(function(e){return"translate("+(m(e.value.date)+10)+","+(d(e.value.measurement)+5)+")"})).attr("x",5).text((function(e){return e.id}))}),[N,C,p]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("ul",null,r.a.createElement("li",{style:{backgroundColor:"#1b1c3a"}},"Overrall"),r.a.createElement("li",{onClick:a},"Daily")),r.a.createElement("label",null,r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",onClick:function(){return v(!p)}}),r.a.createElement("span",null,"National")),r.a.createElement("select",{onChange:function(e){return i(e.target.value)}},r.a.createElement("option",{value:""},"Choose Province"),r.a.createElement("option",{value:"Eastern Cape"},"Eastern Cape"),r.a.createElement("option",{value:"Free State"},"Free State"),r.a.createElement("option",{value:"Gauteng"},"Gauteng"),r.a.createElement("option",{value:"KwaZulu-Natal"},"KwaZulu-Natal"),r.a.createElement("option",{value:"Limpopo"},"Limpopo"),r.a.createElement("option",{value:"Mpumalanga"},"Mpumalanga"),r.a.createElement("option",{value:"North West"},"North West"),r.a.createElement("option",{value:"Northern Cape"},"Northern Cape"),r.a.createElement("option",{value:"Western Cape"},"Western Cape")))),r.a.createElement("div",{className:"provincial-stats"},r.a.createElement("div",{id:"linechart",className:"linechart"}),r.a.createElement("ul",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#DE3831"}})," EC"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#a6e7ff"}})," FS"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#007a4d"}})," GP"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#ffb612"}})," KZN"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#ff878d"}})," LP"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#A6A6A6"}})," MP"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#6eaea1"}})," NW"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#fff"}})," NC"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#0A7E8C"}})," WC"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#1b1c3a"}})," UN")))))}a(80);function o(e){var t=e.covidData,a=e.onToggleLineCharts,u=Object(n.useState)(""),m=Object(d.a)(u,2),c=m[0],i=m[1],o=Object(n.useState)(!0),s=Object(d.a)(o,2),p=s[0],v=s[1],E=function(e){return b()().subtract(e,"days").format("YYYY/MM/DD")},f=function(e){return b()().subtract(e,"days").format("DD-MMM-YYYY")},h=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],g=function(e){return t.slice(0,9).map((function(t){var a=t.daily_cases.filter((function(a){return(a.date===E(e)&&""===c||a.date===E(e)&&t.province===c)&&a})).reduce((function(e,t){return e+t.number}),0);return{province:t.province,recoveries:t.recoveries,deaths:t.deaths,positive:a}}))},C=h.map((function(e){var t=function(t){return g(e).filter((function(e){return e.province===t&&e}))},a=t("Eastern Cape").reduce((function(e,t){return e+t.positive}),0),n=t("Free State").reduce((function(e,t){return e+t.positive}),0),r=t("Gauteng").reduce((function(e,t){return e+t.positive}),0),u=t("KwaZulu-Natal").reduce((function(e,t){return e+t.positive}),0),m=t("Limpopo").reduce((function(e,t){return e+t.positive}),0),d=t("Mpumalanga").reduce((function(e,t){return e+t.positive}),0),l=t("North West").reduce((function(e,t){return e+t.positive}),0),c=t("Northern Cape").reduce((function(e,t){return e+t.positive}),0),b=t("Western Cape").reduce((function(e,t){return e+t.positive}),0);return{date:f(e),GP:r,WC:b,KZN:u,EC:a,FS:n,LP:m,MP:d,NW:l,NC:c}})),N=h.map((function(e){var t=g(e).reduce((function(e,t){return e+t.positive}),0);return{date:f(e),total:t}}));return Object(n.useEffect)((function(){var e=function(){return p?C:N},t=l.k("#provincialChart").append("svg").attr("viewBox","-40 -40 940 500").attr("width","100%").attr("height","100%").style("margin"," 0 1em").classed("svg-content",!0),a=["date","total"],n=["date","EC","FS","GP","KZN","LP","MP","NW","NC","WC","UN"],r=function(){return p?n:a};console.log(r());var u=l.n("%d-%b-%Y"),m=r().slice(1).map((function(t){return{id:t,values:e().map((function(e){return{date:u(e.date),measurement:+e[t]}}))}})),d=l.j().range([0,860]),c=l.h().rangeRound([340,0]);d.domain(l.d(e(),(function(e){return u(e.date)}))),c.domain([0,l.f(m,(function(e){return l.f(e.values,(function(e){return e.measurement+4}))}))]);var b=l.c().ticks(m[0].values.length).scale(c),i=l.b().ticks(l.l.every(1)).tickFormat(l.m("%b %d")).scale(d);t.append("g").attr("class","axis").attr("transform","translate(0,340)").call(i),t.append("g").attr("class","axis").call(b),t.append("g").attr("class","axis").call(b).append("text").attr("transform","rotate(-90)").attr("dy",".75em").attr("y",6).style("text-anchor","end").text("Frequency");var o=l.e().x((function(e){return d(e.date)})).y((function(e){return c(e.measurement)})),s=0,v=t.selectAll("lines").data(m).enter().append("g");v.append("path").attr("class",(function(){return"line-"+s++})).attr("d",(function(e){return o(e.values)})),v.append("text").attr("class","serie_label").datum((function(e){return{id:e.id,value:e.values[e.values.length-1]}})).attr("transform",(function(e){return"translate("+(d(e.value.date)+10)+","+(c(e.value.measurement)+5)+")"})).attr("x",5).text((function(e){return e.id}))}),[p,C,N]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("ul",null,r.a.createElement("li",{onClick:a},"Overrall"),r.a.createElement("li",{style:{backgroundColor:"#1b1c3a"}},"Daily")),r.a.createElement("label",null,r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",onClick:function(){return v(!p)}}),r.a.createElement("span",null,"National")),r.a.createElement("select",{onChange:function(e){return i(e.target.value)}},r.a.createElement("option",{value:""},"Choose Province"),r.a.createElement("option",{value:"Eastern Cape"},"Eastern Cape"),r.a.createElement("option",{value:"Free State"},"Free State"),r.a.createElement("option",{value:"Gauteng"},"Gauteng"),r.a.createElement("option",{value:"KwaZulu-Natal"},"KwaZulu-Natal"),r.a.createElement("option",{value:"Limpopo"},"Limpopo"),r.a.createElement("option",{value:"Mpumalanga"},"Mpumalanga"),r.a.createElement("option",{value:"North West"},"North West"),r.a.createElement("option",{value:"Northern Cape"},"Northern Cape"),r.a.createElement("option",{value:"Western Cape"},"Western Cape")))),r.a.createElement("div",{className:"provincial-stats"},r.a.createElement("div",{id:"provincialChart",className:"linechart"}),r.a.createElement("ul",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#DE3831"}})," EC"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#a6e7ff"}})," FS"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#007a4d"}})," GP"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#ffb612"}})," KZN"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#ff878d"}})," LP"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#A6A6A6"}})," MP"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#6eaea1"}})," NW"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#fff"}})," NC"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#0A7E8C"}})," WC"),r.a.createElement("li",null,r.a.createElement("span",{style:{backgroundColor:"#1b1c3a"}})," UN")))))}function s(e){var t=e.covidData,a=Object(n.useState)(!1),u=Object(d.a)(a,2),m=u[0],l=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h2",null,"SA Covid19 Dashboard as at 4 May 2020")),r.a.createElement("div",{className:"National-LineChart"},m?r.a.createElement(o,{covidData:t,onToggleLineCharts:function(){l(!m)}}):r.a.createElement(i,{covidData:t,onToggleLineCharts:function(){return l(!0)}})))}function p(e){var t=e.totalCovid,a=[{leave:"TestS Conducted",value:e.tested},{total:"Positive",value:t("positive")}];return Object(n.useEffect)((function(){var e=Math.min(500,320),t=Math.min(500,e)/2,n=l.g().padAngle(.005).sort(null).value((function(e){return e.value})),r=l.a().innerRadius(140).outerRadius(t-1),u=l.i().domain(a.map((function(e){return e.leave}))).range(["rgba(255, 255, 255, .15)","#fff"]),m=n(a),d=l.k("#donutchart").append("svg").attr("viewBox",[-500/3,-e/2,500,e]);d.selectAll("path").data(m).join("path").attr("fill",(function(e){return u(e.data.leave)})).attr("d",r).append("title").text((function(e){return"".concat(e.data.leave,": ").concat(e.data.value.toLocaleString())})),d.append("g").attr("font-family","sans-serif").attr("font-size",28).attr("text-anchor","middle").selectAll("text").data(m).join("text").attr("transform",(function(e){return"translate(".concat(r.centroid(e),")")}))}),[a]),r.a.createElement("div",{id:"donutchart",className:"donutchart"})}a(81);var v=a(6),E=a.n(v);a(22);function f(e){var t=e.id,a=[{leave:"Total",value:e.totalCases},{total:"Province",value:e.positiveCase}];return Object(n.useEffect)((function(){var e=Math.min(500,320),n=Math.min(500,e)/2,r=l.g().padAngle(.005).sort(null).value((function(e){return e.value})),u=l.a().innerRadius(140).outerRadius(n-1),m=l.i().domain(a.map((function(e){return e.leave}))).range(["rgba(255, 255, 255, .15)","#fff"]),d=r(a),c=l.k("#".concat(t)).append("svg").attr("viewBox",[-500/3,-e/2,500,e]);c.selectAll("path").data(d).join("path").attr("fill",(function(e){return m(e.data.leave)})).attr("d",u).append("title").text((function(e){return"".concat(e.data.leave,": ").concat(e.data.value.toLocaleString())})),c.append("g").attr("font-family","sans-serif").attr("font-size",28).attr("text-anchor","middle").selectAll("text").data(d).join("text").attr("transform",(function(e){return"translate(".concat(u.centroid(e),")")}))}),[a,t]),r.a.createElement("div",{id:t,className:"provincechart"})}var h=a(24),g=a.n(h),C=a(25),N=a.n(C),y=a(26),k=a.n(y),x=a(27),P=a.n(x);function M(e){var t=e.covidData,a=e.totalCovid,u=Object(n.useState)(!1),m=Object(d.a)(u,2),l=m[0],c=m[1],b=Object(n.useState)("EC"),i=Object(d.a)(b,2),o=i[0],s=i[1],p=t.map((function(e){var t=e.daily_cases.reduce((function(e,t){return e+t.number}),0);return{province:e.province,positive:t,recoveries:e.recoveries,deaths:e.deaths}})),v=["EC","FS","GP","KZN","LP","MP","NW","NC","WC","UN"],E=p.reduce((function(e,t){return e+t.positive}),0),h=function(){c(!l)};return r.a.createElement(r.a.Fragment,null,l?r.a.createElement("div",{className:"statistics-map"},r.a.createElement("button",{onClick:h},"Return"),r.a.createElement("div",{className:"map"},r.a.createElement("figure",null,r.a.createElement("img",{src:N.a,alt:"map"}))),r.a.createElement("div",{className:"visualization"},p.map((function(e,t){return r.a.createElement("div",{key:t,className:"Card "},r.a.createElement("header",{onClick:function(){return s(v[t])}},r.a.createElement("h3",null,r.a.createElement("span",null,v[t]),e.province),o!==v[t]?r.a.createElement("img",{src:k.a,alt:"open"}):r.a.createElement("img",{src:P.a,alt:"close"})),r.a.createElement("div",{style:{display:o===v[t]?"flex":"none"},className:"stat"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"Positive Cases:"),r.a.createElement("span",null,e.positive)),r.a.createElement("li",null,r.a.createElement("span",null,"Recoveries:"),r.a.createElement("span",null,e.recoveries)),r.a.createElement("li",null,r.a.createElement("span",null,"Deaths:"),r.a.createElement("span",null,e.deaths))),r.a.createElement("div",{className:"graph"},r.a.createElement("h4",null,(e.positive/E*100).toFixed(2)," %",r.a.createElement("span",null,"Positive %")),r.a.createElement(f,{id:"provincechart"+v[t],totalCases:E,positiveCase:e.positive}))))})))):r.a.createElement("div",{className:"SA-Map"},r.a.createElement("h4",null,"South African Map"),r.a.createElement("figure",null,r.a.createElement("img",{src:g.a,alt:"south african map"})),r.a.createElement("footer",null,r.a.createElement("h4",null,"Total Positive Case"),r.a.createElement("h3",null,a("positive")),r.a.createElement("button",{onClick:h},"View map"))))}function D(e){var t=e.covidData,a=e.totalCovid;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Overrall-Stats"},r.a.createElement("div",{className:"stats"},r.a.createElement("div",{className:"Card"},r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("span",null,(a("positive")/257541*100).toFixed(2),"%"),r.a.createElement("span",null,"Positive")),r.a.createElement(p,{totalCovid:a,tested:257541})),r.a.createElement("footer",null,r.a.createElement("img",{src:E.a,alt:"icon"}),r.a.createElement("h5",null,"Tests Conducted"),r.a.createElement("h4",null,257541))),r.a.createElement("div",null,r.a.createElement("div",{className:"Card"},r.a.createElement("img",{src:E.a,alt:"icon"}),r.a.createElement("h5",null,"Positive"),r.a.createElement("h4",null,a("positive"))),r.a.createElement("div",{className:"Card"},r.a.createElement("img",{src:E.a,alt:"icon"}),r.a.createElement("h5",null,"Recoveries"),r.a.createElement("h4",null,a("recoveries"))),r.a.createElement("div",{className:"Card"},r.a.createElement("img",{src:E.a,alt:"icon"}),r.a.createElement("h5",null,"Deaths"),r.a.createElement("h4",null,a("deaths"))))),r.a.createElement(M,{covidData:t,totalCovid:a})))}a(82);function W(e){var t=e.covidData.map((function(e){var t=e.daily_cases.reduce((function(e,t){return e+t.number}),0);return{province:e.province,positive:t,recoveries:e.recoveries,deaths:e.deaths}})),a=function(e){return t.reduce((function(t,a){return t+a[e]}),0)};return r.a.createElement("div",{className:"Provincial-Table"},r.a.createElement("ul",null,r.a.createElement("li",null,"Province"),r.a.createElement("li",null,"Positive"),r.a.createElement("li",null,"Recoveries"),r.a.createElement("li",null,"Deaths"),r.a.createElement("li",null,"%")),r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("ul",{key:t},r.a.createElement("li",null,e.province),r.a.createElement("li",null,e.positive),r.a.createElement("li",null,e.recoveries),r.a.createElement("li",null,e.deaths),r.a.createElement("li",null,(e.positive/a("positive")*100).toFixed(2),"%"))}))),r.a.createElement("ul",null,r.a.createElement("li",null,"Grand Total"),r.a.createElement("li",null,a("positive")),r.a.createElement("li",null,a("recoveries")),r.a.createElement("li",null,a("deaths")),r.a.createElement("li",null,"100%")))}var S=[{province:"Eastern Cape",tested:0,positive:616,recoveries:341,deaths:17,daily_cases:[{date:"2020/03/05",number:0},{date:"2020/03/06",number:0},{date:"2020/03/07",number:0},{date:"2020/03/08",number:0},{date:"2020/03/09",number:0},{date:"2020/03/10",number:0},{date:"2020/03/11",number:0},{date:"2020/03/12",number:0},{date:"2020/03/13",number:0},{date:"2020/03/14",number:0},{date:"2020/03/15",number:0},{date:"2020/03/16",number:0},{date:"2020/03/17",number:0},{date:"2020/03/18",number:0},{date:"2020/03/19",number:0},{date:"2020/03/20",number:0},{date:"2020/03/21",number:1},{date:"2020/03/22",number:1},{date:"2020/03/23",number:0},{date:"2020/03/24",number:0},{date:"2020/03/25",number:0},{date:"2020/03/26",number:3},{date:"2020/03/27",number:0},{date:"2020/03/28",number:5},{date:"2020/03/29",number:2},{date:"2020/03/30",number:0},{date:"2020/03/31",number:0},{date:"2020/04/01",number:3},{date:"2020/04/02",number:2},{date:"2020/04/03",number:4},{date:"2020/04/04",number:4},{date:"2020/04/05",number:6},{date:"2020/04/06",number:1},{date:"2020/04/07",number:0},{date:"2020/04/08",number:13},{date:"2020/04/09",number:16},{date:"2020/04/10",number:7},{date:"2020/04/11",number:1},{date:"2020/04/12",number:19},{date:"2020/04/13",number:16},{date:"2020/04/14",number:70},{date:"2020/04/15",number:25},{date:"2020/04/16",number:21},{date:"2020/04/17",number:26},{date:"2020/04/18",number:24},{date:"2020/04/19",number:23},{date:"2020/04/20",number:17},{date:"2020/04/21",number:35},{date:"2020/04/22",number:32},{date:"2020/04/23",number:40},{date:"2020/04/24",number:63},{date:"2020/04/25",number:8},{date:"2020/04/26",number:47},{date:"2020/04/27",number:53},{date:"2020/04/28",number:28},{date:"2020/04/29",number:14},{date:"2020/04/30",number:17},{date:"2020/05/01",number:44},{date:"2020/05/02",number:41},{date:"2020/05/03",number:42},{date:"2020/05/04",number:40}]},{province:"Free State",tested:0,positive:113,recoveries:96,deaths:6,daily_cases:[{date:"2020/03/05",number:0},{date:"2020/03/06",number:0},{date:"2020/03/07",number:0},{date:"2020/03/08",number:0},{date:"2020/03/09",number:0},{date:"2020/03/10",number:0},{date:"2020/03/11",number:0},{date:"2020/03/12",number:0},{date:"2020/03/13",number:0},{date:"2020/03/14",number:0},{date:"2020/03/15",number:0},{date:"2020/03/16",number:0},{date:"2020/03/17",number:0},{date:"2020/03/18",number:0},{date:"2020/03/19",number:0},{date:"2020/03/20",number:7},{date:"2020/03/21",number:0},{date:"2020/03/22",number:2},{date:"2020/03/23",number:4},{date:"2020/03/24",number:0},{date:"2020/03/25",number:17},{date:"2020/03/26",number:19},{date:"2020/03/27",number:0},{date:"2020/03/28",number:19},{date:"2020/03/29",number:4},{date:"2020/03/30",number:0},{date:"2020/03/31",number:2},{date:"2020/04/01",number:2},{date:"2020/04/02",number:8},{date:"2020/04/03",number:0},{date:"2020/04/04",number:1},{date:"2020/04/05",number:2},{date:"2020/04/06",number:2},{date:"2020/04/07",number:0},{date:"2020/04/08",number:-1},{date:"2020/04/09",number:5},{date:"2020/04/10",number:1},{date:"2020/04/11",number:0},{date:"2020/04/12",number:2},{date:"2020/04/13",number:0},{date:"2020/04/14",number:2},{date:"2020/04/15",number:-1},{date:"2020/04/16",number:1},{date:"2020/04/17",number:2},{date:"2020/04/18",number:0},{date:"2020/04/19",number:0},{date:"2020/04/20",number:5},{date:"2020/04/21",number:1},{date:"2020/04/22",number:0},{date:"2020/04/23",number:0},{date:"2020/04/24",number:5},{date:"2020/04/25",number:0},{date:"2020/04/26",number:-1},{date:"2020/04/27",number:1},{date:"2020/04/28",number:2},{date:"2020/04/29",number:0},{date:"2020/04/30",number:3},{date:"2020/05/01",number:2},{date:"2020/05/02",number:3},{date:"2020/05/03",number:1},{date:"2020/05/04",number:3}]},{province:"Gauteng",tested:0,positive:1377,recoveries:979,deaths:14,daily_cases:[{date:"2020/03/05",number:0},{date:"2020/03/06",number:0},{date:"2020/03/07",number:1},{date:"2020/03/08",number:0},{date:"2020/03/09",number:0},{date:"2020/03/10",number:0},{date:"2020/03/11",number:4},{date:"2020/03/12",number:1},{date:"2020/03/13",number:4},{date:"2020/03/14",number:7},{date:"2020/03/15",number:7},{date:"2020/03/16",number:7},{date:"2020/03/17",number:14},{date:"2020/03/18",number:16},{date:"2020/03/19",number:15},{date:"2020/03/20",number:33},{date:"2020/03/21",number:16},{date:"2020/03/22",number:7},{date:"2020/03/23",number:75},{date:"2020/03/24",number:0},{date:"2020/03/25",number:112},{date:"2020/03/26",number:90},{date:"2020/03/27",number:0},{date:"2020/03/28",number:124},{date:"2020/03/29",number:51},{date:"2020/03/30",number:34},{date:"2020/03/31",number:15},{date:"2020/04/01",number:12},{date:"2020/04/02",number:18},{date:"2020/04/03",number:9},{date:"2020/04/04",number:21},{date:"2020/04/05",number:11},{date:"2020/04/06",number:9},{date:"2020/04/07",number:0},{date:"2020/04/08",number:69},{date:"2020/04/09",number:13},{date:"2020/04/10",number:6},{date:"2020/04/11",number:12},{date:"2020/04/12",number:52},{date:"2020/04/13",number:25},{date:"2020/04/14",number:19},{date:"2020/04/15",number:21},{date:"2020/04/16",number:39},{date:"2020/04/17",number:49},{date:"2020/04/18",number:83},{date:"2020/04/19",number:47},{date:"2020/04/20",number:22},{date:"2020/04/21",number:29},{date:"2020/04/22",number:25},{date:"2020/04/23",number:28},{date:"2020/04/24",number:29},{date:"2020/04/25",number:23},{date:"2020/04/26",number:27},{date:"2020/04/27",number:22},{date:"2020/04/28",number:24},{date:"2020/04/29",number:31},{date:"2020/04/30",number:38},{date:"2020/05/01",number:61},{date:"2020/05/02",number:91},{date:"2020/05/03",number:26},{date:"2020/05/04",number:37}]},{province:"KwaZulu-Natal",tested:0,positive:919,recoveries:415,deaths:35,daily_cases:[{date:"2020/03/05",number:1},{date:"2020/03/06",number:0},{date:"2020/03/07",number:0},{date:"2020/03/08",number:1},{date:"2020/03/09",number:0},{date:"2020/03/10",number:0},{date:"2020/03/11",number:5},{date:"2020/03/12",number:1},{date:"2020/03/13",number:2},{date:"2020/03/14",number:1},{date:"2020/03/15",number:1},{date:"2020/03/16",number:0},{date:"2020/03/17",number:4},{date:"2020/03/18",number:3},{date:"2020/03/19",number:3},{date:"2020/03/20",number:2},{date:"2020/03/21",number:3},{date:"2020/03/22",number:9},{date:"2020/03/23",number:24},{date:"2020/03/24",number:0},{date:"2020/03/25",number:31},{date:"2020/03/26",number:43},{date:"2020/03/27",number:0},{date:"2020/03/28",number:22},{date:"2020/03/29",number:11},{date:"2020/03/30",number:4},{date:"2020/03/31",number:8},{date:"2020/04/01",number:7},{date:"2020/04/02",number:20},{date:"2020/04/03",number:9},{date:"2020/04/04",number:17},{date:"2020/04/05",number:14},{date:"2020/04/06",number:11},{date:"2020/04/07",number:0},{date:"2020/04/08",number:97},{date:"2020/04/09",number:33},{date:"2020/04/10",number:25},{date:"2020/04/11",number:6},{date:"2020/04/12",number:25},{date:"2020/04/13",number:22},{date:"2020/04/14",number:24},{date:"2020/04/15",number:30},{date:"2020/04/16",number:20},{date:"2020/04/17",number:52},{date:"2020/04/18",number:13},{date:"2020/04/19",number:13},{date:"2020/04/20",number:22},{date:"2020/04/21",number:32},{date:"2020/04/22",number:87},{date:"2020/04/23",number:49},{date:"2020/04/24",number:34},{date:"2020/04/25",number:6},{date:"2020/04/26",number:16},{date:"2020/04/27",number:39},{date:"2020/04/28",number:17},{date:"2020/04/29",number:37},{date:"2020/04/30",number:24},{date:"2020/05/01",number:26},{date:"2020/05/02",number:45},{date:"2020/05/03",number:25},{date:"2020/05/04",number:30}]},{province:"Limpopo",tested:0,positive:31,recoveries:27,deaths:2,daily_cases:[{date:"2020/03/05",number:0},{date:"2020/03/06",number:0},{date:"2020/03/07",number:0},{date:"2020/03/08",number:0},{date:"2020/03/09",number:0},{date:"2020/03/10",number:0},{date:"2020/03/11",number:0},{date:"2020/03/12",number:0},{date:"2020/03/13",number:0},{date:"2020/03/14",number:0},{date:"2020/03/15",number:0},{date:"2020/03/16",number:1},{date:"2020/03/17",number:0},{date:"2020/03/18",number:0},{date:"2020/03/19",number:0},{date:"2020/03/20",number:0},{date:"2020/03/21",number:0},{date:"2020/03/22",number:0},{date:"2020/03/23",number:3},{date:"2020/03/24",number:0},{date:"2020/03/25",number:0},{date:"2020/03/26",number:2},{date:"2020/03/27",number:0},{date:"2020/03/28",number:5},{date:"2020/03/29",number:1},{date:"2020/03/30",number:-1},{date:"2020/03/31",number:3},{date:"2020/04/01",number:0},{date:"2020/04/02",number:2},{date:"2020/04/03",number:0},{date:"2020/04/04",number:2},{date:"2020/04/05",number:1},{date:"2020/04/06",number:0},{date:"2020/04/07",number:0},{date:"2020/04/08",number:2},{date:"2020/04/09",number:1},{date:"2020/04/10",number:2},{date:"2020/04/11",number:-1},{date:"2020/04/12",number:0},{date:"2020/04/13",number:0},{date:"2020/04/14",number:1},{date:"2020/04/15",number:1},{date:"2020/04/16",number:1},{date:"2020/04/17",number:0},{date:"2020/04/18",number:0},{date:"2020/04/19",number:1},{date:"2020/04/20",number:0},{date:"2020/04/21",number:0},{date:"2020/04/22",number:0},{date:"2020/04/23",number:0},{date:"2020/04/24",number:2},{date:"2020/04/25",number:1},{date:"2020/04/26",number:1},{date:"2020/04/27",number:0},{date:"2020/04/28",number:0},{date:"2020/04/29",number:0},{date:"2020/04/30",number:1},{date:"2020/05/01",number:2},{date:"2020/05/02",number:2},{date:"2020/05/03",number:1},{date:"2020/05/04",number:2}]},{province:"Mpumalanga",tested:0,positive:24,recoveries:22,deaths:0,daily_cases:[{date:"2020/03/05",number:0},{date:"2020/03/06",number:0},{date:"2020/03/07",number:0},{date:"2020/03/08",number:0},{date:"2020/03/09",number:0},{date:"2020/03/10",number:0},{date:"2020/03/11",number:0},{date:"2020/03/12",number:1},{date:"2020/03/13",number:0},{date:"2020/03/14",number:0},{date:"2020/03/15",number:0},{date:"2020/03/16",number:1},{date:"2020/03/17",number:0},{date:"2020/03/18",number:2},{date:"2020/03/19",number:1},{date:"2020/03/20",number:0},{date:"2020/03/21",number:0},{date:"2020/03/22",number:1},{date:"2020/03/23",number:3},{date:"2020/03/24",number:0},{date:"2020/03/25",number:-1},{date:"2020/03/26",number:1},{date:"2020/03/27",number:0},{date:"2020/03/28",number:1},{date:"2020/03/29",number:1},{date:"2020/03/30",number:0},{date:"2020/03/31",number:1},{date:"2020/04/01",number:0},{date:"2020/04/02",number:1},{date:"2020/04/03",number:0},{date:"2020/04/04",number:5},{date:"2020/04/05",number:0},{date:"2020/04/06",number:0},{date:"2020/04/07",number:0},{date:"2020/04/08",number:3},{date:"2020/04/09",number:-1},{date:"2020/04/10",number:0},{date:"2020/04/11",number:0},{date:"2020/04/12",number:1},{date:"2020/04/13",number:1},{date:"2020/04/14",number:0},{date:"2020/04/15",number:0},{date:"2020/04/16",number:0},{date:"2020/04/17",number:1},{date:"2020/04/18",number:2},{date:"2020/04/19",number:-2},{date:"2020/04/20",number:0},{date:"2020/04/21",number:1},{date:"2020/04/22",number:-1},{date:"2020/04/23",number:0},{date:"2020/04/24",number:1},{date:"2020/04/25",number:-1},{date:"2020/04/26",number:0},{date:"2020/04/27",number:3},{date:"2020/04/28",number:-2},{date:"2020/04/29",number:7},{date:"2020/04/30",number:5},{date:"2020/05/01",number:-1},{date:"2020/05/02",number:5},{date:"2020/05/03",number:6},{date:"2020/05/04",number:7}]},{province:"North West",tested:0,positive:29,recoveries:20,deaths:0,daily_cases:[{date:"2020/03/05",number:0},{date:"2020/03/06",number:0},{date:"2020/03/07",number:0},{date:"2020/03/08",number:0},{date:"2020/03/09",number:0},{date:"2020/03/10",number:0},{date:"2020/03/11",number:0},{date:"2020/03/12",number:0},{date:"2020/03/13",number:0},{date:"2020/03/14",number:0},{date:"2020/03/15",number:0},{date:"2020/03/16",number:0},{date:"2020/03/17",number:0},{date:"2020/03/18",number:0},{date:"2020/03/19",number:0},{date:"2020/03/20",number:0},{date:"2020/03/21",number:0},{date:"2020/03/22",number:0},{date:"2020/03/23",number:4},{date:"2020/03/24",number:0},{date:"2020/03/25",number:1},{date:"2020/03/26",number:-1},{date:"2020/03/27",number:0},{date:"2020/03/28",number:2},{date:"2020/03/29",number:0},{date:"2020/03/30",number:2},{date:"2020/03/31",number:0},{date:"2020/04/01",number:1},{date:"2020/04/02",number:0},{date:"2020/04/03",number:0},{date:"2020/04/04",number:2},{date:"2020/04/05",number:0},{date:"2020/04/06",number:0},{date:"2020/04/07",number:0},{date:"2020/04/08",number:4},{date:"2020/04/09",number:0},{date:"2020/04/10",number:3},{date:"2020/04/11",number:1},{date:"2020/04/12",number:0},{date:"2020/04/13",number:3},{date:"2020/04/14",number:0},{date:"2020/04/15",number:1},{date:"2020/04/16",number:1},{date:"2020/04/17",number:0},{date:"2020/04/18",number:0},{date:"2020/04/19",number:0},{date:"2020/04/20",number:1},{date:"2020/04/21",number:-1},{date:"2020/04/22",number:0},{date:"2020/04/23",number:1},{date:"2020/04/24",number:0},{date:"2020/04/25",number:3},{date:"2020/04/26",number:0},{date:"2020/04/27",number:0},{date:"2020/04/28",number:1},{date:"2020/04/29",number:0},{date:"2020/04/30",number:2},{date:"2020/05/01",number:4},{date:"2020/05/02",number:0},{date:"2020/05/03",number:1},{date:"2020/05/04",number:-1}]},{province:"Northern Cape",tested:0,positive:17,recoveries:13,deaths:0,daily_cases:[{date:"2020/03/05",number:0},{date:"2020/03/06",number:0},{date:"2020/03/07",number:0},{date:"2020/03/08",number:0},{date:"2020/03/09",number:0},{date:"2020/03/10",number:0},{date:"2020/03/11",number:0},{date:"2020/03/12",number:0},{date:"2020/03/13",number:0},{date:"2020/03/14",number:0},{date:"2020/03/15",number:0},{date:"2020/03/16",number:0},{date:"2020/03/17",number:0},{date:"2020/03/18",number:0},{date:"2020/03/19",number:0},{date:"2020/03/20",number:0},{date:"2020/03/21",number:0},{date:"2020/03/22",number:0},{date:"2020/03/23",number:2},{date:"2020/03/24",number:0},{date:"2020/03/25",number:0},{date:"2020/03/26",number:-1},{date:"2020/03/27",number:0},{date:"2020/03/28",number:4},{date:"2020/03/29",number:1},{date:"2020/03/30",number:-3},{date:"2020/03/31",number:3},{date:"2020/04/01",number:1},{date:"2020/04/02",number:0},{date:"2020/04/03",number:0},{date:"2020/04/04",number:0},{date:"2020/04/05",number:1},{date:"2020/04/06",number:0},{date:"2020/04/07",number:0},{date:"2020/04/08",number:5},{date:"2020/04/09",number:2},{date:"2020/04/10",number:0},{date:"2020/04/11",number:1},{date:"2020/04/12",number:0},{date:"2020/04/13",number:0},{date:"2020/04/14",number:0},{date:"2020/04/15",number:0},{date:"2020/04/16",number:0},{date:"2020/04/17",number:0},{date:"2020/04/18",number:0},{date:"2020/04/19",number:0},{date:"2020/04/20",number:2},{date:"2020/04/21",number:-2},{date:"2020/04/22",number:0},{date:"2020/04/23",number:0},{date:"2020/04/24",number:0},{date:"2020/04/25",number:0},{date:"2020/04/26",number:1},{date:"2020/04/27",number:0},{date:"2020/04/28",number:0},{date:"2020/04/29",number:0},{date:"2020/04/30",number:0},{date:"2020/05/01",number:1},{date:"2020/05/02",number:5},{date:"2020/05/03",number:1},{date:"2020/05/04",number:1}]},{province:"Western Cape",tested:0,positive:1870,recoveries:833,deaths:64,daily_cases:[{date:"2020/03/05",number:0},{date:"2020/03/06",number:0},{date:"2020/03/07",number:0},{date:"2020/03/08",number:0},{date:"2020/03/09",number:0},{date:"2020/03/10",number:0},{date:"2020/03/11",number:1},{date:"2020/03/12",number:0},{date:"2020/03/13",number:2},{date:"2020/03/14",number:6},{date:"2020/03/15",number:5},{date:"2020/03/16",number:2},{date:"2020/03/17",number:5},{date:"2020/03/18",number:10},{date:"2020/03/19",number:15},{date:"2020/03/20",number:10},{date:"2020/03/21",number:18},{date:"2020/03/22",number:14},{date:"2020/03/23",number:12},{date:"2020/03/24",number:0},{date:"2020/03/25",number:83},{date:"2020/03/26",number:46},{date:"2020/03/27",number:0},{date:"2020/03/28",number:42},{date:"2020/03/29",number:39},{date:"2020/03/30",number:14},{date:"2020/03/31",number:1},{date:"2020/04/01",number:1},{date:"2020/04/02",number:27},{date:"2020/04/03",number:21},{date:"2020/04/04",number:59},{date:"2020/04/05",number:21},{date:"2020/04/06",number:8},{date:"2020/04/07",number:0},{date:"2020/04/08",number:33},{date:"2020/04/09",number:20},{date:"2020/04/10",number:26},{date:"2020/04/11",number:5},{date:"2020/04/12",number:41},{date:"2020/04/13",number:30},{date:"2020/04/14",number:26},{date:"2020/04/15",number:14},{date:"2020/04/16",number:18},{date:"2020/04/17",number:42},{date:"2020/04/18",number:119},{date:"2020/04/19",number:32},{date:"2020/04/20",number:72},{date:"2020/04/21",number:70},{date:"2020/04/22",number:69},{date:"2020/04/23",number:200},{date:"2020/04/24",number:134},{date:"2020/04/25",number:101},{date:"2020/04/26",number:94},{date:"2020/04/27",number:129},{date:"2020/04/28",number:133},{date:"2020/04/29",number:265},{date:"2020/04/30",number:207},{date:"2020/05/01",number:165},{date:"2020/05/02",number:193},{date:"2020/05/03",number:344},{date:"2020/05/04",number:318}]},{province:"Unallocated",tested:0,positive:0,recoveries:0,deaths:0,daily_cases:[{number:0,date:"26/04/2020"},{number:0,date:"25/04/2020"},{number:0,date:"25/04/2020"},{number:0,date:"23/04/2020"},{number:0,date:"22/04/2020"},{number:0,date:"21/04/2020"},{number:0,date:"20/04/2020"},{number:0,date:"19/04/2020"},{number:0,date:"18/04/2020"},{number:0,date:"17/04/2020"},{number:0,date:"16/04/2020"},{date:"2020/04/27",number:0},{date:"2020/04/28",number:0},{date:"2020/04/29",number:0},{date:"2020/04/30",number:0},{date:"2020/05/01",number:0},{date:"2020/05/02",number:0},{date:"2020/05/03",number:0},{date:"2020/05/04",number:0}]}],w=(a(83),a(28)),F=a.n(w);function j(){var e=S.map((function(e){var t=e.daily_cases.reduce((function(e,t){return e+t.number}),0);return{province:e.province,positive:t,recoveries:e.recoveries,deaths:e.deaths}})),t=function(t){return e.reduce((function(e,a){return e+a[t]}),0)};return r.a.createElement("section",{className:"Dashboard"},r.a.createElement("img",{src:F.a,className:"logo",alt:"logo"}),r.a.createElement("div",{className:"overview"},r.a.createElement(s,{covidData:S}),r.a.createElement(D,{covidData:S,totalCovid:t})),r.a.createElement("div",{className:"breakdown"},r.a.createElement(W,{covidData:S,totalCovid:t}),r.a.createElement(M,{covidData:S,totalCovid:t})))}var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(84);m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.e1bc27f6.chunk.js.map