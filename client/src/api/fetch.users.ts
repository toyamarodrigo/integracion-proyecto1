import axios from "axios";

import { BASE_URL } from "../utils/constants";

export const getUsers = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/users/view`);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};
