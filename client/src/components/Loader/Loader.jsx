import React from 'react';
import { Stack, Spinner } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Stack w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Spinner size="xl" />
    </Stack>
  );
};
