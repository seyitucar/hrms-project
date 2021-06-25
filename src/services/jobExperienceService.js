import axios from "axios";


export default class JobExperienceService {

    add(jobExperience) {
        return axios.push("http://localhost:8080/api/jobexperiences/add",jobExperience);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/jobexperiences/getAll");
    }

    findAllByEmployeeIdOrderByJobLeaveDateDesc(employeeId) {
        return axios.get("http://localhost:8080/api/jobexperiences/findAllByEmployeeIdOrderByJobLeaveDateDesc?employeeId="+employeeId);
    }
}