import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { getUserById } from "../api/users.api";
import { Users } from "../types";

import { useLocalStorage } from ".";

// TODO: Tipados usestate
export const useGetUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<Users>(null);
  const [id, setId] = useLocalStorage("userId", uuidv4());

  useEffect(() => {
    setIsLoading(true);
    setId(id);
    const fetchUser = setInterval(async () => {
      const response = await getUserById(id);

      setUser(response);
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(fetchUser);
  }, []);

  return { isLoading, user, id };
};
