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
      border="2px"
      borderColor="#FE4A49"
      borderRadius="20px"
      overflow="hidden"
    >
      <Editor
        theme="vs-light"
        defaultLanguage="cpp"
        defaultValue="// Code goes here"
        value={sourceCode}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        options={{
          glyphMargin: false,
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
