"use client";
import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import NavLink from "./NavLink";
import { NavigationLinksProps } from "@/interfaces/UiProps";
import { usePathname } from "next/navigation";

function NavigationLinks({ navigationLinks, title = ''}: NavigationLinksProps) {
  const pathname = usePathname();
  return (
    <Flex
      direction="column"
      gap="8px"
      paddingInline="16px"
      paddingBottom={title != "" ? "26px" : "0px"}
    >
      {title && (
        <Box paddingInline="12px" paddingBlock="8px">
          <Text fontSize={18} fontWeight={800} lineHeight="22px">
            {title}
          </Text>
        </Box>
      )}
      {navigationLinks?.map((link, index) => (
        <Box key={link.url} paddingInline="12px" paddingBlock="8px">
          <NavLink
            url={link.url}
            title={link.title}
            icon={link.icon}
            isActive={pathname === link.url || (pathname.indexOf(link.url) !== -1 && link.url !== '/')}
          />
        </Box>
      ))}
    </Flex>
  );
}

export default NavigationLinks;
