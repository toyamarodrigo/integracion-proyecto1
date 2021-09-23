import React from "react";
import { Stack, FormControl, FormLabel, FormErrorMessage, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { BasicLayout } from "../../layout/BasicLayout";
import { useGetUser } from "../../hooks";
import { createUser } from "../../api/users.api";
import { Loader } from "../../components";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { isLoading, user, id } = useGetUser();

  const onSubmit = async (values) => {
    if (user) {
      const body = { id, name: user.name };
      const response = await createUser(body);

      return response;
    } else {
      const body = { id, name: values.name };
      const response = await createUser(body);

      return response;
    }
  };

  if (isLoading && !user) return <Loader />;

  return (
    <BasicLayout>
      <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            isReadOnly={user && true}
            placeholder={!user && "ex: Julio"}
            value={user ? user.name : undefined}
            {...register("name", {
              minLength: { value: 3, message: "Minimum length should be 3" },
            })}
          />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>
        <Button
          colorScheme={user && user.isPresent ? "red" : "whatsapp"}
          isLoading={isSubmitting}
          type="submit"
        >
          {user && user.isPresent ? "Disconnect" : "Assist"}
        </Button>
      </Stack>
    </BasicLayout>
  );
};
