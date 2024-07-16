"use client";
import { Flex, Box, Text, useMediaQuery, IconButton } from "@chakra-ui/react";
import React from "react";
import NavLink from "./NavLink";
import { NavigationLinksProps, NavLinkProps } from "@/interfaces/UiProps";
import { usePathname } from "next/navigation";

function NavigationLinks({
  navigationLinks,
  title = "",
  inDrawer = false,
}: NavigationLinksProps) {
  const pathname = usePathname();
  const [isSmall] = useMediaQuery("(max-width: 30em)");
  const isLinkActive = (link: NavLinkProps) => pathname === link.url ||
  (pathname.indexOf(link.url) !== -1 && link.url !== "/");
  const getActiveStyling = (isActive: boolean) => isActive? { backgroundColor: "#FFFFFF", borderRadius: "12px", border: '1px solid #ECECEE'} : {};
  return (
    <Flex
      direction={(isSmall && !inDrawer) ? "row" : "column"}
      gap={{
        base: "8px",
        sm: "2px",
        md: "2px",
        lg: "8px",
        xl: "8px",
        "2xl": "8px",
      }}
      paddingInline="16px"
      paddingBottom={title != "" ? "26px" : "0px"}
      grow={isSmall ? 1 : 0}
      justifyContent={(isSmall && !inDrawer) ? "space-between" : "start"}
    >
      {title && (
        <Box paddingInline="12px" paddingBlock="8px">
          <Text fontSize={18} fontWeight={800} lineHeight="22px">
            {title}
          </Text>
        </Box>
      )}
      {navigationLinks?.map((link) => (
        <Box
          key={link.url}
          paddingInline="12px"
          paddingBlock={isSmall ? "12px" : "8px"}
          {...getActiveStyling(isLinkActive(link))}
        >
          {(isSmall && link?.onDrawerClick) && (
            <IconButton
              icon={link.icon}
              width={'23px'}
              height={'24px'}
              onClick={link?.onDrawerClick}
              backgroundColor={"transparent"}
              border="none"
              _active={{ backgroundColor: "transparent", border: "none" }}
              _focus={{ backgroundColor: "transparent", border: "none" }}
              aria-label={"hamburger icon menu"}
            />
          )}
          {!link?.onDrawerClick && <NavLink
            url={link.url}
            title={(isSmall && !inDrawer) ? "" : link.title}
            icon={link.icon}
            isActive={isLinkActive(link)}
          />}
        </Box>
      ))}
    </Flex>
  );
}

export default NavigationLinks;
