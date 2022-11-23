import React from 'react';
import {
    ChakraProvider,
    Heading, Text, Input, Textarea, Button
} from '@chakra-ui/react';
import './results.css'
import { useMyContext } from '../../context';
import { Link } from 'react-router-dom';



export default function Results() {
    const { nome, 
        opinion,
        quest1Value, 
        quest2, 
        quest3, 
        respostas,  } = useMyContext();
    return (
        <div className='results'>
            <ChakraProvider>
                <br />
                <br />
                <Heading as='h1' size='2xl' noOfLines={1}> -Bao Quan Li- </Heading>
                <br />
                <Text fontSize='3xl'>Nome: {nome}</Text>
                <br />
                <Text fontSize='3xl'>Cena favorita: {opinion}</Text>
                <br />
                <Text fontSize='3xl'>Vilão favorito: {quest1Value}</Text>
                <br />
                <Text fontSize='3xl'>Concorda com ele: {quest2}</Text>
                <br />
                <Text fontSize='3xl'>Furioso favorito: {quest3}</Text>
                <br />
                <Link to={"/"}>
                <Button id="novoquest" size='lg' color="white" colorScheme='whiteAlpha' variant='solid' >Novo questionário</Button>
                <br /><br />
                </Link>
            </ChakraProvider>

        </div>


    );
}

