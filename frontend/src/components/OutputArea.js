import { Box, Text } from "@chakra-ui/react";

const OutputArea = () => {
  return (
    <Box
      m={4}
      px={6}
      py={4}
      h="75vh"
      w="35vw"
      border="4px"
      borderColor="tomato"
      borderRadius="20px"
      overflow="hidden"
    >
      <Text as="kbd" fontSize="xl">
        Output
      </Text>
    </Box>
  );
};

export default OutputArea;
