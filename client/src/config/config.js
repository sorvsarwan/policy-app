export const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';
export const API_PORT = process.env.REACT_APP_API_PORT || 2021;
export const HOST = `${API_HOST}:${API_PORT}`;
console.log(process.env);
export const API_URL = `http://${HOST}${API_BASE_URL}`;

export const TABLE_PAGE_SIZE = process.env.REACT_APP_TABLE_PAGE_SIZE || 10;