import { getImages } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const iziOpt = {
  messageColor: '#FAFAFB',
  messageSize: '16px',
  backgroundColor: '#EF4040',
  //   iconUrl: errorIcon,
  transitionIn: 'bounceInLeft',
  //   position: 'topRight',
  displayMode: 'replace',
  closeOnClick: true,
};

export const refs = {
  form: document.querySelector('.search-form'),
  box: document.querySelector('.gallery'),
};
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const userKeyword = e.target.elements.imageKey.value.trim();
  if (!userKeyword) {
    iziToast.show({
      ...iziOpt,
      message: 'Please fill the search keyword',
    });
  } else {
    getImages(userKeyword);
  }
});
