import styled from "styled-components";

// DASH ITEM
export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  h3 {
    font-family: GothamBold;
  }
`;

// CONTENT ITEMS
export const ContentJourney = styled.div``;

// CONTENT ITEMS ELEMENTS

export const CtItemJourney = styled.div`
  padding-right: 170px;
  padding-top: 30px;
  div {
    &:active {
      font-family: GothamBold;
      color: ${(props) => props.theme.colors.mainActive};
    }
  }
`;

// TABLE ITEMS
export const ContentTable = styled.div`
  display: grid;
  align-items: flex-start;
  font-size: 14px;
  margin-right: 150px;
  text-align: left;
`;

export const TableFilter = styled.table`
  margin-top: 40px;
  th {
    color: #9196ab;
  }
`;

export const ThNome = styled.th`
  width: 25vw;
`;

export const ThDest = styled.th`
  width: 15vw;
  text-align: center;
`;

export const ThSss = styled.th`
  width: 8vw;
  text-align: center;
`;

export const ThStts = styled.th`
  width: 15vw;
`;
