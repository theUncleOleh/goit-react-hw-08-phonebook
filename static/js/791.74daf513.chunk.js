"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[791],{4924:function(e,t,n){n.d(t,{Z:function(){return s}});var r="PageHeading_title__1wPIF",a=n(184);function s(e){var t=e.text;return(0,a.jsx)("h1",{className:r,children:t})}},3791:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(4924),a=n(6871),s=n(428),o=(n(7632),n(184));function i(){var e=(0,a.TH)();console.log(e);var t=(0,a.s0)();console.log(t);return(0,o.jsx)(s.Z,{onClick:function(){var n,r;t(null!==(n=null===e||void 0===e||null===(r=e.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/")},children:"Previous page"})}var l=n(885),u=n(2791),c={label:"RegisterForm_label__4pTXF",form:"RegisterForm_form__Tv43W",button:"RegisterForm_button__B3hFq"},f=n(8985),p=n.n(f),d=n(9434),m=n(1566);function h(e){e.onSubmit;var t=e.isLoading,n=(0,d.I0)(),r=(0,u.useState)(""),a=(0,l.Z)(r,2),s=a[0],i=a[1],f=(0,u.useState)(""),h=(0,l.Z)(f,2),b=h[0],v=h[1],y=(0,u.useState)(""),_=(0,l.Z)(y,2),g=_[0],j=_[1],x=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":i(r);break;case"email":v(r);break;case"password":j(r);break;default:return}},w=function(){i(""),v(""),j("")};return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(m.r.register({name:s,email:b,password:g})),w()},className:c.form,children:[(0,o.jsxs)("label",{htmlFor:"",className:c.label,children:["Name",(0,o.jsx)("input",{autoComplete:"off",className:c.input,type:"text",name:"name",value:s,onChange:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,o.jsxs)("label",{htmlFor:"",className:c.label,children:["E-mail",(0,o.jsx)("input",{autoComplete:"off",className:c.input,type:"email",name:"email",value:b,onChange:x})]}),(0,o.jsxs)("label",{htmlFor:"",className:c.label,children:["Password",(0,o.jsx)("input",{autoComplete:"off",className:c.input,type:"password",name:"password",value:g,onChange:x})]}),(0,o.jsx)("button",{type:"submit",disabled:t,className:c.button,children:t?(0,o.jsx)(p(),{height:15,width:5,margin:2}):"Log In"})]})}function b(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z,{text:"Register page"}),(0,o.jsx)(i,{}),(0,o.jsx)(h,{})]})}},8985:function(e,t,n){var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},a=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=this&&this.__assign||function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var u,c,f=n(4923),p=l(n(2791)),d=n(2554),m=n(2098),h=(0,d.keyframes)(u||(u=r(["\n  0% {transform: scaley(1.0)}\n  50% {transform: scaley(0.4)}\n  100% {transform: scaley(1.0)}\n"],["\n  0% {transform: scaley(1.0)}\n  50% {transform: scaley(0.4)}\n  100% {transform: scaley(1.0)}\n"]))),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.style=function(e){var n=t.props,a=n.color,s=n.width,o=n.height,i=n.margin,l=n.radius,u=n.speedMultiplier;return(0,d.css)(c||(c=r(["\n      background-color: ",";\n      width: ",";\n      height: ",";\n      margin: ",";\n      border-radius: ",";\n      display: inline-block;\n      animation: "," ","s ","s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n      animation-fill-mode: both;\n    "],["\n      background-color: ",";\n      width: ",";\n      height: ",";\n      margin: ",";\n      border-radius: ",";\n      display: inline-block;\n      animation: "," ","s ","s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n      animation-fill-mode: both;\n    "])),a,(0,m.cssValue)(s),(0,m.cssValue)(o),(0,m.cssValue)(i),(0,m.cssValue)(l),h,1/u,.1*e)},t}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.loading,n=e.css;return t?(0,f.jsxs)("span",s({css:[n]},{children:[(0,f.jsx)("span",{css:this.style(1)},void 0),(0,f.jsx)("span",{css:this.style(2)},void 0),(0,f.jsx)("span",{css:this.style(3)},void 0),(0,f.jsx)("span",{css:this.style(4)},void 0),(0,f.jsx)("span",{css:this.style(5)},void 0)]}),void 0):null},t.defaultProps=(0,m.heightWidthRadiusDefaults)(35,4,2),t}(p.PureComponent);t.default=b}}]);
//# sourceMappingURL=791.74daf513.chunk.js.map