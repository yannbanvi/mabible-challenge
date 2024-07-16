'use client';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import NavigationLinks from './NavigationLinks'
import { EtiquetteIcon, FavoriIcon, HomeIcon, ListesIcon, MaBibleIcon, MediaIcon, MenuIcon, NoteIcon, PlanIcon, PlusIcon, SignetIcon } from '../icons';
import MaBibleLogo from '../icons/MaBibleLogo';
import { usePathname } from 'next/navigation';

/**
 * This function is responsible for rendering the navigation section for mobile devices.
 * It includes a navigation drawer with menu items and a set of fixed menu items.
 * The navigation drawer is triggered by a menu icon in the fixed menu items.
 * The function conditionally renders the navigation drawer based on the current pathname.
 *
 * @returns {JSX.Element} - The JSX element representing the navigation section for mobile devices.
 */
function NavigationSectionForMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  // if the current pathname is  "/notes/create", or "/notes/[id]", don't render the navigation for mobile
  const regex = new RegExp(/\/notes\/((create)|[a-z0-9]+)?/);
  if (pathname.match(regex)) {
    return null;
  }
  // TODO: should refactor this
  const navigationLinksData = {
    firstSection: [
      {
        url: "/",
        title: "Accueil",
        icon: <HomeIcon />,
      },
      {
        url: "/medias",
        title: "Médias",
        icon: <MediaIcon />,
      },
      {
        url: "/bible",
        title: "Bible",
        icon: <MaBibleIcon />,
      },
      {
        url: "/plan",
        title: "Plan",
        icon: <PlanIcon />,
      },
      {
        url: "#",
        onDrawerClick: onOpen,
        icon: <MenuIcon />,
      },
    ],
    secondSection: [
      {
        url: "/notes",
        title: "Notes",
        icon: <NoteIcon />,
      },
      {
        url: "/favoris",
        title: "Favoris",
        icon: <FavoriIcon />,
      },
      {
        url: "/listes",
        title: "Listes",
        icon: <ListesIcon />,
      },
      {
        url: "/etiquettes",
        title: "Étiquettes",
        icon: <EtiquetteIcon />,
      },
      {
        url: "/signets",
        title: "Signets",
        icon: <SignetIcon />,
      },
      {
        url: "/plus",
        title: "Plus",
        icon: <PlusIcon />,
      },
    ],
  };

  return (
    <Flex h={'52px'}>
      {/* Navigation drawer for mobile only*/}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size={'xs'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
          <MaBibleLogo />
          </DrawerHeader>
          <Flex w="245px" h="100%" direction="column">
          {/* Navigation menu - first section */}
          {< NavigationLinks inDrawer navigationLinks={navigationLinksData.secondSection} />}
          </Flex>
          
        </DrawerContent>
      </Drawer>
        {/* Navigation menu - second section */}
        {< NavigationLinks navigationLinks={navigationLinksData.firstSection} />}
    </Flex>
  )
}

export default NavigationSectionForMobile