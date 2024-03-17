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

const Menubar = ({requestCompile}) => {
  return (
    <Box
      m={4}
      px={4}
      py={2}
      border="4px"
      borderColor="#008080"
      borderRadius="20px"
      overflow="hidden"
    >
      <Flex aminWidth="max-content" alignItems="center" gap="6">
        <Button borderRadius="10px" bg="#008080" onClick={requestCompile}>
          Compile and Run
        </Button>
        <Button borderRadius="10px" bg="#008080">
          Visualize
        </Button>
        <Spacer />
        <ButtonGroup isAttached>
          <Tooltip hasArrow label="Save to file">
            <IconButton icon={<DownloadIcon />}></IconButton>
          </Tooltip>
          <IconButton icon={<AddIcon />}></IconButton>
        </ButtonGroup>
        <Menu>
          <MenuButton as={Button}>Options</MenuButton>
          <MenuList>
            <MenuItem>Work in Progress</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Menubar;
