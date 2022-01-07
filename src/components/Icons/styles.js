import styled from "styled-components";

const Icon = styled.i`
  color: ${(props) => props.color};
`;

/* ICONS JORNADAS */

const IconM = styled(Icon)``;

export const AllIconM = (
  <IconM color="#D190DD">
    <i className="las la-1x la-th"></i>
  </IconM>
);

export const SendIconM = (
  <IconM color="#C1CA4F">
    <i className="las la-1x la-paper-plane"></i>
  </IconM>
);

export const OnIconM = (
  <IconM color="#35C667">
    <i className="las la-1x la-play-circle"></i>
  </IconM>
);

export const ConfigIconM = (
  <IconM color="#3FA8F4">
    <i className="las la-1x la-pen"></i>
  </IconM>
);

export const IdleIconM = (
  <IconM color="#EBBD3E">
    <i className="las la-1x la-bed"></i>
  </IconM>
);

export const CheckedIconM = (
  <IconM color="#9FABD5">
    <i className="las la-1x la-check"></i>
  </IconM>
);

/* ICONS NAV */
const IconG = styled(Icon)`
  cursor: pointer;
  img {
    width: 48px;
  }
  &:hover {
    color: ${(props) => props.theme.colors.mainActive};
    transition: 1s;
  }
`;

export const ReviewIconG = (
  <IconG color="#E4E6F1">
    <i className="las la-lx la-chart-pie"></i>
  </IconG>
);

export const JourneyIconG = (
  <IconG color="#E4E6F1">
    <i className="las la-lx la-rocket"></i>
  </IconG>
);

export const CliIconG = (
  <IconG color="#E4E6F1">
    <i className="las la-lx la-user-friends"></i>
  </IconG>
);

export const CloudIconG = (
  <IconG color="#E4E6F1">
    <i className="las la-lx la-cloud"></i>
  </IconG>
);

export const VersionIconG = (
  <IconG color="#E4E6F1">
    <i className="las la-lx la-external-link-square-alt"></i>
  </IconG>
);

export const DiamondIconG = (
  <IconG color="#E4E6F1">
    <i className="las la-lx la-gem"></i>
  </IconG>
);

export const HelpIconG = (
  <IconG color="#E4E6F1">
    <i className="las la-lx la-tools"></i>
  </IconG>
);

export const ChangeIconG = (
  <IconG color="#E4E6F1">
    <i className="las la-lx la-exchange-alt"></i>
  </IconG>
);

export const SwapIconG = (
  <IconG color="#E4E6F1">
    <i className="las la-lx la-sign-out-alt"></i>
  </IconG>
);
