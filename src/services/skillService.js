import axios from "axios";


export default class SkillService {

    add(skill) {
        return axios.post("http://localhost:8080/api/skills/add",skill);
    }

    update(skill) {
        return axios.post("http://localhost:8080/api/skills/update",skill);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/skills/delete?id="+id);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/skills/getAll");
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/skills/getById?id="+id);
    }

    getAllByEmployeeId(employeeId) {
        return axios.get("http://localhost:8080/api/skills/getAllByEmployeeId?employeeId="+employeeId);
    }

    
}