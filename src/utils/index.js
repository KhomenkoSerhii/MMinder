import { LOGIN_REDIRECT_URL } from "./constants";

export const getGridCols = (length) => {
  switch (length) {
    case 1:
      return "lg:grid-cols-1";
    case 2:
      return "lg:grid-cols-2";
    case 3:
      return "lg:grid-cols-3";
    case 4:
      return "lg:grid-cols-4";
    default:
      return "lg:grid-cols-3";
  }
};

export const loginRedirect = () => window.open(LOGIN_REDIRECT_URL, "_self");
