/* empty css                      */import{S as g,a as m,i as l}from"./assets/vendor-BG8zX51N.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function f(r){const o=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:i,views:p,comments:d,downloads:u})=>`<li class='gallery-item'>
        <a class='gallery-link' href="${e}">
        <div class gallery-block>
        <img class='gallery-img' src="${s}" alt="${t}" />
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
            <span>${u}</span>
            </div>
          </div>
          </div>
        </a>
      </li>`).join(" ");a.galleryBox.innerHTML=o,new g(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",showCounter:!1}).refresh()}function y(r){const o="https://pixabay.com/api/",n={params:{key:"48850297-faa43785257f145b82efcd967",q:encodeURIComponent(r),image_type:"photo",orientation:"horizontal",safesearch:!0}};return m.get(o,n).then(s=>{s.data.hits.length||(a.galleryBox.innerHTML="",l.show({...c,message:"Sorry, there are no images matching your search query. Please, try again!"})),f(s.data.hits)}).catch(s=>{console.log(s),a.galleryBox.innerHTML=""})}const h="./img/errorIcon.svg",v="./img/closeIcon.svg",c={messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:h,close:!1,buttons:[[`<button><img src = "${v}"/></button>`,function(r,o){r.hide({transitionOut:"fadeOut"},o,"button")},!0]],transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0},a={form:document.querySelector(".search-form"),galleryBox:document.querySelector(".gallery")};a.form.addEventListener("submit",r=>{r.preventDefault();let o=r.target.elements.imageKey.value.trim().toLowerCase();o||(a.galleryBox.innerHTML="",l.show({...c,message:"Please fill the search keyword"})),r.target.value="",a.galleryBox.innerHTML='<p class="loader-text">Loading images, please wait... <span class="loader"></span></p>',y(o),setTimeout(()=>{r.target.reset()},10)});
//# sourceMappingURL=index.js.map
