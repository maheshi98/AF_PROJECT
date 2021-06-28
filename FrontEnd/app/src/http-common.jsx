import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8811",
  headers: {
    "Content-type": "application/json"
  }
});