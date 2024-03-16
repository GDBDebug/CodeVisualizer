import { Box } from "@chakra-ui/react";
import React from "react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#3e3e42" color="white" >
      <CodeEditor />
    </Box>
  );
}

export default App;
