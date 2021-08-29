import axios from "axios";


export default class JobTitleService {

    add(jobTitle) {
        return axios.post("http://localhost:8080/api/jobtitles/add",jobTitle);
    }

    update(jobTitle) {
        return axios.post("http://localhost:8080/api/jobtitles/update",jobTitle);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/jobtitles/delete?id="+id);
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/jobtitles/getById?id="+id);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/jobtitles/getall");
    }
}