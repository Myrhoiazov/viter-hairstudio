(()=>{const e={menuBtn:document.querySelector("[data-menu-button]"),mobileMenu:document.querySelector("[data-menu]"),arrModalOpeners:document.querySelectorAll("[data-btn-open]"),backdrop:document.querySelector("[data-modal]"),arrBtnClose:document.querySelectorAll(".btn-close"),arrMenuItems:document.querySelectorAll(".nav__link"),btnGotoTop:document.querySelector("[data-goto-top]")};function t(){if(window.matchMedia("(min-width: 1280px)").matches)return;const t="true"==e.menuBtn.getAttribute("aria-expanded")|!1;e.menuBtn.classList.toggle("is-open"),e.menuBtn.setAttribute("aria-expanded",!t),e.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll"),document.body.classList.toggle("menu-opened")}e.menuBtn&&e.menuBtn.addEventListener("click",t),e.backdrop&&e.arrBtnClose&&e.arrModalOpeners&&(e.arrModalOpeners.forEach((t=>{t.addEventListener("click",(()=>{const o=t.getAttribute("data-btn-open");if(0==o.length)return;e.backdrop.setAttribute("data-modal",o);const n=document.querySelector(`.${o}`);n&&n.addEventListener("click",(e=>e.stopPropagation())),document.body.classList.add("no-scroll"),e.menuBtn.classList.contains("is-open")&&(e.menuBtn.classList.remove("is-open"),e.menuBtn.setAttribute("aria-expanded","false"),e.mobileMenu.classList.remove("is-open"),document.body.classList.remove("menu-opened"))}))})),e.arrBtnClose.forEach((t=>t.addEventListener("click",(()=>{e.backdrop.setAttribute("data-modal",""),document.body.classList.remove("no-scroll")})))),e.backdrop.addEventListener("click",(()=>{e.backdrop.setAttribute("data-modal",""),document.body.classList.remove("no-scroll")}))),e.arrMenuItems&&e.arrMenuItems.forEach((e=>{e.addEventListener("click",t)})),e.btnGotoTop&&e.btnGotoTop.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));const o=document.querySelector(".nav-wrapper"),n=document.querySelector(".hero");window.onscroll=function(){document.body.scrollTop>50||document.documentElement.scrollTop>50?(e.btnGotoTop.classList.remove("goto-top--hide"),n.style.marginTop=`${o.clientHeight}px`,o.classList.add("fixed"),o.classList.add("animate__animated"),o.classList.add("animate__fadeIn")):(e.btnGotoTop.classList.add("goto-top--hide"),n.style.marginTop=0,o.classList.remove("fixed"),o.classList.remove("animate__animated"),o.classList.remove("animate__fadeIn"))}})(),$(".reviews__slider").slick({dots:!0,arrows:!1,adaptiveHeight:!0,customPaging:function(e,t){return'<button class="sl-link"><div class="sl-inner"></div></button>'}});new Splide("#mastersSlide",{type:"loop",perPage:3,width:"50rem",gap:4,pagination:!1,lazyLoad:!0,breakpoints:{1280:{gap:1,perPage:1,width:"18rem"},767:{gap:2,perPage:1,width:"23rem"}}}).mount();const e=document.querySelectorAll(".js-hidden"),t=(document.querySelectorAll(".nav__link"),new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&!e.target.classList.contains("show")&&e.target.classList.add("show")}))})));e.forEach((e=>t.observe(e)));const o=document.querySelectorAll(".nav__link"),n=document.querySelector(".nav__items");let a=document.location.href;o.forEach((e=>{e.href===a&&e.classList.add("nav__link--active")})),n.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;const t=e.target,o="nav__link--active",a=n.querySelector(".nav__link--active");a&&(a.classList.remove(o),t.classList.add(o));t.classList.add(o)}));
//# sourceMappingURL=index.417c1355.js.map
