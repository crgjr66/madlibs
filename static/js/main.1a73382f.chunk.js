(this.webpackJsonpmadlibs=this.webpackJsonpmadlibs||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/madlibs.7fad95ad.png"},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),s=a.n(l),i=(a(13),a(1)),o=a(2),m=a(3),c=a(4),u=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){console.log(e.target.name);var t=n.state.form;t[e.target.name]=e.target.value,n.setState({form:t})},n.handleSubmit=function(e){e.preventDefault(),console.log("submitted!"),n.props.handleFormSubmit(n.state.form)},n.handleClear=function(e){var t=n.state.form;e.preventDefault(),console.log("clearing!"),t.firstNoun="",t.firstVerb="",t.firstAdjective="",t.lastNoun="",t.lastVerb="",t.lastAdjective="",n.setState({form:t}),n.props.handleFormSubmit(null)},n.state={form:{firstNoun:"",firstVerb:"",firstAdjective:"",lastNoun:"",lastVerb:"",lastAdjective:""}},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null),r.a.createElement("form",null,r.a.createElement("label",null,"Enter a noun: "),r.a.createElement("input",{id:"word_box",name:"firstNoun",type:"text",value:this.state.form.firstNoun,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Enter a verb: "),r.a.createElement("input",{id:"word_box",name:"firstVerb",type:"text",value:this.state.form.firstVerb,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Enter an Adjective: "),r.a.createElement("input",{id:"word_box",name:"firstAdjective",type:"text",value:this.state.form.firstAdjective,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Enter a noun: "),r.a.createElement("input",{id:"word_box",name:"lastNoun",type:"text",value:this.state.form.lastNoun,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Enter a verb: "),r.a.createElement("input",{id:"word_box",name:"lastVerb",type:"text",value:this.state.form.lastVerb,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Enter an Adjective: "),r.a.createElement("input",{id:"word_box",name:"lastAdjective",type:"text",value:this.state.form.lastAdjective,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{id:"submit_button",type:"submit",value:" Submit ",onClick:this.handleSubmit}),r.a.createElement("input",{id:"reset_button",type:"submit",value:" Reset ",onClick:this.handleClear})))}}]),a}(n.Component),h=(a(14),a(7)),d=a.n(h),f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){var t=1+Math.floor(3*Math.random());n.setState({random:t}),n.setState({form:e})},n.state={form:null,random:0},n}return Object(o.a)(a,[{key:"render",value:function(){return console.log(this.state.form),console.log(this.state.random),r.a.createElement(r.a.Fragment,null,r.a.createElement("body",null,r.a.createElement("div",{class:"image_style"},r.a.createElement("img",{src:d.a,aspectRatio:.2})),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"column"},r.a.createElement(u,{handleFormSubmit:this.handleFormSubmit}),r.a.createElement("br",null)),r.a.createElement("div",{class:"column",id:"answer_style"},r.a.createElement("br",null),this.state.form&&1===this.state.random&&r.a.createElement("div",null,"I am a ",this.state.form.firstNoun,". I can ",this.state.form.firstVerb," very fast.  When I stay in the sun too long, my ",this.state.form.firstAdjective," skin begins to peel.  My friend is a ",this.state.form.lastNoun,".  We go to the park and ",this.state.form.lastVerb," all the time.  It makes the day go by ",this.state.form.lastAdjective,"."),this.state.form&&2===this.state.random&&r.a.createElement("div",null,"I really like the ",this.state.form.firstNoun,". He can ",this.state.form.firstVerb," very fast.  When he runs in circles, my ",this.state.form.firstAdjective," heart breaks.  He is kinda like a ",this.state.form.lastNoun,".  We see him at the beach and ",this.state.form.lastVerb," all the time.  He is the most ",this.state.form.lastAdjective," one I know."),this.state.form&&3===this.state.random&&r.a.createElement("div",null,"Shes a lot like a ",this.state.form.firstNoun,". She can ",this.state.form.firstVerb," very fast.  When she wears yellow, my ",this.state.form.firstAdjective," attitude is much better.  Her friend is a ",this.state.form.lastNoun,".  They go to the mall and ",this.state.form.lastVerb," all the time.  She is the best ",this.state.form.lastAdjective," person I know.")))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.1a73382f.chunk.js.map