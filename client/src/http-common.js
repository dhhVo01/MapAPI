import axios from "axios";

export default axios.create({
  baseURL: "https://safe-refuge-59222.herokuapp.com/api",
  headers: {'X-Requested-With': 'XMLHttpRequest'}
});