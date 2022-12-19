import { Box, Img, Text } from "@chakra-ui/react";
import { themeColors } from "../theme";
import logo from "../assets/logo.svg";

export default function NavHeader() {
  return (
    <Box
      as="header"
      w={"100%"}
      h={["50px", "50px",, "80px", "80px"]}
      bg={themeColors.dark}
      display="flex"
      alignItems="center"
      justifyContent={["center", "center", "center", "start"]}
    >
      <Box
        w={["100px","100px", "100px", "160px"]}
        h={["30px", "30px", "30px", "50px"]}
        ml={["0", "0", "0", "77px"]}
        border="1px"
        borderColor={themeColors.white}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Img src={logo} w={["80px", "80px","80px","100px"]} />
      </Box>
    </Box>
  );
}
