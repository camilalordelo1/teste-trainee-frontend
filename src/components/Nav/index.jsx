import React from "react";
import Logo from "../../assets/img/logotipo.png";
import Tooltip from "@mui/material/Tooltip";

// ICONS
import {
  CloudIconG,
  ReviewIconG,
  JourneyIconG,
  CliIconG,
  VersionIconG,
  DiamondIconG,
  HelpIconG,
  ChangeIconG,
  SwapIconG,
} from "../Icons/styles";

// COMPONENTS
import {
  NavC,
  NavDiv,
  NavDiv2,
  NavDiv3,
  NavItem,
  ImgLogo,
  HrBlue,
} from "./styles";

export class Nav extends React.Component {
  render() {
    return (
      <NavC>
        <NavDiv>
          <NavItem>
            <ImgLogo src={Logo} />
          </NavItem>
        </NavDiv>
        <NavDiv2>
          <Tooltip title="Análises" placement="right">
            <NavItem>{ReviewIconG}</NavItem>
          </Tooltip>
          <Tooltip title="Jornadas" placement="right">
            <NavItem>{JourneyIconG}</NavItem>
          </Tooltip>
          <Tooltip title="Clientes" placement="right">
            <NavItem>{CliIconG}</NavItem>
          </Tooltip>
          <Tooltip title="CGM Cloud" placement="right">
            <NavItem>{CloudIconG}</NavItem>
          </Tooltip>
          <NavItem>
            <HrBlue></HrBlue>
          </NavItem>
          <Tooltip title="Versão 01" placement="right">
            <NavItem>{VersionIconG}</NavItem>
          </Tooltip>
        </NavDiv2>
        <NavDiv3>
          <Tooltip title="Administração" placement="right">
            <NavItem>{DiamondIconG}</NavItem>
          </Tooltip>
          <Tooltip title="Help Desk" placement="right">
            <NavItem>{HelpIconG}</NavItem>
          </Tooltip>
          <Tooltip title="Trocar Conta" placement="right">
            <NavItem>{ChangeIconG}</NavItem>
          </Tooltip>
          <Tooltip title="Sair" placement="right">
            <NavItem>{SwapIconG}</NavItem>
          </Tooltip>
        </NavDiv3>
      </NavC>
    );
  }
}
