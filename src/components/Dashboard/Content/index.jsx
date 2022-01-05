import { Component } from "react";

import {
  Content,
  ContentItem1,
  ContentItem2,
  CtItem1Title,
  CtItemJourney,
  JourneyCol1,
  JourneyCol2,
  JourneyCol2Row,
  JourneyColName,
  JourneyColQuant,
  JourneyRows,
} from "./styles";

import {
  AllIconM,
  SendIconM,
  OnIconM,
  ConfigIconM,
  IdleIconM,
  CheckedIconM,
} from "../../Icons";

// eslint-disable-next-line
export class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
    };
  }

  componentDidMount() {
    fetch("https://api-d1-test.herokuapp.com/api/filter")
      .then((response) => response.json())
      .then((filter) => this.setState({ filter }));
  }

  render() {
    const { filter } = this.state;
    return (
      <Content>
        {/*JORNADAS */}
        <ContentItem1>
          <CtItem1Title> Jornadas </CtItem1Title>
          <CtItemJourney>
            <JourneyRows>
              <JourneyCol1>
                {AllIconM}
                {SendIconM}
                {OnIconM}
                {ConfigIconM}
                {IdleIconM}
                {CheckedIconM}
              </JourneyCol1>
              <JourneyCol2>
                {filter.map((filterItem) => (
                  <div key={filterItem.id}>
                    <JourneyCol2Row>
                      <JourneyColName>{filterItem.name}</JourneyColName>
                      <JourneyColQuant>
                        <p>{filterItem.quantity}</p>
                      </JourneyColQuant>
                    </JourneyCol2Row>
                  </div>
                ))}
              </JourneyCol2>
            </JourneyRows>
          </CtItemJourney>
        </ContentItem1>

        {/* TABLE*/}
        <ContentItem2>
          <p>Table</p>
        </ContentItem2>
      </Content>
    );
  }
}
