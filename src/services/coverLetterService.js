import axios from "axios";


export default class CoverLetterService {

    add(coverLetter) {
        return axios.post("http://localhost:8080/api/coverletters/add",coverLetter);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/coverletters/delete?id="+id);
    }

    update(coverLetter) {
        return axios.post("http://localhost:8080/api/coverletters/update",coverLetter);
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/coverletters/getById?id="+id);
    }

    getAllByEmployeeId(employeeId) {
        return axios.get("http://localhost:8080/api/coverletters/getAllByEmployeeId?employeeId="+employeeId);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/coverletters/getAll");
    }
}