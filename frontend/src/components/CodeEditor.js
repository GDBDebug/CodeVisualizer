import { Box } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";

const CodeEditor = () => {
  const editorRef = useRef(null);
  const [sourceCode, setSourceCode] = useState("");

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
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
  );
};

export default CodeEditor;
