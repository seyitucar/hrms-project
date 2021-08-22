import axios from "axios";


export default class EmployeeLanguageService {

    add(employeeLanguage) {
        return axios.post("http://localhost:8080/api/employeelanguages/add",employeeLanguage);
    }

    update(employeeLanguage) {
        return axios.post("http://localhost:8080/api/employeelanguages/update",employeeLanguage);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/employeelanguages/delete?id="+id);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/employeelanguages/getAll");
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/employeelanguages/getById?id="+id);
    }

    getAllByEmployeeId(employeeId) {
        return axios.get("http://localhost:8080/api/employeelanguages/getAllByEmployeeId?employeeId="+employeeId);
    }
}