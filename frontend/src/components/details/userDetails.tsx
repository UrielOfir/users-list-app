import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

// const GET_USER_DETAILS = gql`
//   query GetUser($id: ID!) {
//     user(id: $id) {
//       id
//       name
//       email
//       // add other fields as necessary
//     }
//   }
// `;

const UserDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const { data, error, isLoading } = {
    data: {
      user: {
        id: "1",
        name: "Test User",
        email: "test@test.com",
      },
    },
    error: null,
    isLoading: false,
  };
  //   const { data, error, isLoading } = useQuery(id, GET_USER_DETAILS);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <VStack spacing={4} align="start">
      <Heading as="h2" size="lg">
        {data.user.name}
      </Heading>
      <Box>
        <Text fontWeight="bold">Email:</Text>
        <Text>{data.user.email}</Text>
      </Box>
      {/* display other fields as necessary */}
    </VStack>
  );
};

export default UserDetails;
