import React from 'react';
import {
    ChakraProvider,
    Heading, Text, Button
} from '@chakra-ui/react';
import './results.css'
import { useMyContext } from '../../contexts/context';
import { Link } from 'react-router-dom';



function Resultado() {
    const { nome,
        opinion,
        quest1,
        quest2,
        quest3,
        quest4} = useMyContext();

    
    return (
        <ChakraProvider>
            <div className='results'>
                <br />
                <br />
                <Heading as='h1' size='2xl' noOfLines={1}> -Bao Quan Li- </Heading>
                <br />
                <Text fontSize='2xl'>Nome: </Text>
                <Text>{nome}</Text>
                <br />
                <Text fontSize='2xl'>Cena favorita: </Text>
                <Text>{opinion}</Text>
                <br />
                <Text fontSize='2xl'>Vilão favorito: </Text>
                <Text>{quest1}</Text>
                <br />
                <Text fontSize='2xl'>Gosta do Shen: </Text>
                <Text>{quest2}</Text>
                <br />
                <Text fontSize='2xl'>Acha o Po mais forte que a Marvel: </Text>
                <Text>{quest3}</Text>
                <br />
                <Text fontSize='2xl'>Furioso favorito: </Text>
                <Text>{quest4}</Text>
                <br /><br />
            </div>
            <br /><br />
            <div style={{
                textAlign: 'center',
                backgrounColor: '#1a202c'
            }}>
                <Link to={"/reset"}>
                    <Button id="novoquest" size='lg' color="white" colorScheme='whiteAlpha' variant='solid'>Novo questionário</Button>
                </Link>
                <br /><br />
            </div>
        </ChakraProvider>

    );
}


export default Resultado;