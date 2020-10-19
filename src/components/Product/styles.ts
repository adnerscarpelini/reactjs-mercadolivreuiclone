import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;  //De cima pra baixo
`;

export const Row = styled.div`
    display: flex;
    justify-content: flex-end; //Joga pro final da linha
    align-items: center;
    padding: 16px 0px;

    > a {
        font-size: 14px;
        text-decoration: nbne;
        color: var(--color-blue);
        padding: 2.5px 0;


        //A partir do segundo link...
        & + a { //Vender um igual
            padding-left: 10px;
            border-left: 1px solid var(--color-border);
            margin-left: 10px;
        }
    }
`;

export const Panel = styled.div`
    background: var(--color-white);
    box-shadow: var(--panel-shadow);

    display: grid;
    //Isso faz com que 65% da proporção do painel fique na coluna da esquerda, e os outros 35 na da direita (fr = fração)
    grid-template-columns: 65fr 35fr; 
`;

export const Column = styled.div`
    &:first-child { //Primeira coluna do painel
        border-right: 1px solid var(--color-border);
    }
`;


export const Gallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 530px;

    > img {
        height: 73%;
    }
`;


export const Section = styled.div`
    border-top: 1px solid var(--color-border);
    padding: 48px 32px;

    display: flex;
    flex-direction: column;


    > h4 {
        font-size: 18px;
        margin-bottom: 40px;
    }

    > div {
        display: flex;
        flex-direction: column;

        > span + span {
            margin-top: 16px;
        }
        .title {
            font-size: 16px;
            color: var(--color-black);

        }
        .description {
            margin-top: 5px;
            font-size: 14px;
            color: var(--color-gray);
            line-height: 19px;
        }
    }

    > a {
        margin-top: 20px;
        font-size: 14px;
        font-weight: 600;
        color: var(--color-blue);
        text-decoration: none;
    }
`;


export const Description = styled.div`
   border-top: 1px solid var(--color-border);
   padding: 44px 32px;

   > h2 {
        font-size: 24px; //Título 
        margin-bottom: 40px;
    }

    > p {
        font-size: 20px;
        color: var(--color-gray);
        line-height: 27px;
    }
`;




