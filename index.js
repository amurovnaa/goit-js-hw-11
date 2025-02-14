/* empty css                      */import{a as u,i as c}from"./assets/vendor-UAe6XFFj.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function m(o){const s=o.map(({webformatURL:i,largeImageURL:t,tags:e,likes:r,views:a,comments:d,downloads:p})=>`<li class='gallery-item'>
        <a class='gallery-link' href="${t}">
        <img class='gallery-img' src="${i}" alt="${e}" />
          <div class="details">
            <div class = "descr">
            <p>Likes</p>
            <span>${r}</span>
            </div>
            <div class = "descr">
            <p>Views</p>
            <span>${a}</span>
            </div>
            <div class = "descr">
            <p>Comment</p>
            <span>${d}</span>
            </div>
            <div class = "descr">
            <p>Downloads</p>
            <span>${p}</span>
            </div>
          </div>
        </a>
      </li>`).join(" ");n.box.innerHTML=s}function f(o){const s="https://pixabay.com/api/",i={params:{key:"48850297-faa43785257f145b82efcd967",q:encodeURIComponent(o),image_type:"photo",orientation:"horizontal",safesearch:!0}};return u.get(s,i).then(t=>{t.data.hits.length?m(t.data.hits):(c.show({...l,message:"Sorry, there are no images matching your search query. Please, try again!"}),n.box.innerHTML="")}).catch(t=>{console.log(t),n.box.innerHTML=""})}const l={messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",transitionIn:"bounceInLeft",displayMode:"replace",closeOnClick:!0},n={form:document.querySelector(".search-form"),box:document.querySelector(".gallery")};n.form.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.imageKey.value.trim();s?f(s):c.show({...l,message:"Please fill the search keyword"})});
//# sourceMappingURL=index.js.map
