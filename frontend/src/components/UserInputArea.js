import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";

const UserInputArea = () => {
  const [input, setInput] = useState("");

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
        value={input}
        onChange={(inputValue) => setInput(inputValue)}
      />
    </Box>
  );
};

export default UserInputArea;
