import { JourneyColQuant, JourneyRows } from "./styles";

/* eslint-disable react/prop-types */
export const Filters = ({ filterItem }) => {
  return (
    <JourneyRows>
      {filterItem.icon}
      <p> {filterItem.name} </p>
      <JourneyColQuant> {filterItem.quantity} </JourneyColQuant>
    </JourneyRows>
  );
};
