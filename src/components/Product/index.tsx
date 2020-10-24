import React from 'react';

//Importa os assets de imagem
import tshirtImage from '../../assets/tshirt.png';

//Componentes
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      {/* Painel branco onde fica o produto - Divido ele em duas colunas */}
      <Panel>

        {/* Na primeira coluna do painel eu coloco uma galeria de imagens do produto */}
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>

          <Info />
        </Column>


        {/* Segunda coluna coloco ass sessões de garantia*/}
        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>

    </Container>
  );
};

// :::: CRIAÇÃO DAS CONSTS USADAS NESSE COMPONENT ::::
const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Programador</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia  do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)



const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Camiseta Slim Fit 100% Algodão fio 30.1 penteado
     <br />
    - Malha da melhor qualidade <br />
    - 100% Algodão Premium Fio 30.1 (robusto) <br />
    - Corte moderno e alinhado <br />
    - Modelagem confortável e leve <br />
    - Não encolhe após a lavagem! <br />

      <br />
      <br />
    TAMANHOS: <br />
    P: Altura 59 cm | Cintura 44,5 cm | Busto 46 cm | Comprimento Manga* 18 cm. <br />
    M: Altura 61 cm | Cintura 47 cm | Busto 49 cm | Comprimento Manga* 20 cm. <br />
    G: Altura 63 cm | Cintura 50 cm | busto 53 cm | Comprimento Manga* 22,5 cm <br />
    GG: Altura 66 cm | Cintura 53 cm | Busto 56 cm | Comprimento Manga* 24,5 cm <br />
    </p>
  </Description>
)

export default Product;
