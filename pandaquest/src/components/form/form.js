import React from 'react';
import {
    ChakraProvider,
    Heading, Text, Button
} from '@chakra-ui/react';
import './form.css'
import { Link } from 'react-router-dom';
import Radiobtn from './radiobtn';

function Form() {

    return (
        <>
            <ChakraProvider>
                <Radiobtn />
                <br />
                <div style={{
                    textAlign: 'center',
                    backgroundColor: '#1a202c'
                }}>
                    <Link to="/">
                        <Button id="voltar" size='lg' color="white" colorScheme='whiteAlpha' variant='solid' margin={2}>Voltar</Button>
                    </Link>
                    <Link to="/quest2">
                        <Button id="continuar2" size='lg' color="white" colorScheme='whiteAlpha' variant='solid' margin={2}>Continuar</Button>
                    </Link>
                </div>
            </ChakraProvider >
        </>

    );
}


export default Form;