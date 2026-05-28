import axios from "axios";

const api = axios.create({
  baseURL: "https://talkitout-chat-nxmjl.sevalla.app/api",
  withCredentials: true,
});

export default api;
