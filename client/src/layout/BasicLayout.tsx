import React from "react";
import { Stack } from "@chakra-ui/react";

import { Navbar } from "../components";

interface BasicLayoutProps {
  children: React.ReactNode;
}

export const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <Stack
      alignItems="center"
      bgColor="whiteAlpha.100"
      h="100vh"
      justifyContent="center"
      position="relative"
      w="100%"
    >
      <Navbar />
      {children}
    </Stack>
  );
};
