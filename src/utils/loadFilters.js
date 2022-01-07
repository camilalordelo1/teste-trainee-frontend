import {
  AllIconM,
  SendIconM,
  OnIconM,
  ConfigIconM,
  IdleIconM,
  CheckedIconM,
} from "../components/Icons/styles";

export const loadFilters = async () => {
  const icons = [
    { content: AllIconM },
    { content: SendIconM },
    { content: OnIconM },
    { content: ConfigIconM },
    { content: IdleIconM },
    { content: CheckedIconM },
  ];
  const filterResponse = fetch("https://api-d1-test.herokuapp.com/api/filter");

  const [filter] = await Promise.all([filterResponse]);

  const filterJson = await filter.json();

  const filterAndIcons = filterJson.map((filter, index) => {
    return { ...filter, icon: icons[index].content };
  });

  return filterAndIcons;
};
