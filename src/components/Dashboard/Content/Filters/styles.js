import styled from "styled-components";

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
