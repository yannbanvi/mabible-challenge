import { Box, Button, Divider, Flex, Spacer, Text } from "@chakra-ui/react";
import MaBibleLogo from "../icons/MaBibleLogo";
import Link from "next/link";
import {
  MaBibleIcon,
  MediaIcon,
  PlanIcon,
  NoteIcon,
  FavoriIcon,
  ListesIcon,
  EtiquetteIcon,
  SignetIcon,
  PlusIcon,
  AvatarIcon,
  ArrowBackIcon,
  ThemeIcon,
  HomeIcon,
} from '@/components/icons'
import NavigationLinks from "./NavigationLinks";

const navigationLinksData = {
  firstSection: [
    {
      url: "/",
      title: "Accueil",
      icon: <HomeIcon />,
    },
    {
      url: "/bible",
      title: "Bible",
      icon: <MaBibleIcon />,
    },
    {
      url: "/medias",
      title: "Médias",
      icon: <MediaIcon />,
    },
    {
      url: "/plan",
      title: "Plan",
      icon: <PlanIcon />,
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

const LeftNavigationSidebar = () => {
  const user = {
    name: "Théophille",
    username: "@theo",
  };

  const renderUserProfileSection = (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="18px"
      border="1px solid #ECECEE"
      paddingBlock="12px"
      paddingInline="16px"
      marginInline="16px"
      marginBlock="12px"
    >
      <Flex direction="row" gap="10px">
        <AvatarIcon />
        <Flex direction="column" grow="1">
          <Text fontSize="18px" fontWeight={800} lineHeight="22px">
            {user.name}
          </Text>
          <Text fontSize="12px" fontWeight={500} lineHeight="15px">
            {user.username}
          </Text>
        </Flex>
        <ArrowBackIcon />
      </Flex>
    </Box>
  );

  const renderBottomOptionsSection = (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      paddingInline="16px"
      paddingBottom="16px"
    >
      <Button
        leftIcon={<ThemeIcon />}
        backgroundColor="#ECECEE"
        borderRadius="8px"
        fontSize="12px"
        fontWeight={600}
        lineHeight="15px"
      >
        Clair
      </Button>
      <Link href="">
        <Text fontSize="12px" fontWeight={600} lineHeight="15px">
          Donner
        </Text>
      </Link>
      <Link href="">
        <Text fontSize="12px" fontWeight={600} lineHeight="15px">
          À props
        </Text>
      </Link>
    </Flex>
  );

  return (
    <Flex
      w="425px"
      as="nav"
      backgroundColor="#FAFAFB"
      justify="end"
      borderRight="2px solid #F1F1F2"
    >
      <Flex w="245px" h="100%" direction="column">
        <Box paddingBlock="26px" paddingInline="23px">
          <MaBibleLogo />
        </Box>
        {/* Navigation menu - first section */}
        {< NavigationLinks navigationLinks={navigationLinksData.firstSection} />}

        <Divider color="#ECECEE" marginBlock="8px" />

        {/* Navigation menu - second section */}
        {< NavigationLinks navigationLinks={navigationLinksData.secondSection} title='Mes activités' />}

        <Spacer />

        <Divider color="#ECECEE" />

        {/* User profile menu section */}
        {renderUserProfileSection}

        <Divider color="#ECECEE" marginBlock="12px" />

        {/* Bottom options section */}
        {renderBottomOptionsSection}
      </Flex>
    </Flex>
  );
};

export default LeftNavigationSidebar;
