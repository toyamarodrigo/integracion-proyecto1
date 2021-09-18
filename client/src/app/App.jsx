import React, { useEffect, useState } from 'react';
import { Stack, Wrap, WrapItem, Center, Text } from '@chakra-ui/react';
import { getUsers } from '../api/fetch.users';

import moment from 'moment';
import { Loader } from '../components/Loader/Loader';
import { showTimeDifference } from '../utils/showMHD';
import { MINUTES, HOURS, DAYS, TIME_FORMAT } from '../utils/constants';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const [actualTime, setActualTime] = useState(moment().format(TIME_FORMAT));

  const handleTimeDifference = (actualTime, userDate) => {
    const minutes = moment(actualTime, TIME_FORMAT).diff(userDate, MINUTES);
    const hours = moment(actualTime, TIME_FORMAT).diff(userDate, HOURS);
    const days = moment(actualTime, TIME_FORMAT).diff(userDate, DAYS);

    if (minutes < 59)
      return showTimeDifference(actualTime, userDate, MINUTES) + ' m';
    if (hours < 23)
      return showTimeDifference(actualTime, userDate, HOURS) + ' hs';
    if (days < 30) return showTimeDifference(actualTime, userDate, DAYS) + ' d';
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = setInterval(async () => {
      const data = await getUsers();
      if (data) setUsers(data);
      setIsLoading(false);
    }, 3000);
    console.log(isLoading);
    return () => clearInterval(fetchUsers);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActualTime(moment().format(TIME_FORMAT));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Stack
      h="100vh"
      w="100vw"
      alignItems="center"
      justifyContent="center"
      bgColor="whiteAlpha.100"
    >
      <Wrap justify="center">
        {users &&
          users.map((user, index) => (
            <WrapItem key={index}>
              <Center
                w="300px"
                h="100px"
                bgColor={user.isPresent ? 'whatsapp.200' : 'gray.200'}
                borderRadius="10px"
                shadow="md"
                flexDirection="column"
              >
                <Text fontWeight="bold">{user.name}</Text>
                <Text>{handleTimeDifference(actualTime, user.date)}</Text>
                <Text>
                  {user.date && moment(user.date).format(TIME_FORMAT)}
                </Text>
              </Center>
            </WrapItem>
          ))}
      </Wrap>
      <Stack pt={8}>
        <Text>{actualTime}</Text>
      </Stack>
    </Stack>
  );
};

export default App;
