!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){c=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(c)}));var c=null;t.addEventListener("click",(function(){t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.99ea7b63.js.map