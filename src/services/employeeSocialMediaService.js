import axios from "axios";


export default class EmployeeSocialMediaService {

    add(employeeSocialMedia) {
        return axios.push("http://localhost:8080/api/employeesocialmedias/add",employeeSocialMedia);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/employeesocialmedias/getAll");
    }

    
    getAllByEmployeeId(employeeId) {
        return axios.get("http://localhost:8080/api/employeesocialmedias/getAllByEmployeeId?employeeId="+employeeId);
    }
    
}