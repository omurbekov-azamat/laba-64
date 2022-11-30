import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'https://flat-white-js17-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosApi;