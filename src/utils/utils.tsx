export const getPlanetId = (url: string) => {
  const array = url.split("/");
  return array[array.length - 2];
};
