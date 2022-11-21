import React from 'react';
import {
    ChakraProvider,
    Heading, Text, Input, Textarea, Button
} from '@chakra-ui/react';
import './presentation.css'
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/context';


function Presentation() {
    const base = React.useContext(MyContext);
    console.log(base);
    return (
        <div className='presentation'>
            <ChakraProvider>
                <br />
                <br />
                <Heading as='h1' size='2xl' noOfLines={1}> -Bao Quan Li- </Heading>
                <br />
                <Text fontSize='3xl'>Aposto que você já viu Kung Fu Panda, certo?</Text>
                <Text fontSize='3xl'>Afinal, é um clássico magnifíco!!</Text>
                <Text fontSize='3xl'>Que tal participar de um pequeno questionário sobre a saga?</Text>
                <br/>
                <Text fontSize='3xl'> pessoas já responderam!</Text>
                <br/>
                <Text fontSize='3xl'>Vamos começar!! Digite seu nome!</Text>
                <br/>
                <Input id="nome" placeholder='Seu nome aqui' size='lg' width={500}/>
                <br/><br/>
                <Text fontSize='3xl'>Digite aqui a sua cena favorita de algum dos filmes:</Text>
                <br/>
                <Textarea id="opinion" placeholder='Ex.: Po dando o golpe do "Dedo Woosh" no Tailung' size='lg' width={500}/>
                <br/><br/><br/>
                <Link to="/quest">
                <Button id="continuar" size='lg' color="white" colorScheme='whiteAlpha' variant='solid'>Continuar</Button>
                </Link>
            </ChakraProvider>
        </div>
        
    );
    
}

export default Presentation;