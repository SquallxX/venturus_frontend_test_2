(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){},29:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(26),i=a.n(r),l=a(20),o=a(8),c=a(9),m=a(11),u=a(10),h=a(12),d=(a(24),a(18),a(4)),p=a(2),f=a(16),b=a(7),E=a(3);b.b.add(p.a);var g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={displayMenu:!1,initials:"UN",name:"USER'S NAME"},e.showDropdownMenu=e.showDropdownMenu.bind(Object(E.a)(e)),e.hideDropdownMenu=e.hideDropdownMenu.bind(Object(E.a)(e)),e.escFunction=e.escFunction.bind(Object(E.a)(e)),e.funcLogOut=e.funcLogOut.bind(Object(E.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"showDropdownMenu",value:function(e){var t=this;e.preventDefault(),"true"===sessionStorage.userlogin&&this.setState({displayMenu:!0},function(){document.addEventListener("click",t.hideDropdownMenu)})}},{key:"hideDropdownMenu",value:function(e){var t=this;this.setState({displayMenu:!1},function(){document.removeEventListener("click",t.hideDropdownMenu)})}},{key:"escFunction",value:function(e){var t=this;"Escape"===e.key&&this.setState({displayMenu:!1},function(){document.removeEventListener("keydown",t.hideDropdownMenu)})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escFunction,!1),void 0===sessionStorage.iniciando?(sessionStorage.setItem("iniciando","1"),this.setState({initials:this.state.initials,name:this.state.name})):this.setState({initials:sessionStorage.initials,name:sessionStorage.logname})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escFunction,!1)}},{key:"funcLogOut",value:function(e){e.preventDefault(),sessionStorage.setItem("initials","UN"),sessionStorage.setItem("logname","USER'S NAME"),sessionStorage.removeItem("userlogin"),this.setState({initials:sessionStorage.initials,name:sessionStorage.logname}),sessionStorage.removeItem("infouser"),sessionStorage.removeItem("count"),sessionStorage.removeItem("teste"),sessionStorage.removeItem("formInfo"),sessionStorage.removeItem("segIf"),window.location.reload()}},{key:"render",value:function(){return n.a.createElement("section",{className:"direita"},n.a.createElement("div",{className:"iniciais-usuario",onClick:this.showDropdownMenu},this.state.initials),n.a.createElement("div",{className:"dropdown"},n.a.createElement("button",{onClick:this.showDropdownMenu,className:"buttonu",type:"button",name:"user-information"},this.state.name,n.a.createElement(d.a,{icon:p.a,onClick:this.showDropdownMenu,className:"fas fa-angle-down"})),this.state.displayMenu?n.a.createElement("div",{id:"myDropdown",className:"dropdown-content"},n.a.createElement("a",{href:"#friends",className:"topd"},"Friends List"),n.a.createElement("a",{href:"#itens"},"Saved Items"),n.a.createElement("a",{href:"#notes"},"Notifications"),n.a.createElement("a",{href:"#prefs"},"User Preferences"),n.a.createElement("hr",{className:"drpline"}),n.a.createElement("a",{href:"#logout",onClick:this.funcLogOut},"Log out")):null))}}]),t}(s.Component);b.b.add(p.g,p.d,p.a,p.b,p.f,p.i,p.e,p.j);var y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){void 0===sessionStorage.userlogin&&(sessionStorage.setItem("initials","UN"),sessionStorage.setItem("logname","USER'S NAME"))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("header",{className:"cabecalho"},n.a.createElement("div",{className:"container1"},n.a.createElement("section",{className:"esquerda"},n.a.createElement(d.a,{icon:p.g,className:"fas fa-square"}),n.a.createElement(d.a,{icon:p.j,className:"fas fa-volleyball-ball"}),n.a.createElement("h3",{className:"titulo"},"Venturus Sports")),n.a.createElement(g,null)),n.a.createElement("section",{className:"exten"},n.a.createElement("div",{className:"container cont2"},n.a.createElement("a",{href:"/"},n.a.createElement(d.a,{icon:p.d,className:"fa-home",href:"home"})),n.a.createElement(d.a,{icon:p.b,className:"fas fa-angle-right"}),n.a.createElement("a",{href:"/users",className:"pagen",to:"/users"},"Users"),n.a.createElement(d.a,{icon:p.b,className:"fas fa-angle-right"}),n.a.createElement("a",{href:"/users/new",className:"pagen"},"Registration"))),n.a.createElement("div",{className:"container cont3"},n.a.createElement("section",{className:"cont2esq"},n.a.createElement("section",{className:"sport-type"},n.a.createElement(d.a,{icon:p.f,className:"fa fa-puzzle-piece"}),n.a.createElement("div",null,n.a.createElement("a",{href:"#sport",className:"cable1"},"sport type"),n.a.createElement("br",null),n.a.createElement("a",{href:"#cycling",className:"cable2"},"Cycling"))),n.a.createElement("section",{className:"mode"},n.a.createElement(d.a,{icon:p.i,className:"fas fa-trophy"}),n.a.createElement("aside",null,n.a.createElement("a",{href:"#mode",className:"cable1"},"mode"),n.a.createElement("br",null),n.a.createElement("a",{href:"#advanced",className:"cable2"},"Advanced"))),n.a.createElement("section",{className:"route"},n.a.createElement(d.a,{icon:p.e,className:"fas fa-map-signs"}),n.a.createElement("div",null,n.a.createElement("a",{href:"#route",className:"cable1"},"Route"),n.a.createElement("br",null),n.a.createElement("a",{href:"#miles",className:"cable2"},"30 miles")))),n.a.createElement("section",null,n.a.createElement("a",{href:"# "},"     ")))),n.a.createElement("main",null,this.props.children))}}]),t}(s.Component),v=a(14),N=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,'Welcome to "Home"!!'),n.a.createElement("p",null,"To go to another page, select your destination in the breadcrumb."),n.a.createElement("p",null,'To logon an user just save the first information in the form (in "Registration"), after this you can add more users to the list of the first logged user.'),n.a.createElement("p",null,"After the login of an user, its name will apear on the head and the dropdown menu will be available. In the dropdown menu your can logout and log in another user in registration form again."),n.a.createElement("h3",null,"Enjoy!")),n.a.createElement("div",{className:"content",id:"content"}))},S=a(17),k=a.n(S),w=a(13),j=a.n(w);b.b.add(p.h);var D=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={tabela:[],search:""},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"obterDadosDasPhotos",value:function(){var e=[];return k.a.ajax({url:"https://jsonplaceholder.typicode.com/photos",dataType:"json",success:function(t){var a=0,s=0;return t.some(function(n){if(0===a)e[s]=1;else if(n.albumId===t[a-1].albumId)e[s]=e[s]+1;else if(n.albumId!==t[a-1].albumId){if(11===n.albumId)return e;e[s+=1]=1}a+=1}),e},async:!1,error:function(e){400===e.status&&alert("It wasn\xb4t possible to get information about photos.")}}),e}},{key:"obterDadosDosAlbums",value:function(){var e=[];return k.a.ajax({url:"https://jsonplaceholder.typicode.com/albums",dataType:"json",success:function(t){var a=0,s=0;return t.forEach(function(n){if(0===a?e[s]=1:n.userId===t[a-1].userId?e[s]=e[s]+1:n.userId!==t[a-1].userId&&(e[s+=1]=1),a===t.length-1)return e;a+=1}),e},error:function(e){400===e.status&&alert("It wasn\xb4t possible to get information about albums.")}}),e}},{key:"obterDadosDosPosts",value:function(){var e=[];return k.a.ajax({url:"https://jsonplaceholder.typicode.com/posts",dataType:"json",success:function(t){var a=0,s=0;return t.forEach(function(n){if(0===a?e[s]=1:n.userId===t[a-1].userId?e[s]=e[s]+1:n.userId!==t[a-1].userId&&(e[s+=1]=1),a===t.length-1)return e;a+=1}),e},async:!1,error:function(e){400===e.status&&alert("It wasn\xb4t possible to get information about posts.")}}),e}},{key:"geraRide",value:function(){var e=Math.floor(3*Math.random()+1);return 1===e?e="Always":2===e?e="Sometimes":3===e&&(e="Never"),e}},{key:"geraDays",value:function(){var e=Math.floor(2*Math.random()),t=Math.floor(2*Math.random()),a=Math.floor(2*Math.random()),s=Math.floor(2*Math.random()),n=Math.floor(2*Math.random()),r=Math.floor(2*Math.random()),i=Math.floor(2*Math.random()),l=0,o=0,c=[],m="";return 1===e&&(c.push("Sun"),o+=1),1===i&&(c.push("Sat"),o+=1),1===t&&(c.push("Mon"),l+=1),1===a&&(c.push("Tue"),l+=1),1===s&&(c.push("Wed"),l+=1),1===n&&(c.push("Thu"),l+=1),1===r&&(c.push("Fri"),l+=1),""!==(m=2===o&&5===l?"Every day":2===o&&0===l?"Weekends":5===l&&0===o?"Week days":0===l&&0===o?"Sun":c)&&""!==m||(m="Sat"),m}},{key:"colocarDadosUsuariosTabela",value:function(e,t,a){if(k.a.ajax({url:"https://jsonplaceholder.typicode.com/users",dataType:"json",success:function(s){var n=[],r=0,i=this;s.forEach(function(s){var l=i.geraRide(),o=i.geraDays(),c={id:s.id,username:s.username,name:s.name,email:s.email,city:s.address.city,lat:s.address.geo.lat,lng:s.address.geo.lng,ride:l.toString(),days:o.toString(),posts:e[r],albums:t[r],photos:a[r],trash:" ",newClass:""};n.push(c),r+=1}),j.a.publish("info-tabela",n),this.setState({tabela:n})}.bind(this),error:function(e){400===e.status&&alert("It wasn\xb4t possible to get information about users.")}}),"yes"===sessionStorage.formInfo){var s,n=JSON.parse(sessionStorage.infouser);if(s={id:n.id,username:n.username,name:n.name,email:n.email,city:n.city,ride:n.ride,days:n.realDays,posts:n.posts,albums:n.albums,photos:n.photos,trash:" ",newClass:""},"true"===sessionStorage.userlogin&&void 0!==sessionStorage.infouser&&void 0===sessionStorage.segIf&&void 0===sessionStorage.count&&j.a.subscribe("info-tabela",function(e,t){t.push(s),sessionStorage.setItem("count","1"),sessionStorage.setItem("teste",JSON.stringify(t)),sessionStorage.formInfo="n\xe3o",this.setState({tabela:t})}.bind(this)),"yes"===sessionStorage.segIf){var r=JSON.parse(sessionStorage.teste);r.push(s),sessionStorage.setItem("teste",JSON.stringify(r)),sessionStorage.formInfo="n\xe3o";var i=Number(sessionStorage.count);i+=1,sessionStorage.count=i}}else if(void 0!==sessionStorage.teste&&"n\xe3o"===sessionStorage.formInfo){var l=JSON.parse(sessionStorage.teste);this.setState({tabela:l})}}},{key:"componentDidMount",value:function(){var e=this;if("true"===sessionStorage.userlogin&&"n\xe3o"===sessionStorage.formInfo){var t=JSON.parse(sessionStorage.teste);this.setState({tabela:t})}else Promise.all([this.obterDadosDasPhotos(),this.obterDadosDosAlbums(),this.obterDadosDosPosts()]).then(function(t){e.colocarDadosUsuariosTabela(t[2],t[1],t[0])}).catch(function(e){return console.log(e)})}},{key:"atualizaEstado",value:function(e){this.setState({search:e.target.value.substr(0,30)})}},{key:"excluirLinha",value:function(e){var t=this;if(window.confirm("To confirm press OK.")){var a=this.state.tabela.filter(function(t,a){if(a!==e)return t});this.state.tabela[e].newClass="fadeOut";var s=this.state.tabela;this.setState({tabela:s}),setTimeout(function(){t.setState({tabela:a})},510);var n=Number(sessionStorage.indextable)-1;sessionStorage.setItem("indextable",n)}}},{key:"render",value:function(){var e=this;"1"===sessionStorage.reloadHelper&&(sessionStorage.removeItem("reloadHelper"),window.location.reload());var t=this.state.tabela.filter(function(t){return-1!==t.name.toLowerCase().indexOf(e.state.search.toLowerCase())});return n.a.createElement("div",null,n.a.createElement("section",{className:"container",id:"user-info"},n.a.createElement("header",{className:"header-tabela"},n.a.createElement("h2",{className:"users"},"Users"),n.a.createElement("input",{id:"filtrar-tabela",className:"fa filtro",type:"text",placeholder:"\uf002 Filter table content by name",value:this.state.search,onChange:this.atualizaEstado.bind(this)})),n.a.createElement("div",{className:"tabela1"},n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Username"),n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"E-mail"),n.a.createElement("th",null,"City"),n.a.createElement("th",null,"Ride in group"),n.a.createElement("th",null,"Day of the week"),n.a.createElement("th",null,"Posts"),n.a.createElement("th",null,"Albums"),n.a.createElement("th",null,"Photos"),n.a.createElement("th",null))),n.a.createElement("tbody",{id:"tabela-informacoes"},t.map(function(t,a){return sessionStorage.setItem("indextable",a),n.a.createElement("tr",{key:t.id,className:t.newClass},n.a.createElement("td",null,t.username),n.a.createElement("td",null,t.name),n.a.createElement("td",{className:"info-email"},n.a.createElement("a",{href:"".concat(t.email),target:"_blank",rel:"noopener noreferrer"},t.email)),n.a.createElement("td",{className:"info-city"},n.a.createElement("a",{href:"https://www.google.com/maps/".concat(t.lat,",").concat(t.lng,",15z"),target:"_blank",rel:"noopener noreferrer"},t.city)),n.a.createElement("td",null,t.ride),n.a.createElement("td",null,t.days),n.a.createElement("td",{className:"info-posts"},t.posts),n.a.createElement("td",{className:"info-album"},t.albums),n.a.createElement("td",null,t.photos),n.a.createElement("td",{onClick:e.excluirLinha.bind(e,a)},n.a.createElement(d.a,{icon:p.h,className:"fas fa-trash-alt"}),t.trash))}))))))}}]),t}(s.Component),O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={msgerr:[]},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){j.a.subscribe("erros-validacao",function(e,t){this.setState({msgerr:t})}.bind(this)),j.a.subscribe("limpa-erros",function(e){this.setState({msgerr:[]})}.bind(this))}},{key:"render",value:function(){return n.a.createElement("ul",null,this.state.msgerr.map(function(e,t){return n.a.createElement("li",{key:t},e)}))}}]),t}(s.Component);b.b.add(p.c,f.b,f.a);var I=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={id:"",username:"",name:"",email:"",city:"",ride:null,sun:!1,mon:!1,tue:!1,wed:!1,thu:!1,fri:!1,sat:!1,realDays:"",posts:0,albums:0,photos:0},e.enviaForm=e.enviaForm.bind(Object(E.a)(e)),e.clearForm=e.clearForm.bind(Object(E.a)(e)),e.setUsername=e.setUsername.bind(Object(E.a)(e)),e.setName=e.setName.bind(Object(E.a)(e)),e.setEmail=e.setEmail.bind(Object(E.a)(e)),e.setCity=e.setCity.bind(Object(E.a)(e)),e.setRide=e.setRide.bind(Object(E.a)(e)),e.setSun=e.setSun.bind(Object(E.a)(e)),e.setMon=e.setMon.bind(Object(E.a)(e)),e.setTue=e.setTue.bind(Object(E.a)(e)),e.setWed=e.setWed.bind(Object(E.a)(e)),e.setThu=e.setThu.bind(Object(E.a)(e)),e.setFri=e.setFri.bind(Object(E.a)(e)),e.setSat=e.setSat.bind(Object(E.a)(e)),e.setDays=e.setDays.bind(Object(E.a)(e)),e.validaNewUser=e.validaNewUser.bind(Object(E.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"setDays",value:function(){var e=[],t=0,a=0;!0===this.state.sun&&(e.push("Sun"),a+=1),!0===this.state.mon&&(e.push("Mon"),t+=1),!0===this.state.tue&&(e.push("Tue"),t+=1),!0===this.state.wed&&(e.push("Wed"),t+=1),!0===this.state.thu&&(e.push("Thu"),t+=1),!0===this.state.fri&&(e.push("Fri"),t+=1),!0===this.state.sat&&(e.push("Sat"),a+=1);var s=(2===a&&5===t?"Every day":2===a&&0===t?"Weekends":5===t&&0===a?"Week days":e).toString();return this.setState({realDays:s}),s}},{key:"validaNewUser",value:function(e){var t=[];if(""===this.state.username)t.push("Username must be completed");else for(var a=0;a<t.length;a++)"Username must be completed"===t[a]&&t.splice(a,1);if(""===this.state.name)t.push("Name must be completed");else for(a=0;a<t.length;a++)"Name must be completed"===t[a]&&t.splice(a,1);if(""===this.state.email)t.push("Email must be completed");else for(a=0;a<t.length;a++)"Email must be completed"===t[a]&&t.splice(a,1);if(""===this.state.city)t.push("City must be completed");else for(a=0;a<t.length;a++)"City must be completed"===t[a]&&t.splice(a,1);if(""===this.state.ride||null===this.state.ride)t.push("'Ride in group' must be filled");else for(a=0;a<t.length;a++)"'Ride in group' must be filled"===t[a]&&t.splice(a,1);if(""===e)t.push("'Days of the week' must be checked");else for(a=0;a<t.length;a++)"'Days of the week' must be checked"===t[a]&&t.splice(a,1);j.a.publish("erros-validacao",t);var s="N\xe3o t\xe1 entrando no if";return t.length===[].length&&(t="",s="ok"),s}},{key:"enviaForm",value:function(e){e.preventDefault();var t=this.setDays(),a=this.validaNewUser(t),s=sessionStorage.indextable;if(s=Number(s)+2,"ok"===a){sessionStorage.setItem("infouser",JSON.stringify({id:s,username:this.state.username,name:this.state.name,email:this.state.email,city:this.state.city,ride:this.state.ride,realDays:this.state.realDays,posts:0,albums:0,photos:0})),sessionStorage.indextable=s;var n=this.state.name;if(void 0===sessionStorage.userlogin){sessionStorage.setItem("userlogin","true");var r=n.slice(0,1),i=n.split(" ").slice(1).toString().slice(0,1);sessionStorage.logname=n.toString(),sessionStorage.initials=r+i}sessionStorage.setItem("reloadHelper","1"),sessionStorage.setItem("formInfo","yes"),"n\xe3o"===sessionStorage.formInfo&&(sessionStorage.formInfo="yes"),void 0!==sessionStorage.count&&sessionStorage.setItem("segIf","yes"),this.props.history.push("/users")}}},{key:"clearForm",value:function(e){e.preventDefault(),this.setState({id:"",username:"",name:"",email:"",city:"",ride:null,sun:!1,mon:!1,tue:!1,wed:!1,thu:!1,fri:!1,sat:!1,realDays:"",posts:0,albums:0,photos:0}),j.a.publish("limpa-erros",{})}},{key:"setUsername",value:function(e){this.setState({username:e.target.value})}},{key:"setName",value:function(e){this.setState({name:e.target.value})}},{key:"setEmail",value:function(e){this.setState({email:e.target.value})}},{key:"setCity",value:function(e){this.setState({city:e.target.value})}},{key:"setRide",value:function(e){this.setState({ride:e.target.value})}},{key:"setSun",value:function(){this.setState({sun:!this.state.sun}),this.setDays()}},{key:"setMon",value:function(){this.setState({mon:!this.state.mon}),this.setDays()}},{key:"setTue",value:function(){this.setState({tue:!this.state.tue}),this.setDays()}},{key:"setWed",value:function(){this.setState({wed:!this.state.wed}),this.setDays()}},{key:"setThu",value:function(){this.setState({thu:!this.state.thu}),this.setDays()}},{key:"setFri",value:function(){this.setState({fri:!this.state.fri}),this.setDays()}},{key:"setSat",value:function(){this.setState({sat:!this.state.sat}),this.setDays()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("section",{className:"container",id:"user-register"},n.a.createElement("h2",{className:"regist"},"Registration"),n.a.createElement("div",{className:"information-div"},n.a.createElement("section",{className:"caixa"},n.a.createElement("h4",null,"Need Help?"),n.a.createElement("section",{className:"caixa2 need-help"},n.a.createElement(d.a,{icon:f.a,className:"far fa-life-ring"}),n.a.createElement("p",{className:"parag"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),n.a.createElement("section",{className:"caixa"},n.a.createElement("h4",null,"Why register?"),n.a.createElement("section",{className:"caixa2 why-register"},n.a.createElement(d.a,{icon:p.c,className:"fas fa-heartbeat"}),n.a.createElement("p",{className:"parag"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),n.a.createElement("section",{className:"caixa"},n.a.createElement("h4",null,"What people are saying..."),n.a.createElement("section",{className:"caixa2 what-people"},n.a.createElement(d.a,{icon:f.b,className:"far fa-smile"}),n.a.createElement("p",{className:"parag"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))),n.a.createElement("hr",null),n.a.createElement("div",{className:"regis"},n.a.createElement("form",{onSubmit:this.enviaForm},n.a.createElement("section",{id:"ladoesq"},n.a.createElement("div",{className:"grupo username"},n.a.createElement("label",{htmlFor:"username"},"Username"),n.a.createElement("br",null),n.a.createElement("input",{id:"username",type:"text",name:"username",className:"campo1",value:this.state.username,onChange:this.setUsername}),n.a.createElement("br",null),n.a.createElement("p",{className:"warn p1"},"Choose a username")),n.a.createElement("div",{className:"grupo name"},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement("br",null),n.a.createElement("input",{className:"campo1",id:"name",type:"text",name:"name",value:this.state.name,onChange:this.setName}),n.a.createElement("br",null),n.a.createElement("p",{className:"warn p2"},"Complete with your first and last names")),n.a.createElement("div",{className:"grupo email"},n.a.createElement("label",{htmlFor:"email"},"E-mail"),n.a.createElement("br",null),n.a.createElement("input",{id:"email",type:"email",name:"email",className:"campo1",value:this.state.email,onChange:this.setEmail}),n.a.createElement("br",null),n.a.createElement("p",{className:"warn p3"},"Complete with your e-mail"))),n.a.createElement("section",{id:"ladodir"},n.a.createElement("div",{className:"grupo city"},n.a.createElement("label",{htmlFor:"city"},"City"),n.a.createElement("label",{className:"opt",htmlFor:"optional"},"optional"),n.a.createElement("br",null),n.a.createElement("input",{id:"city",type:"text",name:"city",className:"campo1",value:this.state.city,onChange:this.setCity}),n.a.createElement("br",null),n.a.createElement("p",{className:"warn p4"},"Complete with the city you live in")),n.a.createElement("div",{className:"grupo gp2"},n.a.createElement("p",{className:"ride"},"Ride in group?"),n.a.createElement("label",{className:"choice"},n.a.createElement("input",{className:"bolin",type:"radio",name:"radiob",id:"radioal",value:"Always",checked:"Always"===this.state.ride,onChange:this.setRide}),"Always",n.a.createElement("span",{className:"checkmark"})),n.a.createElement("label",{className:"choice"},n.a.createElement("input",{className:"bolin",type:"radio",name:"radiob",id:"radiosome",value:"Sometimes",checked:"Sometimes"===this.state.ride,onChange:this.setRide}),"Sometimes",n.a.createElement("span",{className:"checkmark"})),n.a.createElement("label",{className:"choice"},n.a.createElement("input",{className:"bolin",type:"radio",name:"radiob",id:"radionev",value:"Never",checked:"Never"===this.state.ride,onChange:this.setRide}),"Never",n.a.createElement("span",{className:"checkmark"}))),n.a.createElement("div",{className:"grupo"},n.a.createElement("p",{className:"days"},"Days of the week"),n.a.createElement("label",{className:"choice2"}," Sun",n.a.createElement("input",{id:"sunday",className:"bolin2",type:"checkbox",name:"sunday",checked:this.state.sun,onChange:this.setSun}),n.a.createElement("span",{className:"checkmark2"})),n.a.createElement("label",{className:"choice2"}," Mon",n.a.createElement("input",{id:"monday",className:"bolin2",type:"checkbox",name:"monday",checked:this.state.mon,onChange:this.setMon}),n.a.createElement("span",{className:"checkmark2"})),n.a.createElement("label",{className:"choice2"}," Tue",n.a.createElement("input",{id:"tuesday",className:"bolin2",type:"checkbox",name:"tuesday",checked:this.state.tue,onChange:this.setTue}),n.a.createElement("span",{className:"checkmark2"})),n.a.createElement("label",{className:"choice2"}," Wed",n.a.createElement("input",{id:"wednesday",className:"bolin2",type:"checkbox",name:"wednesday",checked:this.state.wed,onChange:this.setWed}),n.a.createElement("span",{className:"checkmark2"})),n.a.createElement("label",{className:"choice2"}," Thu",n.a.createElement("input",{id:"thursday",className:"bolin2",type:"checkbox",name:"thursday",checked:this.state.thu,onChange:this.setThu}),n.a.createElement("span",{className:"checkmark2"})),n.a.createElement("label",{className:"choice2"}," Fri",n.a.createElement("input",{id:"friday",className:"bolin2",type:"checkbox",name:"friday",checked:this.state.fri,onChange:this.setFri}),n.a.createElement("span",{className:"checkmark2"})),n.a.createElement("label",{className:"choice2"}," Sat",n.a.createElement("input",{id:"saturday",className:"bolin2",type:"checkbox",name:"saturday",checked:this.state.sat,onChange:this.setSat}),n.a.createElement("span",{className:"checkmark2"})))),n.a.createElement("footer",{className:"buttonsform"},n.a.createElement("button",{id:"save"},"Save"),n.a.createElement("button",{id:"discard",onClick:this.clearForm},"Discard"),n.a.createElement("span",{id:"mensagens-erro"},n.a.createElement(O,null)))))))}}]),t}(s.Component),M=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Error: Path does not exist!!"))};var C=function(){return n.a.createElement(v.c,null,n.a.createElement(v.a,{path:"/",exact:!0,component:N}),n.a.createElement(v.a,{path:"/users",exact:!0,component:D}),n.a.createElement(v.a,{path:"/users/new",exact:!0,component:I}),n.a.createElement(v.a,{path:"*",component:M}))};var x=function(){return n.a.createElement(l.a,null,n.a.createElement(y,null),n.a.createElement(C,null))};i.a.render(n.a.createElement(x,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.90e40494.chunk.js.map