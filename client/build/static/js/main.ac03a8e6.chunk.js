(this.webpackJsonpmoooviemends=this.webpackJsonpmoooviemends||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),l=a.n(r),i=(a(79),a(28)),c=a(7),s=a(135),m=a(136),u=a(133),h=a(65),p=a.n(h),d=a(66),f=a.n(d),g=a(67),b=a.n(g),E=Object(u.a)({root:{width:"100vw",position:"fixed",bottom:0,background:"rgba(255, 216, 99)"}}),y={button:{padding:0},icon:{color:"black"}},v=function(){var e=E();return o.a.createElement(s.a,{className:e.root},o.a.createElement(m.a,{component:i.b,to:"/",icon:o.a.createElement(p.a,{style:y.icon}),style:y.button}),o.a.createElement(m.a,{component:i.b,to:"/search",icon:o.a.createElement(f.a,{style:y.icon}),style:y.button}),o.a.createElement(m.a,{component:i.b,to:"/create",icon:o.a.createElement(b.a,{style:y.icon}),style:y.button}))},x=a(40),j=Object(u.a)((function(){return{title:{color:"#FFFFFF",position:"relative",fontSize:"3em",fontFamily:"Luckiest Guy",bottom:"250px"}}})),F=function(e){var t=j();return o.a.createElement(x.a,Object.assign({variant:"h1",className:t.title},e),"Moooviemends")},O=a(68),w=a.n(O),S=Object(u.a)((function(){return{logoStyle:{height:"50%",width:"100%",position:"fixed",top:"20px",left:"0px"}}})),k=function(){var e=S();return o.a.createElement("img",{className:e.logoStyle,src:w.a,alt:"logo"})},C=a(137);function z(){return o.a.createElement(C.a,{container:!0,style:L,justify:"center",alignItems:"center",direction:"column"},o.a.createElement(C.a,{item:!0},o.a.createElement(k,null)),o.a.createElement(C.a,{item:!0},o.a.createElement(F,null)),o.a.createElement(C.a,{item:!0},o.a.createElement(x.a,{style:G},"Make your moooviemends to your friends")))}var G={position:"absolute",width:"80.9%",height:"9%",left:"10%",fontFamily:"Crafty Girls",fontStyle:"normal",fontWeight:"normal",fontSize:"36px",color:"#FFFFFF",lineHeight:"52px",textAlign:"center"},L={backgroundColor:"#FF5200",width:"100vw",height:"100vh",flewgrow:"1"},W=a(6),I=a(35),H=a(18),N=a(138);function B(e){return o.a.createElement(N.a,e)}var D=a(145),R=a(146),A=Object(u.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function M(){var e=A();return o.a.createElement("div",{className:e.root},o.a.createElement(R.a,{icon:!1,severity:"success"},"This is a success alert \u2014 check it out!"))}var T=function(e){var t=e.message,a=e.type,n=e.openState,r=e.onClose;return o.a.createElement(D.a,{open:n,autoHideDuration:2e3,onClose:function(){r()},style:{bottom:90}},o.a.createElement(M,{onClose:function(){r()},severity:a},t))},_=a(139),J=a(29),P=a.n(J),V=function(e){return P.a.get("https://www.omdbapi.com/?t="+e+"&apikey=trilogy")},Y=function(e){return P.a.post("/api/movies",e)},$=function(e){return P.a.get("api/movies",e)},q=function(){return P.a.get("api/playlists")},K=function(e){return P.a.post("api/playlists",e)};function Q(){var e=Object(n.useState)({name:"",description:"",movies:[]}),t=Object(H.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),i=Object(H.a)(l,2),c=i[0],s=i[1],m=function(e){var t=e.target,n=t.name,o=t.value;r(Object(I.a)(Object(I.a)({},a),{},Object(W.a)({},n,o))),console.log("this is the value",o)};return o.a.createElement(C.a,{container:!0,style:ne,justify:"center",alignItems:"center",direction:"column"},o.a.createElement(C.a,{item:!0},o.a.createElement(k,null)),o.a.createElement(C.a,{item:!0},o.a.createElement(F,null)),o.a.createElement(C.a,{item:!0},o.a.createElement(x.a,{style:U},"Playlist Title"),o.a.createElement(_.a,{value:a.name,style:X,name:"name",onChange:m,type:"text",placeholder:"Cartoon movies"})),o.a.createElement(C.a,{item:!0},o.a.createElement(x.a,{style:Z},"Description"),o.a.createElement(_.a,{value:a.description,style:ee,name:"description",onChange:m,type:"text",placeholder:"Love me some good cartoon movies",id:"outlined-multiline-static",multiline:!0,rows:4,variant:"filled"})),o.a.createElement(C.a,{item:!0},o.a.createElement(B,{style:te,onClick:function(e){e.preventDefault(),K(a).then((function(e){s(!0)})).catch((function(e){console.log(e)})),console.log("this is the playlist object",a)}},o.a.createElement(x.a,{style:ae},"Create")),o.a.createElement(T,{message:"Created~",type:"success",openState:c,onClose:function(e,t){"clickaway"!==t&&s(!1)}})))}var U={fontFamily:"Luckiest Guy",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",lineHeight:"24px",color:"#000000",position:"absolute",width:"74.7%",height:"3.5%",left:"5%",top:"30%"},X={position:"absolute",width:"85%",height:"5.4%",left:"5%",top:"35%",background:"#EEEEEE",border:"1px solid #000000",boxSizing:"border-box",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},Z={fontFamily:"Luckiest Guy",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",lineHeight:"24px",color:"\t#000000",position:"absolute",width:"34.8%",height:"9.3%",left:"5%",top:"45%"},ee={position:"absolute",width:"85%",height:"15.1%",left:"5%",top:"50%",background:"#EEEEEE",border:"1px solid #000000",boxSizing:"border-box",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},te={position:"absolute",width:"32.3%",height:"4.7%",left:"5%",top:"69%",background:"#BA0FF7",borderRadius:"18px"},ae={fontFamily:"Luckiest Guy",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",lineHeight:"24px"},ne={backgroundColor:"#FF5200",width:"100vw",height:"100vh",flewgrow:"1"},oe=a(106),re={position:"absolute",width:"85%",height:"6.8%",left:"8.2%",right:"6.3%",top:"30%",background:"#EEEEEE",border:"1px solid #000000",boxSizing:"borderBox",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",marginLeft:"theme.spacing(1)",flex:1,justifyContent:"center"},le={position:"absolute",width:"44.1%",height:"5.4%",left:"8.2%",right:"47.1%",top:"39.8%",bottom:"15.9%",background:"#BA0FF7",borderRadius:"18px",fontFamily:"Luckiest Guy",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",lineHeight:"24px"},ie=function(e){return o.a.createElement(C.a,null,o.a.createElement(oe.a,{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",placeholder:"Search for a Movie",style:re,id:"search"}),o.a.createElement("br",null),o.a.createElement(N.a,Object.assign({style:le,onClick:e.handleFormSubmit},e)," Search "))},ce=a(140),se=a(142),me=a(141),ue=a(69),he=Object(u.a)((function(e){return{mediaStyle:{paddingTop:"150%"}}}));var pe={position:"absolute",left:"7%",top:"55%",margin:"0px auto",backgroundColor:"#FFFF00",fontFamily:"Roboto",width:"50%"},de={height:"100%"},fe=function(e){var t=he();return Object(ue.a)(),o.a.createElement(ce.a,{style:pe},o.a.createElement(me.a,{className:t.mediaStyle,image:e.src}),o.a.createElement(se.a,{style:de},o.a.createElement("h4",null,"Director: ",e.director),o.a.createElement("h4",null,"Genre: ",e.genre),o.a.createElement("h4",null,"Released: ",e.released)))},ge=Object(u.a)((function(){return{title:{fontFamily:"Luckiest Guy",position:"absolute",width:"38.7%",height:"6.6%",left:"7%",top:"50%",textAlign:"center"}}})),be=function(e){var t=ge();return o.a.createElement(x.a,Object.assign({variant:"h4",className:t.title},e))},Ee=a(143),ye=a(147),ve=a(144),xe=Object(u.a)((function(e){var t;return{root:{width:"100%",maxWidth:360,position:"absolute",left:"100%",top:"47%"},playlistButton:(t={background:"#BA0FF7",borderRadius:"12px",fontFamily:"Luckiest Guy",fontStyle:"bold",fontSize:"24px",lineHeight:"24px",width:"150px",height:"40px"},Object(W.a)(t,"borderRadius","17px"),Object(W.a)(t,"backgroundColor","#0000FF"),Object(W.a)(t,"top","55%"),Object(W.a)(t,"right","43%"),Object(W.a)(t,"margin","10px"),t)}}));function je(e){var t=Object(n.useState)([]),a=Object(H.a)(t,2),r=a[0],l=a[1],i=xe();return Object(n.useEffect)((function(){q().then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement(Ee.a,{component:"nav",className:i.root},r.map((function(t){return o.a.createElement(ye.a,Object.assign({key:t._id,className:i.playlistButton},e),o.a.createElement(ve.a,null," ",t.name," "))})))}var Fe={fontFamily:"Luckiest Guy",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",lineHeight:"24px",color:"#FFFFFF",textAlign:"center",position:"absolute",width:"71.9%",height:"3.5%",left:"6%",top:"25%"},Oe={fontFamily:"Luckiest Guy",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",lineHeight:"24px",color:"#FFFFFF"},we={color:"#FFFFFF",bottom:"250px",position:"absolute",fontSize:"3em",fontFamily:"Luckiest Guy",width:"71.9%",height:"3.5%",left:"7%",top:"13%"},Se={backgroundColor:"#FF5200",width:"200vw",height:"200vh",flewgrow:"1"},ke=function(){var e,t,a,r,l,i,c=Object(n.useState)(""),s=Object(H.a)(c,2),m=s[0],u=s[1],h=Object(n.useState)({}),p=Object(H.a)(h,2),d=p[0],f=p[1];return o.a.createElement(C.a,{container:!0,style:Se,justify:"center",alignItems:"center",direction:"column"},o.a.createElement(C.a,(e={item:!0},Object(W.a)(e,"item",!0),Object(W.a)(e,"xs",6),Object(W.a)(e,"lg",10),e),o.a.createElement(k,null)),o.a.createElement(C.a,(t={item:!0},Object(W.a)(t,"item",!0),Object(W.a)(t,"xs",6),Object(W.a)(t,"lg",10),t),o.a.createElement(F,{style:we})),o.a.createElement(C.a,(a={item:!0},Object(W.a)(a,"item",!0),Object(W.a)(a,"xs",6),Object(W.a)(a,"lg",10),a),o.a.createElement(x.a,{style:Fe},"Search YO' MOOOVIE"),o.a.createElement(ie,{value:m.result,handleInputChange:function(e){var t=e.target.value;u(t),console.log("this is the value",t)},handleFormSubmit:function(e){var t;e.preventDefault(),t=m,console.log(t),V(t).then((function(e){console.log(e.data),f({title:e.data.Title,director:e.data.Director,genre:e.data.Genre,poster:e.data.Poster,released:e.data.Released})})).catch((function(e){console.log(e)}))}})),o.a.createElement(C.a,(i={item:!0},Object(W.a)(i,"item",!0),Object(W.a)(i,"xs",6),Object(W.a)(i,"lg",10),i),d.title?o.a.createElement(C.a,{container:!0,style:Se,justify:"center",alignItems:"center",direction:"row"},o.a.createElement(C.a,(r={item:!0},Object(W.a)(r,"item",!0),Object(W.a)(r,"xs",6),Object(W.a)(r,"lg",10),r),o.a.createElement(be,null,d.title||"Search for a movie to begin"),o.a.createElement(fe,{src:d.poster,director:d.director,genre:d.genre,released:d.released})),o.a.createElement(C.a,(l={item:!0},Object(W.a)(l,"item",!0),Object(W.a)(l,"xs",6),Object(W.a)(l,"lg",10),l),o.a.createElement(je,{onClick:function(e){e.preventDefault(),Y(Object(I.a)({},d)).then((function(e){console.log(e),console.log("I saved the movie!")})).catch((function(e){console.log(e)}))}}))):o.a.createElement(x.a,{style:Oe},"No Results to Display")))},Ce=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function ze(e){return o.a.createElement(ye.a,Object.assign({button:!0,component:"a"},e))}function Ge(){var e=Object(n.useState)([]),t=Object(H.a)(e,2),a=t[0],r=t[1];Ce();return Object(n.useEffect)((function(){q().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement(C.a,{container:!0,style:Le,justify:"center",alignItems:"center",direction:"column"},o.a.createElement(C.a,{item:!0},o.a.createElement(k,null)),o.a.createElement(C.a,{item:!0},o.a.createElement(F,null)),o.a.createElement(C.a,{item:!0},o.a.createElement(Ee.a,{component:"nav","aria-label":"all-playlist"},a.map((function(e){return o.a.createElement(ye.a,{button:e._id},o.a.createElement(ze,{href:"/playlists/"+e._id},o.a.createElement(ve.a,null,e.title),o.a.createElement(ve.a,null,e.description)))})))))}var Le={backgroundColor:"#FF5200",width:"100vw",height:"100vh",flewgrow:"1"},We=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function Ie(){var e=Object(n.useState)([]),t=Object(H.a)(e,2),a=t[0],r=t[1];We();return Object(n.useEffect)((function(){$().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement(C.a,{container:!0,style:He,justify:"center",alignItems:"center",direction:"column"},o.a.createElement(C.a,{item:!0},o.a.createElement(k,null)),o.a.createElement(C.a,{item:!0},o.a.createElement(F,null)),o.a.createElement(C.a,{item:!0},o.a.createElement(Ee.a,{component:"nav","aria-label":"all-movies"},a.map((function(e){return o.a.createElement(C.a,{item:!0,xs:11,sm:4,key:e._id},o.a.createElement(fe,{id:e._id,title:e.title,director:e.director,genre:e.genre,released:e.released}))})))))}var He={backgroundColor:"#FF5200",width:"100vw",height:"100vh",flewgrow:"1"};var Ne=function(){return o.a.createElement(i.a,null,o.a.createElement(c.a,{exact:!0,path:"/",component:z}),o.a.createElement(c.a,{exact:!0,path:"/create",component:Q}),o.a.createElement(c.a,{exact:!0,path:"/search",component:ke}),o.a.createElement(c.a,{exact:!0,path:"/playlist",component:Ge}),o.a.createElement(c.a,{exact:!0,path:"/movies",component:Ie}),o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports=a.p+"static/media/logo.1b672e7e.png"},74:function(e,t,a){e.exports=a(103)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.ac03a8e6.chunk.js.map