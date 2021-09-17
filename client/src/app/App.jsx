import React, { useEffect, useState } from 'react';
import { Stack, Wrap, WrapItem, Center } from '@chakra-ui/react';
import { getUsers } from '../api/fetch.users';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    setInterval(async () => {
      const data = await getUsers();
      if (data) setUsers(data);
    }, 2000);

    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <Stack w="100vw" h="100vh">
        <Text>Loading...</Text>
      </Stack>
    );

  return (
    <Stack h="100vh" w="100vw" alignItems="center" justifyContent="center">
      <Wrap w="100%" justify="center">
        {users &&
          users.map((user, index) => (
            <WrapItem key={index}>
              <Center w="300px" h="100px" bgColor="telegram.200">
                {user.data}
              </Center>
            </WrapItem>
          ))}
      </Wrap>
    </Stack>
  );
};

export default App;
