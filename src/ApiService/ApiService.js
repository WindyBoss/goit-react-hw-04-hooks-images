import axios from 'axios';

const KEY = '24446633-b389c41e2d0894dd8f6fd2fd1'

export const ApiService = async (keyword, page) => {
  const link = `https://pixabay.com/api/?q=${keyword}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=20`;
  const response = await axios.get(link);
  return response.data;
};

