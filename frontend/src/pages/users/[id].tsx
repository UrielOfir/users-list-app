import { GetServerSideProps } from "next";
import PrivatePage from "@/layouts/PrivatePage";
import { Container, Flex } from "@chakra-ui/react";
import React, { ReactElement, useRef } from "react";
import { NextPageWithLayout } from "../_app";
import api, { getAPIClient, httpErrorHandler } from "@/services/api";
import { UserData } from "@/typings/user";
import UserForm from "@/components/forms/UserForm";
import { SubmitHandler } from "react-hook-form";
import { FormValues } from "@/components/forms/UserForm";
import { toast } from "react-toastify";
import omit from "lodash.omit";
import { removeEmptyValues } from "@/utils/parse";
import { UserFormRefType } from "@/components/forms/UserForm/UserForm";
import axios from "axios";

//TODO: fix the type of UserData
type Props = {
  data: UserData;
};

const UserId: NextPageWithLayout<Props> = ({ data }) => {
  const formRef = useRef<UserFormRefType>(null);

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    removeEmptyValues(values);
    const apiValues = omit(values, ["id", "created_at", "confirmPassword"]);
    try {
      await api.put(`/users/${values.id}`, apiValues);
    } catch (error) {
      httpErrorHandler(error, formRef.current?.setError);
    }
    toast.success("Data edited successfully!");
    formRef.current?.setValue("password", "");
    formRef.current?.setValue("confirmPassword", "");
    (document.activeElement as HTMLElement).blur();
  };

  return (
    <Container maxW="1400px" m="auto" py={10}>
      <Flex justifyContent="center" alignItems="center">
        <img
          src={data.picture.large}
          alt="User picture"
          width={100}
          height={100}
        />
      </Flex>
      <UserForm ref={formRef} onSubmit={onSubmit} defaultValues={data} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id;
  // const api = getAPIClient(ctx);
  const { data } = await axios.get(`http://localhost:3010/users/${id}`);

  return {
    props: {
      data,
    },
  };
};

UserId.getLayout = (page: ReactElement) => {
  return <PrivatePage>{page}</PrivatePage>;
};

export default UserId;
