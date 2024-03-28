import axios from 'axios';

const API_BASE_URL = ''; // API'nizin temel URL'si
//https://api.orneginiz.com


// Profil verilerini çekme fonksiyonu
export const fetchProfileData = () => {
  return axios.get(`${API_BASE_URL}/profile`);
};