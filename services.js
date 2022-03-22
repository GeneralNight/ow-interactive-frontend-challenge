import axios from 'axios';

const url = 'https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master';

const axiosInstance = axios.create({
  baseURL: url,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  getProducts() {
    return axios.get('https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json')
  },
  getAddress(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  },
  sendCheckout(body) {
    return axios.post(`https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/orders/store`,body)
  }
};


