import React from "react";
import { Stack, FormControl, FormLabel, FormErrorMessage, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { BasicLayout } from "../../layout/BasicLayout";
import { useGetUser } from "../../hooks";
import { createUser } from "../../api/users.api";

interface FormProps {}

export const Form = ({}: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { isLoading, user, id } = useGetUser();

  const onSubmit = async (values) => {
    const body = { id, name: values.name };

    const response = await createUser(body);

    return response;
  };

  return (
    <BasicLayout>
      <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            placeholder={`ex: ${user?.name}`}
            {...register("name", {
              required: "Name is required",
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
