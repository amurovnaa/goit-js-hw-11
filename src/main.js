import { getImages } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const iziOpt = {
  messageColor: '#FAFAFB',
  messageSize: '16px',
  backgroundColor: '#EF4040',
  //   iconUrl: errorIcon,
  transitionIn: 'bounceInLeft',
  position: 'topRight',
  displayMode: 'replace',
  closeOnClick: true,
};

export const refs = {
  form: document.querySelector('.search-form'),
  galleryBox: document.querySelector('.gallery'),
};
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const userKeyword = e.target.elements.imageKey.value.trim();
  if (!userKeyword) {
    refs.galleryBox.innerHTML = '';
    iziToast.show({
      ...iziOpt,
      message: 'Please fill the search keyword',
    });
  }
  refs.galleryBox.innerHTML =
    '<p>Loading images, please wait... <span class="loader"></span></p>';
  getImages(userKeyword);
});
