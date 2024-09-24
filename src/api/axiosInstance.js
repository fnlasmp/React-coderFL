import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://www.jsonplaceholder.org",
});

//al configurar esto no utilizamos mas el axios.put() sino apiInstance.put(/user)
