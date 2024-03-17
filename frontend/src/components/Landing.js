import { Box, Flex, Text } from "@chakra-ui/react";
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
      } else if (data.status === "Failure") {
        setOutputDetails(data.stderr);
      }
    } catch {}
  };

  return (
    <Box>
      <Flex flexDirection="column">
        <Menubar requestCompile={handleCompile} />
        <Flex>
          <CodeEditor code={sourceCode} onChange={onChange} />
          <Flex flexDirection="column">
            <UserInputArea userInputs={userInputs} setUserInputs={setUserInputs} />
            <OutputArea outputString={outputDetails} />
          </Flex>
        </Flex>
      </Flex>
      <Text>{userInputs}</Text>
    </Box>
  );
};

export default Landing;
