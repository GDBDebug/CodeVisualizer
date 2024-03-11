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
    <Box>
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
            size: "fill",
          },
        }}
        value={sourceCode}
      />
    </Box>
  );
};

export default CodeEditor;
