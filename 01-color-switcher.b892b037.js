!function(){function n(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e=document.querySelector("button"),t=null;e.nextElementSibling.disabled=!0,e.addEventListener("click",(function(){document.body.style.background=n(),t=setInterval((function(){document.body.style.background=n()}),1e3),e.disabled=!0,e.nextElementSibling.disabled=!1})),e.nextElementSibling.addEventListener("click",(function(){clearInterval(t),e.disabled=!1,e.nextElementSibling.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.b892b037.js.map