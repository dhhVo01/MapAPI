import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {'X-Requested-With': 'XMLHttpRequest'}
});

// https://safe-refuge-59222.herokuapp.com/api