import { Box, Flex, Spacer } from "@chakra-ui/react";
import CodeEditor from "./CodeEditor";
import OutputArea from "./OutputArea";

const Landing = () => {
  return (
    <Box>
      <Flex>
        <CodeEditor />
        <Spacer />
        <OutputArea />
      </Flex>
    </Box>
  );
};

export default Landing;
