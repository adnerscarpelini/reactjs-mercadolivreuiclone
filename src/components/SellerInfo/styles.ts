import styled, { css } from "styled-components";

//importar os ícones que serão utilizados
import {
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineClock,
} from "react-icons/hi";

export const Container = styled.div`
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const LocationCard = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0px;

  > div {
    margin-left: 8px;

    > p {
      font-size: 16px;
    }

    > strong {
      font-size: 14px;
      font-weight: normal;
      color: var(--color-gray);
    }
  }
`;

//Crio uma classe css  padrão para todos os ícones das informações de vendedor
const iconCSS = css`
  width: 30px;
  height: 30px;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  ${iconCSS}
`;

export const ReputationCard = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReputationThermometer = styled.ol`
  list-style: none;

  width: 100%;
  display: grid;

  //Cria automaticamente 5 colunas no grid
  grid-template-columns: repeat(5, 1fr); ///1 fração pra cada parte (20%)

  grid-gap: 7px;
  padding: 0 4px;

  ///Colorir os itens da lista de termometro
  > li {
    width: 100%;
    height: 8px;

    &:nth-child(1) {
      //Primeiro item da lista
      background: var(--reputation-1);
    }

    &:nth-child(2) {
      //Segundo item da lista
      background: var(--reputation-2);
    }

    &:nth-child(3) {
      //Terceiro item da lista
      background: var(--reputation-3);
    }

    &:nth-child(4) {
      //Quarto item da lista
      background: var(--reputation-4);
    }

    &:nth-child(5) {
      //Quinto item da lista
      background: var(--reputation-5);
    }

    //Deixo o item ativo maior, pra dar destaque
    &.active {
      height: 12px;
    }
  }
`;

export const ReputationRow = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;

  > div {
    width: 33%;
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > strong {
      font-size: 24px;
      font-weight: normal;
      height: 30px;
    }

    > span {
      font-size: 12px;
    }

    position: relative;

    /* colocar uma borda esqueda nos itens: Presta um bom atendimento e vendas nos últimos 4 meses */
    & + div {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 36px;
        border-left: 1px solid var(--color-border);
      }
    }
  }
`;

export const SupportIcon = styled(HiOutlineChatAlt2)`
  ${iconCSS}
`;

export const ClockIcon = styled(HiOutlineClock)`
  ${iconCSS}
`;

export const More = styled.a`
    margin-top: 24px;
    color: var(--color-blue);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;   
`;
