import InputText from "@/components/inputs/InputText";
import { UserData } from "@/typings/user";
import { Box, Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import {
  SubmitHandler,
  useForm,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import schema from "./schema";

export type FormValues = UserData & {
  password: string;
  confirmPassword: string;
};

type Props = {
  onSubmit: SubmitHandler<FormValues>;
  defaultValues: Partial<FormValues>;
};

export type UserFormRefType = {
  setError: UseFormSetError<FormValues>;
  setValue: UseFormSetValue<FormValues>;
};

const UserForm: ForwardRefRenderFunction<UserFormRefType, Props> = (
  { onSubmit, defaultValues },
  ref
) => {
  const { handleSubmit, control, setError, setValue } = useForm({
    defaultValues: {
      email: "",
      status: true,
      ...defaultValues,
      id: defaultValues.id.value,
      name: `${defaultValues.name.first} ${defaultValues.name.last}`,
      gender: defaultValues.name.title === "Mr" ? "male" : "female",
      dob: new Date(defaultValues.dob.date).toISOString().split("T")[0],
      country: defaultValues.location.country,
      city: defaultValues.location.city,
    },
    resolver: yupResolver(schema(defaultValues?.id)),
  });

  useImperativeHandle(ref, () => ({
    setError,
    setValue,
  }));

  return (
    <Box
      as="form"
      maxWidth="600px"
      m="auto"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <InputText label="Name" name="name" control={control} />
      <InputText label="Gender" type="text" name="gender" control={control} />
      <InputText label="Country" type="text" name="country" control={control} />
      <InputText label="City" type="text" name="city" control={control} />
      <InputText
        label="Date of Birth"
        type="date"
        name="dob"
        control={control}
      />
      <InputText label="Phone" type="tel" name="cell" control={control} />

      <Button mt={8} type="submit" colorScheme="brand">
        Submit
      </Button>
    </Box>
  );
};

export default forwardRef(UserForm);
