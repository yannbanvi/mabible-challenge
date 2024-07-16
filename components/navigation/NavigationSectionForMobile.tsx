'use client';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import NavigationLinks from './NavigationLinks'
import { EtiquetteIcon, FavoriIcon, HomeIcon, ListesIcon, MaBibleIcon, MediaIcon, MenuIcon, NoteIcon, PlanIcon, PlusIcon, SignetIcon } from '../icons';
import MaBibleLogo from '../icons/MaBibleLogo';
import { usePathname } from 'next/navigation';

function NavigationSectionForMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const regex = new RegExp(/\/notes\/((create)|[a-z0-9]+)?/);

  if (pathname.match(regex)) {
    return null;
  }
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