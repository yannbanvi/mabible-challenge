import { NavLinkProps } from "@/interfaces/UiProps";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function NavLink({ url, title, icon, isActive }: NavLinkProps) {
  const activeProps = isActive
    ? {
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid #ECECEE",
      }
    : {};
  return (
    <Link href={url} aria-label={title}>
      <Flex gap={4} align="center">
        {React.cloneElement(icon, { isActive: isActive })}
        <Text fontSize={16} fontWeight={600} lineHeight="19px">
          {title}
        </Text>
      </Flex>
    </Link>
  );
}

export default NavLink;
