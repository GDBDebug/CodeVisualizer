import { Box, Input } from "@chakra-ui/react";

const UserInputArea = ({userInputs, setUserInputs}) => {

  return (
    <Box
      m={4}
      p={2}
      w="35vw"
      border="4px"
      borderColor="tomato"
      borderRadius="20px"
      overflow="hidden"
    >
      <Input
        variant="filled"
        placeholder="Enter space separated inputs before hitting compile..."
        value={userInputs}
        onChange={(event) => setUserInputs(event.target.value)}
      />
    </Box>
  );
};

export default UserInputArea;
