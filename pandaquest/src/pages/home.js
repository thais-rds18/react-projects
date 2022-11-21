import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';
import Header from '../components/header/header';
import Presentation from '../components/presentation/presentation';

function Home() {
  return (
    <>
    <Header/>
    <Presentation/>
    </>
  );
}

export default Home;