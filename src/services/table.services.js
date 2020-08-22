import axiosClient from './config.services';

class TableService {

  static list(query) {
    // return fetchData(query);
    const url = '/coins/markets';
    console.log(query, 'query');
    console.log(axiosClient.get(url, { params: query }), 'DĐ');
    return axiosClient.get(url, { params: query });
  }

}
export default TableService;
