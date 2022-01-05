import * as Styled from "./styles";

/*
import {
  SendIconP,
  ConfigIconP,
  IdleIconP,
} from "../../components/Icons"; */

import { Nav } from "../../components/Nav";
import { Dashboard } from "../../components/Dashboard";

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Nav />
        <Dashboard />
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
