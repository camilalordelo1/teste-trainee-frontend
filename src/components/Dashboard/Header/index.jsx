import React from "react";

import {
  DivImgHeader,
  Header,
  HeaderItem1,
  HeaderItem2,
  ImgHeader,
  InputHeader,
  User,
} from "./styles";

import ImgHeaderPng from "../../../assets/img/acme2.png";
import { BtnHeaderComponente } from "./BtnHeaderComponente";

export class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          <div>
            <i className="las la-search"></i>
          </div>
          <InputHeader placeholder="Buscar"></InputHeader>
          <BtnHeaderComponente />
        </HeaderItem2>
      </Header>
    );
  }
}
