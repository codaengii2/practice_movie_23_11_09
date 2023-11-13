const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-KR";
const options = {
  method: "GET",
  Headers: {},
};
