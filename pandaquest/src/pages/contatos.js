import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Stack,
  ExternalLinkIcon
} from '@chakra-ui/react';
import Header from '../components/header/header';

function Contatos() {
  return (
    <div style={{
      backgroundColor: '#1a202c', height: '100%'
    }}>
      <ChakraProvider>
        <Header />
        <br /><br />
        <Card width={500} border='4px' style={{
          textAlign: 'center',
          alignItems: 'center',
          margin: 'auto', 
          height:'100%',
          color:'white'
        }}>
          <CardHeader>
            <Heading size='lg'>Contatos</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='md' textTransform='uppercase'>
                  Tudo bem, forasteiro?
                </Heading>
                <Text pt='2' fontSize='md'>
                  Sinta-se livre para ver meu github ou me adicionar no Linkedin!
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  GitHub:
                </Heading>
                <Text pt='2' fontSize='sm'>
                  <a href='https://github.com/thais-rds18' target="_blank">Thaís Tawany</a>
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Linkedin:
                </Heading>
                <Text pt='2' fontSize='sm'>
                  <a href='https://www.linkedin.com/in/tha%C3%ADs-tawany-rufino-da-silva-1a6b1717a/' target="_blank">Thaís Rufino</a>
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </ChakraProvider>
      <br /><br /><br /><br />
    </div>
  );
}

export default Contatos;