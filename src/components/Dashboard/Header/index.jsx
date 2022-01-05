import React from "react";

import { Header, HeaderItem1, HeaderItem2 } from "./styles";

export class HeaderContainer extends React.Component {
  render() {
    return (
      <Header>
        <HeaderItem1>
          <p> User </p>
        </HeaderItem1>
        <HeaderItem2>
          <p>BarOf</p>
        </HeaderItem2>
      </Header>
    );
  }
}
