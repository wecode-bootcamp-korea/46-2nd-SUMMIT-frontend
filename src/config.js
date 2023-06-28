export const BASE_URL = 'http://10.58.52.50:8072';

export const APIS = {
  login: `${BASE_URL}/users/kakao-login`,
  wish: `${BASE_URL}/wishs`,
  register: `${BASE_URL}/showposts/create`,
  showList: `${BASE_URL}/shows`,
  showDetail: `${BASE_URL}/showDetail`,
  getPoint: `${BASE_URL}/reservations`,
  checkout: `${BASE_URL}/reservations/create`,
};
