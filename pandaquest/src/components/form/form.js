import React from 'react';
import {
    ChakraProvider,
    Radio, RadioGroup,
    Heading, Text, Button
} from '@chakra-ui/react';
import './form.css'
import { Link } from 'react-router-dom';
import RadioGroupPersonalizado from '../form/radiobtn'

function Form() {

    return (
        <>
            <ChakraProvider>
                <br />
                <RadioGroupPersonalizado />
                <br />
                <Heading as='h1' size='2xl' noOfLines={1}> Questionário part 1 </Heading>
                <br />
                <Text fontSize='3xl'>Qual o seu vilão favorito da trilogia?</Text>
                <br />
                <br />

                <section className='questHidden'>
                    <Text fontSize='3xl'>Você acha que ele estava certo?</Text>
                    <RadioGroup>
                        <Radio size='lg' value='1' colorScheme='white' width={50}>Sim</Radio>
                        <br />
                        <Radio size='lg' value='2' colorScheme='white' width={50}>Não</Radio>

                    </RadioGroup>
                </section>
                <br />
                <br />
                <Link to="/">
                    <Button id="voltar" size='lg' color="white" colorScheme='whiteAlpha' variant='solid' margin={2}>Voltar</Button>
                </Link>
                <Link to="/quest2">
                    <Button id="continuar2" size='lg' color="white" colorScheme='whiteAlpha' variant='solid' margin={2}>Continuar</Button>
                </Link>

            </ChakraProvider >
        </>

    );
}


export default Form;