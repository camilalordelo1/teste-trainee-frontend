import React from "react";

import {
  ButtonHeader,
  DivImgHeader,
  Header,
  HeaderItem1,
  HeaderItem2,
  ImgHeader,
  InputHeader,
  User,
} from "./styles";

import ImgHeaderPng from "../../../assets/img/acme2.png";

export class HeaderContainer extends React.Component {
  render() {
    return (
      <Header>
        <HeaderItem1>
          <User>
            <p> A </p>
          </User>
          <DivImgHeader>
            <ImgHeader src={ImgHeaderPng} />
          </DivImgHeader>
        </HeaderItem1>
        <HeaderItem2>
          <InputHeader></InputHeader>
          <ButtonHeader>
            <i className="las la-plus"></i>
            <p> Nova Jornada </p>
          </ButtonHeader>
        </HeaderItem2>
      </Header>
    );
  }
}
