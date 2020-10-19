import React from 'react';
import Footer from '../Footer';
import Product from '../Product';

import { Container, Wrapper } from './styles';


const Layout: React.FC = () => {
  return (

    // Container é a pagina toda, enquanto o Wrapper é o conteúdo que fica o produto
    <Container>
      {/* <Header /> */}

      <Wrapper>
        <Product />
      </Wrapper>

      {/* <Footer /> */}

    </Container>
  );
};

export default Layout;
