export const fetchUserFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ?? null;
};

export const setUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
