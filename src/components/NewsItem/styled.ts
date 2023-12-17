import styled from 'styled-components';

export const ItemWrapper = styled.div`
  border: 2px solid black;
  width: 50vw;
  height: 25vh;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h4`
  grid-area: 1 / 1 / 2 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Preview = styled.img`
  width: 100%;
  height: 100%;
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  grid-area: 2 / 2 / 3 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
