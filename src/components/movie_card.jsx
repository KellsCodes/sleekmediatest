import { Card, Text } from "@chakra-ui/react";
import { themeColors } from "../theme";

export default function Movie_card({ title }) {
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
      <Text color={themeColors.white}>{title.slice(0, 31)}</Text>
    </Card>
  );
}
