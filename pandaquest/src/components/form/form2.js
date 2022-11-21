import React from 'react';
import {
    ChakraProvider,
    Radio, RadioGroup,
    Heading, Text, Stack, Button, VisuallyHidden
} from '@chakra-ui/react';
import './form.css'
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/context';


function Form2() {
    const base = React.useContext(MyContext);
    let perguntaEscondida = 'Você acha que...'
    console.log(base);
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
                <RadioGroup className='escolhas' >

                        <Radio value='1' colorScheme='white' width={50}>Tailung</Radio>
                        <br />
                        <Radio value='2' colorScheme='white' width={50}>Shen</Radio>
                        <br />
                        <Radio value='3' colorScheme='white' width={50}>Kai</Radio>

                </RadioGroup>
                <br />
                <br />
                <section className='questHidden'>
                    <Text fontSize='3xl'>{perguntaEscondida}</Text>
                    <RadioGroup>

                            <Radio value='1' colorScheme='white' width={50}>Sim</Radio>
                            <br />
                            <Radio value='2' colorScheme='white' width={50}>Não</Radio>

                    </RadioGroup>
                </section>
                <br />
                <br />
                <Link to="/">
                    <Button id="voltar" size='lg' color="white" colorScheme='whiteAlpha' variant='solid' margin={2}>Voltar</Button>
                </Link>
                <Link to="/quest2">
                    <Button id="continuar2" size='lg' color="white" colorScheme='whiteAlpha' variant='solid' margin={2}>Finalizar</Button>
                </Link>
            </ChakraProvider>
        </div>

    );

}

export default Form2;