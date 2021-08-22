import axios from "axios";

export default class EmployerUpdateConfirmService {


    verifyEmployerUpdate(systemUserId, employerId, employerUpdateId) {
        return axios.post("http://localhost:8080/api/employerUpdateConfirms/verifyEmployerUpdate?employerId="+employerId+"&employerUpdateId="+employerUpdateId+"&systemUserId="+systemUserId);
    }

    rejectEmployerUpdate(systemUserId, employerId, employerUpdateId) {
        return axios.post("http://localhost:8080/api/employerUpdateConfirms/rejectEmployerUpdate?employerId="+employerId+"&employerUpdateId="+employerUpdateId+"&systemUserId="+systemUserId);
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