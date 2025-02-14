import { refs } from '..//main.js';

export function markupRender(data) {
  const markup = data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class='gallery-item'>
        <a class='gallery-link' href="${largeImageURL}">
        <img class='gallery-img' src="${webformatURL}" alt="${tags}" />
          <div class="details">
            <div class = "descr">
            <p>Likes</p>
            <span>${likes}</span>
            </div>
            <div class = "descr">
            <p>Views</p>
            <span>${views}</span>
            </div>
            <div class = "descr">
            <p>Comment</p>
            <span>${comments}</span>
            </div>
            <div class = "descr">
            <p>Downloads</p>
            <span>${downloads}</span>
            </div>
          </div>
        </a>
      </li>`
    )
    .join(' ');
  refs.box.innerHTML = markup;
}
