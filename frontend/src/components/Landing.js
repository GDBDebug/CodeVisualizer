import { Box, Flex } from "@chakra-ui/react";
import CodeEditor from "./CodeEditor";
import OutputArea from "./OutputArea";
import UserInputArea from "./UserInputArea";
import Menubar from "./Menubar";

const Landing = () => {
  return (
    <Box>
      <Flex flexDirection="column">
        <Menubar />
        <Flex>
          <CodeEditor />
          <Flex flexDirection="column">
            <UserInputArea />
            <OutputArea />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Landing;
