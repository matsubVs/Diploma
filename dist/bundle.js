(()=>{"use strict";const t=function(t){var e=t.timing,n=t.draw,r=t.duration,o=performance.now();requestAnimationFrame((function t(i){var s=(i-o)/r;s>1&&(s=1);var l=e(s);n(l),s<1&&requestAnimationFrame(t)}))};function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,i=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw i}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=u(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,i=t},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw i}}}}function u(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||_(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,i=t},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw i}}}}function _(t,e){if(t){if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(t,e):void 0}}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function L(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return e&&E(t.prototype,e),n&&E(t,n),t}function q(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var C,T,j,I,O;(O=document.querySelectorAll(".close"),function(t){if(Array.isArray(t))return f(t)}(O)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(O)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(O)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t){if(t.closest(".popup")){var e=t.closest(".popup");t.addEventListener("click",(function(){e.style.visibility="hidden"}))}})),function(){var n,r=document.querySelector(".header-contacts__arrow"),o=document.querySelector(".header-contacts__phone-number-accord"),i=(n=o.children,function(t){if(Array.isArray(t))return e(t)}(n)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];o.style.top="0px",r.addEventListener("click",(function(){"0px"===o.style.top?(t({duration:100,timing:function(t){return t},draw:function(t){o.style.top=20*t+"px"}}),i.style.opacity=1):(t({duration:100,timing:function(t){return t},draw:function(t){o.style.top=20-20*t+"px"}}),i.style.opacity=0)}))}(),function(){var t,e=document.querySelector(".popup-menu"),r=e.querySelector(".popup-dialog-menu"),o=document.querySelector(".menu"),i=e.querySelector(".close-menu"),s=document.querySelector(".button-footer"),l=function(t){if(Array.isArray(t))return n(t)}(t=document.querySelectorAll(".link-list"))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=!1,c=function(){a?(e.style.visibility="",r.style.transform="",a=!a):(e.style.visibility="visible",r.style.transform="translate3d(0,0,0)",a=!a)};e.addEventListener("click",(function(t){var e=t.target;l.some((function(t){return t.contains(e)}))?c():e.matches(".menu-link")?(t.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"nearest"}),c()):e===i&&c()})),o.addEventListener("click",(function(){c()})),s.addEventListener("click",(function(t){var e=s.querySelector("a"),n=document.querySelector(e.getAttribute("href"));t.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"nearest"})}))}(),I=function(t){var e,n,i,s,l=t[0].date.split("."),a=[l[0],(e=l[1],["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"][parseInt(e)-1]),l[2]].join(" "),c=t.slice(1,7),u=document.querySelector(".nav-list-popup-repair"),d=document.querySelector(".popup-repair-types-content__head-date"),p=document.querySelector(".popup-repair-types-content-table"),f=function(t){var e=[];return t.forEach((function(t){var n=document.createElement("button");n.classList.add("button-o"),n.classList.add("popup-repair-types-nav__item"),n.textContent=t,e.push(n)})),e}(c.map((function(t){return t.title}))),y=function(t){var e,n=[],i=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=o(t))){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){a=!0,s=t},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw s}}}}(t);try{var s=function(){var t=e.value,o=document.createElement("table"),i=document.createElement("tbody");o.appendChild(i),o.classList.add("popup-repair-types-content-table__list"),t.forEach((function(t){var e=t.typeService,n=t.units,i=t.cost,s=document.createElement("tr");s.classList.add("mobile-row");var l=document.createElement("td");l.classList.add("repair-types-name"),l.textContent=e;var a=document.createElement("td");a.classList.add("repair-types-value"),a.insertAdjacentHTML("afterbegin","2"===n[1]?n[0]+"<sup>".concat(n[1],"</sup>"):n);var c=document.createElement("td");c.classList.add("repair-types-value"),c.textContent=i+" руб.",s.appendChild(l),s.appendChild(a),s.appendChild(c),r(o.children)[0].appendChild(s)})),n.push(o)};for(i.s();!(e=i.n()).done;)s()}catch(t){i.e(t)}finally{i.f()}return n}(c.map((function(t){return t.priceList})));u.textContent="",f.forEach((function(t){return u.appendChild(t)})),d.textContent=a,p.textContent="",y.forEach((function(t){return p.appendChild(t)})),n=document.querySelector(".nav-list-popup-repair"),i=r(n.children),s=r(document.querySelectorAll(".popup-repair-types-content-table__list")),n.addEventListener("click",(function(t){var e=t.target;if(e.closest(".popup-repair-types-nav__item")){var n=e.closest(".popup-repair-types-nav__item");i.forEach((function(t,e){s[e].style.display=t===n?"block":"none"}))}}))},fetch("../db/db.json").then((function(t){return t.json()})).then((function(t){return I(t)})).catch((function(t){return console.log(t)})),T=r(document.querySelectorAll(".link-list")),j=document.querySelector(".popup-repair-types"),T.forEach((function(t){return t.addEventListener("click",(function(){j.style.visibility="visible"}))})),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"+7 (___) ___-__-__",n=document.querySelectorAll("input[name=phone]"),r=function(t){var n=t.target,r=t.keyCode,o=e,i=o.replace(/\D/g,""),s=n.value.replace(/\D/g,""),l=0,a=o.replace(/[_\d]/g,(function(t){return l<s.length?s.charAt(l++)||i.charAt(l):t}));-1!==(l=a.indexOf("_"))&&(a=a.slice(0,l));var c=o.substr(0,n.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(n.value)||n.value.length<5||r>47&&r<58)&&(n.value=a),"blur"===t.type&&n.value.length<5&&(n.value="")},o=s(n);try{for(o.s();!(t=o.n()).done;){var i=t.value;i.addEventListener("input",r),i.addEventListener("focus",r),i.addEventListener("blur",r)}}catch(t){o.e(t)}finally{o.f()}}(),function(){var e,n=c(document.querySelectorAll("form"));try{var r=function(){var n,r=e.value,o=r.querySelector(".checkbox__descr").querySelector(".link-privacy"),i=document.querySelector(".popup-privacy"),s=r.querySelector(".button"),l=r.querySelector(".checkbox__input"),u=a(r.querySelectorAll("input")).filter((function(t){return"checkbox"!==t.type})),d=c(a(r.querySelectorAll("input[name=name]")));try{for(d.s();!(n=d.n()).done;)n.value.addEventListener("input",(function(t){t.target.value=t.target.value.replace(/[^а-яё ]/gi,"")}))}catch(t){d.e(t)}finally{d.f()}s.addEventListener("click",(function(e){var n,r;e.preventDefault(),function(t){if(t.checked)return!0;var e=t.nextElementSibling;return e.style.border="1px solid red",setTimeout((function(){return e.style.border=""}),1e3),!1}(l)&&function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return 2===t.length?t[0].value.length>=2&&18===t[1].value.length||(t[0].style.border="1px solid red",t[1].style.border="1px solid red",setTimeout((function(){return t[0].style.border=""}),1e3),setTimeout((function(){return t[1].style.border=""}),1e3),!1):18===t[0].value.length||(t[0].style.border="1px solid red",setTimeout((function(){return t[0].style.border=""}),1e3),!1)}(u)&&(r={},2===(n=u).length?(r.name=n[0].value,r.phone=n[1].value):r.phone=n[0].value,fetch("../../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){if(200!==e.status)throw new Error("error");var n=document.querySelector(".popup-thank");n.style.visibility="visible",n.style.opacity=0,t({duration:400,timing:function(t){return t},draw:function(t){n.style.opacity=t}}),setTimeout((function(){t({duration:500,timing:function(t){return t},draw:function(t){n.style.opacity=1-t}})}),2e3),setTimeout((function(){return n.style.visibility="hidden"}),2500),u.forEach((function(t){return t.value=""})),l.checked=!1})).catch((function(t){console.error(t)})))})),o.addEventListener("click",(function(){i.style.visibility="visible"}))};for(n.s();!(e=n.n()).done;)r()}catch(t){n.e(t)}finally{n.f()}}(),function(){var t,e=(t=document.querySelectorAll(".button"),function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(t){return"Проконсультироваться"===t.textContent})),n=document.querySelector(".popup-consultation");e.forEach((function(t){t.addEventListener("click",(function(){n.style.visibility="visible"}))}))}(),document.querySelector(".accordion").addEventListener("click",(function(t){var e=t.target;e.matches(".title_block")&&e.classList.toggle("msg-active")})),function(){for(var e=document.querySelector(".formula"),n=document.querySelector(".problems"),r=function(){var e=i[o];e.addEventListener("mouseover",(function(n){return function(e,n){if(!(document.documentElement.clientWidth<=1024)){var r=e.target;if(r.closest(".".concat(n,"-item__icon, .svg-wrap"))&&!r.closest(".formula-item-popup, .problems-item-popup")){var o=r.closest(".".concat(n,"-item__icon")),i=o.querySelector(".".concat(n,"-item__icon-inner")),s=o.querySelector(".".concat(n,"-item__icon-inner-text")),l=o.querySelector(".".concat(n,"-item-popup")),a=document.head.querySelector("#".concat(l.classList[1])),c=l.getBoundingClientRect(),u=r.closest(".row");if(c.top<0){if(a&&0!==a.textContent)a.textContent="\n                    .".concat(l.classList[1],"::before {\n                        transform: rotate(180deg);\n                    }\n                    ");else{var d=document.createElement("style");d.id=l.classList[1],d.textContent="\n                        .".concat(l.classList[1],"::before {\n                            transform: rotate(180deg);\n                        }\n                    "),document.head.appendChild(d)}l.style.transform="problems"!==n?"translateY(165%)":"translateY(130%)",l.style.paddingTop="35px",u.style.zIndex=1}l.style.visibility="visible","problems"!==n&&(s.style.color="white"),i.style.opacity=1,t({duration:400,timing:function(t){return t},draw:function(t){l.style.opacity=t}})}}}(n,e.classList[0])})),e.addEventListener("mouseout",(function(n){return function(e,n){if(!(document.documentElement.clientWidth<=1024)){var r=e.target;if(r.closest(".svg-wrap, .".concat(n,"-item__icon"))){var o=r.closest(".".concat(n,"-item__icon")),i=o.querySelector(".".concat(n,"-item__icon-inner")),s=o.querySelector(".".concat(n,"-item__icon-inner-text")),l=o.querySelector(".".concat(n,"-item-popup")),a=document.head.querySelector("#".concat(l.classList[1])),c=r.closest(".row");"problems"!==n&&(s.style.color="black"),i.style.opacity=0,a&&setTimeout((function(){a.textContent="",l.style.transform=""}),500),t({duration:200,timing:function(t){return t},draw:function(t){l.style.opacity=1-t}}),setTimeout((function(){l.style.paddingTop="",l.style.visibility="hidden",c.style.zIndex=0}),500)}}}(n,e.classList[0])}))},o=0,i=[e,n];o<i.length;o++)r()}(),C=function(e,n){var r=e.target,o=n.split("-")[0];if(r.closest("".concat(o,"-item, ").concat(o,"-item__icon"))&&!r.closest(".formula-item-popup, .problems-item-popup")){var i,s=(i=r.closest("".concat(o,"-item__icon"))?r.closest("".concat(o,"-item__icon")):r.closest("".concat(o,"-item"))).querySelector("".concat(o,"-item-popup"));"mouseover"===e.type?(s.style.visibility="visible",t({duration:300,timing:function(t){return t},draw:function(t){i.style.opacity=t}}),t({duration:300,timing:function(t){return t},draw:function(t){s.style.opacity=t}})):(t({duration:300,timing:function(t){return t},draw:function(t){i.style.opacity=1-t+.4}}),t({duration:300,timing:function(t){return t},draw:function(t){s.style.opacity=1-t}}),setTimeout((function(){return s.style.visibility="hidden"}),350))}},[".formula-slider",".problems-slider"].forEach((function(t){var e=document.querySelector(t);e.addEventListener("mouseover",(function(e){return C(e,t)})),e.addEventListener("mouseout",(function(e){return C(e,t)}))})),function(){for(var t=function(){var t,r=n[e],o=document.querySelector("".concat(r));t=".portfolio"===r?o.querySelector("".concat(r,"-slider-mobile")):o.querySelector("".concat(r,"-slider"));var i=y(o.querySelectorAll(".button_o")),s=y(t.children),l=[],a=o.querySelector(".slider-counter-content__current"),c=o.querySelector(".slider-counter-content__total");a&&(a.textContent=1);var u=function(t){var e,n,i,l;".popup-design"===r&&(e=y(o.querySelectorAll(".popup-design-text"))),".designs"===r&&(n=y(o.querySelectorAll(".preview-block"))),".scheme"===r&&(i=y(o.querySelectorAll(".scheme-description-block"))),".popup-portfolio"===r&&(l=y(o.querySelectorAll(".popup-portfolio-text"))),s.forEach((function(o,s){s===t?(o.style.display="block",c&&".popup-portfolio"!==r&&(c.textContent=y(o.children).length),e&&e[s].classList.add("visible-content-block"),n&&n[s].classList.add("visible"),i&&i[s].classList.add("visible-content-block"),l&&l[s].classList.add("visible-content-block")):(o.style.display="none",e&&e[s].classList.remove("visible-content-block"),n&&n[s].classList.remove("visible"),i&&i[s].classList.remove("visible-content-block"),l&&l[s].classList.remove("visible-content-block"))}))},d=function(){return s[0].classList.contains("portfolio-slider__slide-frame")||s[0].classList.contains("popup-portfolio-slider__slide")?s:s.filter((function(t){if("block"===t.style.display)return!0}))[0]},p=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(".scheme"!==r){var n,o,i,s=d();".portfolio"===r||".popup-portfolio"===r?(n=s[+a.textContent-1],o=s[+a.textContent-2],i=s.length):(n=y(s.children)[+a.textContent-1],o=y(s.children)[+a.textContent-2],i=y(s.children).length),!0===t?+a.textContent<i&&(n.classList.add("slider-disabled"),n.classList.remove("slider-active"),n.nextElementSibling.classList.add("slider-active"),n.nextElementSibling.classList.remove("slider-disabled"),a.textContent=+a.textContent+1):!0===e&&+a.textContent>1&&(n.classList.add("slider-disabled"),n.classList.remove("slider-active"),o.classList.remove("slider-disabled"),o.classList.add("slider-active"),a.textContent=+a.textContent-1)}};".popup-portfolio"===r&&u(+a.textContent-1),o.addEventListener("click",(function(t){var e=t.target;if(e.matches(".button_o"))i.forEach((function(t){if(t===e){i.filter((function(t){return t.classList.contains("active")}))[0].classList.remove("active"),e.classList.add("active");var n=[];i.forEach((function(t,r){t===e&&n.push(r)})),u(n[0]),a&&(a.textContent=1),y(d().children).forEach((function(t,e){0===e?(t.classList.add("slider-active"),t.classList.remove("slider-disabled")):(t.classList.add("slider-disabled"),t.classList.remove("slider-active"))}))}}));else if(e.closest(".slider-arrow")){var n=e.closest(".slider-arrow");n.classList.contains("slider-arrow_right")?p(!0,!1):n.classList.contains("slider-arrow_left")&&p(!1,!0)}else if(e.closest(".portfolio-arrow-mobile")){var r=e.closest(".portfolio-arrow-mobile");r.matches("#portfolio-arrow-mobile_right")?p(!0,!1):r.matches("#portfolio-arrow-mobile_left")&&p(!1,!0)}else if(e.closest(".slider-arrow-tablet-mobile")){var o=e.closest(".slider-arrow-tablet-mobile");o.matches("#design_right")?p(!0,!1):o.matches("#design_left")&&p(!1,!0)}else if(e.closest(".popup-arrow")&&e.closest(".popup-design")){var s=e.closest(".popup-arrow");s.matches("#popup_design_right")?p(!0,!1):s.matches("#popup_design_left")&&p(!1,!0)}else if(e.closest(".popup-arrow")&&e.closest(".popup-portfolio")){var l=e.closest(".popup-arrow");l.matches("#popup_portfolio_right")?(p(!0,!1),u(+a.textContent-1)):l.matches("#popup_portfolio_left")&&(p(!1,!0),u(+a.textContent-1))}else if(e.closest(".popup-arrow_transparency")){var c=e.closest(".popup-arrow");c.matches("#transparency_right")?p(!0,!1):c.matches("#transparency_left")&&p(!1,!0)}})),s.forEach((function(t,e){t.style.display=0===e?"block":"none",".portfolio"===r?l.push(y(t.children)[0]):l.push(y(t.children))})),null!==c&&(c.textContent=".portfolio"===r||".popup-portfolio"===r?l.length:l[0].length)},e=0,n=[".repair-types",".designs",".scheme",".popup-design",".popup-portfolio",".popup-transparency",".portfolio"];e<n.length;e++)t();var r=document.querySelector(".popup-portfolio");document.querySelector(".portfolio").addEventListener("click",(function(t){t.target.matches(".portfolio-slider__slide-frame")&&(r.style.visibility="visible")}));var o=document.querySelector(".popup-design");document.querySelector(".link-list-designs").addEventListener("click",(function(){return o.style.visibility="visible"}));var i=document.querySelector(".popup-transparency"),s=document.querySelector(".transparency-slider");s.addEventListener("click",(function(t){var e,n=t.target;n.matches(".transparency-item__img")&&(i.style.visibility="visible",i.querySelector(".slider-counter-content__current").textContent=1,y(s.querySelectorAll(".transparency-item__img")).forEach((function(t,r){t===n&&(e=r)})),y(i.querySelectorAll(".popup-transparency-slider__slide")).forEach((function(t,n){t.style.display=n===e?"block":"none"})))}))}(),function(){var e=function(){function e(t){var n=t.main,r=t.wrap,o=t.next,i=t.prev,s=t.position,l=void 0===s?0:s,a=t.slidesToShow,c=void 0===a?3:a,u=t.infinity,d=void 0!==u&&u,p=t.responsive,f=void 0===p?[]:p,y=t.hide,m=void 0!==y&&y,h=t.hideButtons,v=void 0!==h&&h,b=t.divideBy,S=void 0===b?1:b,w=t.multiplyBy,g=void 0===w?1:w;L(this,e),this.main=document.querySelector(n),this.wrap=document.querySelector(r),this.slides=document.querySelector(r).children,this.next=document.querySelector(o),this.prev=document.querySelector(i),this.slidesToShow=c,this.responsive=f,this.options={position:l,divideBy:S,multiplyBy:g,infinity:d,hideButtons:v,widthSlide:Math.floor(100/this.slidesToShow),hide:m}}return x(e,[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.next&&this.prev,this.controlSlider(),this.responsive&&this.responseInit(),this.hideSlider(),this.checkButton()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var t,e=g(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("glo-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("sliderCarousel-style");t||((t=document.createElement("style")).id="sliderCarousel-style"),t.textContent="\n                .glo-slider {\n                    overflow: hidden !important;\n                }\n                .glo-slider__wrap {\n                    display: flex !important;\n                    flex-wrap: nowrap !important;\n                    transition: transform 0.5s !important;\n                    will-change: transform !important;\n                    overflow: visible !important;\n                }\n    \n                .glo-slider__item {\n                    flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n                    margin: auto 0 !important;\n                }\n            "),document.head.appendChild(t)}},{key:"hideSlider",value:function(){var e=this;this.options.hide&&w(this.slides).forEach((function(n,r){r===e.options.position?t({duration:1e3,timing:function(t){return t},draw:function(t){n.style.opacity=t}}):n.style.opacity=0}))}},{key:"checkButton",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.options.hideButtons&&(t?this.options.position===this.slides.length-this.slidesToShow?this.next.style.visibility="hidden":this.prev.style.visibility="visible":0===this.options.position?this.prev.style.visibility="hidden":this.next.style.visibility="visible")}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.checkButton(),this.hideSlider(),this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow,this.hideSlider()),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide/this.options.divideBy,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.checkButton(!0),this.hideSlider(),this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0,this.hideSlider()),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide/this.options.divideBy*this.options.multiplyBy,"%)"))}},{key:"controlSlider",value:function(){var t=this;this.next.addEventListener("click",(function(){return t.nextSlider()})),this.prev.addEventListener("click",(function(){return t.prevSlider()}))}},{key:"responseInit",value:function(){var t=this,e=this.slidesToShow,n=this.responsive.map((function(t){return t.multiplyBy})),r=this.responsive.map((function(t){return t.breakpoint})),o=Math.max.apply(Math,w(r)),i=function(){var i=document.documentElement.clientWidth;if(i<o)for(var s=0;s<r.length;s++)n&&i&&(t.options.multiplyBy=n[s]),i<r[s]&&(t.slidesToShow=t.responsive[s].slidesToShow,t.options.widthSlide=Math.floor(100/t.slidesToShow),t.addStyle());else t.slidesToShow=e,t.options.widthSlide=Math.floor(100/t.slidesToShow),t.addStyle()};i(),window.addEventListener("resize",i)}}]),e}();new e({main:".reviews",wrap:".reviews-slider",next:"#reviews-arrow_right",prev:"#reviews-arrow_left",slidesToShow:1,hide:!0,hideButtons:!0}).init(),new e({main:".partners-wrapper",wrap:".partners-slider",next:"#partners-arrow_right",prev:"#partners-arrow_left",hideButtons:!0,slidesToShow:3,responsive:[{breakpoint:1024,slidesToShow:2},{breakpoint:575,slidesToShow:1}]}).init(),new e({main:".transparency-wrapper",wrap:".transparency-slider",next:"#transparency-arrow_right",prev:"#transparency-arrow_left",hideButtons:!0,divideBy:2,slidesToShow:3,responsive:[{breakpoint:1024,slidesToShow:1}]}).init(),new e({main:".problems-slider-wrap",wrap:".problems-slider",next:"#problems-arrow_right",prev:"#problems-arrow_left",hideButtons:!0,slidesToShow:1,divideBy:3}).init(),new e({main:".formula-slider-wrap",wrap:".formula-slider",next:"#formula-arrow_right",prev:"#formula-arrow_left",hideButtons:!0,slidesToShow:3,responsive:[{breakpoint:768,slidesToShow:2},{breakpoint:575,slidesToShow:1}]}).init();var n=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=S(e);if(n){var o=S(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return b(this,t)});function o(){return L(this,o),r.apply(this,arguments)}return x(o,[{key:"addStyle",value:function(){var t=document.getElementById("customCarousel-style");t||((t=document.createElement("style")).id="CustomCarousel-style"),t.textContent="\n                .custom-slider {\n                    overflow: hidden !important;\n                }\n                .custom-slider__wrap {\n                    display: flex !important;\n                    flex-wrap: nowrap !important;\n                    transition: transform 0.5s !important;\n                    will-change: transform !important;\n                    overflow: visible !important;\n                }\n    \n                .custom-slider__item {\n                    // flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n                    margin: auto 0 !important;\n                    margin-right: ").concat(10*this.slidesToShow,"px !important;\n                }\n            "),document.head.appendChild(t)}},{key:"addGloClass",value:function(){this.main.classList.add("custom-slider"),this.wrap.classList.add("custom-slider__wrap");var t,e=g(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("custom-slider__item")}catch(t){e.e(t)}finally{e.f()}}}]),o}(e);w(document.querySelectorAll(".nav-wrap")).forEach((function(t){var e=t.classList[1],r=t.querySelector(".nav-list").classList[1],o=t.querySelector(".nav-arrow_right").id,i=t.querySelector(".nav-arrow_left").id;if("nav-wrap-repair"!==e)new n({main:".".concat(e),wrap:".".concat(r),next:"#".concat(o),prev:"#".concat(i),slidesToShow:3}).init();else{if(document.querySelector(".".concat(e)).closest(".popup-dialog"))return;window.addEventListener("resize",(function(){document.documentElement.clientWidth<=1024&&new n({main:".".concat(e),wrap:".".concat(r),next:"#".concat(o),prev:"#".concat(i),slidesToShow:3}).init()}))}})),new e({main:".portfolio-slider-wrap",wrap:".portfolio-slider",next:"#portfolio-arrow_right",prev:"#portfolio-arrow_left",slidesToShow:3,hideButtons:!0,multiplyBy:1.5,responsive:[{breakpoint:1024,slidesToShow:3,multiplyBy:2.5},{breakpoint:900,slidesToShow:3,multiplyBy:5}]}).init(),document.querySelector(".problems-slider-wrap").classList.remove("glo-slider"),document.querySelector(".formula-slider-wrap").classList.remove("glo-slider")}(),document.querySelector(".designs").addEventListener("click",(function(t){var e,n,r,o,i=t.target;i.closest(".preview-block__item")&&(e=i.closest(".preview-block__item"),r=document.querySelector(".designs-slider"),o=e.closest(".preview-block"),q(r.children).forEach((function(t){"block"===t.style.display&&(n=q(t.children),console.log(n))})),q(o.children).forEach((function(t,r){t===e?(n[r].classList.add("slider-active"),n[r].classList.remove("slider-disabled"),q(t.children)[0].classList.add("preview_active")):(n[r].classList.add("slider-disabled"),n[r].classList.remove("slider-active"),q(t.children)[0].classList.remove("preview_active"))})))}))})();