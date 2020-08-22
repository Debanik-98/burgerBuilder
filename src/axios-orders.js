import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-debanik-burger.firebaseio.com"
});


export default instance;

