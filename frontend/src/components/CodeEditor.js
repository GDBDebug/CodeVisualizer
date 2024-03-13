import { Box, Button, Text } from "@chakra-ui/react";
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
    } catch {}
  };

  return (
    <Box>
      <Button
        my={4}
        variant="solid"
        colorScheme="facebook"
        onClick={requestCompile}
        borderRadius="14px"
      >
        Compile and Run
      </Button>
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
      <Box my={4} p={2} border="4px" borderColor="#314e89" borderRadius="14px">
        <Text>{compilationResult}</Text>
      </Box>
    </Box>
  );
};

export default CodeEditor;
