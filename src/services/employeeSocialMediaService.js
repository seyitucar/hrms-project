import axios from "axios";


export default class EmployeeSocialMediaService {

    add(employeeSocialMedia) {
        return axios.post("http://localhost:8080/api/employeesocialmedias/add",employeeSocialMedia);
    }

    update(employeeSocialMedia) {
        return axios.post("http://localhost:8080/api/employeesocialmedias/update",employeeSocialMedia);
    }


    delete(id) {
        return axios.post("http://localhost:8080/api/employeesocialmedias/delete?id="+id);
    }


    getAll() {
        return axios.get("http://localhost:8080/api/employeesocialmedias/getAll");
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/employeesocialmedias/getById?id="+id);
    }

    getAllByEmployeeId(employeeId) {
        return axios.get("http://localhost:8080/api/employeesocialmedias/getAllByEmployeeId?employeeId="+employeeId);
    }
    
}