const { REACT_APP_BASE_URL } = process.env;
console.log("REACT_APP_BASE_URL", REACT_APP_BASE_URL)

const endPoints = {
  login: "login",
  signup: "register",
};

const API_URLS = {
  LOGIN: `${REACT_APP_BASE_URL}${endPoints.login}`,
  SIGNUP: `${REACT_APP_BASE_URL}${endPoints.signup}`,
};

export default API_URLS;
