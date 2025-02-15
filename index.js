/* empty css                      */import{S as g,a as u,i as l}from"./assets/vendor-BG8zX51N.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function f(t){const s=t.map(({webformatURL:o,largeImageURL:e,tags:r,likes:i,views:p,comments:d,downloads:m})=>`<li class='gallery-item'>
        <a class='gallery-link' href="${e}">
        <div class gallery-block>
        <img class='gallery-img' src="${o}" alt="${r}" />
          <div class="gallery-details">
            <div class = "descr">
            <p>Likes</p>
            <span>${i}</span>
            </div>
            <div class = "descr">
            <p>Views</p>
            <span>${p}</span>
            </div>
            <div class = "descr">
            <p>Comments</p>
            <span>${d}</span>
            </div>
            <div class = "descr">
            <p>Downloads</p>
            <span>${m}</span>
            </div>
          </div>
          </div>
        </a>
      </li>`).join(" ");a.galleryBox.innerHTML=s,new g(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",showCounter:!1}).refresh()}function y(t){const s="https://pixabay.com/api/",n={params:{key:"48850297-faa43785257f145b82efcd967",q:encodeURIComponent(t),image_type:"photo",orientation:"horizontal",safesearch:!0}};return u.get(s,n).then(o=>{o.data.hits.length||(a.galleryBox.innerHTML="",l.show({...c,message:"Sorry, there are no images matching your search query. Please, try again!"})),f(o.data.hits)}).catch(o=>{console.log(o),a.galleryBox.innerHTML=""})}const h="./img/errorIcon.svg",c={messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:h,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0},a={form:document.querySelector(".search-form"),galleryBox:document.querySelector(".gallery")};a.form.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.imageKey.value.trim().toLowerCase();s||(a.galleryBox.innerHTML="",l.show({...c,message:"Please fill the search keyword"})),a.galleryBox.innerHTML='<p class="loader">Loading images, please wait... <span class="loader"></span></p>',y(s)});
//# sourceMappingURL=index.js.map
