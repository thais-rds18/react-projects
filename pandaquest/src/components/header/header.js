import React from 'react';
import {
    ChakraProvider,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    theme,
} from '@chakra-ui/react';
import './header.css';
import po from "./po.png"


function Header() {
    return (
            <header>
                <span />
                <img src={po}></img>
                <ChakraProvider theme={theme}>
                    <Breadcrumb separator=' |' justifySelf="flex-end">
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Resultados</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Contato</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </ChakraProvider>
                <span />
            </header>
    );
}

export default Header;

