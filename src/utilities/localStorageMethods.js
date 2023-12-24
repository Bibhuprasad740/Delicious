export const fetchDataFromLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data ?? null;
};

export const setDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
