!function(){var e=()=>{const e={arrModalOpeners:document.querySelectorAll("[data-btn-open]"),arrBtnClose:document.querySelectorAll(".btn-close"),backdrop:document.querySelector("[data-modal]")};e.backdrop&&e.arrBtnClose&&e.arrModalOpeners&&e.arrModalOpeners.forEach((t=>{t.addEventListener("click",(()=>{const o=t.getAttribute("data-btn-open");if(0==o.length)return;e.backdrop.setAttribute("data-modal",o);const n=document.querySelector(`.${o}`);n&&n.addEventListener("click",(e=>e.stopPropagation())),document.body.classList.add("no-scroll"),e.menuBtn.classList.contains("is-open")&&(e.menuBtn.classList.remove("is-open"),e.menuBtn.setAttribute("aria-expanded","false"),e.mobileMenu.classList.remove("is-open"),document.body.classList.remove("menu-opened"))}))}));const t=document.querySelector("[data-modal]"),o=document.querySelector(".btn-close");function n(){t.setAttribute("data-modal",""),document.body.classList.remove("no-scroll")}setTimeout((()=>{t.setAttribute("data-modal","buynow"),document.body.classList.add("no-scroll"),o.addEventListener("click",(()=>{n()})),t.addEventListener("click",(e=>{e.stopPropagation(),e.currentTarget===e.target&&n()}))}),1e4)};document.addEventListener("DOMContentLoaded",(()=>{e();const t={menuBtn:document.querySelector("[data-menu-button]"),mobileMenu:document.querySelector("[data-menu]"),arrMenuItems:document.querySelectorAll(".nav__link"),btnGotoTop:document.querySelector("[data-goto-top]")},o=document.querySelector(".nav-wrapper"),n=document.querySelector(".main");function a(){if(window.matchMedia("(min-width: 1280px)").matches)return;const e="true"==t.menuBtn.getAttribute("aria-expanded")|!1;t.menuBtn.classList.toggle("is-open"),t.menuBtn.setAttribute("aria-expanded",!e),t.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll"),document.body.classList.toggle("menu-opened")}t.menuBtn&&t.menuBtn.addEventListener("click",a),t.btnGotoTop&&t.btnGotoTop.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),window.onscroll=function(){document.body.scrollTop>50||document.documentElement.scrollTop>50?(t.btnGotoTop.classList.remove("goto-top--hide"),n.style.marginTop=`${o.clientHeight}px`,o.classList.add("fixed"),o.classList.add("animate__animated"),o.classList.add("animate__fadeIn")):(t.btnGotoTop.classList.add("goto-top--hide"),n.style.marginTop=0,o.classList.remove("fixed"),o.classList.remove("animate__animated"),o.classList.remove("animate__fadeIn"))};const s=document.querySelectorAll(".nav__link"),c=document.querySelector(".nav__items");let r=document.location.href;s.forEach((e=>{e.href===r&&e.classList.add("nav__link--active"),e.addEventListener("click",a)})),c.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;const t=e.target,o="nav__link--active",n=c.querySelector(".nav__link--active");n&&(n.classList.remove(o),t.classList.add(o))}))}));new Splide("#top-banner",{type:"loop",pagination:!1,arrows:!1,autoplay:!0,interval:5e3,speed:1e3,focus:"center"}).mount()}();
//# sourceMappingURL=pravila.0a02f725.js.map
