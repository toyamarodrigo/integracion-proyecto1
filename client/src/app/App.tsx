import React from "react";
import { Stack, Wrap, Text, IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import moment from "moment";

import { Loader, Card } from "../components";
import { showTimeDifference, MINUTES, HOURS, DAYS, TIME_FORMAT } from "../utils";
import { useGetUsers, useInterval } from "../hooks";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isLoading, users } = useGetUsers();
  const { actualTime } = useInterval();

  const handleTimeDifference = (actualTime, userDate) => {
    const minutes = moment(actualTime, TIME_FORMAT).diff(userDate, MINUTES);
    const hours = moment(actualTime, TIME_FORMAT).diff(userDate, HOURS);
    const days = moment(actualTime, TIME_FORMAT).diff(userDate, DAYS);

    if (minutes < 59) return showTimeDifference(actualTime, userDate, MINUTES) + "m";
    if (hours < 23) return showTimeDifference(actualTime, userDate, HOURS) + "hs";
    if (days < 30) return showTimeDifference(actualTime, userDate, DAYS) + "d";
  };

  if (isLoading) return <Loader />;

  return (
    <Stack
      alignItems="center"
      bgColor="whiteAlpha.100"
      h="100vh"
      justifyContent="center"
      position="relative"
      w="100%"
    >
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        position="absolute"
        right={8}
        top={4}
        onClick={toggleColorMode}
      />

      <Stack pb={8} pt={{ base: 24 }}>
        <Text fontSize={{ base: "2rem", lg: "4rem" }} fontWeight="bold">
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
    </Stack>
  );
};

export default App;
