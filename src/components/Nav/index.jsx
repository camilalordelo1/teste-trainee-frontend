import React from "react";
import Logo from "../../assets/img/logotipo.png";

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
          <NavItem>{ReviewIconG}</NavItem>
          <NavItem>{JourneyIconG}</NavItem>
          <NavItem>{CliIconG}</NavItem>
          <NavItem>{CloudIconG}</NavItem>
          <NavItem>
            <HrBlue></HrBlue>
          </NavItem>
          <NavItem>{VersionIconG}</NavItem>
        </NavDiv2>
        <NavDiv3>
          <NavItem>{DiamondIconG}</NavItem>
          <NavItem>{HelpIconG}</NavItem>
          <NavItem>{ChangeIconG}</NavItem>
          <NavItem>{SwapIconG}</NavItem>
        </NavDiv3>
      </NavC>
    );
  }
}
