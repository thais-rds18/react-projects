import React from 'react';
import {
    ChakraProvider, Heading, Text, Select, Button
} from '@chakra-ui/react';
import './form.css'
import { Link } from 'react-router-dom';


function Form2() {

    return (
        <div className='form'>
            <ChakraProvider>
                <br />
                <br />
                <Heading as='h1' size='2xl' noOfLines={1}> Questionário part 2 </Heading>
                <br />
                <Text fontSize='3xl'>Qual dos Cinco Furiosos é seu favorito?</Text>
                <br />
                <br />
                
                <Select variant='filled' placeholder='' width={650} marginLeft={650}>
                    <option value='option1'>Macaco</option>
                    <option value='option2'>Víbora</option>
                    <option value='option3'>Garça</option>
                    <option value='option2'>Louva-deus</option>
                    <option value='option3'>Tigresa</option>
                </Select>
                <br />
                <br />
                <Link to="/quest">
                    <Button id="voltar" size='lg' color="white" colorScheme='whiteAlpha' variant='solid' margin={2}>Voltar</Button>
                </Link>
                <Link to="/results">
                    <Button id="continuar2" size='lg' color="white" colorScheme='whiteAlpha' variant='solid' margin={2}>Finalizar</Button>
                </Link>
                <br />
                <br />
            </ChakraProvider>

        </div>

    );

}

export default Form2;