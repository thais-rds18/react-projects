import React from 'react';
import { Text, ChakraProvider, Spinner } from '@chakra-ui/react'
import { useMyContext } from '../contexts/context';
import Header from '../components/header/header';


function Resetar() {
    const { setNome, setOpinion, setQuest1, setQuest2, setQuest3, setQuest4 } = useMyContext();
    for (let i = 0; i <= 5; i++) {
        if (i == 0) {
            setNome('');
        }
        if (i == 1) {
            setOpinion('');
        }
        if (i == 2) {
            setQuest1('');
        }
        if (i == 3) {
            setQuest2('');
        }
        if (i == 4) {
            setQuest3('');
        }
        if (i == 5) {
            setQuest4('');
        }
    }

    return (
        <ChakraProvider>
            <Header/>
                <div style={{
                textAlign: 'center',
                fontSize: 'larger'
            }}>
                <Text>Redirecionando ... </Text>
                <Spinner tthickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='white.500'
                    size='xl' onLoad={window.open('/', '_self')} />
            </div>
        </ChakraProvider>

    );
}
export default Resetar;