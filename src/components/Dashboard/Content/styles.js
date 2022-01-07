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
`;

// CONTENT CtItemJourney ITEMS
export const JourneyRows = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  p {
    font-size: 13px;
  }
`;

// JourneyRows ITEM
export const JourneyColQuant = styled.div`
  color: #9196ab;
  margin: 0 auto;
  background: #e4e6f1;
  width: 20px;
  height: 20px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: GothamBold;
  border: 1px solid #ebeef6;
  opacity: 1;
  cursor: pointer;
  margin-right: 50px;
  font-size: 13px;
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

export const TdDefault = styled.td`
  border-radius: 10px;
  padding: 10px 0px;
`;

export const TdNome = styled(TdDefault)``;

export const TdDest = styled(TdDefault)`
  width: 15vw;
  text-align: center;
`;

export const TdSss = styled(TdDefault)`
  width: 10vw;
  text-align: center;
`;
export const TdStts = styled(TdDefault)`
  display: flex;
  flex-direction: row;
  div {
    padding-left: 5px;
  }
`;
