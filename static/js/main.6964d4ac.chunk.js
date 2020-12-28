(this["webpackJsonppixabay-image-tailwind"]=this["webpackJsonppixabay-image-tailwind"]||[]).push([[0],{12:function(e,t,a){e.exports={navbar:"Navbar_navbar__2Ih6n",navbar_logo:"Navbar_navbar_logo__HAZQ7",nav_menu:"Navbar_nav_menu__2Y02G",nav_item:"Navbar_nav_item__35qBB",nav_links:"Navbar_nav_links__7ByGt",menu_icon:"Navbar_menu_icon__1oMR0",Nav_items:"Navbar_Nav_items__YNelL",active:"Navbar_active__2rmRj"}},139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a(26),s=a.n(r),o=a(9),i=a(8),l=a(7),j=a.n(l),d=a(10),m=a(4),g=a(69),u=a.n(g).a.create({baseURL:"https://pixabay.com/api",params:{key:"19428014-2af44ea97a4825e5ee6c2972a",image_type:"photo",pretty:!0}}),x=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"20",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"all";return u({method:"GET",url:"/",params:{q:e,page:t,per_page:a,orientation:c,safesearch:!0}})},h=function(e,t){return u({method:"GET",url:"/",params:{page:e,orientation:t,safesearch:!0}})},p=function(e,t){return u({method:"GET",url:"/",params:{page:e,category:t,safesearch:!0}})},b=function(e,t){return u({method:"GET",url:"/",params:{page:e,colors:t,safesearch:!0}})},O=function(e,t){return u({method:"GET",url:"/",params:{page:e,image_type:t,safesearch:!0}})},f=function(e){return u({method:"GET",url:"/",params:{id:e}})},v=Object(n.createContext)(),y=function(e){var t=e.reducer,a=e.initialState,r=e.children;return Object(c.jsx)(v.Provider,{value:Object(n.useReducer)(t,a),children:r})},w=function(){return Object(n.useContext)(v)},N="SET_IMAGES",Y="SET_SEARCHED_IMAGES",S="RESET_SEARCHED_IMAGES",C="SET_iMAGES_BY_ORIENTATION",I="RESET_IMAGES_BY_ORIENTATION",B="SET_IMAGES_BY_CATEGORY",G="RESET_IMAGES_BY_CATEGORY",_="SET_IMAGES_BY_COLORS",R="RESET_IMAGES_BY_COLORS",M="RESET_IMAGES_BY_TYPE",k="SET_IMAGES_BY_TYPE",A="SET_ORIENTATION_TYPE",T="RESET_ORIENTATION_TYPE",D=a(157),P=a(155);function E(e){var t=e.noOfBoxes;return Object(c.jsx)(c.Fragment,{children:Array.from(new Array(t)).map((function(e,t){return Object(c.jsxs)(D.a,{width:300,my:5,className:"mx-auto max-w-full",children:[Object(c.jsx)(P.a,{variant:"rect",width:300,height:200}),Object(c.jsx)(P.a,{}),Object(c.jsx)(P.a,{width:"60%"})]},t)}))})}E.defaultProps={noOfBoxes:8};var H=E,q=a(70),F=a.n(q),V=a(5),L=a(49),U=a.n(L),K=a(43),X=a.n(K),Z=a(71),z=function(e){var t=e.images,a=e.colsXs,n=void 0===a?1:a,r=e.colsSm,s=void 0===r?2:r,o=e.colsMd,l=void 0===o?4:o,j=Object(i.f)(),d={350:n,750:s,900:l};return Object(c.jsxs)("div",{children:[Object(c.jsx)(L.ResponsiveMasonry,{columnsCountBreakPoints:Object(V.a)({},d),children:Object(c.jsx)(U.a,{gutter:"20px",children:t.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("figure",{className:"".concat(X.a.image_container," "),children:[Object(c.jsx)("img",{onClick:function(){return j.push("/images/".concat(e.id))},src:e.largeImageURL,style:{width:"100%",display:"block"},alt:"",className:"object-scale-down md:rounded-lg cursor-pointer  ".concat(X.a.img," ")},e.id),Object(c.jsxs)("div",{className:"text-lg rounded-b-lg w-full   ".concat(X.a.image_info," flex justify-evenly"),children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"far fa-thumbs-up mr-1"}),Object(c.jsx)("span",{children:e.likes})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"far fa-heart mr-1"}),Object(c.jsx)("span",{children:e.favorites})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"fas fa-download mr-1"}),Object(c.jsx)("span",{children:e.downloads})]})]})]})},e.id)}))})}),Object(c.jsx)("button",{onClick:function(){Z.animateScroll.scrollToTop()},className:"outline-none focus:outline-none fixed bottom-6 right-1  rounded-full h-8 w-8 p-2 flex justify-center items-center",style:{backgroundColor:"#ff7db8"},children:Object(c.jsx)("i",{className:"fas fa-arrow-up",style:{color:"white"}})})]})},W=a(72),Q=function(e){var t=e.images,a=e.isLoading,n=e.fetchData;return Object(c.jsx)(c.Fragment,{children:t.length>0?Object(c.jsx)(W.a,{className:"px-5 md:px-10 py-6",dataLength:t.length,next:n,hasMore:!0,endMessage:"You have seen all the images",loader:Object(c.jsxs)("div",{className:"flex  flex-col justify-center items-center  my-5",children:[Object(c.jsx)(F.a,{type:"Circles",color:"#6C63FF",height:80,width:80}),0!==t.length||a?Object(c.jsx)("h1",{className:"text-purple-800 text-2xl mt-2",children:"Loading.."}):Object(c.jsx)("h1",{className:"text-purple-800 text-3xl mt-5",children:"Sorry image not found with this term"})]}),children:a?Object(c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-7",children:Object(c.jsx)(H,{noOfBoxes:8})}):Object(c.jsx)(z,{images:t})}):Object(c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-7",children:Object(c.jsx)(H,{noOfBoxes:8})})})},J=a(52),$=a.n(J),ee=a(53),te=a.n(ee),ae=function(e){var t=e.width,a=void 0===t?"100%":t,n=e.color,r=void 0===n?"white":n,s=e.textColor,o=void 0===s?"gray":s,l=e.gradient,j=Object(i.f)();return Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("button",{className:"bg-".concat(r," ").concat(l?te.a.discoverBtnGradient:te.a.discoverBtnWhite," px-16 py-3 ").concat(a,"  rounded-full outline-none focus:outline-none border-none font-bold transition-all duration-500 \n        transform hover:-translate-y-1 active:translate-y-1 \n         ").concat(l?"bg-gradient-to-r from-gradientAccentPrimary to-gradientAccentSecondary":""," \n        "),onClick:function(){return j.push("/images/discover/all")},children:Object(c.jsx)("span",{className:"md:text-lg text-sm text-".concat(o," tracking-wider"),children:"Discover"})})})},ce=function(){return Object(c.jsx)("section",{className:"h-vh-70  ".concat($.a.hero_image),children:Object(c.jsxs)("div",{className:"".concat($.a.hero_content," text-white"),children:[Object(c.jsx)("h1",{className:"text-center text-4xl md:text-5xl  mb-4 font-semibold",children:"Picanjli"}),Object(c.jsx)("h1",{className:" text-3xl text-center font-regular mb-4",children:"We offers stunning high quality images for free"}),Object(c.jsx)("p",{className:"md:text-sm text-xs text-center mb-10",children:"Over 1.5 millions+ high quality stock images shared by our talented community."}),Object(c.jsx)(ae,{gradient:!1,textColor:"gray-800"})]})})},ne=function(){var e=w(),t=Object(m.a)(e,2),a=t[0].images,r=t[1],s=Object(n.useState)(!0),o=Object(m.a)(s,2),i=o[0],l=o[1],g=Object(n.useState)(1),u=Object(m.a)(g,2),h=u[0],p=u[1];Object(n.useEffect)((function(){r({type:T}),b()}),[]);var b=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(h+1);case 2:return e.prev=2,e.next=5,x("",h);case 5:t=e.sent,r({type:N,payload:t.data.hits}),l(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ce,{}),Object(c.jsx)(Q,{images:a,isLoading:i,fetchData:b})]})},re=a(42),se=a.n(re),oe=a(73),ie=a.n(oe),le=function(e){var t=e.color,a=e.text,n=e.width,r=e.textColor,s=e.downloadImage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("button",{className:"bg-".concat(t," bg-gradient-to-r ").concat(ie.a.downloadBtn," from-gradientAccentPrimary to-gradientAccentSecondary  px-10 py-3 ").concat(n," text-").concat(r," rounded-full focus:outline-none border-none font-bold transition-all duration-500 \n        transform hover:-translate-y-1 active:translate-y-1\n        \n        "),onClick:function(){return s()},children:[Object(c.jsx)(se.a,{}),Object(c.jsx)("span",{className:"text-sm",children:a})]})})};function je(e){return fetch(e).then((function(e){return e.blob()})).then((function(e){return URL.createObjectURL(e)}))}var de=function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.createElement("a"),e.next=3,je(t);case 3:a.href=e.sent,a.download="Picanjli.jpg",document.body.appendChild(a),a.click(),document.body.removeChild(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=function(e){var t=e.text;return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{className:"text-left md:text-2xl text-xl mb-10 text-gray-900  font-medium md:mb-12 ",children:t})})},ge=function(e){var t=e.colSpan,a=e.relatedImages;return Object(c.jsxs)("div",{className:"w-full h-full overflow-hidden col-span-".concat(t," mt-12"),children:[Object(c.jsx)(me,{text:"Related Images"}),Object(c.jsx)(z,{images:a,colsXs:2,colsMd:5})]})},ue=a(159),xe=a(74),he=a.n(xe),pe=a(75),be=a.n(pe),Oe=a(76),fe=a.n(Oe),ve=function(e){var t=e.Icon,a=e.heading,n=e.value,r=e.iconSize;return Object(c.jsxs)("div",{className:"pl-4 pt-5  text-white ",children:[Object(c.jsx)(t,{style:{fontSize:"".concat(r)}}),Object(c.jsxs)("strong",{className:"mr-1 text-sm tracking-wide",children:[a,":"]}),Object(c.jsx)("strong",{className:"text-sm",children:n})]})},ye=function(e){var t=e.imageDetail,a=t.userImageURL,n=t.downloads,r=t.likes,s=t.views,o=t.favorites,i=t.user;return Object(c.jsxs)("div",{className:"md:grid hidden grid-cols-2   justify-center rounded-3xl shadow-lg bg-indigo-400 bg-gradient-to-r from-gradientPrimary to-gradientSecondary h-1/2 my-12 pb-12 ",children:[Object(c.jsx)("div",{style:{width:"100px",height:"110px"},className:"border-b-4 h-10/12  rounded-full  col-span-2  justify-self-center transform -translate-y-14  border-white uppercase text-white font-bold",children:Object(c.jsx)(ue.a,{src:a,alt:i,style:{width:"100px",height:"100px"},children:i.charAt(0)})}),Object(c.jsx)("h1",{className:"col-span-2 -mt-10 justify-self-center  text-white uppercase text-2xl font-bold tracking-wide font-mono",children:i}),Object(c.jsx)(ve,{iconSize:"15px",Icon:se.a,heading:"Downloads",value:n}),Object(c.jsx)(ve,{iconSize:"15px",Icon:he.a,heading:"Likes",value:r}),Object(c.jsx)(ve,{iconSize:"15px",Icon:be.a,heading:"Views",value:s}),Object(c.jsx)(ve,{iconSize:"15px",Icon:fe.a,heading:"Favorites",value:o})]})},we=function(){var e=Object(i.g)().imageId,t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)([]),l=Object(m.a)(o,2),g=l[0],u=l[1];return Object(n.useEffect)((function(){Object(d.a)(j.a.mark((function t(){var a,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return window.scrollTo(0,0),t.next=3,f(e);case 3:return a=t.sent,t.next=6,x("",1,15,"horizontal");case 6:c=t.sent,s(a.data.hits),u(c.data.hits);case 9:case"end":return t.stop()}}),t)})))()}),[e]),Object(c.jsxs)("div",{className:"grid grid-cols-1  md:grid-cols-4 py-12 md:gap-5 px-5 md:px-10  bg-gray-50",children:[Object(c.jsx)("div",{className:"col-span-4 md:col-span-3 md:relative md:pb-8/12  bg-gray-200 rounded-3xl ",children:r.map((function(e){return Object(c.jsx)("img",{className:"object-scale-down md:absolute w-full h-full md:rounded-3xl",src:e.largeImageURL?e.largeImageURL:e.user,alt:e.user})}))}),null===r||void 0===r?void 0:r.map((function(e){return Object(c.jsxs)("div",{className:"w-full col-span-4 md:col-span-1 ",children:[Object(c.jsx)(ye,{imageDetail:e}),Object(c.jsx)(le,{text:"Download Free",color:"accent",width:"md:w-full w-4/5 mt-10 md:mt-4 ",textColor:"white",borderRadius:"100px",downloadImage:function(){return de(e.largeImageURL)}})]})})),Object(c.jsx)(ge,{colSpan:"4",relatedImages:g})]})},Ne=a(12),Ye=a.n(Ne);var Se=a(77),Ce=a.n(Se),Ie=function(e){e.searchText;var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],s=a[1],o=Object(i.f)();return Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),o.push("/images/search/".concat(r.trim()))},children:Object(c.jsxs)("div",{className:"flex items-center  ",children:[Object(c.jsx)("input",{onChange:function(e){return s(e.target.value)},type:"text",className:"w-1/2  md:w-full ml-20 md:-ml-20 mt-1 md:-mt-1 md:h-10 h-9 text-sm md:text-lg text-gray-700 pl-4 md:pl-5 rounded-l-3xl border-none  focus:outline-none ",placeholder:"Search..."}),Object(c.jsx)("button",{type:"submit",className:"md:h-10 bg-white h-9 mt-1 md:-mt-1 px-2 md:px-5 border-none transition-all duration-500  rounded-r-3xl outline-none focus:outline-none hover:text-white hover:bg-secondary",children:Object(c.jsx)(Ce.a,{})})]})})},Be=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!0),i=Object(m.a)(s,2),l=i[0],j=i[1],d=Object(n.useState)(!1),g=Object(m.a)(d,2),u=g[0],x=g[1],h=function(){return x(!1)},p=function(e,t,a){var c;return function(){var n=this,r=arguments,s=function(){c=null,a||e.apply(n,r)},o=a&&!c;clearTimeout(c),c=setTimeout(s,t),o&&e.apply(n,r)}}((function(){var e=window.pageYOffset;j(a>e&&a-e>70||e<10),r(e)}),100);return Object(n.useEffect)((function(){return window.addEventListener("scroll",p),function(){return window.removeEventListener("scroll",p)}}),[l,a,p]),Object(c.jsxs)("nav",{className:"bg-purple-500 shadow-xl h-20  bg-gradient-to-r  from-gradientPrimary to-gradientSecondary w-full ".concat(Ye.a.navbar," "),style:{top:l?"0":"-80px"},children:[Object(c.jsx)(o.b,{to:"/",className:Ye.a.navbar_logo,children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABgCSURBVHhe7Z0L2K7VmMdTVEQSmQ7ogIRCZprOqCTCOAxS1IgckkmMcpoKkcbpKoU0zodrlGNHIoVqUA2V0yiHSFPohOz2/vZXze+/3vtd+13fWs/7ve932Dv7+/+u676ed933vdbzPOt5n9Na91rPKsYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHG/I1w++2374Icd8cdd5zC8kRkhzAZs3DhhFj/tttu+wbLAk6Q25DXhJsxCw9OgAcgv45zoiJOku3C3ZiFA3/8NTgHLumdCt3gd2pkMbOF+lwd2WJiYmJnKvaf+P1clk9BtkXWCzdzJ4DjcbROgEHQ3Ro/M9Iha0U2My7U4U5U4LHI95DFvWptg/06nnc/zfLpJFeLIsxyhvrfnOMw0TsqPUh/B/3dEb2oF6DzY9Y4REUeilwRdTg25P0Fi2dGkWY5Qt1/rHcUepCeRB4Wtu1DnUG3d8pohkNdrUpl7Y9c3au62UNZn0V8C19O3HrrrZtMvXtQ//k9g98PCPUgLwuz6YKKuz9SNQfOBZR7PuKTZDnAyfH+qPYMdf+MMOs4rxfqDLoDw2xaUEE7Iv8X9dUJPr9HLkPOQ/ROciVyW5iHgt+nYnVmnqCO9Wh8Y1R5gvSfkTXCRT4bhymDbp8wm6lMTEw8ngq6JeqqxSXYX45sGlkK0K+NPAM5N/w7wedpkc3MA9TvC6OqM+hODnNiyZIljwpTBp89w2wGoWK2Q/4U9VTArfqKpUuXPilcR2JycvIgyuu8o2C7KFzNPED9fj2qOoNu/zAnOKZqni/gpNkqzKYP9aIQhN/3qqiESv0YMqN3BvK9Noppgj21pvBTDQIHsg2Xh34Rose2Z6WCFjjUwwORTyE3Rf1ch3ycnw8KlwJs90KWyHcKhT8+xfEhrab7uyKb8PszHI90wWR5LemTkA0j68KB/b8LO36WKmIqVMy7wq0A05rkWTuSneC3GmX8LBXWgDIOlh8+Hw5VBT7PT4UtUKiCzaif5sUL/W9Y3DNcM9TZc3oey0D3yzBnUH+iZ81csnjx4ofje0OkC9CrqX/NyL4wYKdf1dv9EvQnhEsG3aM5KN8JF/n8ltv07mFugs9h4V6B7aPINpFsgv0bUdSChP3/TFRFE+zVXRad7i4FKifMGXS/CnOC9PHIlyPZhOO9R2Rf+WF/70OFXN/b9WWg+y6L1cMtgW7d1pUM/U/DpQkv/o8L1wrynoY0T9A+2C+MohYk7P+VURVNsL8gXDOtPOj+NcwJ0huFKYNuT47xdC2YC6fDlwppxegsYlE926J/Sc+jBP1fwqUJ9i3DtQLb15HnRbIJB+zDUdSChPo5P6qiCfZHhmsC1fo9Swl+24dLgvSBYUqQ1nufmoZ/EKoKbKLZgrnSwY5ugOhkKOAP+ZZwKcC3um0L9FeHSxPuIP8Yri00YGc95I+RLmBb1G6/eRS1IGH/Xx/V0eKUcMvg/89hy6BbyuIe4ZJAV7RykT499J2PxByPT6TMC4HJycl/j/3OUDlqHWm2WKH/n3ArQP/1cGmCfc9wrcD27vBR5+SPQp0gfSGydSpkAUNVqKHjrdRFvpjx+xbkvUju9OuD7p3hlkH3szAnSCtSoghBgefKxnI15BjsORiV37pQ6WnjbqmAlR12VC1Xv0x7PwC6t4ZLAaa7DlbYIOjfG25NsB8RrhXYnhNuCVT3RvcI5O9CZQLqZA1ELUwPp56K98NBsFctkujS3aEPF8dDw5TAfgNSnGyo1VKpdW2BLIwTow87vpsqZhCuUhPoNwqXgqioJtiKzqepYP92uBagVzv9fcLNzBHU6zW9Gl4GumPDnC6OHOv/7Vl6YK9aLBc0VFDV70AlnRXmCmydL9K8Y2wbbhWyhVsFZX453MwcQZ2uG9VbgD63YPG7uDiSFo8I850bNvTByK7IuqGaFyj/51E/GXSdUZzY3h5uBeg1jrnrnUWPBN8P1wL0Yptwle/uiELhFfioQVaPDdNQKGo15eWEfw/LMyL/J9G/CBnrsYB8W/LocTjLs5AfIhchTw7zSOCvd6kPIV9Dvqp0mArQq2HidciZ4Xf0zTff3Hk3ZV/uh4+27VTkm4j6K6qOWnTNBhH0TwkX+ZwR6gTp4vFL5aJ+i/wQ7ceRpO8a5hULG3N42mrgoF9F+kvIEUuXLlUAYPPxZ1woZ4NYRQH6B4ZLBbZTw60AfdU7KzDdDdunel412HKnFb+3R9TKkmHfLw1zJ+RRnXQO4sJ2OfKAcO8EH73zNEP70f+ExfosHy3hd+cfBfuLkdtTxoDke8KcQLUaJ+Gb0VcBoejODbcCTHpJv6zntQz8UxTCIOj2CXMB+tQSyM8t+D11Gx+XMgekPx+mDLqqr2WFwIZ8MbapCfY/IN9A/gPZa/HixXqBWjWyjwT5qjAEDsCvw9yEPNULvUBfXH0Euk2Rb4ZLBbarWKwT7vI/uWdZBrqfhLkCs+4aH+x5Dge//2Zxl8hagf1gpBWz1ARf1cO9I3sG/VpIq8P1oHDp+xRX76lgr8byo96pZ614Q7hkOPm6GkRSfVN+0StP+oKUMSD9EKQ4gYIXhcuKhW0ruv5HgTxq8rsAOQE5ANkaqZr/+mCrOgc5QYr2dFSrL1myRFfNFyDvQppRuejfEf5qFdPjxYmUNbX5MIP9j0ju2EKlq2MVQYxP830Ik4Ia/6vnNRrcfavHJNTa3mow0SiQb+coJtOKihX4Plp2fq7OflbRtVPBv3oXQPfKMBegrxpH0FUXDnQ6dqo3tYBN9rQ9SO8aWROkXx2mAvS7hMuKg+1Q2Ec6e1mcwdXgeSyPRs5GrpN+VPQnJY8GMykS92CFe7BMz6wsW7fQz7K+Q8mnCM7LlT9MQyGfesLPwn/a7cPvaqTo1yC9XZgLKK8ZJIn/28KlAtsvkGo70FVloXtPmCuw3cj69R7UjElC3/oTHx/mDDqF5aS7O+V9qKcdDnk2SAUOoLoIcwG+VUwUuurYkv8m2Vh+JVQJfM9OmQZAd3qYC9Cv+Flq2I4n9DYnbdChoc6gU8/30/gj62XtC0jzsWcY5Pk5kkKmlyes81yk6ttA96ZwKUBfTRyAbkukeFcRHHh1Yj1VPiT1Mlv4kP5YKiAgvVeYKvRHxn6v8HtHqDPodAWuolnRF82mAl1qpePnc3ua4eCvaXiqx2V0pySHKeBfRRigq8JS2CdNFpf/WwI/XYgfE9kSpLvu5kMjJZYbbEiOzef3bqEeCq7rIE/A/xB2Tlc9vZiOdPVfHrAtuqKrRan5HoD9S8mxZotwybB/XQ0FzwuXdJBJFx2a5Mt3EJLN4EyBX+rV74Pf2WHK4PPzMGfw09iL6hGUC9lh6NdFmmE0U8Hvh1FkAfqLwiWDTidq1VmIvoqjQqf/RPGST7q4aAh0jwhzAfrTwmXFoj94bJM2aqRmXvw0Y95jWP4L8j7kHMoZ6YAMQr7+I5neIc4J9YyhHB0UDc29e2xqE9ZVTYVJnj+zKK6kpDWAp3h+FuT/frgkUP19z7IM8u0XZtXX+0JdQDk6+fI6+a13lGpMBLrPh0sG3Q5hnspOlHtC/E6QVh2/NZIF2D4dRRbg33psvCrMBeh/HC4ZdMXJS1q95tUjE7quFrAjwmXFwoaknaOiunZ+Q2QP5PWI+gx+hIx1t8C/awhs7jPgt66yJ7EdGowzEvhfg+ix79+Qh0ZRQyFbfucaBNV54ZJBd3CYC9C/NFwSpPcOU4L09Ug6SUlqfTr5CtDdqulxUgEBuk3DXIC++rOgflnPugz8RDFhG2nVkfo/HhyqAvSvjiIz6NSX1Kqj5hgZ1tc5924f7mxFnfUh77vDpYB1rfjxH2yEwozTszPLr4S6AH0zZKML/DWjxbdYvh9R69Y2SBV6jm4iVlGBbcNwq8CmF081M1cj2kaB/DumgqaAvnjUEeiaj2Loi5MRle406RGK5V+WLl2a3k0E6SK8uw/6HIbRB10zckCtVeGSwbf1rnINf7iiIYC8T5f/xMTEzqEqIE81oyHqzXrWEnyboSHoO0dvCuwXsmh2C2BrNkGjn9dO65EYDAlng44MdQEVXrWUCPw1U97PkJORN+tAsGx2+nXMYvGnMFeo9SvcKvoHfKaw3v2iqAL0+4ZLBl2r5795YqPXzCpb41L0V6BrNrOq7sMlQ113tRxtHC4ZfPOjcR/89CiVp9zhd+4vItm64+gRt3ocxVS8XPfBt+okFJg6J6gmz1+RNAdAC2ytOv5dmFcsbMjLY5uaVymBzwHhog1XGED/rjD0OX8Q/gzV8Fby3xDmCmyvCLcWxWPJuFC2Qhgq1P8SLhnUN/esyyD/9WGeFtz18t7qvVZgX3VFRV91dKL7C4uqsQF99c7GSTP4aFW0GJFs9VVcFuYC9M33Av4jzRlm8D8vXCp4tHpVuFVgXpVtrqK1Ka9qCu6D+Z7YD0G2DNX8wUpO7G1S2qjm1X/KXWZGL06U0XqJHfaI1dVjrT9ss2VqVLrKRl/FdqGrmnfRdZ7YU8H3YZGtAH0VCYB6VaQ6IeGScCmgjAvC3oQ/XhGUif/3wpTB55NhLsD3deFSsGjRouJOhkodkcM6dL/GovN4YbtPcpwCZR4XLgWUp6iAi+XDcuiQ6zmBlaSmPJZ/CFVFbFRqyWH5hVCPBfm6mvKaPe/ou0LVixCFmUAZn4viMuiaj3voWy1K+jOM9P7DhaH5vsMf4KRwyeD7D2GeSjV6D906bMfveuZOnhju8lfrWKuh4LBwyaBWn04Va4buryzyXY/0VkgVqzUI9keFexNcRg5nQaf+ktzkTtmTYZofWIdu/2m0GMuho/PYsPSciN8VoRoLsjbHK0PV7yBYX7NTkfV/MFxmDMVUHWCU++cwZ9Ap5EV/iopR34PI3xy2ij6FygyC7qgwF1AXxcs8Kg0oGtpwgl2hQ4PNxw9Khingl/tyBGm9R1V3GoE+PY7xUyfbSLFk+BTlD4Ltkexb15xobwy3BCqNJSmiAkhfG+b5QRsY69LKmiEWfbCnUALydIaZD4OsqtRqHDrPp1UF4lfNetEH26wnOKaMrjHu9w8X+WzZdfAEds2+0vntEezqxBs259ZHwjVBWh17zTmh2I48chKftUiPEltVPAqT3jVMBejzyEqSuispyLIJti8immHmtFBNC/7nRPEF6HegnD+EWwX2/wzX/n+nFVLT7L+ZM1jBvrEurWzoJGnYczg8vzsHKg2DfK3Q6Va80pPDXMFjSBWwNy4U85ZeaSWsV0GXG3HSvpRlcyrUQfDRmIqiufeWW25RWM6bhh18gY/6SdJsgSRX5/cXepYabArT2Zx91/zFQx9p+uBXNDiQbjYfo9c+bIQ8hW0e+h0WfBS289tIFpBXrZldY3A0B5kex9ZjHxSb92Gk6nwdBLs6FRWEqkDHKpIB3Y1T+5DmHFby3lifaD7q9FELV/iJGX3HgUrMDQJ92IYrw5xB13xBRK9FDlefKXo8SgXOEWzXrxANctLHekYGf/0JNBBprHzTQXn6ExcvxujmdJ/7UO4kx1VN02tSr3v0tPML69Tn2oqxJPMCK0lNcyzVjNjsxOmDfRP5CvxnNI6YrM3gOcorRr+R7opm1cvxrEeYUY46R4fNJF+A7/eRqjVrPoh1TTtD/TD4w1YNAJTZObZ/plDmldwRcicjKr0n6NFzXFotd00of4ITcf5n52dd2pn+hMTTtgyFf9oR/M8P9ViQ9R7krf6YlKuXwnSCYr97fz0tsBeTlc0UyqnGprTAT6E1Crs4EBn6WNCCPHqU2o99GtrTHNyMr4Y+74ZUYR6DqDxcmmMooJqBEJ2e46sOuRaUPd3jod5Dj0NazeKbI+NcfPT4tQHrHOWR9iakGEcyb7C+se8I+KWQ5vgDz6gvgrwnqYypUPYHWKzJ839+12mB35x8x45ydBdpPjMLHTC25ZXhnsD/SchIof5RR8f0x3uT76FI8/ldYNNjWj75+V1MjzMINo3+VHyX9qGYrjPSzUmese3GdnXG0GFfjP0olsPWreHYQx9vcNMHV6c7yTSA7cWRRdumKIxh8X3fQub3nWMQNubZvfWmjX1JqIeC32CE6Iw2Vvm6DhLlj/IYc0wUNWsoS82lRyJ6Ce738+jK/DakOT8WLmoa35t90CcB9KfOV0t+a+DU5zix9mPZurquHX9ArU9X4UWkL8dff8jWcFoNXEuT5oWvhjwXzcvx4p6+sIVoArydwtQEnx0pR4PNUhMtS4WB6P3p7cjGiPq8usbJfxxJY1amA3eNp9ekcz9F+l0Jeuc6B9GcyNW7JPrHIqeyff0nFY1YPR2ZVWjRjNCB0kYIbVioh4JrjuXRS3uox4Z1N1uRRoFtPTOKMXMM1bsZ9dtsJeOYVe81KzVURIqgZMd1Ne+cLW8Q8uS5pvh9eKjHhuyaeWSssR/4p2dyFneOUWYrGXEn6hzPg60K5FypYYfTLHgsm6PJWuCr22+KueHEqgbwjAPlqMd22g4vgd/VrC+3bJG+bxRj5gDq84VxoRzG0G6AlQoq5P6x0/qzVUMgh4F/+v4DFVoNAR0XitHzvIaHqpm5CTZNuKCQj0NCJd2Kn+liJYG6fCMytMUMs3r4ZxUg+jcFO5w7dPjdjO/vAv/U48tyRiEnLShOIQ4Ku9cnCS5Gfoycxcvra1n2JzLYResV/D4kZTSzgovcMVGlGeq2aspGd0ZkWRiwz2/o7fr4oRtUVp4gjLzVgJ/5gvXeN1arA/bRUJsZwslRDXOlXtWrX00YoVa2yLYwoHJSNCuVobvASM12fcj2TOUV5D0g1MsF1nd1rPfiUJkZwB+++j4L/wkFcOpTE62JGvJcxgsCdjgFpbEc+z2CPHlSASr1+FAvF1j3mVovS83j1BlJa7qh7p6DFO8cHEd9cVYzID60p1kGOrVsLZy6ZofVepRaolhegWiKT4W9j1QJ+ClkIYUFsPx2qJcLrC9/wYjfDw+1GRGqTRNLFCEdpNUpmGaW4Xceft2Hk2d+Q8rvbOidI/a9gMpRhKQC5U5EXoHftiybY87Ra4YKVZ5iuZZb6wbrfb7WK/i9V6jNiFBnUz8/oBbCPHMIv1tTw1afel6pYYeb8zy1wHcpohalzyCadyp9PwQZHNNdfZV2vmC9edguv6sReaYb6uupUXUZhaeHWXeXNbngTb27/AkZeWKOlQJ2uDmabhyoyMH4o3kLPaZ4zc30TNZxBKLJ4fK4CX5Xkx6YbqgyBftlqL9iFnvSzwpTBt3Hw7xwYKcvjf2fEyjvqCh6xlCGeuj1MRtNGfoB5HxkaPgz9t9EdjMN1NVDotoy6IpZC0lXk7ehm/9BSXc22OmDuAPokUnTh856EBBlfTGKHgnWqYjNZyP9u4IaCob25A7BH+IcAaq3mNmRY7YYXZ5Nht8aDju1ZevyMC9cqIc11dlH3ejKren3v4dUEysMA/+u+Xzvi+yJvIbKVmj4ZSzndFQeZT4+VmeGQD0VEx5wHIq7L/YqJm5ycnKfMJtBqBvFR+nbefsg+kClPtzYnG1DYBM7UKF7szwWOZMD0Ok/l7CuscJkFirUUzEPGGm1WPZDeA4LdQadvo/ofqZxoNI2ptL0wqxBMBrUMvanDmYD67wO0YAhnbT7appQ1COF6S90qK+P9GpxGej0iN0c+45+rC/smgZUYh6ROJdQ7hLk0ngsU7Di7qjXj9WaGUAd7t+r3enB98TIZmYDFdn81sQ4UMa1iL6DqLld1aO/FeqxvjFupod61UQY+sLvUPBTr7rvynMBFanYnc5xHIPgp1YTfSA/dTiieiLLPIuhmX+oc30NLA2Smwp6cRLS+YViMwOo0GoOJHT6mtFXkXcienFXnNes57Iys4djoSgIfYj1u4giJH6AHI+MNCeBGRMqVqPRNNOFvtWguV/vFyZjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY+5crLLK/wMcZ2YVcjTKWwAAAABJRU5ErkJggg==",alt:"logo",className:"w-30 md:w-28 ml-2 md:-ml-2"})}),Object(c.jsx)(Ie,{}),Object(c.jsx)("div",{className:Ye.a.menu_icon,onClick:function(){return x(!u)},children:Object(c.jsx)("i",{className:u?"fas fa-times":"fas fa-bars",style:{color:"white"}})}),Object(c.jsxs)("ul",{className:u?"".concat(Ye.a.nav_menu," ").concat(Ye.a.active):"".concat(Ye.a.nav_menu),children:[Object(c.jsx)("li",{className:Ye.a.nav_item,onClick:h,children:Object(c.jsx)(o.b,{to:"/",className:Ye.a.nav_links,children:"Home"})}),Object(c.jsx)("li",{className:Ye.a.nav_item,onClick:h,children:Object(c.jsx)(o.b,{to:"/images/discover/all",className:Ye.a.nav_links,children:"Discover"})}),Object(c.jsx)("li",{className:Ye.a.nav_item,onClick:h,children:Object(c.jsx)(o.b,{to:"/images/types/illustration",className:Ye.a.nav_links,children:"Illustrations"})}),Object(c.jsx)("li",{className:Ye.a.nav_item,onClick:h,children:Object(c.jsx)(o.b,{to:"/images/types/vector",className:Ye.a.nav_links,children:"Vector"})})]})]})},Ge=a.p+"static/media/no_image_found.c8301e2a.svg",_e=function(){return Object(c.jsx)("div",{className:"flex justify-center mt-10  w-full px-5 h-vh-70 items-center",children:Object(c.jsxs)("div",{className:"inline-block  ",children:[Object(c.jsx)("div",{className:"w-full flex  justify-center",children:Object(c.jsx)("img",{src:Ge,className:"md:w-1/3 w-full mb-12 ",alt:""})}),Object(c.jsx)("p",{className:"text-center text-gray-600 mb-1",children:"We have 1 bad news and 1 good news"}),Object(c.jsx)("p",{className:"text-center text-gray-600 mb-1",children:"Bad news is We didn't find image you are looking for"}),Object(c.jsx)("p",{className:"text-center mb-8 text-gray-600",children:"Good news is You can Discover more Images by one click"}),Object(c.jsx)(ae,{textColor:"white",gradient:!0})]})})},Re=a(160),Me=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(Re.a,{className:"absolute top-0 left-0"})})},ke=function(){var e=Object(i.g)().searchTerm,t=w(),a=Object(m.a)(t,2),r=a[0],s=r.searchedImages,o=r.orientation_type,l=a[1],g=Object(n.useState)(1),u=Object(m.a)(g,2),h=u[0],p=u[1],b=Object(n.useState)(!0),O=Object(m.a)(b,2),f=O[0],v=O[1];Object(n.useEffect)((function(){l({type:S}),y()}),[e]);var y=function(){var t=Object(d.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(h+1);case 2:return t.prev=2,t.next=5,x(e,h,20,o);case 5:a=t.sent,l({type:Y,payload:a.data.hits}),v(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}();return f?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Me,{}),Object(c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-7",children:Object(c.jsx)(H,{noOfBoxes:8})})]}):Object(c.jsx)(c.Fragment,{children:s.length>0?Object(c.jsx)(Q,{images:s,fetchData:y,isLoading:f}):Object(c.jsx)(_e,{})})},Ae=function(){var e=Object(i.g)().type,t=Object(n.useState)(1),a=Object(m.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(!0),l=Object(m.a)(o,2),g=l[0],u=l[1],x=w(),h=Object(m.a)(x,2),p=h[0].imagesByType,b=h[1];Object(n.useEffect)((function(){b({type:M}),f()}),[e]);var f=function(){var t=Object(d.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(r+1);case 2:return t.prev=2,t.next=5,O(r,e);case 5:a=t.sent,b({type:k,payload:a.data.hits}),u(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}();return g?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Me,{}),Object(c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-7",children:Object(c.jsx)(H,{noOfBoxes:8})})]}):Object(c.jsx)("div",{children:p.length>0?Object(c.jsx)(Q,{images:p,fetchData:f,isLoading:g}):Object(c.jsx)(_e,{})})},Te=a(54),De=a.n(Te),Pe=function(e){var t=e.heading,a=e.sections,n=Object(i.f)();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"md:px-10 px-5 mt-10 text-gray-700 font-regular text-2xl",children:t}),Object(c.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-8 gap-4 px-5 md:px-10 mt-10",children:a.map((function(e,t){return Object(c.jsxs)("div",{className:"flex justify-center  items-center  w-full h-28 rounded-lg ".concat(De.a.discoverImg,"   cursor-pointer relative overflow-hidden"),onClick:function(){return n.push("/images/discover/".concat(e.type,"/").concat(e.term.trim()))},children:[Object(c.jsx)("img",{src:e.imgSrc,alt:"",className:"h-full w-full absolute top-0 object-cover rounded-lg "}),Object(c.jsx)("div",{className:"w-full absolute top-0 flex justify-center items-center h-full  ".concat(De.a.discoverContainer),children:Object(c.jsx)("p",{className:" text-white left-12",children:e.textOnImage})})]},t)}))})]})},Ee=[{type:"category",term:"nature",imgSrc:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",textOnImage:"Nature"},{type:"category",term:"science",imgSrc:"https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766__340.jpg",textOnImage:"Science"},{type:"category",term:"fashion",imgSrc:"https://cdn.pixabay.com/photo/2017/06/02/14/11/girl-2366438__340.jpg",textOnImage:"Fashion"},{type:"category",term:"education",imgSrc:"https://cdn.pixabay.com/photo/2017/03/27/13/03/book-2178586__340.jpg",textOnImage:"Education"},{type:"category",term:"health",imgSrc:"https://cdn.pixabay.com/photo/2018/01/01/01/56/yoga-3053488__340.jpg",textOnImage:"Health"},{type:"category",term:" feelings",imgSrc:"https://cdn.pixabay.com/photo/2018/02/12/10/45/heart-3147976__340.jpg",textOnImage:"Feelings"},{type:"category",term:"animals",imgSrc:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg",textOnImage:"Animals"},{type:"category",term:"food",imgSrc:"https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994__340.jpg",textOnImage:"Food"},{type:"category",term:"sports",imgSrc:"https://cdn.pixabay.com/photo/2016/07/13/16/00/box-1514845__340.jpg",textOnImage:"Sports"},{type:"category",term:"computer",imgSrc:"https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373__340.jpg",textOnImage:"Computer"},{type:"category",term:"travel",imgSrc:"https://cdn.pixabay.com/photo/2016/01/19/17/47/hiker-1149898__340.jpg",textOnImage:"Travels"},{type:"category",term:"music",imgSrc:"https://cdn.pixabay.com/photo/2017/10/08/17/22/cello-2830670__340.jpg",textOnImage:"Music"},{type:"category",term:"buildings",imgSrc:"https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscraper-3184798__340.jpg",textOnImage:"Building"},{type:"category",term:"business",imgSrc:"https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084__340.jpg",textOnImage:"Business"},{type:"category",term:"backgrounds",imgSrc:"https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089__340.jpg",textOnImage:"Backgrounds"},{type:"category",term:"places",imgSrc:"https://cdn.pixabay.com/photo/2014/09/11/18/23/london-441853__340.jpg",textOnImage:"places"}],He=[{type:"orientation",term:"vertical",imgSrc:"https://cdn.pixabay.com/photo/2015/03/28/17/51/scrapbook-696229__340.png",textOnImage:"Vertical"},{type:"orientation",term:"horizontal",imgSrc:"https://cdn.pixabay.com/photo/2017/10/03/07/45/stripes-2811558__340.jpg",textOnImage:"Horizontal"}],qe=[{type:"colors",term:"pink",imgSrc:"https://cdn.pixabay.com/photo/2017/04/21/17/44/pink-roses-2249403__340.jpg",textOnImage:"Pink"},{type:"colors",term:"red",imgSrc:"https://cdn.pixabay.com/photo/2015/12/26/08/20/red-1108405__340.jpg",textOnImage:"Red"},{type:"colors",term:"orange",imgSrc:"https://cdn.pixabay.com/photo/2013/02/20/11/30/autumn-83761__340.jpg",textOnImage:"Orange"},{type:"colors",term:"yellow",imgSrc:"https://cdn.pixabay.com/photo/2016/08/28/23/24/sunflower-1627193__340.jpg",textOnImage:"Yellow"},{type:"colors",term:"green",imgSrc:"https://cdn.pixabay.com/photo/2016/06/27/17/54/leaf-1482948__340.jpg",textOnImage:"Green"},{type:"colors",term:"turquoise",imgSrc:"https://cdn.pixabay.com/photo/2017/09/25/19/13/wave-2786335__340.jpg",textOnImage:"Turquoise"},{type:"colors",term:"blue",imgSrc:"https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197__340.jpg",textOnImage:"Blue"},{type:"colors",term:"lilac",imgSrc:"https://cdn.pixabay.com/photo/2017/05/17/15/22/lilac-2321170__340.jpg",textOnImage:"Lilac"},{type:"colors",term:"black",imgSrc:"https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727__340.jpg",textOnImage:"Black"},{type:"colors",term:"transparent",imgSrc:"https://cdn.pixabay.com/photo/2017/01/17/12/17/frozen-bubble-1986676__340.jpg",textOnImage:"Transparent"}],Fe=function(){return Object(c.jsxs)("div",{className:"mb-10 mt-10",children:[Object(c.jsx)(Pe,{heading:"Category",sections:Ee}),Object(c.jsx)(Pe,{heading:"Orientation",sections:He}),Object(c.jsx)(Pe,{heading:"Colors",sections:qe})]})},Ve=function(){var e=Object(i.g)().orientationType,t=Object(n.useState)(1),a=Object(m.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(!0),l=Object(m.a)(o,2),g=l[0],u=l[1],x=w(),p=Object(m.a)(x,2),b=p[0].imagesByOrientation,O=p[1];Object(n.useEffect)((function(){O({type:I}),O({type:A,payload:e}),f()}),[e]);var f=function(){var t=Object(d.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(r+1);case 2:return t.prev=2,t.next=5,h(r,e);case 5:a=t.sent,O({type:C,payload:a.data.hits}),u(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}();return g?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Me,{}),Object(c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-7",children:Object(c.jsx)(H,{noOfBoxes:8})})]}):Object(c.jsx)("div",{children:b.length>0?Object(c.jsx)(Q,{images:b,fetchData:f,isLoading:g}):Object(c.jsx)(_e,{})})},Le=function(){var e=Object(i.g)().categoryTerm,t=Object(n.useState)(1),a=Object(m.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(!0),l=Object(m.a)(o,2),g=l[0],u=l[1],x=w(),h=Object(m.a)(x,2),b=h[0].imagesByCategory,O=h[1];Object(n.useEffect)((function(){O({type:G}),f()}),[e]);var f=function(){var t=Object(d.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(r+1);case 2:return t.prev=2,t.next=5,p(r,e);case 5:a=t.sent,O({type:B,payload:a.data.hits}),u(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}();return g?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Me,{}),Object(c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-7",children:Object(c.jsx)(H,{noOfBoxes:8})})]}):Object(c.jsx)("div",{children:b.length>0?Object(c.jsx)(Q,{images:b,fetchData:f,isLoading:g}):Object(c.jsx)(_e,{})})},Ue=function(){var e=Object(i.g)().color,t=Object(n.useState)(1),a=Object(m.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(!0),l=Object(m.a)(o,2),g=l[0],u=l[1],x=w(),h=Object(m.a)(x,2),p=h[0].imagesByColor,O=h[1];Object(n.useEffect)((function(){O({type:R}),f()}),[e]);var f=function(){var t=Object(d.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(r+1);case 2:return t.prev=2,t.next=5,b(r,e);case 5:a=t.sent,O({type:_,payload:a.data.hits}),u(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}();return g?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Me,{}),Object(c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-7",children:Object(c.jsx)(H,{noOfBoxes:8})})]}):Object(c.jsx)("div",{children:p.length>0?Object(c.jsx)(Q,{images:p,fetchData:f,isLoading:g}):Object(c.jsx)(_e,{})})};var Ke=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(Be,{}),Object(c.jsxs)(i.c,{children:[Object(c.jsx)(i.a,{path:"/",exact:!0,children:Object(c.jsx)(ne,{})}),Object(c.jsx)(i.a,{path:"/images/search/:searchTerm",exact:!0,children:Object(c.jsx)(ke,{})}),Object(c.jsx)(i.a,{path:"/images/:imageId",exact:!0,children:Object(c.jsx)(we,{})}),Object(c.jsx)(i.a,{path:"/images/types/:type",exact:!0,children:Object(c.jsx)(Ae,{})}),Object(c.jsx)(i.a,{path:"/images/discover/all",exact:!0,children:Object(c.jsx)(Fe,{})}),Object(c.jsx)(i.a,{path:"/images/discover/orientation/:orientationType",exact:!0,children:Object(c.jsx)(Ve,{})}),Object(c.jsx)(i.a,{path:"/images/discover/category/:categoryTerm",exact:!0,children:Object(c.jsx)(Le,{})}),Object(c.jsx)(i.a,{path:"/images/discover/colors/:color",exact:!0,children:Object(c.jsx)(Ue,{})}),Object(c.jsx)(i.a,{path:"*",children:Object(c.jsx)(ne,{})})]})]})},Xe=(a(139),a(16)),Ze=function(e,t){switch(t.type){case N:return Object(V.a)(Object(V.a)({},e),{},{images:[].concat(Object(Xe.a)(e.images),Object(Xe.a)(t.payload))});case Y:return Object(V.a)(Object(V.a)({},e),{},{searchedImages:[].concat(Object(Xe.a)(e.searchedImages),Object(Xe.a)(t.payload))});case S:return Object(V.a)(Object(V.a)({},e),{},{searchedImages:[]});case C:return Object(V.a)(Object(V.a)({},e),{},{imagesByOrientation:[].concat(Object(Xe.a)(e.imagesByOrientation),Object(Xe.a)(t.payload))});case I:return Object(V.a)(Object(V.a)({},e),{},{imagesByOrientation:[]});case B:return Object(V.a)(Object(V.a)({},e),{},{imagesByCategory:[].concat(Object(Xe.a)(e.imagesByCategory),Object(Xe.a)(t.payload))});case G:return Object(V.a)(Object(V.a)({},e),{},{imagesByCategory:[]});case _:return Object(V.a)(Object(V.a)({},e),{},{imagesByColor:[].concat(Object(Xe.a)(e.imagesByColor),Object(Xe.a)(t.payload))});case R:return Object(V.a)(Object(V.a)({},e),{},{imagesByColor:[]});case k:return Object(V.a)(Object(V.a)({},e),{},{imagesByType:[].concat(Object(Xe.a)(e.imagesByType),Object(Xe.a)(t.payload))});case M:return Object(V.a)(Object(V.a)({},e),{},{imagesBytType:[]});case A:return Object(V.a)(Object(V.a)({},e),{},{orientation_type:t.payload});case T:return Object(V.a)(Object(V.a)({},e),{},{orientation_type:"all"});default:return e}};s.a.render(Object(c.jsx)(y,{initialState:{images:[],searchedImages:[],imagesByOrientation:[],imagesByCategory:[],imagesByColor:[],imagesByType:[],orientation_type:"all"},reducer:Ze,children:Object(c.jsx)(Ke,{})}),document.getElementById("root"))},43:function(e,t,a){e.exports={image_container:"ImageMasonry_image_container__3HVCR",image_info:"ImageMasonry_image_info__3ddVw"}},52:function(e,t,a){e.exports={hero_image:"HeroImage_hero_image__z0HZS",hero_content:"HeroImage_hero_content__1Qq9o"}},53:function(e,t,a){e.exports={discoverBtnWhite:"DiscoverButton_discoverBtnWhite__3ubg0",discoverBtnGradient:"DiscoverButton_discoverBtnGradient__3JvoT"}},54:function(e,t,a){e.exports={discoverContainer:"DiscoverElement_discoverContainer__b2zQ6",discoverImg:"DiscoverElement_discoverImg__3VLku"}},73:function(e,t,a){e.exports={downloadBtn:"DownloadButtons_downloadBtn__1JObm"}}},[[140,1,2]]]);
//# sourceMappingURL=main.6964d4ac.chunk.js.map