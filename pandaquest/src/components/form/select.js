import React from 'react';
import {
    ChakraProvider, Heading, Text, Select, Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../contexts/context';


function Selecao() {
    const { quest4, setQuest4 } = useMyContext();
    return (
        <>

            <ChakraProvider>
                <div style={{
                textAlign: 'center',
                backgroundColor: '#2D3748',
                height: '100%',
                width: 'auto',
                color: 'white',
            }}>
                    <br />
                    <br />
                    <Heading as='h1' size='2xl' noOfLines={1}> Questionário part 2 </Heading>
                    <br />
                    <Text fontSize='3xl'>Qual dos Cinco Furiosos é seu favorito?</Text>
                    <br />
                    <br />

                    <select placeholder={quest4} id='mySelect' style={{
                        width: '350px',
                        height: '50px',
                        textAlign: 'center',
                        backgroundColor: '#1b1f25',
                        fontSize: 'larger',
                        fontWeight: 'bold'
                    }} onChange={() => setQuest4(document.getElementById("mySelect").value)}>
                        <option value={'Macaco'} >Macaco</option>
                        <option value={'Víbora'} >Víbora</option>
                        <option value={'Garça'} >Garça</option>
                        <option value={'Louva-deus'} >Louva-deus</option>
                        <option value={'Tigresa'} >Tigresa</option>
                    </select>
                    <br />
                    <br /><br />
                    <br />
                </div>
                
                <div style={{
                    textAlign: 'center',
                    backgroundColor: '#1a202c',
                    height:'100%'
                }}>
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
                </div>
            </ChakraProvider>

        </>

    );

}

export default Selecao;