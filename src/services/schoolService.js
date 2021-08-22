import axios from "axios";


export default class SchoolService {

    add(school) {
        return axios.post("http://localhost:8080/api/schools/add",school);
    }

    update(school) {
        return axios.post("http://localhost:8080/api/schools/update",school);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/schools/delete?id="+id);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/schools/getAll");
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/schools/getById?id="+id);
    }

    findAllByEmployeeIdOrderBySchoolGraduationDateDesc(employeeId) {
        return axios.get("http://localhost:8080/api/schools/findAllByEmployeeIdOrderBySchoolGraduationDateDesc?employeeId="+employeeId);
    }
}