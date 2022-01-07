import styled from "styled-components";
// DASH ITEM
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

// HEADER ITEMS
export const HeaderItem1 = styled.div`
  display: flex;
`;

export const HeaderItem2 = styled.div`
  display: flex;
  margin-top: 20px;
  div {
    margin-top: 10px;
    margin-right: -30px;
    position: relative;
    float: left;
    color: #117eff;
  }
`;

// ITEMS HEADER1
export const User = styled.div`
  background: ${(props) => props.theme.colors.mainActive};
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: GothamBold;
  color: white;
  font-size: 14px;
  margin-top: 20px;
`;

export const DivImgHeader = styled.div`
  width: 65px;
  height: 30px;
  border: 1px solid #ebeef6;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: 10px;
`;
export const ImgHeader = styled.img`
  height: 100%;
`;

export const InputHeader = styled.input`
  width: 276px;
  height: 35px;
  border: 1px solid #cccfde;
  border-radius: 5px;
  box-shadow: 0 0 3px #cccfde;
  padding: 0px 10px 0px 40px;
  color: #9196ab;
  &:focus {
    outline-width: 0;
    ::-webkit-input-placeholder {
      color: transparent;
    }
  }
`;
