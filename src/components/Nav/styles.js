import styled from "styled-components";

export const NavC = styled.div`
  width: 41px;
  height: calc(100vh - 8px);
  background-color: #1a1731;
  color: white;
  float: left;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0px 15px;
  border-top: 4px solid ${(props) => props.theme.colors.mainActive};
  border-bottom: 4px solid ${(props) => props.theme.colors.mainActive};
`;

//NAV DIV'S
export const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const NavDiv2 = styled(NavDiv)`
  padding-bottom: 130px;
`;
export const NavDiv3 = styled(NavDiv)`
  padding-bottom: 20px;
`;

export const NavItem = styled.div`
  display: flex;
  padding: 10px 0px;
`;

//ITEMS
export const ImgLogo = styled.img`
  width: 30px;
  padding-top: 20px;
`;
export const HrBlue = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.mainActive};
  width: 100%;
`;
