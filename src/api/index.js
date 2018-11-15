import axios from 'axios';

const API = 'http://localhost:8888/wordpress/wp-json/wp/v2';

export const fetchEndpoint = endpoint => axios.get(`${API}/${endpoint}`);
