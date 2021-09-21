import React, { useRef } from "react";
import {
  useDisclosure,
  HStack,
  Stack,
  IconButton,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useColorMode,
  Button,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import { GITHUB_REPO } from "../../utils";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnMenuRef = useRef();
  const Links = [
    { page: "/", name: "Home" },
    { page: "/form", name: "Form" },
  ];

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      position="absolute"
      px={{ base: 10, sm: 20, lg: 20, xl: 30 }}
      py={4}
      top={0}
      w="100%"
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        maxW={{ base: "100%", xl: "1152px" }}
        w="100%"
      >
        <Stack alignItems="center" direction="row">
          <HStack
            as={"nav"}
            className="nav-links"
            color="white"
            display={{ base: "none", md: "flex" }}
            spacing={10}
          >
            {Links.map((link, index) => (
              <Link key={index} as={RouterLink} to={`${link.page}`}>
                <Button
                  bgColor="transparent"
                  color={colorMode === "dark" ? "white" : "black"}
                  cursor="pointer"
                  fontWeight="normal"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </HStack>
        </Stack>

        <HStack display={{ base: "none", md: "flex" }}>
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
        </HStack>

        <IconButton
          ref={btnMenuRef}
          aria-label={"Open Menu"}
          backgroundColor="transparent"
          display={{ md: "none" }}
          icon={!isOpen && <HamburgerIcon h={8} w={8} />}
          size={"md"}
          onClick={onOpen}
        />
      </Stack>

      <Drawer finalFocusRef={btnMenuRef} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={colorMode === "dark" ? "white" : "black"} />
          <DrawerHeader
            color={colorMode === "dark" ? "white" : "black"}
            marginBottom={6}
            marginLeft={2}
          >
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Stack marginLeft={4} spacing={6}>
              <VStack
                alignItems="flex-start"
                color={colorMode === "dark" ? "white" : "black"}
                spacing={6}
              >
                {Links.map((link, index) => (
                  <Link key={index} as={RouterLink} to={`${link.page}`}>
                    <Button
                      bgColor="transparent"
                      color={colorMode === "dark" ? "white" : "black"}
                      cursor="pointer"
                      fontWeight="normal"
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </VStack>
              <VStack alignItems="flex-start">
                <IconButton
                  aria-label="color mode"
                  icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                  isRound={true}
                  padding={0}
                  onClick={toggleColorMode}
                />
              </VStack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};
