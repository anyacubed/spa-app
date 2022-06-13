import { baseUrl } from '../utils/constants';

export const fetchData = async () => {
  const response = await fetch(`${baseUrl}`);
  const json = await response.json();
  return json;
};
