let t;function e(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}document.querySelector("[data-start]").addEventListener("click",(function(){t=setInterval(e,1e3)})),document.querySelector("[data-stop]").addEventListener("click",(function(){clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.a0f54558.js.map
