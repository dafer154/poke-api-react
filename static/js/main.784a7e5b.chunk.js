(this["webpackJsonppoke-api-react"]=this["webpackJsonppoke-api-react"]||[]).push([[0],{40:function(e,t,n){e.exports=n(70)},45:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(17),r=n.n(c),i=(n(45),n(7)),s=n(8),l=n(11),m=n(9),p=n(12),u=n(15),h=n(19),f=n(13),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"waaaaa")}}]),t}(a.Component),k=n(20),d=n.n(k),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).onChange=function(e){var t=e.target.value;n.props.searchPokemon(t)},n.onSubmit=function(e){e.preventDefault()},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid mt-5 text-center"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4 mb-3"},o.a.createElement("i",{className:"fa fa-search"})," Search Pokemon"),o.a.createElement("form",{id:"searchForm",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Search Movies, TV Series ...",onChange:this.onChange}),o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-bg mt-3"},"Search"))))}}]),t}(a.Component),v=Object(u.b)((function(e){return{text:e.pokemones.textSearch}}),{searchPokemon:function(e){return function(t){d.a.get("".concat("https://pokeapi.co/api/v2/pokemon?offset=0&limit=806")).then((function(n){t({type:"SEARCH_POKEMON",text:e,payload:n.data.results})})).catch((function(e){return console.log(e)}))}}})(O),E=(n(67),function(e){var t,n=e.pokemon;return o.a.createElement("div",{className:"pokeCard"},o.a.createElement("p",null,n.name),o.a.createElement("div",{className:"wrap-image"},o.a.createElement("img",{className:"sizeImage",src:function(e){var t=e.replace("https://pokeapi.co/api/v2/pokemon/","").replace("/","");return"".concat("https://pokeres.bastionbot.org/images/pokemon/").concat(t,".png")}(n.url),alt:"pokemon Cover"})),o.a.createElement(h.b,{className:"btn btn-primary",to:"/pokemon/".concat((t=n.url,t.replace("https://pokeapi.co/api/v2/pokemon/","").replace("/","")))},"Pokemon Details",o.a.createElement("i",{className:"fas fa-chevron-right"})))}),j=(n(69),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPokemones()}},{key:"render",value:function(){var e=this.props.pokemones;return console.log("pokemones",e),o.a.createElement("div",{className:"pokedex"},e.map((function(e){return o.a.createElement(E,{pokemon:e,key:e.name})})))}}]),t}(a.Component)),y=Object(u.b)((function(e){return{pokemones:e.pokemones.pokemones}}),{fetchPokemones:function(){return function(e){d.a.get("".concat("https://pokeapi.co/api/v2/pokemon?offset=0&limit=806")).then((function(t){e({type:"FETCH_POKEMONES",payload:t.data.results})})).catch((function(e){return console.log(e)}))}}})(j),g=n(10),N=n(38),C=n(39),w=n(21),S={textSearch:"",pokemones:[],pokemon:{}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_POKEMON":var n=t.payload,a=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.text.toLowerCase())}));return Object(w.a)({},e,{textSearch:t.text,pokemones:a});case"FETCH_POKEMONES":return Object(w.a)({},e,{pokemones:t.payload});case"FETCH_POKEMON":return Object(w.a)({},e,{pokemon:t.payload});default:return e}},P=Object(g.combineReducers)({pokemones:x}),M=[N.a],T=Object(g.createStore)(P,{},Object(C.composeWithDevTools)(g.applyMiddleware.apply(void 0,M))),H=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(u.a,{store:T},o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(y,null),o.a.createElement(f.a,{exact:!0,path:"/pokemon/:id",component:b}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.784a7e5b.chunk.js.map