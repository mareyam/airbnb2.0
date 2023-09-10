export const getFooter = async () => {
  const response = await fetch(`/api/footer`);
  const json = await response.json();
  return json;
};
