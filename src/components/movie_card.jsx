import { Card, Text } from "@chakra-ui/react";
import { themeColors } from "../theme";

export default function Movie_card() {
  return (
    <Card
      bg={themeColors.black}
      variant="outline"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minW="250px"
      h="250px"
      borderRadius="12px"
    >
        <Text color={themeColors.white} >Movie Name</Text>
    </Card>
  );
}
