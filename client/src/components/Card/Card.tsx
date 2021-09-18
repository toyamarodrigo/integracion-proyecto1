import React from "react";
import { WrapItem, Center, Box, Text, Stack } from "@chakra-ui/react";
import moment from "moment";

import { TIME_FORMAT } from "../../utils/constants";

export const Card = ({ actualTime, handleTimeDifference, user }) => {
  return (
    <WrapItem>
      <Center
        bgColor={user.isPresent ? "whatsapp.200" : "gray.200"}
        borderRadius="10px"
        flexDirection="row"
        h="100px"
        position="relative"
        shadow="lg"
        w="300px"
      >
        <Box
          bgColor="whiteAlpha.700"
          p={1}
          position="absolute"
          right={2}
          rounded="full"
          shadow="md"
          top={2}
        >
          <Text color="blackAlpha.900" fontSize="12px" fontWeight="semibold">
            {handleTimeDifference(actualTime, user.date)}
          </Text>
        </Box>
        <Stack>
          <Text color="blackAlpha.900" fontSize="1.2rem" fontWeight={700}>
            {user.name}
          </Text>
          <Stack direction="row">
            <Text color="blackAlpha.900" fontSize="0.8rem" fontWeight={700}>
              {user.isPresent ? "Joined: " : "Last seen: "}
            </Text>
            <Text color="blackAlpha.900" fontSize="0.8rem" fontWeight={300}>
              {user.date && moment(user.date).format(TIME_FORMAT)}
            </Text>
          </Stack>
        </Stack>
      </Center>
    </WrapItem>
  );
};
