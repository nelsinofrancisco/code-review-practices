(()=>{"use strict";var t={28:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(645),s=r.n(n)()((function(t){return t[1]}));s.push([t.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 70vh;\r\n}\r\n\r\nmain {\r\n  box-shadow: 0 10px 0.8rem #aaa;\r\n}\r\n\r\n.line-trought,\r\n.line-trought::placeholder {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.text-description,\r\n.text-description::placeholder,\r\n.text-description:focus {\r\n  color: #6c757d;\r\n  border: none;\r\n  outline: none;\r\n  width: 100%;\r\n}\r\n\r\n.arrow-icon {\r\n  right: 18px;\r\n  top: 6px;\r\n  width: 24px;\r\n  z-index: 2;\r\n}\r\n\r\n.icon:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.trash-icon,\r\n.sync-icon,\r\n.ellipsis-icon {\r\n  height: 16px;\r\n  z-index: 2;\r\n  color: #6c757d;\r\n}\r\n",""]);const i=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(s[a]=!0)}for(var o=0;o<t.length;o++){var c=[].concat(t[o]);n&&s[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},a=[],o=0;o<t.length;o++){var c=t[o],l=n.base?c[0]+n.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var h=r(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==h?(e[h].references++,e[h].updater(p)):e.push({identifier:u,updater:s(p,n),references:1}),a.push(u)}return a}function s(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r.update(t=e)}else r.remove()}}t.exports=function(t,s){var i=n(t=t||[],s=s||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var o=r(i[a]);e[o].references--}for(var c=n(t,s),l=0;l<i.length;l++){var d=r(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n=r.css,s=r.media,i=r.sourceMap;s?t.setAttribute("media",s):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},254:(t,e,r)=>{t.exports=r.p+"d75e13e88de1cbfdd05c.svg"},380:(t,e,r)=>{t.exports=r.p+"b006e420e8ea2d701483.svg"},913:(t,e,r)=>{t.exports=r.p+"372cb199703f95cc1dd6.svg"},867:(t,e,r)=>{t.exports=r.p+"4413689852a97c025e23.svg"}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{var t=r(379),e=r.n(t),n=r(795),s=r.n(n),i=r(569),a=r.n(i),o=r(565),c=r.n(o),l=r(216),d=r.n(l),u=r(589),h=r.n(u),p=r(28),m={};m.styleTagTransform=h(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=d(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;class g{constructor(t){this.store=t}addChangeListener(){this.checkBoxes=document.querySelectorAll('input[type="checkbox"]'),this.checkBoxes.forEach(((t,e)=>{t.addEventListener("change",(()=>{t.checked?(t.parentElement.nextElementSibling.classList.toggle("line-trought"),this.store.updateCompleted(e,!0)):(t.parentElement.nextElementSibling.classList.toggle("line-trought"),this.store.updateCompleted(e,!1)),localStorage.setItem("tasks_data",JSON.stringify(this.store.getItems()))}))}))}}var f=r(867),v=r(913),x=r(254),y=r(380);const b=new class{constructor(){this.task_data=JSON.parse(localStorage.getItem("tasks_data"))||[]}updateLocalStorage(){localStorage.setItem("tasks_data",JSON.stringify(this.task_data))}add(t){this.task_data.push(t),this.updateLocalStorage()}remove(t){this.task_data.splice(t,1),this.task_data=this.task_data.filter(((t,e)=>(t.index=e,!0))),this.updateLocalStorage()}removeAllCompleted(){this.task_data=this.task_data.filter((t=>!t.completed)),this.task_data=this.task_data.filter(((t,e)=>(t.index=e,!0))),this.updateLocalStorage()}updateCompleted(t,e){this.task_data[t].completed=e,this.updateLocalStorage()}updateDescription(t,e){this.task_data[t].description=e,this.updateLocalStorage()}getItems(){return[...this.task_data]}},k=new class{constructor(t){this.HandleCheckBoxChanges=new g(t),this.store=t}updateIcons(){this.syncIcon=document.querySelector(".sync-icon"),this.syncIcon.src=v,this.arrowIcon=document.querySelector(".arrow-icon"),this.arrowIcon=x}generateHtmlTasks(){this.todoListContainer=document.getElementById("todo-list-container"),this.todoListContainer.innerHTML="",this.updateIcons(),this.store.getItems().forEach(((t,e)=>{const r=t.completed?"checked":"",n=t.completed?"line-trought":"";t.index=e,this.todoListContainer.innerHTML+=`<div id="${t.index}"class="d-flex justify-content-start align-items-center mt-1">\n      <div class="form-check me-1">\n        <input class="checkbox form-check-input" type="checkbox" id="blankCheckbox" value="true" aria-label="..." ${r}>\n      </div>\n      <input id="text-input-${t.index}" class="text-description ${n}" type="text" placeholder="${t.description}" value="${t.description}"></input>\n      <img src="${y}" class="icon ellipsis-icon fas fa-ellipsis-v ms-auto text-secondary"/>\n      <img src="${f}" class="icon trash-icon ms-auto text-secundary d-none"/>\n    </div>`})),this.HandleCheckBoxChanges.addChangeListener()}}(b),I=new class{constructor(t,e){this.store=t,this.UI=e}addItem(){this.input=document.getElementById("add-task"),this.arrowIcon=document.querySelector(".arrow-icon"),this.input.addEventListener("keydown",(t=>{const e=this.store.getItems().length;if("Enter"===t.key&&t.target.value){const r={description:t.target.value,completed:!1,index:e};this.input.value="",this.store.add(r),this.UI.generateHtmlTasks(),t.preventDefault()}})),this.arrowIcon.addEventListener("click",(()=>{const t=this.store.getItems().lenght;if(this.input.value){const e={description:this.input.value,completed:!1,index:t};this.input.value="",this.store.add(e),this.UI.generateHtmlTasks()}}))}removeItem(t){this.store.remove(t),this.UI.generateHtmlTasks()}clearAll(){this.clearBtn=document.getElementById("clear-tasks"),this.clearBtn.addEventListener("click",(()=>{this.store.removeAllCompleted(),this.UI.generateHtmlTasks()}))}removeAllTrashIcons(){this.trash=document.querySelectorAll(".trash-icon"),this.ellipsis=document.querySelectorAll(".fa-ellipsis-v"),this.trash.forEach(((t,e)=>{t.setAttribute("class","trash-icon ms-auto text-secundary d-none"),this.ellipsis[e].setAttribute("class","icon ellipsis-icon fas fa-ellipsis-v ms-auto text-secondary")}))}toggleAllElementTrashIcon(t){this.trash=t.parentElement.querySelector(".trash-icon"),this.ellipsis=t.parentElement.querySelector(".fa-ellipsis-v"),this.trash.setAttribute("class","trash-icon ms-auto text-secundary d-none"),this.ellipsis.setAttribute("class","icon ellipsis-icon fas fa-ellipsis-v ms-auto text-secondary")}toggleElementTrashIcon(t){this.trash=t.parentElement.querySelector(".trash-icon"),this.ellipsis=t.parentElement.querySelector(".fa-ellipsis-v"),this.trash.classList.remove("d-none"),this.ellipsis.setAttribute("class","icon ellipsis-icon fas fa-ellipsis-v ms-auto text-secondary d-none")}updateValue(){window.addEventListener("click",(t=>{if(t.target.className.includes("text-description")){const e=document.querySelectorAll(".text-description"),r=parseInt(t.target.id.slice(11),10),n=t.target.parentElement.querySelector(".trash-icon");e.forEach((e=>{e!==t.target&&this.toggleAllElementTrashIcon(e)})),this.toggleElementTrashIcon(t.target),n.addEventListener("click",(()=>{this.removeItem(r)})),t.target.addEventListener("blur",(()=>{this.store.updateDescription(r,t.target.value)}))}else this.removeAllTrashIcons()}))}}(b,k);k.generateHtmlTasks(),I.addItem(),I.clearAll(),I.updateValue()})()})();