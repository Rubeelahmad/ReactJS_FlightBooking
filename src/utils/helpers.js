export const validateEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};

export const authInLocalStorage = {
  save: (type) => localStorage.setItem("authToken", type),
  get: () => localStorage.getItem("authToken") || null,
  clear: () => localStorage.clear(),
};

export const generateUniqueId = () => {
  const timestamp = new Date().getTime();
  const randomPart = Math.random().toString(36).substr(2, 9); // Generates a random string of length 9
  return `${timestamp}-${randomPart}`;
};
