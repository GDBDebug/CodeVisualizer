import { Box, Text } from "@chakra-ui/react";

const OutputArea = ({outputString}) => {
  return (
    <Box
      m={4}
      px={6}
      py={4}
      h="75vh"
      w="35vw"
      border="2px"
      borderColor="#FED766"
      borderRadius="20px"
      overflow="hidden"
    >
      <Text whiteSpace='pre-wrap' as="kbd" fontSize="xl">
        {outputString}
      </Text>
    </Box>
  );
};

export default OutputArea;
