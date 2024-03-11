import { Box } from "@chakra-ui/react";
import React from "react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#3e3e42" color="white" px={3} py={3}>
      <CodeEditor />
    </Box>
  );
}

export default App;
