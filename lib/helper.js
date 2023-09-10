export const getPlaces = async () => {
  const response = await fetch(`/api/hello`);
  const json = await response.json();
  return json;
};
