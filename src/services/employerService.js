import axios from "axios";


export default class EmployerService {

    add(employer) {
        return axios.post("http://localhost:8080/api/employers/add",employer);
    }

    update(employer) {
        return axios.post("http://localhost:8080/api/employerUpdates/add",employer);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/employers/delete?id="+id);
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/employers/getById?id="+id);
    }

    getByEmail(email) {
        return axios.get("http://localhost:8080/api/employers/getByEmail?email="+email);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/employers/getall");
    }

}