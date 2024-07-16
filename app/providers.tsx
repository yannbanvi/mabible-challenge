'use client'

import { ChakraProvider } from '@chakra-ui/react'

import TimeAgo from 'javascript-time-ago';

import fr from 'javascript-time-ago/locale/fr';

TimeAgo.addDefaultLocale(fr);

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}
