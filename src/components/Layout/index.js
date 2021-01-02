import React from 'react';

import { Container } from './styles';
import Header from '../Header';
import Routes from '../../routes';

function Layout() {
    return (
        <Container>
            <Header />
            <Routes />
        </Container>
    );
}

export default Layout;