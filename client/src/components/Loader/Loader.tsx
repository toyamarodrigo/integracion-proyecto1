import React from "react";
import { Stack, Spinner } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Stack alignItems="center" h="100vh" justifyContent="center" w="100vw">
      <Spinner size="xl" />
    </Stack>
  );
};
