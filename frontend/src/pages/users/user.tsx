import UserDetails from "@/components/details/userDetails";
import PrivatePage from "@/layouts/PrivatePage";
import { Container } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Users: NextPageWithLayout = () => {
  return (
    <Container maxWidth="1400px" m="auto" py={10}>
      <UserDetails />
    </Container>
  );
};

Users.getLayout = function getLayout(page: ReactElement) {
  return <PrivatePage title="User">{page}</PrivatePage>;
};

export default Users;
