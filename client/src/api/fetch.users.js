import axios from 'axios';

export const getUsers = async () => {
  console.log('getUsers fetching');
  try {
    const result = await axios.get('http://localhost:3001/users/view');
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
