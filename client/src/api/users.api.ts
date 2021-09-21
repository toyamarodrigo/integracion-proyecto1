import axios from "axios";

import { BASE_URL } from "../utils/constants";

// TODO: Tipados
export const getUsers = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/users/view`);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};

// TODO: Tipados
export const createUser = async (data) => {
  try {
    const result = await axios.post(`${BASE_URL}/nfc/create`, data);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};

// TODO: Tipados
export const getUserById = async (id) => {
  try {
    const result = await axios.get(`${BASE_URL}/users/view/${id}`);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};
