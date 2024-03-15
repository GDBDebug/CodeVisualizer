import { Box, Button, Text, Heading ,Menu, MenuButton, MenuItem,MenuList,MenuDivider } from "@chakra-ui/react";
import {ChevronDownIcon} from '@chakra-ui/icons'
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";

const CodeEditor = () => {
  const editorRef = useRef(null);
  const [sourceCode, setSourceCode] = useState("");
  const [compilationResult, setCompilationResult] = useState("Output");

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const requestCompile = async () => {
    try {
      const response = await fetch("/compile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sourceCode }),
      });

      const data = await response.json();

      if (data.status) {
        setCompilationResult(data.output);
      } else {
        setCompilationResult("Compilation failed with error: " + data.output);
      }
    } catch { }
  };

  return (
    <Box backgroundColor={"#121212"} height={"100vh"}>
      <Heading mx={4}>Code Visualizer</Heading>
      <Menu >
      <MenuButton
        m={4} px={4} py={3}
        transition='all 0.1s' borderRadius='md' borderWidth='1px'
        _hover={{ bg: 'gray.600' }}
        _expanded={{ bg: '#121212' }}
        _focus={{ boxShadow: 'outline' }}
      >
        Menu <ChevronDownIcon />
      </MenuButton>
      <MenuList color={"black"}>
        <MenuItem>Language C++</MenuItem>
        <MenuItem>Clear Screen</MenuItem>
        <MenuDivider />
        <MenuItem>Open File</MenuItem>
        <MenuItem>Save File</MenuItem>
      </MenuList>
      
      <Button
        variant="solid"
        color={"#000000"}
        fontWeight='bold'
        backgroundColor={"#008080"}
        onClick={requestCompile}
        borderRadius="5px"
      >
        Compile and Run
      </Button>
      <Button
        mx={4}
        variant="solid"
        color={"#000000"}
        fontWeight='bold'
        backgroundColor={"#008080"}
        borderRadius="5px"
      >
        Visualize
      </Button>
      
    </Menu>
      <Box display='flex' my={4}>
        <Box mx={4} p={1} w='50%' border="4px" borderColor="#008080" borderRadius="5px">
          <Editor
            height="75vh"
            theme="vs-dark"
            defaultLanguage="cpp"
            defaultValue="// Monaco Instance"
            onMount={handleEditorDidMount}
            onChange={(value) => setSourceCode(value)}
            options={{
              glyphMargin: true,
              cursorStyle: "line-thin",
              selectionHighlight: true,
              scrollBeyondLastLine: false,
              scrollbar: {
                verticalScrollbarSize: 0,
              },
              minimap: {
                enabled: true,
                size: "actual",
              },
            }}
            value={sourceCode}
          />
        </Box>
        <Box mx={4} p={4} w='50%' border="4px" borderColor="#008080" borderRadius="5px">
          <Text>{compilationResult}</Text>
        </Box>
      </Box>


    </Box>
  );
};

export default CodeEditor;
