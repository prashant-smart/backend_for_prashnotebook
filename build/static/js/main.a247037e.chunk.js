(this.webpackJsonpprashnotebook=this.webpackJsonpprashnotebook||[]).push([[0],{17:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(19),r=a.n(c),l=(a(27),a(5)),i=(a(28),a(12)),o=a(2),d=a(11),b=a(6),j=(a(17),Object(n.createContext)()),h=Object(n.createContext)(),u=a(0),m=function(e){var t=Object(n.useContext)(h).darkMode,a=Object(n.useContext)(j).addNote,s=Object(n.useState)({title:"",discription:"",tag:""}),c=Object(l.a)(s,2),r=c[0],i=c[1],o=function(e){i(Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)("div",{className:"my-3",children:[Object(u.jsx)("h1",{className:"text-".concat("light"===t?"dark":"light"),children:"Add a note"}),Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"form-group my-2",children:[Object(u.jsx)("label",{htmlFor:"title",className:"text-".concat("light"===t?"dark":"light"),children:"Title"}),Object(u.jsx)("input",{id:"title",name:"title",type:"text",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter Title Here",onChange:o,minLength:5,required:!0,value:r.title})]}),Object(u.jsxs)("div",{className:"form-group my-2",children:[Object(u.jsx)("label",{htmlFor:"discription",className:"text-".concat("light"===t?"dark":"light"),children:"Description"}),Object(u.jsx)("input",{type:"text",value:r.discription,className:"form-control",id:"discription",name:"discription","aria-describedby":"emailHelp",placeholder:"Type Description Here",onChange:o,minLength:5,required:!0})]}),Object(u.jsxs)("div",{className:"form-group my-2",children:[Object(u.jsx)("label",{htmlFor:"tag",className:"text-".concat("light"===t?"dark":"light"),children:"Tag"}),Object(u.jsx)("input",{value:r.tag,type:"text",className:"form-control",id:"tag",name:"tag","aria-describedby":"emailHelp",placeholder:"Type tag Here",onChange:o,minLength:5,required:!0})]}),Object(u.jsx)("button",{type:"submit",disabled:r.title.length<5||r.discription.length<5,className:"btn btn-hover btn-primary my-2 ",onClick:function(t){t.preventDefault(),a(r.title,r.discription,r.tag),i({title:"",discription:"",tag:""}),e.showAlert("Added Successfully","success")},children:"Add Note"})]})]})};var p=function(e){var t=Object(n.useContext)(j).deleteNote,a=e.note,s=e.updateNote;return Object(u.jsx)("div",{className:"col-md-3 my-2",children:Object(u.jsxs)("div",{className:"card",children:[a.tag?Object(u.jsxs)("span",{className:"position-absolute top-0 translate-middle badge rounded-pill bg-danger",style:{zIndex:"1",left:"90%"},children:["Tag: ",a.tag.length>10?a.tag.substr(0,10)+"...":a.tag,Object(u.jsx)("span",{className:"visually-hidden",children:"unread messages"})]}):"",Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h5",{className:"card-title",children:[Object(u.jsx)("strong",{children:"Title: "}),a.title]}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{className:"card-text",children:a.discription}),Object(u.jsx)("i",{className:"fas fa-trash-alt mx-2",onClick:function(){t(a._id),e.showAlert("Deleted Successfully","success")}}),Object(u.jsx)("i",{className:"fas fa-edit mx-3",onClick:function(){s(a)}})]})]})})},g=function(e){var t=Object(n.useContext)(j),a=t.notes,s=t.getAllNotes,c=t.editNote,r=Object(n.useState)({id:"",etitle:"",edescription:"",etag:""}),i=Object(l.a)(r,2),g=i[0],x=i[1],O=Object(n.useRef)(null),f=Object(n.useRef)(null),N=Object(o.f)(),v=Object(n.useContext)(h).darkMode,y=function(e){f.current.click(),x({id:e._id,etitle:e.title,edescription:e.discription,etag:e.tag})},k=function(e){x(Object(b.a)(Object(b.a)({},g),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(n.useEffect)((function(){localStorage.getItem("token")?s(""):N.push("/login_signup")}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{showAlert:e.showAlert}),Object(u.jsx)("button",{ref:f,type:"button",className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}),Object(u.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Edit Note"}),Object(u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsxs)("form",{className:"my-3",children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"etitle",name:"etitle",value:g.etitle,"aria-describedby":"emailHelp",onChange:k,minLength:5,required:!0})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"edescription",name:"edescription",value:g.edescription,onChange:k,minLength:5,required:!0})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"etag",name:"etag",value:g.etag,onChange:k})]})]})}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{ref:O,type:"button",className:"btn btn-cancel btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(u.jsx)("button",{disabled:g.etitle.length<5||g.edescription.length<5,onClick:function(t){t.preventDefault(),c(g.id,g.etitle,g.edescription,g.etag),O.current.click(),e.showAlert("Update Successfully","success")},type:"button",className:"btn btn-primary",children:"Update Note"})]})]})})}),Object(u.jsxs)("div",{className:"row my-3",children:[Object(u.jsx)("h1",{className:"text-".concat("light"===v?"dark":"light"),children:"Your Note"}),0===a.length?Object(u.jsx)("h5",{className:"text-".concat("light"===v?"dark":"light"),children:"No Notes To Display"}):null,a.map((function(t){return Object(u.jsx)(p,{updateNote:y,showAlert:e.showAlert,note:t},t._id)}))]})]})},x=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(g,{showAlert:e.showAlert})})},O=function(){var e=Object(n.useContext)(h).darkMode;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"text-".concat("light"===e?"dark":"light"),children:"About Us !"}),Object(u.jsxs)("h2",{className:"text-".concat("light"===e?"dark":"light"),style:{"text-align":"center"},children:["Welcome To ",Object(u.jsx)("span",{id:"W_Name1",className:"text-".concat("light"===e?"dark":"light"),children:"PrashNoteBook"})]}),Object(u.jsxs)("p",{className:"text-".concat("light"===e?"dark":"light"),children:[Object(u.jsx)("strong",{children:"PrashNoteBook "}),Object(u.jsx)("i",{children:"(Quickly Capture What\u2019s on your mind)"}),"  is a secure platform that provides you a safe space where you can make notes. Quickly capture precious ideas when inspiration strikes in here, add to-do lists and photos and more. When we go to the market we forget what to buy many times, here you can make a list of what to buy and delete it later. You can save your notes as pictures for easier sharing on social media platforms. You can add infinite notes and you can keep them as long as you want and your data will be safe here."]}),Object(u.jsxs)("p",{className:"text-".concat("light"===e?"dark":"light"),style:{"font-weight":"bold","text-align":"center"},children:["Thanks For Visiting Our Site",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{style:{color:"blue","font-size":"16px","font-weight":"bold","text-align":"center"},className:"text-".concat("light"===e?"dark":"light"),children:"Have a nice day !"})]}),Object(u.jsxs)("p",{style:{"text-align":"end"},className:"text-".concat("light"===e?"dark":"light"),children:["Credit: ",Object(u.jsx)("i",{children:"Tanishk Jain"})]})]})},f=a(4),N=a.n(f),v=a(10),y=function(){var e=Object(o.g)(),t=Object(o.f)(),a=Object(n.useContext)(j).getAllNotes,s=Object(n.useContext)(h),c=s.darkMode,r=s.toggleDarkMode,d=Object(n.useRef)(null),b=Object(n.useState)({name:"",email:"",date:""}),m=Object(l.a)(b,2),p=m[0],g=m[1],x=function(){var e=Object(v.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/auth/getuser",{method:"POST",headers:{"auth-token":localStorage.getItem("token")}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,g({name:a.name,email:a.email,date:a.date.substr(0,10)});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){"/login_signup"!==e.pathname&&x()}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-".concat(c," bg-").concat(c),children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(i.b,{className:"navbar-brand",to:"/",children:"PrashNotes"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(u.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(i.b,{className:"nav-link ".concat("/"===e.pathname?"active":""),"aria-current":"page",to:"/",children:"Home"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(i.b,{className:"nav-link ".concat("/about"===e.pathname?"active":""),to:"/about",children:"About"})})]}),"/"===e.pathname?Object(u.jsxs)("form",{className:"d-flex mx-3",children:[Object(u.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search Title","aria-label":"Search",onChange:function(e){a(e.target.value)}}),Object(u.jsx)("i",{className:"fas fa-user-circle fa-2x mx-1 mt-1 text-".concat("light"===c?"dark":"light"),onClick:function(){d.current.click()}})]}):"",Object(u.jsxs)("div",{className:"form-check form-switch my-2",children:[Object(u.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:r}),Object(u.jsx)("label",{className:"form-check-label text-".concat("light"===c?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"".concat("light"===c?"Dark Mode":"Light Mode")})]}),Object(u.jsx)("form",{className:"d-flex mx-3",children:localStorage.getItem("token")?Object(u.jsx)("button",{className:"btn btn-hover btn-primary mx-1",onClick:function(){localStorage.removeItem("token"),t.push("/login_signup")},children:"Log Out"}):Object(u.jsx)(i.b,{className:"Link btn btn-hover btn-primary mx-1 my-2",to:"/login_signup",role:"button",children:"Sign Up"})})]})]})}),Object(u.jsx)("button",{type:"button",style:{display:"none"},className:"btn btn-primary","data-bs-toggle":"modal",ref:d,"data-bs-target":"#exampleModalNavbar"}),Object(u.jsx)("div",{className:"modal fade",id:"exampleModalNavbar",tabIndex:"-1","aria-labelledby":"exampleModalNavbarLabel","aria-hidden":"true",children:Object(u.jsx)("div",{className:"modal-dialog modal-sm",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",id:"exampleModalNavbarLabel",children:Object(u.jsx)("strong",{children:"Account Details"})}),Object(u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(u.jsx)("div",{className:"modal-body ",children:Object(u.jsxs)("div",{className:"",children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"UserName : "}),p.name]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Email : "}),p.email]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Date Of SignUp: "}),p.date]})]})})]})})})]})},k=function(e){var t="http://localhost:5000",a=Object(n.useState)([]),s=Object(l.a)(a,2),c=s[0],r=s[1],i=function(){var e=Object(v.a)(N.a.mark((function e(a){var n,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/fetchallnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,""!==a&&(s=s.filter((function(e){return e.title.includes(a)}))),r(s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(v.a)(N.a.mark((function e(a){var n,s,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenote/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:n=e.sent,s=n.json(),console.log(s),l=c.filter((function(e){return e._id!==a})),r(l);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(v.a)(N.a.mark((function e(a,n,s,l){var i,o,d;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenote/").concat(a),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:n,discription:s,tag:l})});case 2:return i=e.sent,e.next=5,i.json();case 5:o=e.sent,d=c.map((function(e){return e._id===a?o.note:e})),r(d);case 8:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}(),b=function(){var e=Object(v.a)(N.a.mark((function e(a,n,s){var l,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,discription:n,tag:s})});case 2:return l=e.sent,e.next=5,l.json();case 5:i=e.sent,r(c.concat(i));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(u.jsx)(j.Provider,{value:{getAllNotes:i,notes:c,deleteNote:o,addNote:b,editNote:d},children:e.children})},w=function(e){localStorage.getItem("darkMode")||localStorage.setItem("darkMode","light");var t=Object(n.useState)(localStorage.getItem("darkMode")),a=Object(l.a)(t,2),s=a[0],c=a[1];document.getElementsByTagName("BODY")[0].style.backgroundColor="dark"===s?"rgb(41, 43, 44)":"white";return Object(u.jsx)(h.Provider,{value:{darkMode:s,toggleDarkMode:function(){"dark"===localStorage.getItem("darkMode")?(c("light"),localStorage.setItem("darkMode","light")):(c("dark"),localStorage.setItem("darkMode","dark")),document.getElementsByTagName("BODY")[0].style.backgroundColor="dark"===s?"rgb(41, 43, 44)":"white"}},children:e.children})};var C=function(e){return Object(u.jsx)("div",{className:"mt-5 ",style:{height:"50px"},children:e.alert&&Object(u.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(u.jsx)("strong",{children:function(e){"danger"===e&&(e="error");var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},S=a(22),T=(a(39),["handleChange","label"]),A=function(e){var t=e.handleChange,a=e.label,n=Object(S.a)(e,T);return Object(u.jsxs)("div",{className:"group",children:[Object(u.jsx)("input",Object(b.a)({className:"form-input",onChange:t},n)),a?Object(u.jsx)("label",{className:"".concat(n.value.length?"shrink":""," form-input-label"),children:a}):null]})},M=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(l.a)(t,2),s=a[0],c=a[1],r=s.email,i=s.password,j=Object(o.f)(),m=Object(n.useContext)(h).darkMode,p=function(e){c(Object(b.a)(Object(b.a)({},s),{},Object(d.a)({},e.target.name,e.target.value)))},g=function(){var t=Object(v.a)(N.a.mark((function t(a){var n,s;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:i})});case 3:return n=t.sent,t.next=6,n.json();case 6:(s=t.sent).sucess?(c({email:"",password:""}),localStorage.setItem("token",s.authToken),j.push("/"),e.showAlert("Logged In Successfully","success")):e.showAlert("Worng Details","danger");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"mx-5 my-5 container ",children:[Object(u.jsx)("h2",{className:"text-".concat("light"===m?"dark":"light"),children:"I already have an account"}),Object(u.jsx)("span",{className:"text-".concat("light"===m?"dark":"light"),children:"Sign in with your email and password"}),Object(u.jsxs)("form",{onSubmit:g,children:[Object(u.jsx)(A,{name:"email",type:"email",handleChange:p,value:r,label:"Email",required:!0}),Object(u.jsx)(A,{name:"password",type:"password",value:i,handleChange:p,label:"Password",required:!0}),Object(u.jsx)("button",{disabled:""===i||""===r,type:"submit",className:"btn  btn-outline-".concat("light"===m?"dark":"light"," btn-m"),children:" Login "})]})]})},D=function(e){var t=Object(n.useContext)(h).darkMode,a=Object(o.f)(),s=Object(n.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(l.a)(s,2),r=c[0],i=c[1],j=r.email,m=r.password,p=r.displayName,g=r.confirmPassword,x=function(e){i(Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},e.target.name,e.target.value)))},O=function(){var t=Object(v.a)(N.a.mark((function t(n){var s,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("http://localhost:5000/api/auth/createuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:p,email:j,password:m})});case 3:return s=t.sent,t.next=6,s.json();case 6:(c=t.sent).sucess?(i({displayName:"",email:"",password:"",confirmPassword:""}),localStorage.setItem("token",c.authToken),a.push("/"),e.showAlert("Account Created Successfully","success")):e.showAlert("Wrong Details","danger");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"sign-up mx-5 container my-5",children:[Object(u.jsx)("h2",{className:"title text-".concat("light"===t?"dark":"light"),children:" I Do Not Have Account"}),Object(u.jsx)("span",{className:"text-".concat("light"===t?"dark":"light"),children:"Sign Up With Your Email and Password"}),Object(u.jsxs)("form",{className:"sign-up-form",onSubmit:O,children:[Object(u.jsx)(A,{type:"text",name:"displayName",value:p,onChange:x,label:"Display Name",required:!0}),Object(u.jsx)(A,{type:"email",name:"email",value:j,onChange:x,label:"Email",required:!0,minLength:5}),Object(u.jsx)(A,{type:"password",name:"password",value:m,onChange:x,label:"Password",minLength:5,required:!0}),Object(u.jsx)(A,{type:"password",name:"confirmPassword",value:g,onChange:x,label:"Confirm Password",minLength:5,required:!0}),Object(u.jsxs)("button",{disabled:!(m===g&&m.length>5&&""!==j&&""!==p),type:"submit",className:"btn  btn-outline-".concat("light"===t?"dark":"light"," btn-m"),children:[" ","Sign Up"]})]})]})},I=function(e){return Object(u.jsxs)("div",{className:"container d-flex flex-wrap",children:[Object(u.jsx)(M,{showAlert:e.showAlert}),Object(u.jsx)(D,{showAlert:e.showAlert})]})};var L=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],s=t[1],c=function(e,t){s({msg:e,type:t}),setTimeout((function(){s(null)}),1500)};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(k,{children:Object(u.jsx)(w,{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(y,{}),Object(u.jsx)(C,{alert:a}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)(x,{showAlert:c})}),Object(u.jsx)(o.a,{exact:!0,path:"/about",children:Object(u.jsx)(O,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/login_signup",children:Object(u.jsx)(I,{showAlert:c})})]})})]})})})})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a247037e.chunk.js.map