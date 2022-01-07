import { Component } from "react";

import { Filters } from "./Filters";
import { Table } from "./Table";

import { loadFilters } from "../../../utils/loadFilters";
import { loadTable } from "../../../utils/loadTable";

import {
  Content,
  ContentJourney,
  ContentTable,
  CtItemJourney,
  TableFilter,
  ThDest,
  ThNome,
  ThSss,
  ThStts,
} from "./styles";

// eslint-disable-next-line
export class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
      table: [],
      status: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    await this.loadFilters();
    await this.loadTable();
  }

  loadFilters = async () => {
    const filterAndIcons = await loadFilters();
    this.setState({ filter: filterAndIcons });
  };

  loadTable = async () => {
    const tableJson = await loadTable();
    this.setState({ table: tableJson });
  };

  handleClick = async (props) => {
    if (props == 0) {
      this.loadTable();
    } else {
      const urlFilterActive =
        "https://api-d1-test.herokuapp.com/api/journey/" + props;

      const filterActiveResponse = fetch(urlFilterActive);

      const [filterActive] = await Promise.all([filterActiveResponse]);

      const filterActiveJson = await filterActive.json();

      console.log(filterActiveJson);
      this.setState({ table: filterActiveJson });
    }
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
              <div
                key={filterItem.id}
                onClick={() => this.handleClick(filterItem.id)}
              >
                <Filters filterItem={filterItem} table={table} />
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
                  <Table tableItem={tableItem} filter={filter} />
                </tr>
              ))}
            </tbody>
          </TableFilter>
        </ContentTable>
      </Content>
    );
  }
}
