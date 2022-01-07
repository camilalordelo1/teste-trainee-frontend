export const loadTable = async () => {
  const tableResponse = fetch("https://api-d1-test.herokuapp.com/api/journey");

  const [table] = await Promise.all([tableResponse]);

  const tableJson = await table.json();

  return tableJson;
};
