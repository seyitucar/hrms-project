import axios from "axios";


export default class LanguageService {

    add(language) {
        return axios.push("http://localhost:8080/api/languages/add",language);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/languages/getAll");
    }
}