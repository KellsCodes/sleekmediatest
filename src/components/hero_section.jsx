import { Box, Text } from "@chakra-ui/react";
import hero_img from "../assets/hero_img.png";
import { themeColors } from "../theme";

export default function Hero_section() {
  return (
    <Box
      w="100%"
      h={["260px", "260px", "500px"]}
      backgroundImage={`url(${hero_img})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      display="flex"
      alignItems={"center"}
      justifyContent={["center", "center", "center", "left"]}
    >
      <Box
        w={["100%", "200px", "250px"]}
        h={["auto", "auto", "auto", "282px"]}
        ml={[0, 0, 0, 77]}
      >
        <Text
          as="h1"
          color={themeColors.white}
          fontSize={[30, 40, 52]}
          fontWeight={700}
          fontFamily="DM Sans"
          lineHeight={["35px", "50px", "64px"]}
          textAlign={["center", "center", "center", "left"]}
        >
          Watch something incredible.
        </Text>
      </Box>
    </Box>
  );
}

/**
 * font-size: 72px;
line-height: 94px;
 */
