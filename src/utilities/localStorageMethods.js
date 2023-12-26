export const fetchDataFromLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data ?? null;
};

export const setDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const clearLocalStoreageForKey = (key) => {
  if (key === "cart") {
    localStorage.setItem(key, JSON.stringify([]));
  } else if (key === "user") {
    localStorage.setItem(key, JSON.stringify(null));
  }
};
