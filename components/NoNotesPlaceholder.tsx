import { Flex, Text } from "@chakra-ui/react";
import { NotePlaceholderIcon } from "./icons";

export default function NoNotesPlaceholder() {
    return (
        <Flex
          paddingInline="40px"
          paddingBlock="40px"
          justify="center"
          align="center"
          direction="column"
          gap="12px"
          borderBottom="1px solid #ECECEE"
        >
          <NotePlaceholderIcon />
          <Text
            w="160px"
            align="center"
            color="#727280"
            fontWeight={500}
            lineHeight="24px"
            fontSize="16px"
          >
            Aucune note redigée pour le moment
          </Text>
        </Flex>
      )
}