import axios from "axios";

const KEY = "AIzaSyDlDGnwty7z-FYhU4rXQ3lNWSTYAyFlhxU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "7",
    key: KEY
  }
});
