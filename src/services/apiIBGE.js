import axios from 'axios';


const API = axios.create({
  baseURL: "https://servicodados.ibge.gov.br"
});


export default API;