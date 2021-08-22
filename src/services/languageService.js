import axios from "axios";


export default class LanguageService {

    add(language) {
        return axios.post("http://localhost:8080/api/languages/add",language);
    }

    update(language) {
        return axios.post("http://localhost:8080/api/languages/update",language);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/languages/delete?id="+id);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/languages/getAll");
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/languages/getById?id="+id);
    }
}