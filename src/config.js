export const BASE_URL_K = 'http://10.58.52.50:8071';
export const BASE_URL_L = 'http://10.58.52.66:8000';

export const APIS = {
  login: `${BASE_URL_K}/users/kakao-login`,
  wish: `${BASE_URL_K}/wishs`,
  register: `${BASE_URL_L}/showposts/create`,
  showList: `${BASE_URL_K}/shows`,
  showDetail: `${BASE_URL_K}/showDetail`,
  getPoint: `${BASE_URL_K}/reservations`,
  checkout: `${BASE_URL_K}/reservations/create`,
};
