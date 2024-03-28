import axios from 'axios';

const API_BASE_URL = 'https://api.orneginiz.com'; // API'nizin temel URL'si

// Profil verilerini çekme fonksiyonu
export const fetchProfileData = () => {
  return axios.get(`${API_BASE_URL}/kullanici-profilleri`);
};