import React from 'react';
import {
    ChakraProvider,
    Heading, Text, Input, Textarea, Button
} from '@chakra-ui/react';
import { useMyContext } from '../../contexts/context';
import { Link } from 'react-router-dom';



export default function Presentation() {
    const { nome, setNome, opinion, setOpinion } = useMyContext();
    return (
        <ChakraProvider>
            <div style={{
                textAlign: 'center',
                backgroundColor: '#2D3748',
                height: '100%',
                width: 'auto',
                color: 'white',
                backgrounColor: '#1a202c'
            }}>
                <br />
                <br />
                <Heading as='h1' size='2xl' noOfLines={1}> -Suas Respostas- </Heading>
                <br />
                <Text fontSize='3xl'>Aposto que você já viu Kung Fu Panda, certo?</Text>
                <Text fontSize='3xl'>Afinal, é um clássico magnifíco!!</Text>
                <Text fontSize='3xl'>Que tal participar de um pequeno questionário sobre a saga?</Text>
                <br />
                <Text fontSize='3xl'> pessoas já responderam!</Text>
                <br />
                <Text fontSize='3xl'>Vamos começar!! Digite seu nome!</Text>
                <br />
                <Input id="nome" placeholder='Seu nome aqui' value={nome} onChange={(novonome) => { setNome(novonome.target.value); }} size='lg' width={500} />
                <br /><br />
                <Text fontSize='3xl'>Digite aqui a sua cena favorita de algum dos filmes:</Text>
                <br />
                <Textarea id="txtOpinion" value={opinion} onChange={(txtOpinion) => { setOpinion(txtOpinion.target.value); }} placeholder="Ex.: Po dando o golpe do 'Dedo Woosh' no Tailung" size='lg' width={500} />
                <br /><br /><br />
            </div>
            <div style={{ textAlign: 'center', backgrounColor: '#1a202c' }}>
                <br /><br />
                <Link to={"/quest"}>
                    <Button id="continuar" size='lg' color="white" colorScheme='whiteAlpha' variant='solid' >Continuar</Button>
                    <br /><br />
                </Link>
            </div>
        </ChakraProvider >



    );
}

