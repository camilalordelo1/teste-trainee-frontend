import React from "react";
import { ContentContainer } from "./Content";
import { HeaderContainer } from "./Header";

import { Dash } from "./styles";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Dash>
        <HeaderContainer />
        <ContentContainer />
      </Dash>
    );
  }
}
