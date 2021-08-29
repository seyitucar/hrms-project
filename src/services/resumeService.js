import axios from "axios";


export default class ResumeService {

    add(resume) {
        return axios.push("http://localhost:8080/api/resumes/add",resume);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/resumes/getall");
    }

    getByEmployeeId(employeeId) {
        return axios.get("http://localhost:8080/api/resumes/getByEmployeeId?employeeId="+employeeId);
    }

    getById(resumeId) {
        return axios.get("http://localhost:8080/api/resumes/getById?id="+resumeId);
    }
}