import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import CodeEditor from "./CodeEditor";
import OutputArea from "./OutputArea";
import UserInputArea from "./UserInputArea";
import Menubar from "./Menubar";
import { useState } from "react";

const helloWorld = `#include<iostream>

int main()
{
    std::cout << "Hello, world!";
    return 0;
}`;

const Landing = () => {
  const [sourceCode, setSourceCode] = useState(helloWorld);
  const [outputDetails, setOutputDetails] = useState("");
  const [userInputs, setUserInputs] = useState("");

  const toast = useToast();

  const onChange = (action, data) => {
    switch (action) {
      case "sourceCode": {
        setSourceCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const handleCompile = async () => {
    try {
      const response = await fetch("/compile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sourceCode: sourceCode, inputs: userInputs }),
      });

      const data = await response.json();

      if (data.status === "Success") {
        setOutputDetails(data.stdout);
        toast({
          title: "Compilation successful",
          status: "success",
          position: "bottom-right",
          duration: 4000,
          isClosable: true,
        });
      } else if (data.status === "Failure") {
        setOutputDetails(data.stderr);
        toast({
          title: "Compilation failed",
          status: "error",
          position: "bottom-right",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch {}
  };

  const handleDownload = async () => {
    const response = await fetch("/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sourceCode: sourceCode }),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "main.cpp";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } else {
      console.error("Failed to download code");
    }
  };

  return (
    <Box>
      <Flex flexDirection="column">
        <Menubar
          requestCompile={handleCompile}
          requestDownload={handleDownload}
        />
        <Flex>
          <CodeEditor code={sourceCode} onChange={onChange} />
          <Flex flexDirection="column">
            <UserInputArea
              userInputs={userInputs}
              setUserInputs={setUserInputs}
            />
            <OutputArea outputString={outputDetails} />
          </Flex>
        </Flex>
      </Flex>
      <Text>{userInputs}</Text>
    </Box>
  );
};

export default Landing;
