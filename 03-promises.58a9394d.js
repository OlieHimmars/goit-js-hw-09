function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var u=r("eWCmQ");const l={form:document.querySelector("form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function i(o,t){Math.random()>.3?(console.log(`✅ Fulfilled promise ${o} in ${t}ms`),e(u).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)):(console.log(`❌ Rejected promise ${o} in ${t}ms`),e(u).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`))}l.form.addEventListener("submit",(function(e){let o,t=Number(l.step.value),n=Number(l.delay.value);e.preventDefault();for(let e=0;e<Number(l.amount.value);e+=1)o=n+t*e,setTimeout(i(e+1,o),o),set}));
//# sourceMappingURL=03-promises.58a9394d.js.map
