import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs, iziOpt } from '..//main.js';
import { markupRender } from './render-functions.js';

export function getImages(userImgKeyword) {
  const apiUrl = 'https://pixabay.com/api/';
  const params = {
    params: {
      key: '48850297-faa43785257f145b82efcd967',
      q: encodeURIComponent(userImgKeyword),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  return axios
    .get(apiUrl, params)
    .then(res => {
      if (!res.data.hits.length) {
        iziToast.show({
          ...iziOpt,
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
        });
        refs.box.innerHTML = '';
      } else {
        markupRender(res.data.hits);
      }
    })
    .catch(error => {
      console.log(error);
      refs.box.innerHTML = '';
    });
}
