(this["webpackJsonpops-deckgl-carto"]=this["webpackJsonpops-deckgl-carto"]||[]).push([[0],{174:function(e,t){},349:function(e,t,n){},351:function(e,t){},355:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(46),a=n.n(i),s=n(74),r=n(172),o=n.n(r),l=n(212),d=n(97),b=function(e){var t=Object(c.useState)("idle"),n=Object(d.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)([]),r=Object(d.a)(s,2),b=r[0],u=r[1];return Object(c.useEffect)((function(){e&&function(){var t=Object(l.a)(o.a.mark((function t(){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a("fetching"),t.next=3,fetch("https://gsc-admin.carto.com/api/v2/sql?q=".concat(encodeURIComponent(e)));case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,u(c.rows.sort((function(e,t){return e.district>t.district?1:-1}))),a("fetched");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),{status:i,data:b}},u=n(123),j=n(19),g=function(e){var t=e.distance,n=function(e){return'\n    select a.district,(a.total*100/gt.grand_total) as percentage\n    from \n    (select district, sum(dwelling) total  from "gsc-admin".ops_access  where distance <= '.concat(e,'  group by district) a join\n    (select district,sum(dwelling) grand_total from "gsc-admin".ops_access  group by district) gt  on a.district = gt.district\n   ')}(t),c=b(n),i=(c.status,c.data),a={labels:i.map((function(e){return e.district})),datasets:[{label:"%",data:i.map((function(e){return e.percentage})),backgroundColor:["rgba(255, 99, 132, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 205, 86, 0.8)","rgba(75, 192, 192, 0.8)","rgba(54, 162, 235, 0.8)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)"],borderWidth:2}]},s={indexAxis:"y",maintainAspectRatio:!1,elements:{bar:{borderWidth:2}},responsive:!0,plugins:{legend:{position:"right",display:!1},title:{display:!1,text:"".concat(t," metres access to open space")}}};return Object(j.jsx)("div",{style:{height:"300px"},children:Object(j.jsx)(u.a,{data:a,options:s})})},h=(n(349),n(389)),O=n(88),p=n(400),m=n(391),f=(n(398),Object(h.a)((function(e){return{root:{width:280+2*e.spacing(3)},margin:{height:e.spacing(3)}}})));var x=Object(O.a)({root:{color:"#52af77",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(p.a);function v(){var e=f(),t=Object(s.c)((function(e){return e.distance})),n=Object(s.b)();return Object(j.jsxs)("div",{className:e.root,children:[Object(j.jsx)(m.a,{gutterBottom:!0,children:"Select distance"}),Object(j.jsx)(x,{valueLabelDisplay:"auto","aria-label":"distance slider",defaultValue:t,min:200,max:1e3,step:200,onChange:function(e,t){return function(e,t){return n({type:"new value",distance:t})}(0,t)}})]})}var w=function(){var e=Object(s.c)((function(e){return e.distance}));Object(s.b)();return Object(j.jsxs)("div",{className:"layer-selector",style:{fontFamily:"Roboto, sans-serif"},children:[Object(j.jsx)(v,{}),Object(j.jsxs)("b",{children:["Dwellings(%) with ",e," metres of access to open space"]}),Object(j.jsx)(g,{distance:e}),Object(j.jsx)("div",{children:Object(j.jsx)("span",{style:{fontSize:"8px"},children:"Source: GSC Analysis 2021, DPIE, ABS 2016"})})]})},y=n(112),_=n(395),C=n(394),N=n(224),k=n(396),R={latitude:-33.842104,longitude:150.998914,zoom:10};Object(y.c)({username:"gsc-admin",apiKey:"fFbU97TNhKdhIO4yYyFjdA"});var S={COLOR_YES:[0,0,0,0],COLOR_NO:[222,45,38],COLOR_GREEN:[16,196,118]},L=function(e){var t=e.distance,n="\n  \n    select m.cartodb_id,m.mb_code16,m.the_geom_webmercator, a.dwelling,\n    case \n    when a.distance <".concat(t," then 'Yes'\n    else 'No'\n    end has_access\n    from \"gsc-admin\".meshblocks_mua m join \"gsc-admin\".ops_access a on a.mb_code16= m.mb_code16 where a.dwelling>0\n  \n    "),c=new _.a({id:"meshblock",data:n,getFillColor:function(e){return"Yes"===e.properties.has_access?S.COLOR_YES:S.COLOR_NO},getLineColor:[0,0,0,0],lineWidthMinPixels:0,pickable:!0}),i=new _.a({id:"district",data:'select the_geom_webmercator, district from "gsc-admin".districtboundary ',getFillColor:[0,0,0,0],getLineColor:[99,99,99,255],lineWidthMinPixels:1.2,pickable:!1}),a=new _.a({id:"openspace",data:'select the_geom_webmercator from "gsc-admin".openspace_bis ',getFillColor:S.COLOR_GREEN,getLineColor:[0,0,0,0],lineWidthMinPixels:0,pickable:!1});return Object(j.jsx)("div",{children:Object(j.jsx)(k.a,{width:"100%",height:"100%",initialViewState:R,getTooltip:function(e){var t=e.object;if(!t)return!1;var n=t.properties.dwelling;return"Dwelling: ".concat(n)},controller:!0,layers:[c,a,c,i],children:Object(j.jsx)(N.a,{reuseMaps:!0,mapStyle:C.a.POSITRON,mapboxApiAccessToken:"pk.eyJ1IjoiYnNuYXlhbiIsImEiOiJja3Ewczd3MW4wN3Z3MnVvNDNsenlzNnFsIn0.f8nk8yrxIeCKOlzIy1b-Pg",preventStyleDiffing:!0})})})},E=(n(355),function(e){var t=e.distance;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{id:"legend",style:{fontFamily:"Roboto, sans-serif"},children:[Object(j.jsx)("div",{className:"legend-content",children:Object(j.jsxs)("li",{children:[" ",Object(j.jsx)("div",{className:"circle",style:{backgroundColor:"rgba(".concat(S.COLOR_GREEN.join(),")")}}),"Open Space"]})}),Object(j.jsxs)("b",{children:["has open space within ",t," metres?"]}),Object(j.jsxs)("div",{className:"legend-content",children:[Object(j.jsxs)("li",{children:[" ",Object(j.jsx)("div",{className:"circle",style:{backgroundColor:"rgba(".concat(S.COLOR_YES.join(),")")}}),"Yes"]}),Object(j.jsxs)("li",{children:[" ",Object(j.jsx)("div",{className:"circle",style:{backgroundColor:"rgba(".concat(S.COLOR_NO.join(),")")}}),"No"]})]})]})})});var I=function(){var e=Object(s.c)((function(e){return e.distance}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(L,{distance:e}),Object(j.jsx)(w,{}),Object(j.jsx)(E,{distance:e})]})},F=(n(356),n(228)),Y={distance:400};var A=Object(F.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;return"new value"===t.type?{distance:t.distance}:e}));a.a.render(Object(j.jsx)(s.a,{store:A,children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[357,1,2]]]);
//# sourceMappingURL=main.df6c0470.chunk.js.map