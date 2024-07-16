"use client";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

/**
 * A functional component that renders an icon button for navigating back to the notes list.
 * @returns {React.ReactElement} - A React component representing the back button.
 */
function AddNoteBackButton() {
  /**
   * A React SVG element representing the back icon.
   */
  const backIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
    >
      <path
        d="M6.5 1L1.5 6L6.5 11"
        stroke="#211B28"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const router = useRouter();

  /**
   * A function that handles the back button click event.
   * Navigates to the notes list page.
   */
  const backButtonPressed = () => {
    router.push("/notes");
  };

  return (
    <IconButton
      backgroundColor={"transparent"}
      paddingInline={"0px"}
      border={"none"}
      aria-label="Undo forward"
      onClick={backButtonPressed}
      _hover={{
        backgroundColor: "transparent",
        border: "none",
      }}
      icon={backIcon}
    />
  );
}

export default AddNoteBackButton;
