import axios from "axios";


export default class SchoolService {

    add(school) {
        return axios.push("http://localhost:8080/api/schools/add",school);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/schools/getAll");
    }

    findAllByEmployeeIdOrderBySchoolGraduationDateDesc(employeeId) {
        return axios.get("http://localhost:8080/api/schools/findAllByEmployeeIdOrderBySchoolGraduationDateDesc?employeeId="+employeeId);
    }
}