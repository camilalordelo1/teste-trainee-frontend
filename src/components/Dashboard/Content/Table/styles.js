import styled from "styled-components";

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
