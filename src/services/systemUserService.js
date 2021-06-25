import axios from "axios";


export default class SystemUserService {

    getAll() {
        return axios.get("http://localhost:8080/api/systemusers/getAll");
    }
}