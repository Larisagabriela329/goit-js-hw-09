var e,t,n,i,r,o,a,u,f;t={},n={},null==(i=(e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6)&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),(r=i.register)("dCfNN",function(t,n){var r=i("6aBn7"),o="Expected a function",a=0/0,u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,m=d||v||Function("return this")(),p=Object.prototype.toString,g=Math.max,b=Math.min,y=function(){return m.Date.now()};function x(e){var t=void 0===e?"undefined":(0,r._)(e);return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":(0,r._)(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return a;if(x(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=x(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var i=l.test(e);return i||c.test(e)?s(e.slice(2),i?2:8):f.test(e)?a:+e}t.exports=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw TypeError(o);return x(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),function(e,t,n){var i,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw TypeError(o);function m(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function p(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function j(){var e,n,i,r=y();if(p(r))return S(r);f=setTimeout(j,(e=r-l,n=r-c,i=t-e,d?b(i,a-n):i))}function S(e){return(f=void 0,v&&i)?m(e):(i=r=void 0,u)}function h(){var e,n=y(),o=p(n);if(i=arguments,r=this,l=n,o){if(void 0===f)return c=e=l,f=setTimeout(j,t),s?m(e):u;if(d)return f=setTimeout(j,t),m(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=O(t)||0,x(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},h.flush=function(){return void 0===f?u:S(y())},h}(e,t,{leading:i,maxWait:t,trailing:r})}}),r("6aBn7",function(e,t){function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}Object.defineProperty(e.exports,"_",{get:function(){return n},set:void 0,enumerable:!0,configurable:!0})}),o=i("dCfNN"),a=document.querySelector(".feedback-form"),u="feedback-form-state",f=(o&&o.__esModule?o.default:o)(function(){var e={email:a.email.value,message:a.message.value};localStorage.setItem(u,JSON.stringify(e))},500),a.addEventListener("input",f),a.addEventListener("submit",function(e){e.preventDefault(),console.log("Submitted data:",{email:a.email.value,message:a.message.value}),localStorage.removeItem(u),a.reset()}),function(){var e=localStorage.getItem(u);if(e){var t=JSON.parse(e),n=t.email,i=t.message;a.email.value=n||"",a.message.value=i||""}}();
//# sourceMappingURL=03-feedback.ce3cca5a.js.map
