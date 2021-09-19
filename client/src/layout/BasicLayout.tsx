import React from "react";
import { Stack, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";

import { GITHUB_REPO } from "../utils";

interface BasicLayoutProps {
  children: React.ReactNode;
}

export const BasicLayout = ({ children }: BasicLayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      alignItems="center"
      bgColor="whiteAlpha.100"
      h="100vh"
      justifyContent="center"
      position="relative"
      w="100%"
    >
      <Stack position="absolute" right={8} top={4}>
        <IconButton
          aria-label="Github repo"
          icon={<FaGithub />}
          onClick={() => window.open(GITHUB_REPO, "_blank")}
        />
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </Stack>
      {children}
    </Stack>
  );
};
