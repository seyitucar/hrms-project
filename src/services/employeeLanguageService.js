import axios from "axios";


export default class EmployeeLanguageService {

    add(employeeLanguage) {
        return axios.push("http://localhost:8080/api/employeelanguages/add",employeeLanguage);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/employeelanguages/getAll");
    }

    
    getAllByEmployeeId(employeeId) {
        return axios.get("http://localhost:8080/api/employeelanguages/getAllByEmployeeId?employeeId="+employeeId);
    }
}