import React from "react";
import { Wrap, Stack, Text } from "@chakra-ui/react";
import moment from "moment";

import { Card, Loader } from "../../components";
import { BasicLayout } from "../../layout/BasicLayout";
import { useGetUsers, useInterval } from "../../hooks";
import { DAYS, HOURS, MINUTES, showTimeDifference, TIME_FORMAT } from "../../utils";

export const Home = () => {
  // TODO: Tipados
  const { isLoading, users } = useGetUsers();
  const { actualTime } = useInterval();

  // TODO: Tipados
  const handleTimeDifference = (actualTime: string, userDate) => {
    const minutes = moment(actualTime, TIME_FORMAT).diff(userDate, MINUTES);
    const hours = moment(actualTime, TIME_FORMAT).diff(userDate, HOURS);
    const days = moment(actualTime, TIME_FORMAT).diff(userDate, DAYS);

    if (minutes < 59) return showTimeDifference(actualTime, userDate, MINUTES) + "m";
    if (hours < 23) return showTimeDifference(actualTime, userDate, HOURS) + "hs";
    if (days < 30) return showTimeDifference(actualTime, userDate, DAYS) + "d";
  };

  if (isLoading) return <Loader />;

  return (
    <BasicLayout>
      <Stack pb={8} pt={{ base: 24 }}>
        <Text
          fontSize={{ base: "1.2rem", md: "2rem", lg: "4rem" }}
          fontWeight="bold"
          textAlign="center"
        >
          {actualTime}
        </Text>
      </Stack>
      <Wrap h="100%" justify="center" spacing={4} w="80%">
        {users &&
          users.map((user, index) => (
            <Card
              key={index}
              actualTime={actualTime}
              handleTimeDifference={handleTimeDifference}
              user={user}
            />
          ))}
      </Wrap>
    </BasicLayout>
  );
};
