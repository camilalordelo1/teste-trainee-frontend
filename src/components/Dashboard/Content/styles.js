import styled from "styled-components";

// DASH ITEM
export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
`;

// CONTENT ITEMS
export const ContentItem1 = styled.div``;

export const ContentItem2 = styled.div`
  display: grid;
  background: pink;
`;

// CONTENT ITEMS ELEMENTS
export const CtItem1Title = styled.h3`
  font-family: GothamBold;
`;

export const CtItemJourney = styled.div`
  padding-right: 170px;
  padding-top: 30px;
`;

// CONTENT CtItemJourney ITEMS
export const JourneyRows = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

export const JourneyCol1 = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const JourneyCol2 = styled.div`
  display: grid;
  align-items: center;
`;

export const JourneyCol2Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-size: 11px;
  cursor: pointer;
`;

export const JourneyColName = styled.p``;

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
`;
