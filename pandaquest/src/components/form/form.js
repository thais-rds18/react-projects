import React from 'react';
import {
    ChakraProvider,
    Radio, RadioGroup,
    Heading, Text, Button
} from '@chakra-ui/react';
import './form.css'
import { Link } from 'react-router-dom';
import { useMyContext } from '../../context';

function Form() {
    const { quest1Value, setQuest1Value } = useMyContext();
    return (
<div className='form'>
        <ChakraProvider>
            
                <br />
                <br />
                <Heading as='h1' size='2xl' noOfLines={1}> Questionário part 1 </Heading>
                <br />
                <Text fontSize='3xl'>Qual o seu vilão favorito da trilogia?</Text>
                <br />
                <br />
                <RadioGroup className='escolhas'>
                <Radio size='lg' value='1' name="Tailung" colorScheme='white' width={50}>Tailung</Radio>
                <br />
                <Radio size='lg' value='2' name="Shen" colorScheme='white' width={50}>Shen</Radio>
                <br />
                <Radio size='lg' value='3' name="Kai" colorScheme='white' width={50}>Kai</Radio>

            </RadioGroup>
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
            
        </div>
    );

}

export default Form;