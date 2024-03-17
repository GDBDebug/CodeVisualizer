import { Box, Text } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";

const CodeEditor = ({code, onChange}) => {
  const editorRef = useRef(null);
  const [sourceCode, setSourceCode] = useState(code || "");

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleEditorChange = (value) => {
    setSourceCode(value);
    onChange("sourceCode", value);
  };

  return (
    <Box
      m={4}
      h="85vh"
      w="65vw"
      border="4px"
      borderColor="tomato"
      borderRadius="20px"
      overflow="hidden"
    >
      <Editor
        theme="vs-dark"
        defaultLanguage="cpp"
        defaultValue="// Code goes here"
        value={sourceCode}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
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
      />
    </Box>
  );
};

export default CodeEditor;
