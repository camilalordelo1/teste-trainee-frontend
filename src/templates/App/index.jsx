import * as Styled from "./styles";

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
