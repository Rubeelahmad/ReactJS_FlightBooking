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

export const formatMinutes = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursText = hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""}` : "";
  const minutesText =
    remainingMinutes > 0
      ? `${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`
      : "";

  if (hoursText && minutesText) {
    return `${hoursText} ${minutesText}`;
  } else {
    return hoursText || minutesText || "0 minutes";
  }
};
