import { Box, Input } from "@chakra-ui/react";

const UserInputArea = ({userInputs, setUserInputs}) => {

  return (
    <Box
      m={4}
      p={4}
      w="35vw"
      border="2px"
      borderColor="#FED766"
      borderRadius="20px"
      overflow="hidden"
    >
      <Input
        variant="unstyled"
        placeholder="Enter space separated inputs before hitting compile..."
        value={userInputs}
        onChange={(event) => setUserInputs(event.target.value)}
      />
    </Box>
  );
};

export default UserInputArea;
