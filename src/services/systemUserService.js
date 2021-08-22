import axios from "axios";


export default class SystemUserService {

    add(systemUser) {
        return axios.post("http://localhost:8080/api/systemusers/add",systemUser);
    }

    update(systemUser) {
        return axios.post("http://localhost:8080/api/systemusers/update",systemUser);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/systemusers/delete?id="+id);
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/systemusers/getById?id="+id);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/systemusers/getAll");
    }
}