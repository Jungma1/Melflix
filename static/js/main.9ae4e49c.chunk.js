(this.webpackJsonpmelflix=this.webpackJsonpmelflix||[]).push([[0],{28:function(n,e,t){},50:function(n,e,t){},51:function(n,e,t){},56:function(n,e,t){},98:function(n,e,t){},99:function(n,e,t){"use strict";t.r(e);var i,a,r,o,c,s,d,l,m,g,p,b,h,u,j,f,x=t(1),v=t.n(x),O=t(42),w=t.n(O),y=(t(50),t(3)),N=t(15),k=t(6),P=t(4),S=(t(51),t(13)),C=function(n){return"@media(max-width: ".concat(n,"px)")},z={xxlarge:C(1920),xlarge:C(1440),large:C(1024),medium:C(768),small:C(425),xsmall:C(375),xxsmall:C(320),custom:C},R=(t(56),t(14)),_=t(0),I=P.b.div(i||(i=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  color: white;\n  align-items: center;\n  .header-block {\n    padding-top: 6em;\n    padding-bottom: 3em;\n  }\n\n  .header-contents {\n    display: flex;\n    margin: 0 auto;\n    padding-left: 10rem;\n    background-color: #181818;\n  }\n  .above-title {\n    border-bottom: 1px solid white;\n    margin-top: 4rem;\n    font-size: 2.5rem;\n    padding-bottom: 0.5rem;\n  }\n\n  .header-contents-details {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    justify-content: space-between;\n    margin-left: 6rem;\n    padding-bottom: 3rem;\n  }\n\n  .header-year-genres {\n    display: flex;\n    font-size: 1.5rem;\n    font-weight: bold;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n\n  .header-genres {\n    display: flex;\n    gap: 1rem;\n  }\n  .content {\n    background-color: #9e9e9e;\n    color: #181818;\n    font-weight: bold;\n    padding-top: 0;\n  }\n  .content-description {\n    padding-top: 1.5rem;\n  }\n  .content-wrap {\n    padding-right: 2rem;\n    padding-left: 2rem;\n    padding-bottom: 10rem;\n  }\n  .header-details-Below {\n    font-size: 1.5rem;\n    font-weight: bold;\n  }\n  /*align-items\ub294 justify\uc640\ub294 \ubc18\ub300\ub85c \uc138\ub85c\ub97c \uae30\uc900\uc73c\ub85c \uc815\ub82c\ud568*/\n\n  .poster-img {\n    width: 20rem;\n    border: 1px solid none;\n    border-radius: 5px;\n  }\n  "," {\n    .header-block {\n      width: 1440px;\n    }\n    .content {\n      width: 1440px;\n    }\n    .header-contents {\n      padding-left: 10rem;\n    }\n  }\n  "," {\n    .header-block {\n      width: 1024px;\n    }\n    .header-contents {\n      padding-left: 5rem;\n    }\n    .content {\n      width: 1024px;\n    }\n    .poster-img {\n      width: 20rem;\n    }\n  }\n  "," {\n    .header-block {\n      width: 768px;\n    }\n    .header-contents {\n      padding-left: 2rem;\n    }\n    .content {\n      width: 768px;\n    }\n    .header-contents-details {\n      display: flex;\n      flex-direction: column;\n      width: 50%;\n      justify-content: space-between;\n      margin-left: 2rem;\n      padding-bottom: 3rem;\n    }\n  }\n\n  "," {\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n    .header-block {\n      width: 425px;\n    }\n    .header-contents {\n      padding-left: 0;\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n    }\n    .content {\n      width: 425px;\n    }\n    .thumnail-block {\n      display: flex;\n      justify-content: center;\n    }\n\n    .header-contents-details {\n      display: flex;\n      width: 80%;\n      flex-direction: column;\n      justify-content: space-between;\n      margin-left: 4rem;\n      padding-bottom: 1rem;\n    }\n\n    \n    .above-title {\n      margin-top: 2rem;\n      margin-right: 0.5rem;\n      font-size: 1.75rem;\n    }\n    .header-year-genres {\n      font-size: 1.25rem;\n    }\n    .header-details-Below {\n      font-size: 1.25rem;\n    }\n    .content-description {\n      padding-top: 0.5rem;\n    }\n  }\n  "," {\n    .header-block {\n      width: 375px;\n    }\n    .header-contents {\n      padding-left: 0;\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n    }\n    .content {\n      width: 375px;\n    }\n    .thumnail-block {\n      display: flex;\n      justify-content: center;\n    }\n\n    .header-contents-details {\n      display: flex;\n      width: 80%;\n      flex-direction: column;\n      justify-content: space-between;\n      margin-left: 2rem;\n      padding-bottom: 1rem;\n    }\n\n    .above-title {\n      margin-top: 2rem;\n      margin-right: 0.5rem;\n      font-size: 1.75rem;\n    }\n    .header-year-genres {\n      font-size: 1.25rem;\n    }\n    .header-details-Below {\n      font-size: 1.25rem;\n    }\n    .content-description {\n      padding-top: 0.5rem;\n    }\n  }\n  "," {\n    .header-block {\n      width: 320px;\n    }\n    .header-contents {\n      padding-left: 0;\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n    }\n    .content {\n      width: 320px;\n    }\n    .thumnail-block {\n      display: flex;\n      justify-content: center;\n    }\n\n    .header-contents-details {\n      display: flex;\n      width: 80%;\n      flex-direction: column;\n      justify-content: space-between;\n      margin-left: 2rem;\n      padding-bottom: 1rem;\n    }\n\n    .above-title {\n      margin-top: 2rem;\n      margin-right: 0.5rem;\n      font-size: 1.75rem;\n    }\n    .header-year-genres {\n      font-size: 1.25rem;\n    }\n    .header-details-Below {\n      font-size: 1.25rem;\n    }\n    .content-description {\n      padding-top: 0.5rem;\n    }\n  }\n"])),z.xlarge,z.large,z.medium,z.small,z.xsmall,z.xxsmall),Y=function(n){var e=n.location.state;return console.log(e),Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(I,{children:[Object(_.jsx)("section",{className:"header-block",children:Object(_.jsxs)("div",{className:"header-contents",children:[Object(_.jsx)("div",{className:"thumnail-block",children:Object(_.jsx)("img",{className:"poster-img",src:e.poster,alt:e.title})}),Object(_.jsxs)("div",{className:"header-contents-details",children:[Object(_.jsxs)("div",{className:"header-details-above",children:[Object(_.jsxs)("h1",{className:"above-title",children:[e.title," (",e.year,")"]}),Object(_.jsxs)("div",{className:"header-year-genres",children:[Object(_.jsx)("div",{children:"-Genres"}),Object(_.jsx)("div",{className:"header-genres",style:{paddingLeft:"1rem"},children:e.genres.map((function(n,e){return Object(_.jsx)("p",{children:n},e)}))})]})]}),Object(_.jsxs)("div",{className:"header-details-Below",children:[Object(_.jsxs)("div",{className:"header-runtime-block",style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[Object(_.jsx)("div",{className:"header-runtime-title",children:"-Total Runtime"}),Object(_.jsx)("div",{className:"header-runtime-total",style:{paddingLeft:"1rem",paddingBottom:"0.5rem"},children:0===e.runtime?"none":"".concat(e.runtime," Hours")})]}),Object(_.jsxs)("div",{className:"header-details-average",children:[Object(_.jsx)("div",{style:{marginBottom:"1rem"},children:"-Rating"}),Object(_.jsxs)("div",{style:{paddingLeft:"1rem"},children:[Object(_.jsx)(S.a,{icon:R.b,style:{color:"#f7cf1e"}}),e.rating]})]}),Object(_.jsx)("div",{className:"header-details-stars"})]})]})]})}),Object(_.jsx)("section",{className:"content",children:Object(_.jsxs)("div",{className:"content-wrap",children:[Object(_.jsx)("div",{className:"content-description",children:Object(_.jsx)("h1",{style:{borderBottom:"1px solid black",paddingBottom:"0.5rem"},children:"Description"})}),Object(_.jsx)("p",{children:""===e.description?"none":e.description})]})})]})})},B=t(12),E=t.n(B),T=t(17),A=t(5),L=t(18),F=t.n(L),M=(t(77),Object(P.b)(N.b)(a||(a=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid none;\n  border-radius: 5px;\n  span {\n    margin: 0;\n  }\n  img {\n    max-width: 100%;\n    border: 1px solid none;\n    border-radius: 5px;\n  }\n  .item-contents {\n    text-align: center;\n  }\n"])))),D=P.b.div(r||(r=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  p {\n    justify-content: center;\n    text-align: center;\n  }\n"]))),G=P.b.div(o||(o=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n"]))),H=function(n){var e=n.id,t=n.title,i=n.year,a=n.genres,r=n.rating,o=n.summary,c=n.poster,s=n.description,d=n.runtime;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(M,{to:{pathname:"/movie/".concat(e),state:{title:t,year:i,genres:a,rating:r,summary:o,poster:c,description:s,runtime:d}},children:Object(_.jsxs)("div",{className:"item-contents",children:[Object(_.jsx)("img",{src:c,alt:t}),Object(_.jsx)(D,{children:Object(_.jsxs)(G,{children:[Object(_.jsx)("span",{style:{fontSize:"13px"},children:""!==t.slice(15)?"".concat(t.slice(0,15),"..."):t.slice(0,15)}),Object(_.jsx)("span",{children:i}),Object(_.jsxs)("span",{style:{fontSize:"13px"},children:[Object(_.jsx)(S.a,{icon:R.b,style:{color:"#f7cf1e"}}),r,"/10.0"]})]})})]})})})},J=P.b.div(c||(c=Object(y.a)(["\n  display: flex;\n\n  justify-content: center;\n"]))),U=P.b.ul(s||(s=Object(y.a)(["\n  display: flex;\n  list-style: none;\n  padding: 0;\n  width: fit-content;\n  .ul-button {\n    cursor: pointer;\n    background-color: #cac6bd;\n    border: none;\n    border: 1px solid #cac6bd;\n    color: #181818;\n  }\n\n  .ul-items {\n    cursor: pointer;\n    width: 30px;\n    background-color: #181818;\n    border: none;\n    border: 1px solid #cac6bd;\n    color: #cac6bd;\n  }\n\n  .p-actives {\n    background-color: #cac6bd;\n    color: #181818;\n  }\n\n  "," {\n    margin-right: 0;\n  }\n\n  "," {\n    margin-right: 0;\n  }\n\n  "," {\n    margin-right: 0;\n  }\n\n  "," {\n    margin-right: 0;\n  }\n"])),z.medium,z.small,z.xsmall,z.xxsmall),V=function(n){n.currentPage;var e=n.setCurrentPage,t=(n.postsPerPage,n.setPostsPerPage,Object(x.useState)([1,2,3,4,5])),i=Object(A.a)(t,2),a=i[0],r=i[1],o=Object(x.useState)(1),c=Object(A.a)(o,2),s=c[0],d=c[1],l=function(n){console.log("\ud398\uc774\uc9c0\ub124\uc774\uc158"),d(parseInt(n.target.id)),e(parseInt(n.target.id))};return Object(_.jsx)(J,{children:Object(_.jsxs)(U,{children:[1!==a[0]&&Object(_.jsx)("button",{onClick:function(){console.log("prevClick"),r(a.map((function(n){return n-5})))},className:"ul-button",children:"<"}),a.map((function(n,e){return Object(_.jsx)("button",{id:n,onClick:l,className:"ul-items ".concat(s===n&&"p-actives"),children:n},e)})),Object(_.jsx)("button",{onClick:function(){console.log("nextClick"),r(a.map((function(n){return n+5})))},className:"ul-button",children:">"})]})})},q=(t(28),P.b.div(d||(d=Object(y.a)(["\n  .movies {\n    padding-top: 0;\n  }\n  .top-rated {\n    color: white;\n    font-weight: bold;\n    border-bottom: 1px solid white;\n    padding-top: 4.5rem;\n    padding-bottom: 0.25rem;\n  }\n  "," {\n    .movie-item {\n      margin: 1.25rem 2rem;\n      width: calc((100% - 20rem) / 5);\n    }\n  }\n  "," {\n    .movie-item {\n      margin: 1.25rem 2rem;\n      width: calc((100% - 16rem) / 4);\n    }\n  }\n\n  "," {\n    .movies {\n      /* padding-left: 2.5%;\n      padding-right: 2.5%; */\n      padding-left: 0;\n      padding-right: 0;\n      gap: 2rem;\n    }\n\n    .movie-item {\n      margin: 1.25rem 2rem;\n      width: calc((100% - 16rem) / 3);\n    }\n  }\n  "," {\n    .movies {\n      gap: 1.5rem;\n    }\n\n    .movie-item {\n      margin: 1.25rem 2rem;\n      width: calc((100% - 9.5rem) / 2);\n    }\n\n    "," {\n      .sidebar-mobile-tagmenu {\n        display: flex;\n        justify-content: space-between;\n        padding-left: 1rem;\n        padding-right: 1rem;\n        height: 2rem;\n        align-items: center;\n      }\n      .movies {\n        gap: 0.45rem;\n      }\n\n      .movie-item {\n        margin: 1.25rem 2rem;\n        width: calc((100% - 1rem) / 3);\n      }\n    }\n    "," {\n      .sidebar-mobile-tagmenu {\n        display: flex;\n        justify-content: space-between;\n        padding-left: 1rem;\n        padding-right: 1rem;\n        height: 2rem;\n        align-items: center;\n      }\n      .movies {\n        padding-left: 2%;\n        padding-right: 2%;\n        gap: 5px;\n      }\n      .movie-item {\n        margin: 1.25rem 2rem;\n        width: 100%;\n      }\n    }\n  }\n"])),z.xlarge,z.large,z.medium,z.small,z.xsmall,z.xxsmall)),K=function(){var n=Object(x.useState)([]),e=Object(A.a)(n,2),t=e[0],i=e[1],a=Object(x.useState)(!0),r=Object(A.a)(a,2),o=r[0],c=r[1],s=Object(x.useState)(1),d=Object(A.a)(s,2),l=d[0],m=d[1],g=Object(x.useState)(10),p=Object(A.a)(g,2),b=p[0],h=p[1],u=function(){var n=Object(T.a)(E.a.mark((function n(e){var t;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=year&&page=".concat(e));case 2:t=n.sent,console.log(t.data.data.movies),i(t.data.data.movies),c(!1);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(x.useEffect)((function(){return u(l),function(){console.log("\ucde8\uc18c\ub428.")}}),[l]),Object(_.jsx)(q,{children:!0===o?Object(_.jsx)("span",{style:{color:"white"},children:"\ub85c\ub529\uc911..."}):Object(_.jsxs)("div",{className:"hi",children:[Object(_.jsx)("div",{className:"top-rated",children:"Top Rated"}),Object(_.jsx)("div",{className:"movies",children:t.map((function(n){return Object(_.jsx)("div",{className:"movie-item",children:Object(_.jsx)(H,{id:n.id,title:n.title,year:n.year,genres:n.genres,rating:n.rating,summary:n.summary,description:n.description_full,runtime:n.runtime,poster:n.large_cover_image},n.id)})}))}),Object(_.jsx)(V,{currentPage:l,setCurrentPage:m,postsPerPage:b,setPostsPerPage:h})]})})},Q=[{id:1,name:"ALL",value:"all"},{id:2,name:"COMEDY",value:"comedy"},{id:3,name:"SCI-FI",value:"sci-fi"},{id:4,name:"HORROR",value:"horror"},{id:5,name:"ROMANCE",value:"romance"},{id:6,name:"ACTION",value:"action"},{id:7,name:"THRILLER",value:"thriller"},{id:8,name:"DRAMA",value:"drama"},{id:9,name:"MYSTERY",value:"mystery"},{id:10,name:"CRIME",value:"crime"},{id:11,name:"ANIMATION",value:"animation"},{id:12,name:"ADVENTURE",value:"adventure"},{id:13,name:"FANTASY",value:"fantasy"}],W=function(){var n=Object(x.useState)([]),e=Object(A.a)(n,2),t=e[0],i=e[1],a=Object(x.useState)("all"),r=Object(A.a)(a,2),o=r[0],c=r[1],s=Object(x.useState)(!0),d=Object(A.a)(s,2),l=d[0],m=d[1],g=Object(x.useState)(0),p=Object(A.a)(g,2),b=p[0],h=p[1],u=Object(x.useState)(1),j=Object(A.a)(u,2),f=j[0],v=j[1],O=Object(x.useState)(10),w=Object(A.a)(O,2),y=w[0],N=w[1],k=Object(x.useState)(!1),P=Object(A.a)(k,2),C=P[0],z=P[1],I=function(n){m(!0),h(parseInt(n.target.id)),c(n.target.name)},Y=function(){var n=Object(T.a)(E.a.mark((function n(e,t){var a;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,F.a.get("https://yts-proxy.now.sh/list_movies.json?genre=".concat(e,"&page=").concat(t));case 4:a=n.sent,console.log(a.data.data.movies),i(a.data.data.movies),m(!1);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return Object(x.useEffect)((function(){return Y(o,f),function(){console.log("\ucde8\uc18c\ub428.")}}),[o,f]),Object(_.jsxs)(X,{children:[Object(_.jsxs)("div",{className:"sidebar",children:[Object(_.jsxs)("div",{className:"sidebar-mobile-tagmenu",children:[Object(_.jsx)("div",{className:"sidebar-mobile-name",children:"\ud0dc\uadf8"}),Object(_.jsx)("div",{className:"sidebar-mobile-hamburger",children:Object(_.jsx)(S.a,{icon:R.a,onClick:function(){z((function(n){return!n})),console.log("\ud1a0\uae00!",C)}})})]}),Object(_.jsx)("div",{className:"sidebar-tag ".concat(!0===C?"show-tag-menu":"hide-tag-menu"),children:Q.map((function(n,e){return Object(_.jsx)("button",{id:e,name:n.value,className:"tag-box ".concat(b===e&&"actives"),onClick:I,children:n.name},e)}))})]}),Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"hi",children:[Object(_.jsx)("div",{className:"top-rated",children:o.toUpperCase()}),!0===l?"":Object(_.jsx)("div",{className:"movies",children:t.map((function(n){return Object(_.jsx)("div",{className:"movie-item",children:Object(_.jsx)(H,{id:n.id,title:n.title,year:n.year,genres:n.genres,rating:n.rating,summary:n.summary,poster:n.large_cover_image,description:n.description_full,runtime:n.runtime},n.id)})}))}),Object(_.jsx)(V,{currentPage:f,setCurrentPage:v,postsPerPage:y,setPostsPerPage:N})]})})]})},X=P.b.div(l||(l=Object(y.a)(["\n  .top-rated {\n    color: white;\n    font-weight: bold;\n    border-bottom: 1px solid white;\n    padding-top: 4.5rem;\n    padding-bottom: 0.25rem;\n  }\n  .sidebar {\n    position: fixed;\n    width: 100%;\n    height: 1.5rem;\n    margin-top: 3.5rem;\n  }\n  .sidebar-mobile-tagmenu {\n    background-color: #242424;\n    border: 1px solid #242424;\n    z-index: 4;\n  }\n\n  .sidebar-tag {\n    display: flex;\n    text-align: start;\n    flex-direction: column;\n    z-index: 1;\n  }\n  .tag-box {\n    width: 10rem;\n    /* height: calc(100% / 7); */\n\n    height: 2rem;\n    font-weight: 1000;\n    background-color: #3d3d3d;\n    border: 1px solid #3d3d3d;\n  }\n  .tag-box:hover {\n    padding-left: 0;\n    transition: all 0.4s;\n    background-color: #555555;\n    color: #cc8330;\n  }\n\n  .tag-box-contents {\n    padding-left: 2rem;\n  }\n\n  .hi {\n    margin-left: 10rem;\n  }\n\n  .actives {\n    background-color: #cc8330;\n  }\n\n  "," {\n    .top-rated {\n      margin-left: 3rem;\n      width: 86%;\n    }\n    .sidebar-mobile-tagmenu {\n      display: none;\n    }\n    .movie-item {\n      margin: 1.25rem 2rem;\n      width: calc((100% - 16rem) / 6);\n    }\n  }\n  "," {\n    .top-rated {\n      margin-left: 3rem;\n      width: 89%;\n    }\n    .sidebar-mobile-tagmenu {\n      display: none;\n    }\n    .movie-item {\n      margin: 1.25rem 2rem;\n      width: calc((100% - 16rem) / 4);\n    }\n  }\n\n  "," {\n    .top-rated {\n      padding-top: 5.5rem;\n      margin-left: 1.5rem;\n      width: 94%;\n    }\n    .sidebar {\n      display: flex;\n      flex-direction: column;\n    }\n    .sidebar-mobile-tagmenu {\n      display: flex;\n      justify-content: space-between;\n      padding-left: 1rem;\n      padding-right: 1rem;\n      height: 2rem;\n      align-items: center;\n    }\n    .sidebar-tag {\n      flex-direction: row;\n      flex-wrap: wrap;\n    }\n    .hide-tag-menu {\n      transition: transform 0.5s ease-in;\n      transform: translateY(-16rem);\n    }\n    .show-tag-menu {\n      transition: transform 0.5s;\n      transform: translateY(0rem);\n    }\n    .tag-box {\n      width: 50%;\n    }\n    .hi {\n      margin-left: 0;\n    }\n    .movies {\n      /* padding-left: 2.5%;\n      padding-right: 2.5%; */\n      padding-left: 0;\n      padding-right: 0;\n      gap: 2rem;\n    }\n\n    .movie-item {\n      margin: 1.25rem 2rem;\n      width: calc((100% - 5.5rem) / 4);\n    }\n  }\n  "," {\n    .top-rated {\n      padding-top: 5.5rem;\n      margin-left: 1.5rem;\n      width: 90%;\n    }\n    .movies {\n      gap: 1.5rem;\n    }\n\n    .movie-item {\n      margin: 1.25rem 2rem;\n      width: calc((100% - 1rem) / 3);\n    }\n    .hide-tag-menu {\n      transition: transform 0.5s ease-in;\n      transform: translateY(-16rem);\n    }\n    .show-tag-menu {\n      transition: transform 0.5s;\n      transform: translateY(0rem);\n    }\n\n    "," {\n      .top-rated {\n        padding-top: 5.5rem;\n        margin-left: 1.5rem;\n        width: 90%;\n      }\n      .sidebar-mobile-tagmenu {\n        display: flex;\n        justify-content: space-between;\n        padding-left: 1rem;\n        padding-right: 1rem;\n        height: 2rem;\n        align-items: center;\n      }\n      .hide-tag-menu {\n        transition: transform 0.5s ease-in;\n        transform: translateY(-16rem);\n      }\n      .show-tag-menu {\n        transition: transform 0.5s;\n        transform: translateY(0rem);\n      }\n      .movies {\n        gap: 0.45rem;\n      }\n\n      .movie-item {\n        margin: 1.25rem 2rem;\n        width: calc((100% - 1rem) / 3);\n      }\n    }\n    "," {\n      .top-rated {\n        padding-top: 5.5rem;\n        margin-left: 1.5rem;\n        width: 85%;\n      }\n      .sidebar-mobile-tagmenu {\n        display: flex;\n        justify-content: space-between;\n        padding-left: 1rem;\n        padding-right: 1rem;\n        height: 2rem;\n        align-items: center;\n      }\n      .hide-tag-menu {\n        transition: transform 0.5s ease-in;\n        transform: translateY(-16rem);\n      }\n      .show-tag-menu {\n        transition: transform 0.5s;\n        transform: translateY(0rem);\n      }\n      .movies {\n        padding-left: 2%;\n        padding-right: 2%;\n        gap: 5px;\n      }\n      .movie-item {\n        margin: 1.25rem 2rem;\n        width: 100%;\n      }\n    }\n  }\n"])),z.xlarge,z.large,z.medium,z.small,z.xsmall,z.xxsmall),Z=v.a.memo(W),$=(t(98),Object(P.b)(N.c)(m||(m=Object(y.a)(["\n  font-size: 1.125rem;\n  font-weight: bold;\n  cursor: pointer;\n  white-space: pre;\n  text-decoration: none;\n  color: inherit;\n  padding-bottom: 0.25rem;\n  &:hover {\n    color: #495057;\n  }\n  &.active {\n    font-weight: 600;\n    border-bottom: 2px solid #cc8330;\n    color: #cc8330;\n    &:hover {\n      color: #b66810;\n    }\n  }\n  & + & {\n    margin-left: 1rem;\n  }\n"])))),nn=(P.b.div(g||(g=Object(y.a)(["\n  display: flex;\n  flex-direction: row;\n  font-size: 20px;\n  font-weight: 900;\n  text-align: center;\n  "," {\n    flex-direction: column;\n  }\n"])),z.small),Object(P.b)(N.b)(p||(p=Object(y.a)(['\n  text-align: center;\n  font-family: "Malgun Gothic";\n  font-weight: 900;\n  text-decoration: none;\n  padding: 8px 12px;\n  color: white;\n  &:hover {\n    background-color: #d49466;\n    border-radius: 4px;\n  }\n\n  '," {\n    justify-content: center;\n    width: 100%;\n    padding: 0px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    display: ",";\n  }\n"])),z.small,(function(n){return"false"===n.clickbtn?"none":"flex"})),P.b.div(b||(b=Object(y.a)(["\n  color: white;\n  .sns-icon {\n    padding-top: 14px;\n    padding-right: 12px;\n  }\n  "," {\n    display: ",";\n  }\n"])),z.small,(function(n){return"false"===n.clickbtn?"none":"block"})),P.b.div(h||(h=Object(y.a)(["\n  display: none;\n  position: absolute;\n  top: 12px;\n  right: 32px;\n  font-size: 24px;\n  color: black;\n  "," {\n    display: block;\n  }\n"])),z.small),P.b.div(u||(u=Object(y.a)(["\n  display: flex;\n  flex: 1.75 1 auto;\n  justify-content: space-between;\n\n  "," {\n    justify-content: none;\n    flex-direction: column;\n  }\n"])),z.small),function(){var n=Object(x.useState)(!1),e=Object(A.a)(n,2);e[0],e[1];return Object(_.jsx)("nav",{className:"navbar",children:Object(_.jsx)("ul",{className:"navbar-menu",children:[{name:"New",path:"/"},{name:"Rating",path:"/rating"},{name:"Genres",path:"/genres"}].map((function(n,e){return Object(_.jsx)("li",{className:"navbar-menu-item",style:{display:"block"},children:Object(_.jsx)($,{activeClassName:"active",exact:"New"===n.name,to:n.path,children:n.name})},e)}))})})}),en=P.b.div(j||(j=Object(y.a)(["\n  .top-rated {\n    color: white;\n    font-weight: bold;\n    border-bottom: 1px solid white;\n    padding-top: 4.5rem;\n    padding-bottom: 0.25rem;\n  }\n  "," {\n    .top-rated {\n      margin-left: 3rem;\n      width: 93%;\n    }\n    .movie-item {\n      margin: 1.25rem 2rem;\n      width: calc((100% - 20rem) / 5);\n    }\n  }\n  "," {\n    .top-rated {\n      margin-left: 3rem;\n      width: 93%;\n    }\n    .movie-item {\n      margin: 1.25rem 2rem;\n      width: calc((100% - 16rem) / 4);\n    }\n  }\n\n  "," {\n    .top-rated {\n      margin-left: 1.5rem;\n      width: 94%;\n    }\n    .movies {\n      /* padding-left: 2.5%;\n    padding-right: 2.5%; */\n      padding-left: 0;\n      padding-right: 0;\n      gap: 2rem;\n    }\n\n    .movie-item {\n      margin: 1.25rem 2rem;\n      width: calc((100% - 16rem) / 3);\n    }\n  }\n  "," {\n    .top-rated {\n      margin-left: 1.5rem;\n      width: 90%;\n    }\n    .movies {\n      gap: 1.5rem;\n    }\n\n    .movie-item {\n      margin: 1.25rem 2rem;\n      width: calc((100% - 9.5rem) / 2);\n    }\n\n    "," {\n      .top-rated {\n        margin-left: 1.5rem;\n        width: 90%;\n      }\n      .sidebar-mobile-tagmenu {\n        display: flex;\n        justify-content: space-between;\n        padding-left: 1rem;\n        padding-right: 1rem;\n        height: 2rem;\n        align-items: center;\n      }\n      .movies {\n        gap: 0.45rem;\n      }\n\n      .movie-item {\n        margin: 1.25rem 2rem;\n        width: calc((100% - 1rem) / 3);\n      }\n    }\n    "," {\n      .top-rated {\n        margin-left: 1.5rem;\n        width: 86%;\n      }\n      .sidebar-mobile-tagmenu {\n        display: flex;\n        justify-content: space-between;\n        padding-left: 1rem;\n        padding-right: 1rem;\n        height: 2rem;\n        align-items: center;\n      }\n      .movies {\n        padding-left: 2%;\n        padding-right: 2%;\n        gap: 5px;\n      }\n      .movie-item {\n        margin: 1.25rem 2rem;\n        width: 100%;\n      }\n    }\n  }\n"])),z.xlarge,z.large,z.medium,z.small,z.xsmall,z.xxsmall),tn=function(){var n=Object(x.useState)([]),e=Object(A.a)(n,2),t=e[0],i=e[1],a=Object(x.useState)(!0),r=Object(A.a)(a,2),o=r[0],c=r[1],s=Object(x.useState)(1),d=Object(A.a)(s,2),l=d[0],m=d[1],g=Object(x.useState)(10),p=Object(A.a)(g,2),b=p[0],h=p[1],u=function(){var n=Object(T.a)(E.a.mark((function n(e){var t;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page=".concat(e));case 2:t=n.sent,console.log(t.data.data.movies),i(t.data.data.movies),c(!1);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(x.useEffect)((function(){return u(l),function(){console.log("\ucde8\uc18c\ub428.")}}),[l]),Object(_.jsx)(en,{children:!0===o?Object(_.jsx)("span",{style:{color:"white"},children:"\ub85c\ub529\uc911..."}):Object(_.jsxs)("div",{className:"hi",children:[Object(_.jsx)("div",{className:"top-rated",children:"Top Rated"}),Object(_.jsx)("div",{className:"movies",children:t.map((function(n){return Object(_.jsx)("div",{className:"movie-item",children:Object(_.jsx)(H,{id:n.id,title:n.title,year:n.year,genres:n.genres,rating:n.rating,summary:n.summary,description:n.description_full,runtime:n.runtime,poster:n.large_cover_image},n.id)})}))}),Object(_.jsx)(V,{currentPage:l,setCurrentPage:m,postsPerPage:b,setPostsPerPage:h})]})})};var an=Object(P.a)(f||(f=Object(y.a)(["\nhtml , body , #root{\n  /* height:100%; */\n  background: #181818;\n  /* #121212 */\n  font-family:'Roboto';\n}\na, a:link, a:visited , a:hover , a:focus{\n  text-decoration:none;\n  color:unset\n}\n"]))),rn=function(){return Object(_.jsxs)(N.a,{children:[Object(_.jsx)(an,{}),Object(_.jsx)(nn,{}),Object(_.jsx)(k.a,{path:"/",component:K,exact:!0}),Object(_.jsx)(k.a,{path:"/rating",component:tn}),Object(_.jsx)(k.a,{path:"/genres",component:Z}),Object(_.jsx)(k.a,{path:"/option",component:K}),Object(_.jsx)(k.a,{path:"/movie/:id",component:Y})]})},on=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,100)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),a(n),r(n),o(n)}))};w.a.render(Object(_.jsx)(v.a.StrictMode,{children:Object(_.jsx)(rn,{})}),document.getElementById("root")),on()}},[[99,1,2]]]);
//# sourceMappingURL=main.9ae4e49c.chunk.js.map