import { TdDest, TdNome, TdSss, TdStts } from "./styles";

/* eslint-disable react/prop-types */
export const Table = ({ tableItem, filter }) => {
  return (
    <>
      <TdNome> {tableItem.name} </TdNome>

      <TdDest> {tableItem.recipients} </TdDest>

      <TdSss> {tableItem.success} </TdSss>

      <TdStts>
        <div> {filter[tableItem.status].icon} </div>
        <div> {filter[tableItem.status].name} </div>
      </TdStts>
    </>
  );
};
