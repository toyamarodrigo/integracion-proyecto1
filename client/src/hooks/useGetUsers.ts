import { useEffect, useState } from "react";

import { getUsers } from "../api/users.api";
import { Users } from "../types";

export const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<Users[]>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = setInterval(async () => {
      const data = await getUsers();

      if (data) setUsers(data);
      setIsLoading(false);
    }, 2000);

    return () => clearInterval(fetchUsers);
  }, []);

  return { isLoading, users };
};
