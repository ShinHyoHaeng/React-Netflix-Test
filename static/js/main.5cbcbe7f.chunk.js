(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},41:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(16),n=c.n(a),i=c(5),r=(c(27),c(3)),l=c(60),j=c(61),o=(c(28),c(0));function d(e){var t=e.type;return Object(o.jsxs)("div",{className:"featured",children:[t&&Object(o.jsxs)("div",{className:"category",children:[Object(o.jsx)("span",{children:"movie"===t?"Movies":"Series"}),Object(o.jsxs)("select",{name:"genre",id:"genre",children:[Object(o.jsx)("option",{children:"Genre"}),Object(o.jsx)("option",{value:"adventure",children:"Adventure"}),Object(o.jsx)("option",{value:"comedy",children:"Comedy"}),Object(o.jsx)("option",{value:"crime",children:"Crime"}),Object(o.jsx)("option",{value:"fantasy",children:"Fantasy"}),Object(o.jsx)("option",{value:"historical",children:"Historical"}),Object(o.jsx)("option",{value:"horror",children:"Horror"}),Object(o.jsx)("option",{value:"romance",children:"Romance"}),Object(o.jsx)("option",{value:"sci-fi",children:"Sci-fi"}),Object(o.jsx)("option",{value:"thriller",children:"Thriller"}),Object(o.jsx)("option",{value:"western",children:"Western"}),Object(o.jsx)("option",{value:"animation",children:"Animation"}),Object(o.jsx)("option",{value:"drama",children:"Drama"}),Object(o.jsx)("option",{value:"documentary",children:"Documentary"})]})]}),Object(o.jsx)("img",{src:"https://images.ctfassets.net/usf1vwtuqyxm/4ZvGyBKC4ACJjntjPa9GPC/b874be064afe0a773cb2d8a8e16bf9a6/HP-F1-philosophers-stone-harry-shows-scar-on-hogwarts-express-web-landscape.jpg?fm=jpg&q=70&w=2560",alt:""}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("img",{src:"https://www.jing.fm/clipimg/full/112-1128075_harry-potter-and-the-sorcerers-stone-logo-harry.png",alt:"Harry Potter And The Sorcerer's Stone"}),Object(o.jsx)("span",{className:"desc",children:"An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsxs)("button",{className:"play",children:[Object(o.jsx)(l.a,{}),Object(o.jsx)("span",{children:"Play"})]}),Object(o.jsxs)("button",{className:"more",children:[Object(o.jsx)(j.a,{}),Object(o.jsx)("span",{children:"Info"})]})]})]})]})}var b=c(9),x=c(66),h=c(67),m=(c(34),c(35),c(62)),O=c(63),u=c(64),p=c(65),f=function(e){var t=e.embedId;return Object(o.jsx)("div",{className:"video",children:Object(o.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/".concat(t,"?autoplay=1&mute=1&modestbranding=1"),frameBorder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Harry Potter and the Chamber of Secrets (2002) Official Trailer"})})},v=(c(36),function(e){var t=e.modalClose;return Object(a.createPortal)(Object(o.jsx)("div",{className:"modal_container",onClick:function(e){console.log("e.target: ",e.target),console.log("e.tarcurrentTargetget: ",e.currentTarget),e.target===e.currentTarget&&t()},children:Object(o.jsxs)("div",{className:"itemModal",children:[Object(o.jsx)("div",{className:"back",children:Object(o.jsx)(m.a,{onClick:t,className:"modal_button"})}),Object(o.jsx)(f,{embedId:"1bq0qff4iF8"}),Object(o.jsxs)("div",{className:"itemInfo",children:[Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(i.b,{to:"/React-Netflix/watch",className:"playBtn",children:Object(o.jsx)("button",{children:Object(o.jsx)(l.a,{})})}),Object(o.jsx)(O.a,{className:"icon"}),Object(o.jsx)(u.a,{className:"icon"}),Object(o.jsx)(p.a,{className:"icon"})]}),Object(o.jsxs)("div",{className:"itemInfoTop",children:[Object(o.jsx)("span",{children:"2 hour 41 mins"}),Object(o.jsx)("span",{className:"limit",children:"ALL"}),Object(o.jsx)("span",{children:"2002"})]}),Object(o.jsx)("div",{className:"desc",children:"An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed."}),Object(o.jsx)("div",{className:"genre",children:"Adventure, Family, Fantasy"})]})]})}),document.getElementById("modal"))});function g(e){e.index;var t=Object(s.useState)(!1),c=Object(b.a)(t,2),a=(c[0],c[1],Object(s.useState)(!1)),n=Object(b.a)(a,2),i=n[0],r=n[1],l=function(){r(!i),document.body.style.overflow=i?"unset":"hidden"};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"listItem",onClick:l,children:Object(o.jsx)("img",{src:"https://material.asset.catchplay.com/WAR-TW-002-A0073/artworks/posters/WAR-TW-002-A0073-P704.jpg",alt:"harry potter and the chamber of secrets"})}),Object(o.jsx)(o.Fragment,{children:i&&Object(o.jsx)(v,{modalClose:l})})]})}function N(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(0),i=Object(b.a)(n,2),r=i[0],l=i[1],j=Object(s.useRef)(),d=function(e){a(!0);var t=j.current.getBoundingClientRect().x-50;"left"===e&&r>0&&(l(r-1),j.current.style.transform="translateX(".concat(230+t,"px)")),"right"===e&&r<5&&(l(r+1),j.current.style.transform="translateX(".concat(-230+t,"px)"))};return Object(o.jsxs)("div",{className:"list",children:[Object(o.jsx)("span",{className:"listTitle",children:"Continue to watch"}),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(x.a,{className:"sliderArrow left",onClick:function(){return d("left")},style:{display:!c&&"none"}}),Object(o.jsxs)("div",{className:"container",ref:j,children:[Object(o.jsx)(g,{index:0}),Object(o.jsx)(g,{index:1}),Object(o.jsx)(g,{index:2}),Object(o.jsx)(g,{index:3}),Object(o.jsx)(g,{index:4}),Object(o.jsx)(g,{index:5}),Object(o.jsx)(g,{index:6}),Object(o.jsx)(g,{index:7}),Object(o.jsx)(g,{index:8}),Object(o.jsx)(g,{index:9})]}),Object(o.jsx)(h.a,{className:"sliderArrow right",onClick:function(){return d("right")}})]})]})}c(41);var w=c(68),y=c(69),k=c(70),S=c(71),C=c(21),R=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),c=t[0],a=t[1];window.onscroll=function(){return a(0!==window.pageYOffset),function(){window.onscroll=null}};var n=Object(s.useState)(!1),r=Object(b.a)(n,2),l=r[0],j=r[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(C.BrowserView,{children:Object(o.jsx)("div",{className:c?"navbar scrolled":"navbar",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)(i.b,{to:"/React-Netflix/list",children:Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"logo"})}),Object(o.jsx)("span",{children:"Homepage"}),Object(o.jsx)("span",{children:"Series"}),Object(o.jsx)("span",{children:"Movies"}),Object(o.jsx)("span",{children:"New and Popular"}),Object(o.jsx)("span",{children:"My List"})]}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)(w.a,{className:"icon"}),Object(o.jsx)("span",{children:"KID"}),Object(o.jsx)(y.a,{className:"icon"}),Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"profile"}),Object(o.jsxs)("div",{className:"profile",children:[Object(o.jsx)(k.a,{className:"icon"}),Object(o.jsxs)("div",{className:"options",children:[Object(o.jsx)("span",{children:"Settings"}),Object(o.jsx)("span",{children:"Logout"})]})]})]})]})})}),Object(o.jsx)(C.MobileView,{children:Object(o.jsxs)("div",{className:c?"navbar-mobile scrolled":"navbar-mobile",children:[Object(o.jsxs)("div",{className:"top",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)("div",{className:"menuIcon",onClick:function(){j(!l),document.body.style.overflow=l?"unset":"hidden"},children:l?Object(o.jsx)(m.a,{className:"icon"}):Object(o.jsx)(S.a,{className:"icon"})}),Object(o.jsx)(i.b,{to:"/React-Netflix/list",children:Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"logo"})})]}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)(w.a,{className:"icon"}),Object(o.jsx)(y.a,{className:"icon"})]})]}),Object(o.jsxs)("div",{className:l?"navPanel active":"navPanel",children:[Object(o.jsxs)("div",{className:"profile",children:[Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"profile"}),Object(o.jsxs)("div",{className:"options",children:[Object(o.jsx)("p",{children:"Username"}),Object(o.jsx)("span",{children:"Settings"}),Object(o.jsx)("span",{children:"Logout"})]})]}),Object(o.jsx)("div",{className:"menu",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Homepage"}),Object(o.jsx)("li",{children:"Series"}),Object(o.jsx)("li",{children:"Movies"}),Object(o.jsx)("li",{children:"New and Popular"}),Object(o.jsx)("li",{children:"My List"})]})}),Object(o.jsx)("div",{className:"etc",children:Object(o.jsx)("span",{children:"KID"})})]})]})})]})},A=(c(44),function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(R,{})," ",Object(o.jsx)(d,{})," ",Object(o.jsx)(N,{}),Object(o.jsx)(N,{}),Object(o.jsx)(N,{}),Object(o.jsx)(N,{})]})});c(45);function P(){return Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)("div",{className:"top",children:Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)(i.b,{to:"/React-Netflix",children:Object(o.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"logo"})})})}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("form",{children:[Object(o.jsx)("h1",{children:"Sign In"}),Object(o.jsx)("input",{type:"email",placeholder:"Email or phone number"}),Object(o.jsx)("input",{type:"password",placeholder:"Password"}),Object(o.jsx)("button",{className:"loginButton",children:"Sign In"}),Object(o.jsxs)("span",{children:["New to Netflix? ",Object(o.jsx)("b",{children:"Sign up now"})]}),Object(o.jsxs)("small",{children:["This page is protected by Google reCAPTCHA to ensure you're not a bot. ",Object(o.jsx)("b",{children:"Learn more"})]})]})})]})}c(46);function I(e){var t=e.history,c=Object(s.useState)(""),a=Object(b.a)(c,2),n=a[0],r=a[1],l=Object(s.useState)(""),j=Object(b.a)(l,2),d=(j[0],j[1]),x=Object(s.useRef)(),h=Object(s.useRef)(),m=function(){r(x.current.value)},O=function(){d(h.current.value),t.push("/React-Netflix/home")};return Object(o.jsxs)("div",{className:"register",children:[Object(o.jsx)("div",{className:"top",children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(i.b,{to:"/React-Netflix",children:Object(o.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"logo"})}),Object(o.jsx)(i.b,{to:"/React-Netflix/Login",children:Object(o.jsx)("button",{className:"loginButton",children:"Sign In"})})]})}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(o.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(o.jsx)("p",{children:"Ready to watch? Enter your email to create or restart your membership."}),n?Object(o.jsxs)("form",{className:"input",children:[Object(o.jsx)("input",{type:"password",placeholder:"password",ref:h,onKeyPress:function(e){"Enter"===e.key&&O()},autoFocus:!0}),Object(o.jsx)("button",{className:"registerButton",onClick:O,children:"Start"})]}):Object(o.jsxs)("div",{className:"input",children:[Object(o.jsx)("input",{type:"email",placeholder:"email address",ref:x,onKeyPress:function(e){"Enter"===e.key&&m()},autoFocus:!0}),Object(o.jsx)("button",{className:"registerButton",onClick:m,children:"Get Started"})]})]})]})}var T=c(72);c(47);function F(){return Object(o.jsxs)("div",{className:"watch",children:[Object(o.jsx)("div",{className:"back",children:Object(o.jsxs)(i.b,{to:"/React-Netflix/home",children:[Object(o.jsx)(T.a,{}),"Home"]})}),Object(o.jsx)(f,{embedId:"0Dj2kq5Neus",className:"video"})]})}var B=Object(r.e)((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.a,{path:"/React-Netflix/",exact:!0,component:I}),Object(o.jsx)(r.a,{path:"/React-Netflix/register",component:I}),Object(o.jsx)(r.a,{path:"/React-Netflix/login",component:P}),Object(o.jsx)(r.a,{path:"/React-Netflix/home",component:A}),Object(o.jsx)(r.a,{path:"/React-Netflix/watch",component:F})]})}));n.a.render(Object(o.jsx)(i.a,{children:Object(o.jsx)(B,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.5cbcbe7f.chunk.js.map