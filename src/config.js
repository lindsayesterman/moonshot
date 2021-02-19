const isDev = process.env.NODE_ENV !== "production";
export default {
  API_ENDPOINT: isDev
    ? "http://localhost:8000/api"
    : "https://murmuring-sea-89183.herokuapp.com/api",
};
