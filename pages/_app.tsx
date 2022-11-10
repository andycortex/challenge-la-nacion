import type { AppProps } from 'next/app'
import { ChakraProvider, Stack, Button, InputGroup, InputRightElement, Input, Text, Container } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Stack borderBottomWidth={1} borderBottomColor='gray.300' paddingY={2}>
       <Container maxWidth='container.xl'>
         <Stack direction='row' alignItems='center' justifyContent='space-between'>
           <Stack direction='row' flex={1} spacing={12}>
             <Button variant='link' leftIcon={<HamburgerIcon width={6} height={6} />} >Menu</Button>
             <InputGroup>
               <InputRightElement pointerEvents='none'>
                 <SearchIcon color='gray.300' />
               </InputRightElement>
               <Input placeholder='Buscar' type='text' />
             </InputGroup>
           </Stack>
           <Text 
             flex={1} 
             textAlign='center' 
             color='primary.600' 
             fontWeight='bold' 
             fontSize='5xl' 
             fontFamily='sans' 
             textTransform='uppercase' 
             lineHeight='normal'
           >
             La Nacion
           </Text>
           <Stack 
             flex={1} 
             textAlign='right'
             direction='row'
             justifyContent='flex-end'
           >
             <Button colorScheme='primary'>Suscribete</Button>
             <Button >Ingresar</Button>
           </Stack>
         </Stack>
       </Container>
      </Stack>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
