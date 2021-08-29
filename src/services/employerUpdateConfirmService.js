import axios from "axios";

export default class EmployerUpdateConfirmService {


    verifyEmployerUpdate(employerUpdateConfirm) {
        return axios.post("http://localhost:8080/api/employerUpdateConfirms/verifyEmployerUpdate",employerUpdateConfirm);
    }

    rejectEmployerUpdate(employerUpdateConfirm) {
        return axios.post("http://localhost:8080/api/employerUpdateConfirms/rejectEmployerUpdate",employerUpdateConfirm);
    }

    getByIsVerifiedFalse() {
        return axios.get("http://localhost:8080/api/employerUpdateConfirms/getByIsVerifiedFalse");
    }

    getByIsUpdatedTrue() {
        return axios.get("http://localhost:8080/api/employerUpdateConfirms/getByIsUpdatedTrue");
    }

    getAll() {
        return axios.get("http://localhost:8080/api/employerUpdateConfirms/getAll");
    }

}