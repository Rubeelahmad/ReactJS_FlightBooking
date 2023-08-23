export const validateEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};

export const authInLocalStorage = {
  save: (type) => localStorage.setItem("authToken", type),
  get: () => localStorage.getItem("authToken") || null,
  clear: () => localStorage.clear(),
};


