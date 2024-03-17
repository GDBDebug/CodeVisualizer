import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import { DownloadIcon, AddIcon } from "@chakra-ui/icons";

const Menubar = ({requestCompile, requestDownload}) => {
  return (
    <Box
      mx={4}
      my={2}
      px={4}
      py={4}
      border="4px"
      borderColor="#2AB7CA"
      borderRadius="20px"
      overflow="hidden"
    >
      <Flex aminWidth="max-content" alignItems="center" gap="6">
        <Button size="lg" variant="outline" bgColor="#2AB7CA" borderRadius="10px" onClick={requestCompile}>
          Compile and Run
        </Button>
        <Button size="lg" variant="outline" bgColor="#2AB7CA" borderRadius="10px">
          Visualize
        </Button>
        <Spacer />
        <ButtonGroup isAttached>
          <Tooltip hasArrow label="Save to file">
            <IconButton size="md" variant="outline" color="#2AB7CA" icon={<DownloadIcon />} onClick={requestDownload}></IconButton>
          </Tooltip>
          <IconButton size="md" variant="outline" color="#2AB7CA" icon={<AddIcon />}></IconButton>
        </ButtonGroup>
        <Menu>
          <MenuButton size="lg" as={Button}>Menu</MenuButton>
          <MenuList>
            <MenuItem>Work in Progress</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Menubar;
