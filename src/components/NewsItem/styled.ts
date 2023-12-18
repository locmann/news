import styled from 'styled-components';

export const Title = styled.h2`
  grid-area: 1 / 1 / 2 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: floralwhite;
`;
export const ItemWrapper = styled.div`
  border: 1px solid black;
  width: 50vw;
  margin: 8px;
  height: 25vh;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  background-color: floralwhite;
  padding: 8px;
  cursor: pointer;
  &:hover {
    h2${Title} {
      color: mediumblue;
    }
  }
`;

export const Preview = styled.img`
  width: 100%;
  max-height: 150px;
  height: 100%;
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background-color: floralwhite;
`;

export const Description = styled.p`
  grid-area: 2 / 2 / 3 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: floralwhite;
  padding: 4px;
  font-size: larger;
`;
