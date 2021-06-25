import axios from "axios";


export default class SkillService {

    add(skill) {
        return axios.push("http://localhost:8080/api/skills/add",skill);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/skills/getAll");
    }

    getAllByEmployeeId(employeeId) {
        return axios.get("http://localhost:8080/api/skills/getAllByEmployeeId?employeeId="+employeeId);
    }

    
}