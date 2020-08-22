import * as URLS from '../constants/constant';
import axios from 'axios';
import queryString from 'query-string';
// export async function fetchData(objQuery) {
// let query = await queryString.stringify(objQuery, {
//     sort: false,
//     encode: false
// }); 

// console.log(URLS.URL_MARKET + '?' + query, 'QUERY');
// const response = await axios.get(URL S.URL_MARKET + '?' + query);
// return await response.data;
// }
const axiosClient = axios.create({
    baseURL: URLS.BASE_URL,
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
});
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {

        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});
export default axiosClient;