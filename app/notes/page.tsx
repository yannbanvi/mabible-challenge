import AddPlusIconButton from "@/components/AddPlusIconButton";
import {
  NoteIcon,
  NotePlaceholderIcon,
  RechercheIcon,
} from "@/components/icons";
import Notes from "@/components/notes/Notes";
import { NoteInterface } from "@/interfaces/UiProps";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
export default function NotesPage() {
  const pageTitle = (
    <Flex gap="8px" direction="row" align="center">
      <NoteIcon isActive />
      <Text fontWeight={800} fontSize="18px" lineHeight="22px">
        Notes
      </Text>
    </Flex>
  );
  const searchBox = (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <RechercheIcon />
        </InputLeftElement>
        <Input
          backgroundColor="#F1F1F2"
          borderColor="#F1F1F2"
          borderRadius="8px"
          paddingLeft="32px"
          width="150px"
          height="34px"
          fontSize="14px"
          fontWeight="500"
          lineHeight="17px"
          color="#211B28"
          _placeholder={{ color: "#727280" }}
          type="search"
          _focus={{ borderColor: "#770FFF", width: "250px" }}
          placeholder="Rechercher"
        />
      </InputGroup>
    </Box>
  );
  const noNotesPlaceHolder = (
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
  );


  const notes: NoteInterface[] = [
    {
      title: "2 Thessaloniciens 3.1-3",
      body: `La parole du Seigneur ne peut se propager sans être accompagnée de
          prières ferventes pour que le saint esprit puisse toucher les coeurs
          profondément et parler aux âmes qui reçoivent ce message. Il y a
          beaucoup de...`,
      createdAt: new Date("2022-01-01T10:00:00"),
      id: "1",
      updatedAt: new Date("2022-01-01T10:00:00"),
    },
    {
      title: "2 Genesis 8.1",
      body: `lorem ipsmu ferventes pour que le saint esprit puisse toucher les coeurs
          profondément et parler aux âmes qui reçoivent ce message. Il y a
          beaucoup...`,
      createdAt: new Date("2023-01-01T10:00:00"),
      id: "2",
      updatedAt: new Date("2023-01-01T10:00:00"),
    }
  ];

  return (
    <Stack w="100%" spacing={0} style={{ position: 'relative' }} data-testid="notes-page">
      <Flex
        direction="row"
        justify="space-between"
        paddingInline="32px"
        borderBottom="1px solid #ECECEE"
        margin={0}
        w="100%"
        paddingBlock="12px"
      >
        {pageTitle}
        {searchBox}
      </Flex>
      { notes?.length === 0 ? noNotesPlaceHolder : <Notes notes={notes} /> }
      <span
        style={{
          zIndex: 99999,
          position: "absolute",
          bottom: "44px",
          right: "32px",
        }}
      >
        <AddPlusIconButton />
      </span>
    </Stack>
  );
}
