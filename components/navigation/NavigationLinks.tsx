"use client";
import { Flex, Box, Text, useMediaQuery, IconButton } from "@chakra-ui/react";
import React from "react";
import NavLink from "./NavLink";
import { NavigationLinksProps, NavLinkProps } from "@/interfaces/UiProps";
import { usePathname } from "next/navigation";

/**
 * A functional component that renders a navigation bar with links and an optional title.
 * It uses Chakra UI components and Next.js' usePathname hook for navigation.
 *
 * @param navigationLinks - An array of objects representing the navigation links.
 * @param title - An optional title to display at the top of the navigation bar.
 * @param inDrawer - A boolean indicating whether the navigation bar is rendered inside a drawer.
 *
 * @returns A React element representing the navigation bar.
 */
function NavigationLinks({
  navigationLinks,
  title = "",
  inDrawer = false,
}: NavigationLinksProps) {
  const pathname = usePathname();
  const [isSmall] = useMediaQuery("(max-width: 30em)");

  /**
   * A helper function to determine if a given link is active based on the current pathname.
   *
   * @param link - The link object to check.
   *
   * @returns A boolean indicating whether the link is active.
   */
  const isLinkActive = (link: NavLinkProps) => pathname === link.url ||
  (pathname.indexOf(link.url) !== -1 && link.url !== "/");

  /**
   * A helper function to get the styling for an active link.
   *
   * @param isActive - A boolean indicating whether the link is active.
   *
   * @returns An object with the styling for an active link.
   */
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
          {/**
           * Display the hamburger icon when we are on mobile and onDrawerClick is provided
           * Otherwise, display the link as a NavLink component
           */}
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
