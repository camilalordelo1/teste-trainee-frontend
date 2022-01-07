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

// ITEMS HEADER2
export const ButtonHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  margin-left: 15px;
  max-height: 35px;
  font-family: "GothamBold";
  font-size: 12px;
  background: #117eff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: ease-out 1s;
  cursor: pointer;
  &:hover {
    background: rgb(159, 232, 255);
    background: linear-gradient(
      105deg,
      rgba(159, 232, 255, 1) 20%,
      rgba(17, 126, 255, 1) 100%
    );
  }
  p {
    margin-left: 5px;
  }
`;

export const InputHeader = styled.input`
  width: 276px;
  height: 35px;
  border: 1px solid #cccfde;
  border-radius: 5px;
  box-shadow: 0 0 3px #cccfde;
  padding: 0px 15px;
  &:focus {
    outline-width: 0;
  }
`;
