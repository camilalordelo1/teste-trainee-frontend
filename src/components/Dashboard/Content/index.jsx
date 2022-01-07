import { Component } from "react";

import {
  Content,
  ContentJourney,
  ContentTable,
  CtItemJourney,
  JourneyColQuant,
  JourneyRows,
  TableFilter,
  TdDest,
  TdNome,
  TdSss,
  TdStts,
  ThDest,
  ThNome,
  ThSss,
  ThStts,
} from "./styles";

import {
  AllIconM,
  SendIconM,
  OnIconM,
  ConfigIconM,
  IdleIconM,
  CheckedIconM,
} from "../../Icons/styles";

// eslint-disable-next-line
export class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
      table: [],
      icons: [
        { content: AllIconM },
        { content: SendIconM },
        { content: OnIconM },
        { content: ConfigIconM },
        { content: IdleIconM },
        { content: CheckedIconM },
      ],
      status: 0,
    };
  }

  componentDidMount() {
    this.loadFilters();
    this.loadTable();
  }

  loadFilters = async () => {
    const { icons } = this.state;
    const filterResponse = fetch(
      "https://api-d1-test.herokuapp.com/api/filter"
    );

    const [filter] = await Promise.all([filterResponse]);

    const filterJson = await filter.json();

    const filterAndIcons = filterJson.map((filter, index) => {
      return { ...filter, cover: icons[index].content };
    });

    this.setState({ filter: filterAndIcons });
  };

  loadTable = async () => {
    const tableResponse = fetch(
      "https://api-d1-test.herokuapp.com/api/journey"
    );

    const [table] = await Promise.all([tableResponse]);

    const tableJson = await table.json();

    this.setState({ table: tableJson });
  };

  render() {
    const { table } = this.state;
    const { filter } = this.state;

    return (
      <Content>
        {/*JORNADAS */}
        <ContentJourney>
          <h3> Jornadas </h3>
          <CtItemJourney>
            {filter.map((filterItem) => (
              <div key={filterItem.id}>
                <JourneyRows>
                  {filterItem.cover}
                  <p> {filterItem.name} </p>
                  <JourneyColQuant> {filterItem.quantity} </JourneyColQuant>
                </JourneyRows>
              </div>
            ))}
          </CtItemJourney>
        </ContentJourney>

        {/* TABLE*/}
        <ContentTable>
          <TableFilter>
            <thead>
              <ThNome> Nome </ThNome>
              <ThDest> Destinatários </ThDest>
              <ThSss> Sucesso </ThSss>
              <ThStts> Status </ThStts>
            </thead>
            <tbody>
              {table.map((tableItem) => (
                <tr key={tableItem.id}>
                  <TdNome> {tableItem.name} </TdNome>

                  <TdDest> {tableItem.recipients} </TdDest>

                  <TdSss> {tableItem.success} </TdSss>

                  <TdStts>
                    <div> {filter[tableItem.status].cover} </div>
                    <div> {filter[tableItem.status].name} </div>
                  </TdStts>
                </tr>
              ))}
            </tbody>
          </TableFilter>
        </ContentTable>
      </Content>
    );
  }
}
