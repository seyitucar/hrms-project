import axios from "axios";


export default class EmployerUpdateService {

    add(employerUpdate) {
        return axios.post("http://localhost:8080/api/employerUpdates/add",employerUpdate);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/employerUpdates/getall");
    }

    getByEmployerIdAndIsVerifiedFalse(employerId) {
        return axios.get("http://localhost:8080/api/employerUpdates/getByEmployerIdAndIsVerifiedFalse?employerId="+employerId);
    }

}