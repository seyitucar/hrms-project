import axios from "axios";


export default class JobTitleService {

    add(jobTitle) {
        return axios.push("http://localhost:8080/api/jobtitles/add",jobTitle);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/jobtitles/getall");
    }
}