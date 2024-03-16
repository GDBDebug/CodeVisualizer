import { Box, Flex } from "@chakra-ui/react";
import CodeEditor from "./CodeEditor";
import OutputArea from "./OutputArea";
import UserInputArea from "./UserInputArea";

const Landing = () => {
  return (
    <Box>
      <Flex>
        <CodeEditor />
        <Flex flexDirection="column">
          <UserInputArea />
          <OutputArea />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Landing;
